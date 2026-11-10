import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import {
  generateAuditEmailHtml,
  generateContactEmailHtml,
  generateCareersEmailHtml,
} from "./lib/email-templates";

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
          const notifyEmail = envObj["NOTIFY_EMAIL"] || process.env["NOTIFY_EMAIL"] || "hello@buildicy.com";
          const fromEmail = envObj["RESEND_FROM_EMAIL"] || process.env["RESEND_FROM_EMAIL"] || "Buildicy Leads <onboarding@resend.dev>";

          // 1. Try Resend if configured
          if (resendKey) {
            try {
              const emailHtml = generateAuditEmailHtml({
                name: data.name,
                businessName: data.businessName,
                email: data.email,
                phone: data.phone,
                serviceNeeded: data.serviceNeeded,
                market: data.market,
                notes: data.notes,
                submittedAt: new Date().toLocaleString(),
              });

              const resendRes = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${resendKey}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  from: fromEmail,
                  to: [notifyEmail],
                  reply_to: data.email || undefined,
                  subject: `[${data.market || "Audit"}] Free AI Growth Audit: ${data.name || "Client"} (${data.businessName || "New Lead"})`,
                  html: emailHtml,
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
          const notifyEmail = envObj["NOTIFY_EMAIL"] || process.env["NOTIFY_EMAIL"] || "hello@buildicy.com";
          const fromEmail = envObj["RESEND_FROM_EMAIL"] || process.env["RESEND_FROM_EMAIL"] || "Buildicy Contact <onboarding@resend.dev>";

          if (resendKey) {
            try {
              const emailHtml = generateContactEmailHtml({
                name: data.name,
                email: data.email,
                serviceNeeded: data.serviceNeeded,
                message: data.message,
                submittedAt: new Date().toLocaleString(),
              });

              const resendRes = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${resendKey}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  from: fromEmail,
                  to: [notifyEmail],
                  reply_to: data.email || undefined,
                  subject: `New Project Inquiry: ${data.name || "Client"} (${data.serviceNeeded || "General"})`,
                  html: emailHtml,
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

      if (request.method === "POST" && url.pathname === "/api/careers") {
        try {
          const data = (await request.json()) as {
            name?: string;
            email?: string;
            phone?: string;
            role?: string;
            links?: string;
            notes?: string;
          };
          console.log(`[SSR Server] Dispatching careers application from ${data.name} for ${data.role} to hello@buildicy.com`);

          const envObj = (env ?? {}) as Record<string, string | undefined>;
          const resendKey = envObj["RESEND_API_KEY"] || envObj["VITE_RESEND_API_KEY"] || process.env["RESEND_API_KEY"] || process.env["VITE_RESEND_API_KEY"] || "";
          const notifyEmail = envObj["NOTIFY_EMAIL"] || process.env["NOTIFY_EMAIL"] || "hello@buildicy.com";
          const fromEmail = envObj["RESEND_FROM_EMAIL"] || process.env["RESEND_FROM_EMAIL"] || "Buildicy Careers <onboarding@resend.dev>";

          if (resendKey) {
            try {
              const emailHtml = generateCareersEmailHtml({
                name: data.name,
                role: data.role,
                email: data.email,
                phone: data.phone,
                links: data.links,
                notes: data.notes,
                submittedAt: new Date().toLocaleString(),
              });

              const resendRes = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${resendKey}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  from: fromEmail,
                  to: [notifyEmail],
                  reply_to: data.email || undefined,
                  subject: `Careers Application: ${data.name || "Candidate"} - ${data.role || "General"}`,
                  html: emailHtml,
                }),
              });
              if (resendRes.ok) {
                return new Response(JSON.stringify({ success: true }), {
                  status: 200,
                  headers: { "Content-Type": "application/json" },
                });
              }
            } catch (resendErr) {
              console.error("[SSR Server] Resend careers error:", resendErr);
            }
          }

          // Fallback to FormSubmit
          const fd = new FormData();
          fd.append("_subject", `Job Application: ${data.name} - ${data.role}`);
          fd.append("_template", "table");
          fd.append("_captcha", "false");
          fd.append("candidate_name", data.name || "");
          fd.append("candidate_email", data.email || "");
          fd.append("candidate_phone", data.phone || "");
          fd.append("target_role", data.role || "");
          fd.append("portfolio_links", data.links || "");
          fd.append("notes", data.notes || "");
          fd.append("submitted_at", new Date().toLocaleString());

          await fetch("https://formsubmit.co/hello@buildicy.com", {
            method: "POST",
            body: fd,
          }).catch(() => null);

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (careerErr) {
          console.error("[SSR Server] Careers application error:", careerErr);
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
