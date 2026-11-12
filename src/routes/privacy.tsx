import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicyPage } from "../components/PrivacyPolicyPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy & Data Security — Buildicy AI Studio" },
      {
        name: "description",
        content:
          "Buildicy's privacy policy, zero-retention AI principles, client code ownership, and enterprise data confidentiality standards.",
      },
      { property: "og:site_name", content: "Buildicy" },
      { property: "og:title", content: "Privacy Policy & Security Standards — Buildicy" },
      {
        property: "og:description",
        content:
          "Zero-retention AI principles, 100% client code and IP ownership, and enterprise confidentiality commitments.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.buildicy.com/privacy" },
      { property: "og:image", content: "https://www.buildicy.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy & Security Standards — Buildicy" },
      {
        name: "twitter:description",
        content: "Buildicy privacy policy, zero-retention AI principles, and IP ownership commitments.",
      },
      { name: "twitter:image", content: "https://www.buildicy.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.buildicy.com/privacy" },
    ],
  }),
  component: PrivacyPolicyPage,
});

