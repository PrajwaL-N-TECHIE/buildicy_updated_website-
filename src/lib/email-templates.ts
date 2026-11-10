/**
 * Resend HTML Email Templates for Buildicy Studio
 * Compatible with Gmail, Apple Mail, Outlook, and mobile clients.
 */

export interface AuditEmailData {
  name?: string;
  businessName?: string;
  email?: string;
  phone?: string;
  serviceNeeded?: string;
  market?: string;
  notes?: string;
  submittedAt?: string;
}

export interface ContactEmailData {
  name?: string;
  email?: string;
  serviceNeeded?: string;
  message?: string;
  submittedAt?: string;
}

export interface CareersEmailData {
  name?: string;
  role?: string;
  email?: string;
  phone?: string;
  links?: string;
  notes?: string;
  submittedAt?: string;
}

const BASE_STYLES = `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #0f172a;
  background-color: #f8fafc;
  margin: 0;
  padding: 32px 16px;
`;

const CONTAINER_STYLES = `
  max-width: 600px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
`;

const HEADER_STYLES = `
  background: #0f172a;
  padding: 28px 32px;
  color: #ffffff;
`;

const BODY_STYLES = `
  padding: 32px;
`;

const TABLE_ROW_STYLES = `
  border-bottom: 1px solid #f1f5f9;
`;

const LABEL_TD_STYLES = `
  padding: 12px 0;
  color: #64748b;
  font-size: 13px;
  width: 140px;
  vertical-align: top;
  font-family: monospace;
`;

const VALUE_TD_STYLES = `
  padding: 12px 0;
  color: #0f172a;
  font-size: 14px;
  font-weight: 500;
  vertical-align: top;
`;

const FOOTER_STYLES = `
  padding: 20px 32px;
  background: #f8fafc;
  border-top: 1px solid #f1f5f9;
  font-size: 11px;
  color: #94a3b8;
  font-family: monospace;
`;

const BUTTON_PRIMARY_STYLES = `
  display: inline-block;
  background: #7c3aed;
  color: #ffffff !important;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 999px;
  margin-right: 10px;
`;

const BUTTON_WHATSAPP_STYLES = `
  display: inline-block;
  background: #10b981;
  color: #ffffff !important;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 999px;
`;

/**
 * 1. Free AI Growth Audit Email Template
 */
