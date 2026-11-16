import { createFileRoute } from "@tanstack/react-router";
import { FoundersPage } from "../components/FoundersPage";

export const Route = createFileRoute("/founders")({
  head: () => ({
    meta: [
      { title: "Founders & Story — Buildicy" },
      {
        name: "description",
        content:
          "Meet the founders of Buildicy: Mayur P (CTO) and Prajwal N (CEO). Founded in February 2026 by two childhood friends united by technology and product engineering since 2016.",
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
  }),
  component: FoundersPage,
});
