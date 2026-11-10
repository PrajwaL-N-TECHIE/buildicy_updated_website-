import { createFileRoute } from "@tanstack/react-router";
import { CareersPage } from "../components/CareersPage";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Buildicy AI Growth Systems Studio" },
      {
        name: "description",
        content:
          "Join Buildicy. We engineer real production AI growth systems, low-latency telephony agents, and custom platforms.",
      },
    ],
  }),
  component: CareersPage,
});

