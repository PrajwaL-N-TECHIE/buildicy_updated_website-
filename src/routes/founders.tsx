import { createFileRoute } from "@tanstack/react-router";
import { FoundersPage } from "../components/FoundersPage";

export const Route = createFileRoute("/founders")({
  head: () => ({
    meta: [
      { title: "Founders & Leadership Story — Buildicy Studio" },
      {
        name: "description",
        content:
          "Meet the founders of Buildicy: Mayur P (CTO) and Prajwal N (CEO), childhood friends engineering AI growth systems and software products since 2016.",
      },
      {
        property: "og:title",
        content: "Buildicy Founders & Story — Mayur P (CTO) & Prajwal N (CEO)",
      },
      {
        property: "og:description",
        content:
          "Founded in February 2026 by two childhood friends. We engineer AI growth systems, software architectures, and automated business engines.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.buildicy.com/founders" },
      { rel: "alternate", href: "https://www.buildicy.com/founders", hreflang: "x-default" },
      { rel: "alternate", href: "https://www.buildicy.com/founders", hreflang: "en" },
    ],
  }),
  component: FoundersPage,
});
