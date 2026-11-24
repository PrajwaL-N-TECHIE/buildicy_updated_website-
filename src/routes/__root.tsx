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
      { name: "mobile-web-app-capable", content: "yes" },
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
        "streetAddress": "Coimbatore Tech Corridor",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641001",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/buildicy/",
        "https://x.com/buildicy",
        "https://instagram.com/buildicy",
        "https://youtube.com/@buildicy",
        "https://wa.me/919150890205"
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
              "name": "Starter — AI Lead Machine & Funnel",
              "description":
                "Turn website and ad traffic into qualified booked calls with automated scoring, booking, and reminders.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Growth — 24/7 AI Receptionist & Front Desk",
              "description":
                "Never miss an inbound call or WhatsApp enquiry again. Instant voice triage, 2-way chat consultation, and missed-call recovery.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Scale — Complete AI Growth Engine",
              "description":
                "Run lead capture, follow-up, CRM triage, dormant lead reactivation, and reporting on one automated autonomous revenue system.",
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
      "@type": "ItemList",
      "@id": "https://www.buildicy.com/#sitenavigation",
      "name": "Buildicy Primary Navigation",
      "description": "Primary architectural sections and pages of Buildicy AI Growth Systems Studio",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Problem: Lead Leakage",
          "description": "Stop losing warm leads to slow replies and missed after-hours enquiries.",
          "url": "https://www.buildicy.com/#problem"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Interactive System Demo",
          "description": "Interactive autonomous engine demo showing automated lead capture, qualification, and booking.",
          "url": "https://www.buildicy.com/#demo"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Proof & Case Studies",
          "description": "Named case studies and real estate lead recovery metrics producing 14 additional viewings/mo.",
          "url": "https://www.buildicy.com/#proof"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "AI Growth Systems & Packages",
          "description": "One clean package ladder: Starter (Lead Capture), Growth (AI Receptionist), and Scale (Growth Engine).",
          "url": "https://www.buildicy.com/#systems"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "14-Day Implementation Protocol",
          "description": "Fixed 14-day delivery sprint from audit to live multi-channel deployment.",
          "url": "https://www.buildicy.com/#protocol"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Frequently Asked Questions",
          "description": "System ownership, zero hallucination guardrails, WhatsApp/telephony setup, and CRM integrations.",
          "url": "https://www.buildicy.com/#faq"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 7,
          "name": "Founders & Story",
          "description": "Meet the founders of Buildicy: Mayur P (CTO) and Prajwal N (CEO) — 10 years of engineering collaboration.",
          "url": "https://www.buildicy.com/founders"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 8,
          "name": "Get Free Lead-Leak Audit",
          "description": "30-minute strategic audit, custom AI architecture map, and fixed implementation scope estimate.",
          "url": "https://www.buildicy.com/contact"
        }
      ]
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