export function generateAuditEmailHtml(data: AuditEmailData): string {
  const cleanPhone = (data.phone || "").replace(/[^0-9]/g, "");
  const waUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hi ${data.name || "there"}, thank you for requesting an AI Growth Audit with Buildicy!`)}`
    : "https://wa.me/919150890205";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New AI Growth Audit Request</title>
</head>
<body style="${BASE_STYLES}">
  <div style="${CONTAINER_STYLES}">
    <!-- Header -->
    <div style="${HEADER_STYLES}">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: #a855f7; display: block; margin-bottom: 6px; font-family: monospace;">
              NEW INBOUND AUDIT LEAD
            </span>
            <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; color: #ffffff;">
              Free AI Growth Audit
            </h1>
          </td>
          <td align="right" style="vertical-align: middle;">
            <span style="display: inline-block; background: rgba(168, 85, 247, 0.2); border: 1px solid rgba(168, 85, 247, 0.4); color: #d8b4fe; font-size: 11px; font-weight: 600; padding: 4px 12px; border-radius: 999px; font-family: monospace;">
              ${data.market || "General"}
            </span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Body Table -->
    <div style="${BODY_STYLES}">
      <h2 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 16px;">
        Lead Details: ${data.name || "Client"}
      </h2>

      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">CLIENT NAME</td>
          <td style="${VALUE_TD_STYLES}"><strong>${data.name || "Not specified"}</strong></td>
        </tr>
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">BUSINESS NAME</td>
          <td style="${VALUE_TD_STYLES}">${data.businessName || "Not specified"}</td>
        </tr>
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">WORK EMAIL</td>
          <td style="${VALUE_TD_STYLES}">
            <a href="mailto:${data.email}" style="color: #7c3aed; text-decoration: none;">${data.email || "None"}</a>
          </td>
        </tr>
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">WHATSAPP / PHONE</td>
          <td style="${VALUE_TD_STYLES}">
            <a href="tel:${data.phone}" style="color: #0f172a; text-decoration: none;">${data.phone || "None"}</a>
          </td>
        </tr>
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">SYSTEM INTEREST</td>
          <td style="${VALUE_TD_STYLES}"><span style="color: #7c3aed; font-weight: 700;">${data.serviceNeeded || "AI System"}</span></td>
        </tr>
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">TARGET MARKET</td>
          <td style="${VALUE_TD_STYLES}">${data.market || "India"}</td>
        </tr>
        <tr>
          <td style="${LABEL_TD_STYLES}">REVENUE LEAKS / GOAL</td>
          <td style="${VALUE_TD_STYLES}; line-height: 1.5; color: #334155;">
            ${data.notes ? data.notes.replace(/\n/g, "<br/>") : "None specified"}
          </td>
        </tr>
      </table>

      <!-- Quick Action Buttons -->
      <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #f1f5f9;">
        ${
          data.email
            ? `<a href="mailto:${data.email}?subject=${encodeURIComponent(`Buildicy Free AI Growth Audit — Follow Up for ${data.name || "Client"}`)}" style="${BUTTON_PRIMARY_STYLES}">Reply via Email ✉️</a>`
            : ""
        }
        ${
          cleanPhone
            ? `<a href="${waUrl}" style="${BUTTON_WHATSAPP_STYLES}">Chat on WhatsApp 💬</a>`
            : ""
        }
      </div>
    </div>

    <!-- Footer -->
    <div style="${FOOTER_STYLES}">
      Submitted at ${data.submittedAt || new Date().toLocaleString()} • Buildicy AI Growth Systems Studio • hello@buildicy.com
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * 2. Contact / Project Inquiry Email Template
 */
export function generateContactEmailHtml(data: ContactEmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Project Inquiry</title>
</head>
<body style="${BASE_STYLES}">
  <div style="${CONTAINER_STYLES}">
    <!-- Header -->
    <div style="${HEADER_STYLES}">
      <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: #a855f7; display: block; margin-bottom: 6px; font-family: monospace;">
        BUILDICY STUDIO INQUIRY
      </span>
      <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; color: #ffffff;">
        New Project Message
      </h1>
    </div>

    <!-- Body Table -->
    <div style="${BODY_STYLES}">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">CLIENT NAME</td>
          <td style="${VALUE_TD_STYLES}"><strong>${data.name || "Not specified"}</strong></td>
        </tr>
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">EMAIL ADDRESS</td>
          <td style="${VALUE_TD_STYLES}">
            <a href="mailto:${data.email}" style="color: #7c3aed; text-decoration: none;">${data.email || "None"}</a>
          </td>
        </tr>
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">SERVICE NEEDED</td>
          <td style="${VALUE_TD_STYLES}"><span style="color: #7c3aed; font-weight: 700;">${data.serviceNeeded || "Custom Project"}</span></td>
        </tr>
        <tr>
          <td style="${LABEL_TD_STYLES}">PROJECT BRIEF</td>
          <td style="${VALUE_TD_STYLES}; line-height: 1.6; color: #334155;">
            ${data.message ? data.message.replace(/\n/g, "<br/>") : "No message"}
          </td>
        </tr>
      </table>

      <!-- Quick Action Button -->
      <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #f1f5f9;">
        ${
          data.email
            ? `<a href="mailto:${data.email}?subject=${encodeURIComponent(`Re: Project Inquiry (${data.serviceNeeded || "Buildicy"})`)}" style="${BUTTON_PRIMARY_STYLES}">Reply to ${data.name || "Client"} ✉️</a>`
            : ""
        }
      </div>
    </div>

    <!-- Footer -->
    <div style="${FOOTER_STYLES}">
      Submitted at ${data.submittedAt || new Date().toLocaleString()} • Buildicy AI Growth Systems Studio • hello@buildicy.com
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * 3. Careers / Job Application Email Template
 */
export function generateCareersEmailHtml(data: CareersEmailData): string {
  const cleanPhone = (data.phone || "").replace(/[^0-9]/g, "");
  const waUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hi ${data.name || "Candidate"}, thank you for applying for the ${data.role || "position"} at Buildicy!`)}`
    : "https://wa.me/919150890205";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Job Application</title>
</head>
<body style="${BASE_STYLES}">
  <div style="${CONTAINER_STYLES}">
    <!-- Header -->
    <div style="${HEADER_STYLES}">
      <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: #34d399; display: block; margin-bottom: 6px; font-family: monospace;">
        BUILDICY TALENT PIPELINE
      </span>
      <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; color: #ffffff;">
        New Application: ${data.role || "Candidate"}
      </h1>
    </div>

    <!-- Body Table -->
    <div style="${BODY_STYLES}">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">CANDIDATE NAME</td>
          <td style="${VALUE_TD_STYLES}"><strong>${data.name || "Not specified"}</strong></td>
        </tr>
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">TARGET ROLE</td>
          <td style="${VALUE_TD_STYLES}"><span style="color: #7c3aed; font-weight: 700;">${data.role || "General"}</span></td>
        </tr>
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">EMAIL ADDRESS</td>
          <td style="${VALUE_TD_STYLES}">
            <a href="mailto:${data.email}" style="color: #7c3aed; text-decoration: none;">${data.email || "None"}</a>
          </td>
        </tr>
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">PHONE / WHATSAPP</td>
          <td style="${VALUE_TD_STYLES}">
            <a href="tel:${data.phone}" style="color: #0f172a; text-decoration: none;">${data.phone || "None"}</a>
          </td>
        </tr>
        <tr style="${TABLE_ROW_STYLES}">
          <td style="${LABEL_TD_STYLES}">PORTFOLIO / GITHUB</td>
          <td style="${VALUE_TD_STYLES}">
            ${
              data.links && data.links !== "None provided"
                ? `<a href="${data.links}" target="_blank" style="color: #7c3aed; text-decoration: underline;">${data.links}</a>`
                : "None provided"
            }
          </td>
        </tr>
        <tr>
          <td style="${LABEL_TD_STYLES}">PROJECT HIGHLIGHTS</td>
          <td style="${VALUE_TD_STYLES}; line-height: 1.5; color: #334155;">
            ${data.notes ? data.notes.replace(/\n/g, "<br/>") : "None provided"}
          </td>
        </tr>
      </table>

      <!-- Quick Action Buttons -->
      <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #f1f5f9;">
        ${
          data.email
            ? `<a href="mailto:${data.email}?subject=${encodeURIComponent(`Buildicy Interview — ${data.role || "Job Application"}`)}" style="${BUTTON_PRIMARY_STYLES}">Contact Candidate ✉️</a>`
            : ""
        }
        ${
          cleanPhone
            ? `<a href="${waUrl}" style="${BUTTON_WHATSAPP_STYLES}">WhatsApp Candidate 💬</a>`
            : ""
        }
      </div>
    </div>

    <!-- Footer -->
    <div style="${FOOTER_STYLES}">
      Submitted at ${data.submittedAt || new Date().toLocaleString()} • Buildicy AI Studio Careers • hello@buildicy.com
    </div>
  </div>
</body>
</html>
  `.trim();
}

