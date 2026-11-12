import { describe, expect, it } from "vitest";
import {
  generateAuditEmailHtml,
  generateContactEmailHtml,
  generateCareersEmailHtml,
} from "../lib/email-templates";

describe("Email Templates Generator", () => {
  it("generates Free AI Growth Audit HTML with clean lead details and WhatsApp link", () => {
    const html = generateAuditEmailHtml({
      name: "Bruce Wayne",
      businessName: "Wayne Enterprises",
      email: "bruce@wayne.corp",
      phone: "+91 91508 90205",
      serviceNeeded: "AI Growth Funnel",
      market: "India",
      notes: "Looking to automate client acquisition pipeline.",
      submittedAt: "2026-11-11 02:00:00",
    });

    expect(html).toContain("Bruce Wayne");
    expect(html).toContain("Wayne Enterprises");
    expect(html).toContain("bruce@wayne.corp");
    expect(html).toContain("AI Growth Funnel");
    expect(html).toContain("wa.me/919150890205");
    expect(html).toContain("hello@buildicy.com");
  });

  it("generates Contact Inquiry HTML with client message and reply action", () => {
    const html = generateContactEmailHtml({
      name: "Clark Kent",
      email: "clark@dailyplanet.com",
      serviceNeeded: "Workflow Automation",
      message: "We need custom AI automation for document processing.",
      submittedAt: "2026-11-11 02:00:00",
    });

    expect(html).toContain("Clark Kent");
    expect(html).toContain("clark@dailyplanet.com");
    expect(html).toContain("Workflow Automation");
    expect(html).toContain("We need custom AI automation");
    expect(html).toContain("mailto:clark@dailyplanet.com");
  });

  it("generates Careers Application HTML with role and portfolio link", () => {
    const html = generateCareersEmailHtml({
      name: "Diana Prince",
      role: "Senior AI Full-Stack Engineer",
      email: "diana@themyscira.io",
      phone: "+91 91508 90205",
      links: "https://github.com/diana",
      notes: "Experienced in LLMs and real-time agents.",
      submittedAt: "2026-11-11 02:00:00",
    });

    expect(html).toContain("Diana Prince");
    expect(html).toContain("Senior AI Full-Stack Engineer");
    expect(html).toContain("https://github.com/diana");
    expect(html).toContain("wa.me/919150890205");
  });
});

