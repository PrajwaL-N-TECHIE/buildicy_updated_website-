import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("@tanstack/react-router", async () => {
  const actual = await vi.importActual<typeof import("@tanstack/react-router")>(
    "@tanstack/react-router"
  );
  return {
    ...actual,
    Link: ({ children, to, className, ...props }: any) => (
      <a href={to} className={className} {...props}>
        {children}
      </a>
    ),
  };
});

import { FoundersPage } from "../components/FoundersPage";

describe("FoundersPage", () => {
  it("renders Prajwal N (CEO / Founder) and Mayur P (CTO / Co-founder) with their profiles and portrait", () => {
    const { container } = render(<FoundersPage />);

    // Verify Founder Names and Roles
    expect(screen.getAllByText(/Prajwal N/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Mayur P/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/CEO \/ Founder/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/CTO \/ Co-founder/i).length).toBeGreaterThan(0);

    // Verify official Buildicy images (Logo + Founders Sunset Portrait + Avatars)
    const allImages = container.querySelectorAll("img");
    expect(allImages.length).toBeGreaterThanOrEqual(4);
    allImages.forEach((img) => {
      const alt = img.getAttribute("alt") || "";
      const src = img.getAttribute("src") || "";
      expect(
        src.toLowerCase().includes("logo.png") ||
          src.toLowerCase().includes("founders") ||
          src.toLowerCase().includes("prajwal") ||
          src.toLowerCase().includes("mayur")
      ).toBe(true);
    });
  });

  it("contains the founding story of Buildicy from 2016 to February 2026", () => {
    render(<FoundersPage />);

    expect(screen.getAllByText(/February 2026/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Two Friends/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Build the Future/i).length).toBeGreaterThan(0);
  });
});
