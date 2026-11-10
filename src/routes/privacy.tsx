import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicyPage } from "../components/PrivacyPolicyPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Buildicy AI Studio" },
      {
        name: "description",
        content:
          "Buildicy's privacy policy, zero-retention AI principles, client code ownership, and data confidentiality standards.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

