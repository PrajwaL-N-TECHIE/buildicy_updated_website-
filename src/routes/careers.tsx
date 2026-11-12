import { createFileRoute } from "@tanstack/react-router";
import { CareersPage } from "../components/CareersPage";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Open Positions — Buildicy AI Studio" },
      {
        name: "description",
        content:
          "Join Buildicy. We engineer real production AI growth systems, low-latency telephony agents, and custom platforms. Explore open engineering, voice AI, and growth roles.",
      },
      { name: "keywords", content: "Buildicy careers, AI engineering jobs, Full-Stack Engineer, AI Voice Engineer, Systems Architect, remote AI jobs" },
      { property: "og:site_name", content: "Buildicy" },
      { property: "og:title", content: "Careers & Open Roles — Buildicy AI Studio" },
      {
        property: "og:description",
        content:
          "Join Buildicy in engineering production AI growth systems, telephony agents, and custom platforms.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.buildicy.com/careers" },
      { property: "og:image", content: "https://www.buildicy.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Careers & Open Roles — Buildicy AI Studio" },
      {
        name: "twitter:description",
        content:
          "Explore active engineering, telephony, and solutions roles at Buildicy.",
      },
      { name: "twitter:image", content: "https://www.buildicy.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.buildicy.com/careers" },
    ],
  }),
  component: CareersPage,
});

