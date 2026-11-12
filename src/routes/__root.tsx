import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0f172a" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "Buildicy" },
      { name: "application-name", content: "Buildicy" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
      // Favicons (Multi-resolution & Google Search Favicon Compliant)
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { rel: "icon", href: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const SCHEMA_ORG_JSON = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.buildicy.com/#organization",
      "name": "Buildicy",
      "legalName": "Buildicy AI Growth Systems Studio",
      "url": "https://www.buildicy.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.buildicy.com/#logo",
        "url": "https://www.buildicy.com/logo.png",
        "caption": "Buildicy AI Studio Logo",
        "width": 523,
        "height": 477,
      },
      "image": "https://www.buildicy.com/og-image.png",
      "description":
        "Thoughtful AI systems engineered to capture, qualify, and convert leads 24/7. Built around your business.",
      "email": "hello@buildicy.com",
      "telephone": "+919150890205",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
      },
      "sameAs": [
        "https://www.linkedin.com/company/buildicy/",
        "https://wa.me/919150890205",
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+919150890205",
          "contactType": "sales",
          "email": "hello@buildicy.com",
          "availableLanguage": ["English", "Hindi"],
        },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Buildicy AI Growth Systems",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Funnel System",
              "description":
                "Turn traffic into qualified leads and booked calls with automated qualification and CRM tracking.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Receptionist & Voice Telephony",
              "description":
                "Answer calls and WhatsApp 24/7, capture leads, answer FAQs, and book appointments automatically.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Workflow Automation",
              "description":
                "Automate follow-ups, reminders, CRM updates, and repetitive business operations.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Product System",
              "description":
                "Sell and deliver digital products, courses, and SaaS subscriptions automatically.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.buildicy.com/#website",
      "url": "https://www.buildicy.com",
      "name": "Buildicy",
      "description": "AI Growth Systems Studio",
      "publisher": {
        "@id": "https://www.buildicy.com/#organization",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.buildicy.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How natural does the AI voice sound on real telephone calls? Does it sound robotic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Buildicy uses neural streaming voice models (ElevenLabs & Cartesia) wired through low-latency carrier pipelines. Audio latency is sub-second (< 850ms), allowing the AI to naturally pause, handle human interruptions without speaking over the caller, and match your industry tone with over 91% conversational realism.",
          },
        },
        {
          "@type": "Question",
          "name": "What happens if a prospect asks an unexpected question the AI doesn't know?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Buildicy systems operate with strict deterministic enterprise guardrails. The AI will never hallucinate or invent false pricing. If an inquiry exceeds its calibrated knowledge base, the system executes a graceful escalation: it validates the caller query, captures their direct contact details, and immediately dispatches an alert with the full call transcript and audio recording to the founder or sales team via WhatsApp and SMS.",
          },
        },
        {
          "@type": "Question",
          "name": "Will Buildicy work with our existing CRM, calendar, and software stack?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, seamlessly. We natively integrate with HubSpot, Salesforce, Zoho, Google Calendar, Calendly, Notion, Stripe, Razorpay, and WhatsApp Business API. If you run a custom internal database (PostgreSQL, Supabase, Airtable, or internal REST APIs), we engineer custom bidirectional webhooks so lead data populates directly into where your team already works.",
          },
        },
        {
          "@type": "Question",
          "name": "Who owns the prompts, codebase, workflows, and client conversation data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You do — 100% full client IP and code ownership from day one. You retain full access to all prompt repositories, webhook blueprints, database schemas, and API configurations. We also implement Zero Data Retention AI policies so your customer conversations are never stored on public model servers or used to train third-party foundation models.",
          },
        },
        {
          "@type": "Question",
          "name": "How much time is required from my internal team during the 14-day deployment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under 3 hours total across the entire 14-day protocol: 45 minutes for discovery and FAQ audit, 30 minutes to review conversational dialogue branches, and 45 minutes for live staging verification before going live. Buildicy engineers handle 100% of the prompt engineering, webhook wiring, audio testing, and API integration.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the ongoing operational costs after the system goes live?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your baseline operational costs (Twilio phone numbers at ~$1.15/month, telephony minutes at ~$0.014/min, and LLM token usage) are billed directly through your own provider accounts at cost with zero hidden agency markups. Optional monthly maintenance covers 24/7 uptime monitoring, weekly transcript audits, conversation optimization, and prompt updates.",
          },
        },
        {
          "@type": "Question",
          "name": "Can we start with one channel (like WhatsApp or AI Voice) and scale up later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Many of our clients start with our AI Lead Machine (funnel + qualification form + WhatsApp missed-call auto-recovery) or an AI Front Desk for inbound voice, and then expand into a complete multi-channel autonomous growth engine as their pipeline volume expands.",
          },
        },
      ],
    },
  ],
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ORG_JSON) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
