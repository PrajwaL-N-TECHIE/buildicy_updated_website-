// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      {
        name: "audit-api-dev",
        configureServer(server) {
          server.middlewares.use("/api/audit", (req, res) => {
            if (req.method !== "POST") {
              res.statusCode = 405;
              res.end("Method Not Allowed");
              return;
            }

            let body = "";
            req.on("data", (chunk: Buffer) => {
              body += chunk.toString();
            });

            req.on("end", async () => {
              try {
                const data = JSON.parse(body || "{}");
                console.log(`[Dev Server] Processing audit request for ${data.name} (${data.email})`);

                const resendKey =
                  process.env["RESEND_API_KEY"] ||
                  process.env["VITE_RESEND_API_KEY"];
                let emailSent = false;

                // 1. Send via Resend if API key is provided
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
                        to: ["mayurr.buildicy@gmail.com"],
                        reply_to: data.email || undefined,
                        subject: `[${data.market || "Audit"}] Free AI Growth Audit: ${data.name} (${data.businessName || "New Lead"})`,
                        html: `
                          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff;">
                            <div style="margin-bottom: 16px;">
                              <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #7e22ce; background: #faf5ff; padding: 5px 12px; border-radius: 99px; border: 1px solid #f3e8ff;">Free AI Growth Audit</span>
                            </div>
                            <h2 style="color: #0f172a; margin-top: 0; font-size: 22px;">New Lead: ${data.name}</h2>
                            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                              <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-size: 13px; width: 140px;">Client Name</td><td style="font-weight: 600; color: #0f172a; font-size: 14px;">${data.name}</td></tr>
                              <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-size: 13px;">Business Name</td><td style="font-weight: 600; color: #0f172a; font-size: 14px;">${data.businessName || "Not specified"}</td></tr>
                              <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-size: 13px;">Work Email</td><td style="color: #0f172a; font-size: 14px;"><a href="mailto:${data.email}" style="color: #7e22ce; text-decoration: none;">${data.email}</a></td></tr>
                              <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-size: 13px;">WhatsApp / Phone</td><td style="color: #0f172a; font-size: 14px;"><a href="tel:${data.phone}" style="color: #0f172a; text-decoration: none;">${data.phone}</a></td></tr>
                              <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-size: 13px;">Interested System</td><td style="font-weight: 600; color: #7e22ce; font-size: 14px;">${data.serviceNeeded}</td></tr>
                              <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-size: 13px;">Target Market</td><td style="color: #0f172a; font-size: 14px;">${data.market}</td></tr>
                              <tr><td style="padding: 10px 0; color: #64748b; font-size: 13px; vertical-align: top;">Revenue Leaks / Notes</td><td style="color: #334155; font-size: 13px; line-height: 1.5; padding: 10px 0;">${data.notes || "None provided"}</td></tr>
                            </table>
                            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; font-family: monospace;">
                              Submitted at ${new Date().toLocaleString()} • Buildicy AI Studio
                            </div>
                          </div>
                        `,
                      }),
                    });

                    const resendData = await resendRes.json();
                    if (resendRes.ok) {
                      console.log("[Dev Server] Email successfully delivered via Resend:", resendData);
                      emailSent = true;
                    } else {
                      console.error("[Dev Server] Resend API error:", resendData);
                    }
                  } catch (err) {
                    console.error("[Dev Server] Failed to dispatch via Resend:", err);
                  }
                }

                // 2. Backup to FormSubmit if Resend key is not provided
                if (!emailSent) {
                  try {
                    const controller = new AbortController();
                    const timeout = setTimeout(() => controller.abort(), 5000);

                    await fetch("https://formsubmit.co/ajax/mayurr.buildicy@gmail.com", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                      },
                      signal: controller.signal,
                      body: JSON.stringify({
                        _subject: `[${data.market || "Audit"}] Free AI Growth Audit: ${data.name} (${data.businessName || "Business"})`,
                        _template: "table",
                        _captcha: "false",
                        _replyto: data.email,
                        "Client Name": data.name,
                        "Business Name": data.businessName || "Not specified",
                        "Work Email": data.email,
                        "WhatsApp / Phone": data.phone,
                        "Interested System": data.serviceNeeded,
                        "Target Market": data.market,
                        "Revenue Leaks / Notes": data.notes || "None provided",
                        "Submitted At": new Date().toLocaleString(),
                        "Lead Source": "Buildicy Website - Free AI Growth Audit Modal",
                      }),
                    }).catch(() => null);
                    clearTimeout(timeout);
                  } catch {
                    // Ignore FormSubmit timeout
                  }
                }

                res.setHeader("Content-Type", "application/json");
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true, emailSent }));
              } catch (err) {
                console.error("[Dev Server] Audit dispatch error:", err);
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true }));
              }
            });
          });
        },
      },
    ],
  },
});
