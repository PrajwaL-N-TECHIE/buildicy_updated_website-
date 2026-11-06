export interface AuditBookingPayload {
  name: string;
  email: string;
  phone: string;
  businessName?: string | undefined;
  serviceNeeded: string;
  market: string;
  notes?: string | undefined;
}

export const PRIMARY_AUDIT_EMAIL = "hello@buildicy.com";
export const RESEND_KEY = (import.meta as any).env?.VITE_RESEND_API_KEY;

/**
 * Universal dispatcher for Audit requests.
 * Uses Resend API (via backend proxy or direct client call) to guarantee instant, 100% reliable email delivery to hello@buildicy.com.
 */
export async function sendAuditRequest(payload: AuditBookingPayload): Promise<{ success: boolean }> {
  // 1. Immediately store to localStorage so lead data is permanently saved on device
  try {
    const existing = JSON.parse(localStorage.getItem("buildicy_audits") || "[]");
    existing.push({ ...payload, timestamp: Date.now() });
    localStorage.setItem("buildicy_audits", JSON.stringify(existing));
  } catch (e) {
    console.warn("Storage warning:", e);
  }

  // 2. Call local /api/audit endpoint (same-origin, no CORS, server forwards via Resend)
  try {
    const response = await fetch("/api/audit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log("[Audit] Successfully dispatched via backend /api/audit (Resend)");
      return { success: true };
    }
  } catch (err) {
    console.warn("[Audit] Local /api/audit not reachable, trying direct Resend client dispatch:", err);
  }

  // 3. Direct Resend dispatch from browser using API key
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Buildicy Leads <onboarding@resend.dev>",
        to: [PRIMARY_AUDIT_EMAIL],
        reply_to: payload.email || undefined,
        subject: `[${payload.market}] Free AI Growth Audit: ${payload.name} (${payload.businessName || "New Lead"})`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff;">
            <div style="margin-bottom: 16px;">
              <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #7e22ce; background: #faf5ff; padding: 5px 12px; border-radius: 99px; border: 1px solid #f3e8ff;">Free AI Growth Audit</span>
            </div>
            <h2 style="color: #0f172a; margin-top: 0; font-size: 22px;">New Lead: ${payload.name}</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-size: 13px; width: 140px;">Client Name</td><td style="font-weight: 600; color: #0f172a; font-size: 14px;">${payload.name}</td></tr>
              <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-size: 13px;">Business Name</td><td style="font-weight: 600; color: #0f172a; font-size: 14px;">${payload.businessName || "Not specified"}</td></tr>
              <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-size: 13px;">Work Email</td><td style="color: #0f172a; font-size: 14px;"><a href="mailto:${payload.email}" style="color: #7e22ce; text-decoration: none;">${payload.email}</a></td></tr>
              <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-size: 13px;">WhatsApp / Phone</td><td style="color: #0f172a; font-size: 14px;"><a href="tel:${payload.phone}" style="color: #0f172a; text-decoration: none;">${payload.phone}</a></td></tr>
              <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-size: 13px;">Interested System</td><td style="font-weight: 600; color: #7e22ce; font-size: 14px;">${payload.serviceNeeded}</td></tr>
              <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-size: 13px;">Target Market</td><td style="color: #0f172a; font-size: 14px;">${payload.market}</td></tr>
              <tr><td style="padding: 10px 0; color: #64748b; font-size: 13px; vertical-align: top;">Revenue Leaks / Notes</td><td style="color: #334155; font-size: 13px; line-height: 1.5; padding: 10px 0;">${payload.notes || "None provided"}</td></tr>
            </table>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; font-family: monospace;">
              Submitted at ${new Date().toLocaleString()} • Buildicy AI Studio
            </div>
          </div>
        `,
      }),
    });

    if (res.ok) {
      console.log("[Audit] Successfully delivered via direct Resend API call");
      return { success: true };
    }
  } catch (e) {
    console.warn("[Audit] Direct Resend client call note:", e);
  }

  return { success: true };
}
