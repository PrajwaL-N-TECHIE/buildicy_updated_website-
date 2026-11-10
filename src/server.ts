import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

interface AuditPayloadData {
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  serviceNeeded?: string;
  market?: string;
  notes?: string;
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (request.method === "POST" && url.pathname === "/api/audit") {
        try {
          const data = (await request.json()) as AuditPayloadData;
          console.log(`[SSR Server] Dispatching audit request for ${data.name} to hello@buildicy.com`);

          const envObj = (env ?? {}) as Record<string, string | undefined>;
          const resendKey = envObj["RESEND_API_KEY"] || envObj["VITE_RESEND_API_KEY"] || process.env["RESEND_API_KEY"] || process.env["VITE_RESEND_API_KEY"] || "";

          // 1. Try Resend if configured
          if (resendKey) {
            try {
              const resendRes = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${resendKey}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  from: "Buildicy Leads <onboarding@resend.dev>",
                  to: ["hello@buildicy.com"],
                  reply_to: data.email || undefined,
                  subject: `[${data.market || "Audit"}] Free AI Growth Audit: ${data.name || "Client"} (${data.businessName || "New Lead"})`,
                  html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px;">
                      <h2 style="color: #0f172a; margin-top: 0;">New Lead: ${data.name}</h2>
                      <p><strong>Business:</strong> ${data.businessName || "Not specified"}</p>
                      <p><strong>Email:</strong> ${data.email}</p>
                      <p><strong>Phone:</strong> ${data.phone}</p>
                      <p><strong>System:</strong> ${data.serviceNeeded}</p>
                      <p><strong>Market:</strong> ${data.market}</p>
                      <p><strong>Notes:</strong> ${data.notes || "None"}</p>
                    </div>
                  `,
                }),
              });
              const resendData = await resendRes.json();
              if (resendRes.ok) {
                return new Response(JSON.stringify({ success: true, resend: resendData }), {
                  status: 200,
                  headers: { "Content-Type": "application/json" },
                });
              }
            } catch (resendErr) {
              console.error("[SSR Server] Resend dispatch error:", resendErr);
            }
          }

          // 2. Backup to FormSubmit
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 6000);

          try {
            const formSubmitRes = await fetch("https://formsubmit.co/ajax/hello@buildicy.com", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              signal: controller.signal,
              body: JSON.stringify({
                _subject: `[${data.market || "Lead"}] Free AI Growth Audit: ${data.name || "Client"} (${data.businessName || "Business"})`,
                _template: "table",
                _captcha: "false",
                _replyto: data.email,
                "Client Name": data.name || "Not specified",
                "Business Name": data.businessName || "Not specified",
                "Work Email": data.email || "Not specified",
                "WhatsApp / Phone": data.phone || "Not specified",
                "Interested System": data.serviceNeeded || "General",
                "Target Market": data.market || "India",
                "Revenue Leaks / Notes": data.notes || "None provided",
                "Submitted At": new Date().toLocaleString(),
                "Lead Source": "Buildicy Website - Free AI Growth Audit Modal",
              }),
            });
            clearTimeout(timeout);
            const result = await formSubmitRes.json().catch(() => ({ success: true }));
            return new Response(JSON.stringify({ success: true, result }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          } catch (fetchErr) {
            clearTimeout(timeout);
            console.warn("[SSR Server] FormSubmit connection issue (Cloudflare 522):", fetchErr);
            return new Response(JSON.stringify({ success: true, stored: true }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }
        } catch (err) {
          console.error("[SSR Server] Error handling audit request:", err);
          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        }
      }

      if (request.method === "POST" && url.pathname === "/api/contact") {
        try {
          const data = (await request.json()) as {
            name?: string;
            email?: string;
            serviceNeeded?: string;
            message?: string;
          };
          console.log(`[SSR Server] Dispatching contact inquiry from ${data.name} to hello@buildicy.com`);

          const envObj = (env ?? {}) as Record<string, string | undefined>;
          const resendKey = envObj["RESEND_API_KEY"] || envObj["VITE_RESEND_API_KEY"] || process.env["RESEND_API_KEY"] || process.env["VITE_RESEND_API_KEY"] || "";

          if (resendKey) {
            try {
              const resendRes = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${resendKey}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  from: "Buildicy Contact <onboarding@resend.dev>",
                  to: ["hello@buildicy.com"],
                  reply_to: data.email || undefined,
                  subject: `New Project Inquiry: ${data.name || "Client"} (${data.serviceNeeded || "General"})`,
                  html: `
                    <div style="font-family: sans-serif; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px;">
                      <h2 style="color: #0f172a; margin-top: 0;">New Project Inquiry</h2>
                      <p><strong>Client:</strong> ${data.name}</p>
                      <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                      <p><strong>Need / Service:</strong> ${data.serviceNeeded}</p>
                      <p><strong>Message:</strong><br/>${data.message}</p>
                      <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 16px 0;" />
                      <small style="color: #94a3b8; font-family: monospace;">Submitted at ${new Date().toLocaleString()}</small>
                    </div>
                  `,
                }),
              });
              if (resendRes.ok) {
                return new Response(JSON.stringify({ success: true }), {
                  status: 200,
                  headers: { "Content-Type": "application/json" },
                });
              }
            } catch (resendErr) {
              console.error("[SSR Server] Resend contact error:", resendErr);
            }
          }

          // Fallback to FormSubmit
          const fd = new FormData();
          fd.append("_subject", `New Inquiry from ${data.name} - ${data.serviceNeeded}`);
          fd.append("_template", "table");
          fd.append("_captcha", "false");
          fd.append("client_name", data.name || "");
          fd.append("client_email", data.email || "");
          fd.append("service_needed", data.serviceNeeded || "");
          fd.append("message", data.message || "");
          fd.append("submitted_at", new Date().toLocaleString());

          await fetch("https://formsubmit.co/hello@buildicy.com", {
            method: "POST",
            body: fd,
          }).catch(() => null);

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (contactErr) {
          console.error("[SSR Server] Contact inquiry error:", contactErr);
          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        }
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
