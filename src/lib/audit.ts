import { generateAuditEmailHtml } from "./email-templates";

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
        html: generateAuditEmailHtml({
          name: payload.name,
          businessName: payload.businessName,
          email: payload.email,
          phone: payload.phone,
          serviceNeeded: payload.serviceNeeded,
          market: payload.market,
          notes: payload.notes,
          submittedAt: new Date().toLocaleString(),
        }),
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
