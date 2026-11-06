import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

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
import { ContactPage } from "@/components/ContactPage";

describe("Contact / Project Inquiry Page", () => {
  it("renders the sweet, clean light-theme form with PDF download options", () => {
    render(<ContactPage />);

    // Check headings
    expect(
      screen.getByRole("heading", { name: /Let's build something/i })
    ).toBeInTheDocument();

    // Check destination email
    const emailElements = screen.getAllByText(/hello@buildicy\.com/i);
    expect(emailElements.length).toBeGreaterThan(0);

    // Check service need chips
    expect(screen.getByText("AI Growth Funnel")).toBeInTheDocument();
    expect(screen.getByText("AI Voice / Receptionist")).toBeInTheDocument();
    expect(screen.getByText("Web Application")).toBeInTheDocument();

    // Check required inputs
    const nameInput = screen.getByPlaceholderText(/john doe/i);
    const emailInput = screen.getByPlaceholderText(/john@company\.com/i);
    const messageInput = screen.getByPlaceholderText(
      /tell us what you're looking to build/i
    );

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();

    // Test input typing
    fireEvent.change(nameInput, { target: { value: "Alex Morgan" } });
    fireEvent.change(emailInput, { target: { value: "alex@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Need a high converting AI funnel" } });

    expect((nameInput as HTMLInputElement).value).toBe("Alex Morgan");
    expect((emailInput as HTMLInputElement).value).toBe("alex@example.com");

    // Check submit button
    expect(
      screen.getByRole("button", { name: /Send Message/i })
    ).toBeInTheDocument();

    // Check PDF Download options
    expect(screen.getByText("Company Profile")).toBeInTheDocument();
    expect(screen.getByText("Capabilities & Solutions Guide")).toBeInTheDocument();
    expect(screen.getByText("Case Studies & Portfolio")).toBeInTheDocument();

    const downloadLinks = screen.getAllByRole("link", { name: /Download/i });
    expect(downloadLinks.length).toBe(3);
  });
});
