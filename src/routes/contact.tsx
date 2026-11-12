import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "../components/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Start a Project — Buildicy AI Studio" },
      {
        name: "description",
        content:
          "Start your project with Buildicy. Send us a message, request an AI Growth Audit, or reach out directly at hello@buildicy.com / WhatsApp +91 91508 90205.",
      },
      { name: "author", content: "Buildicy Studio" },
      { property: "og:site_name", content: "Buildicy" },
      { property: "og:title", content: "Contact & Start a Project — Buildicy AI Studio" },
      {
        property: "og:description",
        content:
          "Start your project with Buildicy. Request an AI Growth Audit, custom voice telephony system, or automation pipeline.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.buildicy.com/contact" },
      { property: "og:image", content: "https://www.buildicy.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact & Start a Project — Buildicy" },
      {
        name: "twitter:description",
        content:
          "Start your project with Buildicy. Direct contact: hello@buildicy.com | WhatsApp: +91 91508 90205.",
      },
      { name: "twitter:image", content: "https://www.buildicy.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.buildicy.com/contact" },
    ],
  }),
  component: ContactPage,
});
