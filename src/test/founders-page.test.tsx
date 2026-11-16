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
  it("renders Prajwal N (CEO / Founder) and Mayur P (CTO / Co-founder) without any founder image photos", () => {
    const { container } = render(<FoundersPage />);

    // Verify Founder Names and Roles
    expect(screen.getAllByText(/Prajwal N/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Mayur P/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/CEO \/ Founder/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/CTO \/ Co-founder/i).length).toBeGreaterThan(0);

    // Verify the twist: No founder photo images!
    // The only images should be Buildicy Logo.
    const allImages = container.querySelectorAll("img");
    allImages.forEach((img) => {
      const alt = img.getAttribute("alt") || "";
      const src = img.getAttribute("src") || "";
      expect(alt.toLowerCase()).toContain("buildicy");
      expect(src.toLowerCase()).toContain("logo.png");
    });
  });

  it("contains the founding story of Buildicy from 2016 to February 2026", () => {
    render(<FoundersPage />);

    expect(screen.getAllByText(/February 2026/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/childhood friends/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/2016/i).length).toBeGreaterThan(0);
  });
});
