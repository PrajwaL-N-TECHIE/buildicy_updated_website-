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
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "../components/ui/sonner";

function SplashScreen({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));

    const start = performance.now();
    const duration = 1450; // smooth 1.45s loading sequence

    const timer = setInterval(() => {
      const elapsed = performance.now() - start;
      const t = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = Math.round(t * 100);
      setProgress(easedProgress);

      if (t >= 1) {
        clearInterval(timer);
        setTimeout(() => setExiting(true), 200);
        setTimeout(() => onDone(), 650);
      }
    }, 20);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(timer);
    };
  }, [onDone]);

  const getStatusText = () => {
    if (progress < 25) return "Initializing AI Studio...";
    if (progress < 60) return "Loading Growth Architecture...";
    if (progress < 92) return "Calibrating Neural Pipelines...";
    return "Studio Ready";
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#faf8f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: exiting ? 0 : 1,
        transform: exiting ? "scale(1.02)" : "scale(1)",
        pointerEvents: exiting ? "none" : "all",
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      {/* Background ambient lighting & radial glow */}
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)",
          filter: "blur(50px)",
          transition: "opacity 1s ease, transform 1.2s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.8)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative orbital rings */}
      <div
        style={{
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          border: "1px dashed rgba(168,85,247,0.15)",
          transition: "opacity 1.2s ease",
          opacity: visible ? 1 : 0,
          animation: "spin 35s linear infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          border: "1px solid rgba(147,51,234,0.08)",
          transition: "opacity 1s ease",
          opacity: visible ? 1 : 0,
          pointerEvents: "none",
        }}
      />

      {/* Centerpiece Emblem with Glowing Glassmorphic Pod */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 92,
          height: 92,
          borderRadius: 24,
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(168, 85, 247, 0.25)",
          boxShadow: "0 20px 40px -10px rgba(147, 51, 234, 0.2), 0 0 0 1px rgba(255,255,255,0.8)",
          transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1) translateY(0)" : "scale(0.8) translateY(14px)",
        }}
      >
        <img
          src="/logo.png"
          alt="Buildicy"
          style={{
            width: 54,
            height: 54,
            objectFit: "contain",
            display: "block",
            filter: "drop-shadow(0 6px 12px rgba(147, 51, 234, 0.25))",
          }}
        />
      </div>

      {/* Wordmark (NO blinking dot) */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)",
          transitionDelay: "0.1s",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
        }}
      >
        <span
          style={{
            fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
            fontSize: 32,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#0f172a",
          }}
        >
          Buildicy
        </span>

        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7c3aed",
            fontWeight: 700,
          }}
        >
          AI Growth Systems Studio
        </span>
      </div>

      {/* Central Improvised Progress Track & Counter */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: 28,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          transition: "opacity 0.6s ease",
          transitionDelay: "0.2s",
          opacity: visible ? 1 : 0,
        }}
      >
        {/* Sleek Pill Progress Bar */}
        <div
          style={{
            width: 210,
            height: 4,
            borderRadius: 999,
            background: "rgba(15, 23, 42, 0.08)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "100%",
              borderRadius: 999,
              background: "linear-gradient(90deg, #9333ea 0%, #6366f1 50%, #a855f7 100%)",
              transition: "width 0.15s ease-out",
              width: `${progress}%`,
              boxShadow: "0 0 12px rgba(147, 51, 234, 0.5)",
            }}
          />
        </div>

        {/* Status text + Percentage counter */}
        <div
          style={{
            width: 210,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 11,
            fontFamily: "'Space Mono', monospace",
            color: "#64748b",
          }}
        >
          <span style={{ fontSize: 10, color: "#94a3b8" }}>{getStatusText()}</span>
          <span style={{ fontWeight: 700, color: "#7c3aed" }}>{progress}%</span>
        </div>
      </div>
    </div>
  );
}

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
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
      { rel: "icon", href: "/logo.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
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
  const [showSplash, setShowSplash] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <Outlet />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
