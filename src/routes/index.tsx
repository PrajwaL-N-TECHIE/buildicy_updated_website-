import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, Fragment } from "react";
import { createPortal } from "react-dom";
import { toast } from "sonner";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  PhoneCall,
  Users,
  Flame,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Bot,
  Database,
  Layers,
  BarChart3,
  Globe,
  Building2,
  Briefcase,
  GraduationCap,
  Home,
  UserCheck,
  TrendingUp,
  Search,
  Check,
  ExternalLink,
  Laptop,
  Code2,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  X,
  Zap,
} from "lucide-react";
import { HeroTypewriter } from "../components/HeroTypewriter";
import { AuditBookingModal } from "../components/AuditBookingModal";
import { Navbar } from "../components/Navbar";
import FolderFloat from "../components/FolderFloat";
import CircularCarousel from "../components/CircularCarousel";
import { PORTAL_ITEMS } from "../config/links";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Buildicy | AI Growth Systems & 24/7 Lead Capture Studio",
      },
      {
        name: "description",
        content:
          "Buildicy installs AI Growth Systems that capture enquiries, respond in seconds, qualify prospects, and book meetings for B2B businesses.",
      },
      {
        name: "keywords",
        content:
          "AI Growth Systems, AI Lead Recovery, B2B Booking Systems, AI Receptionist, WhatsApp AI Lead Capture, Automated Qualification, Buildicy Studio, AI Growth Systems Studio Coimbatore India",
      },
      { name: "author", content: "Buildicy Studio" },
      { name: "creator", content: "Buildicy" },
      { name: "publisher", content: "Buildicy" },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Coimbatore, Tamil Nadu, India" },
      { name: "geo.position", content: "11.0168;76.9558" },
      { name: "ICBM", content: "11.0168, 76.9558" },
      // Open Graph
      { property: "og:site_name", content: "Buildicy" },
      {
        property: "og:title",
        content:
          "Buildicy | AI Growth Systems & 24/7 Lead Capture Studio",
      },
      {
        property: "og:description",
        content:
          "Buildicy installs AI Growth Systems that capture enquiries, respond in seconds, qualify prospects, and book meetings for B2B businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.buildicy.com/" },
      { property: "og:image", content: "https://www.buildicy.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Buildicy — AI Growth Systems Studio" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@buildicy" },
      { name: "twitter:title", content: "Buildicy — AI Growth Systems Studio" },
      {
        name: "twitter:description",
        content:
          "Thoughtful AI systems engineered to capture, qualify, and convert leads 24/7. Built around your business.",
      },
      { name: "twitter:image", content: "https://www.buildicy.com/og-image.png" },
      { name: "twitter:image:alt", content: "Buildicy — AI Growth Systems Studio" },
    ],
    links: [
      { rel: "canonical", href: "https://www.buildicy.com/" },
      { rel: "alternate", href: "https://www.buildicy.com/", hreflang: "x-default" },
      { rel: "alternate", href: "https://www.buildicy.com/", hreflang: "en" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Buildicy",
          alternateName: "Buildicy AI Growth Systems Studio",
          description:
            "Buildicy installs AI Growth Systems that capture enquiries, qualify prospects, and book qualified meetings for B2B service businesses.",
          url: "https://buildicy.com",
          email: "hello@buildicy.com",
          telephone: "+919150890205",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "United Arab Emirates" },
            { "@type": "Country", name: "Australia" },
            { "@type": "Country", name: "Canada" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "AI Growth Systems",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Funnel System",
                  description: "Turn website enquiries into qualified booked calls.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Lead Concierge",
                  description:
                    "Handle incoming enquiries and book suitable prospects 24/7 across WhatsApp, Web, and Calls.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Complete AI Growth Engine",
                  description:
                    "Connect enquiries, follow-ups, sales teams, CRM, and revenue reporting.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
});

const WHATSAPP_URL = `https://wa.me/919150890205?text=${encodeURIComponent(
  "Hi Buildicy, I would like to book a free AI Growth Audit for my business."
)}`;

function useReveal() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: isMobile ? "0px" : "0px 0px -40px 0px" }
    );
    const SELECTORS = [
      ".reveal", ".reveal-zoom", ".reveal-left", ".reveal-right",
      ".reveal-scale", ".reveal-blur", ".reveal-flip",
    ].map((s) => `${s}:not(.is-in)`).join(", ");
    const observeAll = () => {
      document.querySelectorAll(SELECTORS).forEach((el) => observer.observe(el));
    };
    observeAll();
    let moRaf: number | null = null;
    const mo = new MutationObserver(() => {
      if (moRaf) return;
      moRaf = requestAnimationFrame(() => { observeAll(); moRaf = null; });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { observer.disconnect(); mo.disconnect(); if (moRaf) cancelAnimationFrame(moRaf); };
  }, []);
}

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const total = document.documentElement.scrollHeight - window.innerHeight;
          if (total > 0) {
            setProgress(Math.min(100, Math.max(0, (window.scrollY / total) * 100)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[999] pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 transition-[width] duration-75 ease-out shadow-[0_0_8px_rgba(168,85,247,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

/* =========================================================================
   ORIGINAL THREE.JS WEBGL PARTICLE GLOBE
   ========================================================================= */

const GLOBAL_HUBS = [
  { id: "delhi", name: "New Delhi", lat: 28.6139, lng: 77.209, color: "#ffffff", size: 0.95 },
  { id: "bangalore", name: "Bangalore", lat: 12.9716, lng: 77.5946, color: "#ffffff", size: 0.95 },
  { id: "mumbai", name: "Mumbai", lat: 19.076, lng: 72.8777, color: "#ffffff", size: 0.9 },
  { id: "dubai", name: "Dubai", lat: 25.2048, lng: 55.2708, color: "#ffffff", size: 0.9 },
  { id: "singapore", name: "Singapore", lat: 1.3521, lng: 103.8198, color: "#ffffff", size: 0.9 },
  { id: "london", name: "London", lat: 51.5072, lng: -0.1276, color: "#ffffff", size: 0.9 },
  { id: "newyork", name: "New York", lat: 40.7128, lng: -74.006, color: "#ffffff", size: 0.95 },
  { id: "sanfrancisco", name: "San Francisco", lat: 37.7749, lng: -122.4194, color: "#ffffff", size: 0.95 },
  { id: "tokyo", name: "Tokyo", lat: 35.6762, lng: 139.6503, color: "#ffffff", size: 0.9 },
  { id: "berlin", name: "Berlin", lat: 52.52, lng: 13.405, color: "#ffffff", size: 0.85 },
  { id: "sydney", name: "Sydney", lat: -33.8688, lng: 151.2093, color: "#ffffff", size: 0.85 },
];

const SAMPLE_ARCS = [
  { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.22, color: "#e879f9" },
  { order: 2, startLat: 25.2048, startLng: 55.2708, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: "#c084fc" },
  { order: 3, startLat: 51.5072, startLng: -0.1276, endLat: 40.7128, endLng: -74.006, arcAlt: 0.32, color: "#a855f7" },
  { order: 4, startLat: 40.7128, startLng: -74.006, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.25, color: "#c084fc" },
  { order: 5, startLat: 37.7749, startLng: -122.4194, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.36, color: "#8b5cf6" },
  { order: 6, startLat: 35.6762, startLng: 139.6503, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.26, color: "#e879f9" },
  { order: 7, startLat: 1.3521, startLng: 103.8198, endLat: 12.9716, endLng: 77.5946, arcAlt: 0.24, color: "#a855f7" },
  { order: 8, startLat: 51.5072, startLng: -0.1276, endLat: 52.52, endLng: 13.405, arcAlt: 0.18, color: "#c084fc" },
  { order: 9, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.34, color: "#6366f1" },
];

function WebGLParticleGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    let animId: number;
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    let isVisible = true;

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry?.isIntersecting ?? false;
      },
      { threshold: 0.02 }
    );
    visibilityObserver.observe(container);

    while (container.firstChild) container.removeChild(container.firstChild);

    let idleId: any = null;
    const loadGlobe = () => {
      Promise.all([import("three"), import("three-globe")])
        .then(([THREE, threeGlobeMod]) => {
          if (cancelled) return;
          try {
            const ThreeGlobe =
              (threeGlobeMod as any)?.default?.default ||
              (threeGlobeMod as any)?.default ||
              (threeGlobeMod as any);
            if (!ThreeGlobe) return;

            (window as any).THREE = THREE;

            const isMobile = window.innerWidth < 768;
            const width = container.clientWidth || 360;
            const height = container.clientHeight || 360;
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(50, width / height, 1, 2000);
            camera.position.set(0, 0, 310);

            const renderer = new THREE.WebGLRenderer({
              antialias: !isMobile,
              alpha: true,
              powerPreference: "high-performance",
            });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2.0));
            renderer.setClearColor(0x000000, 0);
            container.appendChild(renderer.domElement);

          const ambientLight = new THREE.AmbientLight(0xc084fc, 1.8);
          scene.add(ambientLight);
          const dLightLeft = new THREE.DirectionalLight(0xffffff, 1.8);
          dLightLeft.position.set(-400, 200, 200);
          scene.add(dLightLeft);
          const dLightTop = new THREE.DirectionalLight(0xffffff, 1.4);
          dLightTop.position.set(-200, 500, 200);
          scene.add(dLightTop);
          const pointLight = new THREE.PointLight(0xe879f9, 2.0);
          pointLight.position.set(200, 300, 400);
          scene.add(pointLight);

          const globe = new ThreeGlobe()
            .showAtmosphere(true)
            .atmosphereColor("#c084fc")
            .atmosphereAltitude(0.2)
            .arcsData(SAMPLE_ARCS)
            .arcColor((e: any) => e.color)
            .arcAltitude((e: any) => e.arcAlt)
            .arcStroke(0.65)
            .arcDashLength(0.45)
            .arcDashGap(2.2)
            .arcDashInitialGap((e: any) => e.order * 0.7)
            .arcDashAnimateTime(1100)
            .pointsData(GLOBAL_HUBS)
            .pointLat((d: any) => d.lat)
            .pointLng((d: any) => d.lng)
            .pointColor(() => "#ffffff")
            .pointAltitude(0.028)
            .pointRadius((d: any) => d.size || 0.9);

          if (typeof (globe as any).ringsData === "function") {
            (globe as any)
              .ringsData(GLOBAL_HUBS)
              .ringLat((d: any) => d.lat)
              .ringLng((d: any) => d.lng)
              .ringAltitude(0.024)
              .ringColor(() => (t: number) => `rgba(232, 121, 249, ${Math.max(0, (1 - t) * 0.92)})`)
              .ringMaxRadius(3.8)
              .ringPropagationSpeed(1.6)
              .ringRepeatPeriod(1300);
          }

          const globeMaterial = (globe as any).globeMaterial?.();
          if (globeMaterial) {
            globeMaterial.color = new THREE.Color("#4c1d95");
            globeMaterial.emissive = new THREE.Color("#2e1065");
            globeMaterial.emissiveIntensity = 0.5;
            globeMaterial.shininess = 0.9;
          }

          fetch("/countries.json")
            .then((res) => res.json())
            .then((countries) => {
              if (countries?.features) {
                globe
                  .hexPolygonsData(countries.features)
                  .hexPolygonResolution(3)
                  .hexPolygonMargin(0.3)
                  .hexPolygonAltitude(0.006)
                  .hexPolygonColor(() => "rgba(255,255,255,0.96)");
              }
            })
            .catch(() => {});

          const globeGroup = new THREE.Group();
          globeGroup.add(globe);
          scene.add(globeGroup);

          let isDragging = false;
          let prevX = 0,
            prevY = 0;
          let userRotY = 0,
            userRotX = 0.08;
          let t = 0;

          const onPointerDown = (e: PointerEvent) => {
            isDragging = true;
            prevX = e.clientX;
            prevY = e.clientY;
            container.style.cursor = "grabbing";
          };

          const onPointerMove = (e: PointerEvent) => {
            if (!isDragging) return;
            userRotY += (e.clientX - prevX) * 0.009;
            userRotX = Math.max(-0.85, Math.min(0.85, userRotX + (e.clientY - prevY) * 0.009));
            prevX = e.clientX;
            prevY = e.clientY;
          };

          const onPointerUp = () => {
            if (!isDragging) return;
            isDragging = false;
            container.style.cursor = "grab";
          };

          container.addEventListener("pointerdown", onPointerDown);
          window.addEventListener("pointermove", onPointerMove);
          window.addEventListener("pointerup", onPointerUp);
          window.addEventListener("pointercancel", onPointerUp);

          function animate() {
            animId = requestAnimationFrame(animate);
            if (!isVisible) return;
            t += 0.007;
            globe.rotation.y = userRotY + t;
            globe.rotation.x = userRotX + Math.sin(t * 0.35) * 0.1;
            renderer.render(scene, camera);
          }
          animate();

          const handleResize = () => {
            const w = container.clientWidth || 360;
            const h = container.clientHeight || 360;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2.0));
          };
          window.addEventListener("resize", handleResize);

          cleanup = () => {
            visibilityObserver.disconnect();
            cancelAnimationFrame(animId);
            container.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointercancel", onPointerUp);
            window.removeEventListener("resize", handleResize);
            if (container.contains(renderer.domElement)) {
              container.removeChild(renderer.domElement);
            }
            renderer.dispose();
          };
        } catch (err) {
          console.warn("WebGL globe initialization skipped:", err);
        }
      })
      .catch((err) => {
        console.warn("Failed to load Three.js globe dependencies:", err);
      });
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = (window as any).requestIdleCallback(loadGlobe, { timeout: 1200 });
    } else {
      idleId = setTimeout(loadGlobe, 150);
    }

    return () => {
      cancelled = true;
      if (idleId) {
        if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
          (window as any).cancelIdleCallback(idleId);
        } else {
          clearTimeout(idleId);
        }
      }
      visibilityObserver.disconnect();
      cleanup?.();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full select-none touch-none">
      <div className="absolute inset-4 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18)_0%,rgba(147,51,234,0.06)_50%,transparent_75%)] rounded-full pointer-events-none" />
      <div
        ref={mountRef}
        className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing touch-none"
      />
    </div>
  );
}

function MobileHeroGlobe() {
  return (
    <div className="lg:hidden w-full flex justify-center mt-6 mb-2">
      <div className="w-[260px] h-[260px] xs:w-[280px] xs:h-[280px] sm:w-[340px] sm:h-[340px] max-w-[85vw] max-h-[85vw] aspect-square relative touch-pan-y pointer-events-none sm:pointer-events-auto">
        <div className="absolute inset-4 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <WebGLParticleGlobe />
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN CONTROLLER
   ========================================================================= */

function Index() {
  useReveal();
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [selectedAuditPkg, setSelectedAuditPkg] = useState<string | null>(null);
  const [selectedMarket, setSelectedMarket] = useState<string>("International — USD ($)");

  const handleOpenAudit = (pkg?: string, market?: string) => {
    setSelectedAuditPkg(pkg || null);
    if (market) setSelectedMarket(market);
    setAuditModalOpen(true);
  };

  return (
    <div className="bg-[#faf8f5] text-slate-900 selection:bg-purple-600 selection:text-white page-enter min-h-screen font-sans">
      <ScrollProgressBar />
      <Nav onOpenAudit={() => handleOpenAudit()} />
      <main className="relative">
        {/* 1. Hero: outcome + primary CTA */}
        <Hero onOpenAudit={() => handleOpenAudit()} />

        {/* 2. Problem: lead leakage */}
        <FollowUpBottleneck />

        {/* 3. Solution: autonomous engine demo */}
        <VideoDashboardSection onOpenAudit={() => handleOpenAudit()} />

        {/* 4. Proof: named case study + testimonials */}
        <RealEstateProofOfImpact onOpenAudit={() => handleOpenAudit()} />
        <div className="section-perf">
          <FeaturedProjectsSection onOpenAudit={(pkgName) => handleOpenAudit(pkgName)} />
        </div>

        {/* 5. Offer: one clean package ladder */}
        <div className="section-perf">
          <AIGrowthSystemsPackages onSelectPkg={(pkg, market) => handleOpenAudit(pkg, market)} />
        </div>

        {/* 6. Process: 14-day implementation */}
        <div className="section-perf">
          <DeploymentProtocol onOpenAudit={() => handleOpenAudit()} />
        </div>

        {/* Documentation & Profiles */}
        <div className="section-perf">
          <ResourcesSection />
        </div>

        {/* 7. FAQ: ownership, data, channels, integrations, support */}
        <div className="section-perf">
          <MinimalistFAQ onOpenAudit={() => handleOpenAudit()} />
        </div>

        {/* 8. Final CTA: audit with explicit deliverables */}
        <AuditBanner onOpenAudit={() => handleOpenAudit()} />
      </main>
      <div className="section-perf">
        <Footer onOpenAudit={() => handleOpenAudit()} />
      </div>
      {auditModalOpen && (
        <AuditBookingModal
          initialPackage={selectedAuditPkg}
          initialMarket={selectedMarket}
          onClose={() => setAuditModalOpen(false)}
        />
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Buildicy on WhatsApp"
        className="fixed bottom-6 right-6 z-40 group flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Minimalist Hover Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

/* =========================================================================
   NAVIGATION (Clean, Minimalist, Original Rhythm)
   ========================================================================= */

function Nav({ onOpenAudit }: { onOpenAudit: () => void }) {
  return <Navbar onOpenAudit={onOpenAudit} activeRoute="home" />;
}

/* =========================================================================
   HERO (Original Clean Headline + WebGL Globe, Pill/Image Removed)
   ========================================================================= */

function Hero({ onOpenAudit }: { onOpenAudit: () => void }) {
  const isDesktop = useIsDesktop();

  return (
    <section
      id="top"
      className="relative min-h-[92vh] w-full bg-[#faf8f5] text-slate-900 flex flex-col justify-center overflow-hidden px-6 pt-36 pb-20 md:px-12 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.10)_0%,rgba(99,102,241,0.03)_40%,#faf8f5_75%)] pointer-events-none" />
      <div className="cinematic-noise opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Outcome Headline, Subheadline & Primary CTA */}
        <div className="lg:col-span-8 order-1 flex flex-col justify-center items-start text-left max-w-3xl pl-0 sm:pl-8 lg:pl-12 mt-4 lg:mt-16 reveal-left">
          <h1 className="font-sans text-[clamp(2.2rem,5.4vw,5.2rem)] leading-[1.12] tracking-tight text-slate-900 font-extrabold text-left animate-in fade-in duration-500">
            Stop losing warm leads to{" "}
            <span className="inline-block text-purple-700 whitespace-normal sm:whitespace-nowrap break-words align-bottom">
              <HeroTypewriter
                words={["slow replies.", "missed calls.", "delayed follow-ups."]}
              />
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-xl text-slate-600 text-base md:text-xl leading-relaxed font-normal text-left animate-in fade-in duration-700">
            Buildicy installs AI systems that answer enquiries in seconds, qualify buyers, and book qualified meetings across WhatsApp, web, and phone.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto animate-in fade-in duration-700">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto text-center rounded-full bg-purple-600 text-white px-7 py-3.5 sm:py-4 text-sm font-semibold transition-all hover:bg-purple-700 hover:shadow-lg active:scale-95 shadow-md shadow-purple-600/20 cursor-pointer"
            >
              Get Your Free Lead-Leak Audit
            </button>
            <a
              href="#systems"
              className="w-full sm:w-auto text-center rounded-full border border-slate-300 bg-white px-6 py-3.5 sm:py-4 text-sm font-semibold text-slate-800 transition-all hover:bg-purple-50 hover:border-purple-300 shadow-2xs"
            >
              Explore the AI Systems
            </a>
          </div>



          {/* Quote Banner in Buildicy Brand Purple */}
          <div className="mt-6 w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 border border-purple-500/40 text-left shadow-lg shadow-purple-900/15">
            <p className="font-serif italic text-sm sm:text-base font-normal text-purple-100 leading-relaxed">
              &ldquo;In <strong className="font-sans font-bold text-purple-300 not-italic">30 minutes</strong>, we&apos;ll identify where enquiries are being missed, map the right AI system, and give you a <strong className="font-sans font-bold text-white not-italic underline decoration-purple-400 underline-offset-4">fixed implementation estimate</strong>.&rdquo;
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>Sub-second multi-channel response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>14-day guaranteed implementation</span>
            </div>
          </div>

          {!isDesktop && <MobileHeroGlobe />}
        </div>

        {/* Right Column: WebGL Interactive Particle Globe */}
        <div className="lg:col-span-4 order-2 hidden lg:flex items-center justify-center min-h-[480px] relative pointer-events-auto reveal-right">
          <div className="w-[340px] h-[340px] xl:w-[420px] xl:h-[420px] relative flex items-center justify-center">
            {isDesktop && <WebGLParticleGlobe />}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   FOLLOW-UP BOTTLENECK (Clean, Minimalist Card Grid)
   ========================================================================= */

function FollowUpBottleneck() {
  const problems = [
    { metric: "4.2h avg", title: "Slow Replies", desc: "Warm leads go cold before your team responds.", icon: Clock },
    { metric: "After-Hours", title: "Missed Enquiries", desc: "Buyers researching at night bounce with zero response.", icon: PhoneCall },
    { metric: "Tire-Kickers", title: "Unqualified Calls", desc: "Reps waste hours on leads that were never going to buy.", icon: Users },
    { metric: "+14 / Month", title: "Recovered Revenue", desc: "Automated recovery added 14 qualified viewings in one engagement.", icon: TrendingUp },
  ];

  return (
    <section id="problem" className="px-6 py-14 md:px-12 md:py-20 bg-[#faf8f5] text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-[1380px]">
        <div className="reveal-blur max-w-2xl mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-3">The Revenue Leak</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
            Every missed reply is a lead you paid for — and lost.{" "}
            <span className="text-purple-700">Buildicy closes those gaps.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="reveal-zoom bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-purple-300 transition-all duration-300 flex flex-col gap-3"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-md">
                    {p.metric}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-slate-900 mb-1">{p.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   THE AUTONOMOUS ENGINE (Pixel-Perfect Minimalist Dashboard Simulation)
   Engineered with luxury minimalist card design matching the reference style
   ========================================================================= */

/* =========================================================================
   INTERACTIVE SYSTEM DEMO (True n8n-Style Autonomous Workflow Canvas)
   ========================================================================= */

type WorkflowScenario = "growth" | "starter" | "scale";

interface WorkflowNodeData {
  id: string;
  label: string;
  sublabel: string;
  iconType: "trigger" | "filter" | "agent" | "model" | "tools" | "booking" | "crm" | "nurture" | "reactivation";
  x: number; // percentage on canvas
  y: number; // percentage on canvas
  category: "trigger" | "logic" | "agent" | "subnode" | "action";
  status: "idle" | "running" | "success";
  businessImpact: string;
  description: string;
  livePayload: {
    input: Record<string, any>;
    output: Record<string, any>;
  };
}

/* =========================================================================
   INTERACTIVE SYSTEM DEMO (Fully Mobile-Optimized & Desktop 2D n8n Canvas)
   ========================================================================= */

type WorkflowType = "starter" | "growth" | "scale";

interface WorkflowStepNode {
  id: string;
  stepNumber: string;
  label: string;
  sublabel: string;
  icon: string;
  category: "Capture" | "AI Agent" | "Booking" | "Recovery" | "Insights";
  businessImpact: string;
  description: string;
  metrics: { label: string; value: string }[];
  x: number;
  y: number;
}

interface WorkflowDefinition {
  id: WorkflowType;
  badge: string;
  name: string;
  tagline: string;
  nodes: WorkflowStepNode[];
  connections: { from: string; to: string; label?: string; dashed?: boolean }[];
}

const WORKFLOWS: Record<WorkflowType, WorkflowDefinition> = {
  starter: {
    id: "starter",
    badge: "SYSTEM 01 · STARTER",
    name: "AI Funnel & Booking",
    tagline: "Speed-to-lead & automated calendar booking for web visitors",
    nodes: [
      {
        id: "s1",
        stepNumber: "01",
        label: "Website Enquiry",
        sublabel: "High-Intent Web Form",
        icon: "globe",
        category: "Capture",
        businessImpact: "Responds in 2.8 seconds, eliminating lead bounce.",
        description: "Captures inbound web form submissions 24/7 and initiates instant response.",
        metrics: [{ label: "Speed", value: "< 3 sec" }, { label: "Capture", value: "100%" }],
        x: 40,
        y: 190,
      },
      {
        id: "s2",
        stepNumber: "02",
        label: "AI Instant Response",
        sublabel: "Immediate Acknowledgment",
        icon: "zap",
        category: "Capture",
        businessImpact: "Engages the prospect while buying intent is highest.",
        description: "Sends contextual email and SMS referencing their exact enquiry.",
        metrics: [{ label: "Open Rate", value: "88%" }, { label: "Delivery", value: "Instant" }],
        x: 230,
        y: 190,
      },
      {
        id: "s3",
        stepNumber: "03",
        label: "Lead Qualification",
        sublabel: "BANT Intent Filter",
        icon: "filter",
        category: "AI Agent",
        businessImpact: "Filters out tire-kickers so reps only take high-fit calls.",
        description: "Evaluates company size, budget, and timeline against your target profile.",
        metrics: [{ label: "ICP Match", value: "96.4%" }, { label: "Hours Saved", value: "12h / wk" }],
        x: 420,
        y: 190,
      },
      {
        id: "s4",
        stepNumber: "04",
        label: "Personalised Follow-ups",
        sublabel: "Targeted Nurture Cadence",
        icon: "mail",
        category: "Recovery",
        businessImpact: "Maintains interest and answers hesitations automatically.",
        description: "Sends targeted case studies and proof points to prospects needing nurturing.",
        metrics: [{ label: "Engagement", value: "+42%" }, { label: "Follow-ups", value: "Automated" }],
        x: 620,
        y: 290,
      },
      {
        id: "s5",
        stepNumber: "05",
        label: "Appointment Booking",
        sublabel: "Self-Serve Calendar",
        icon: "calendar",
        category: "Booking",
        businessImpact: "Directly locks meetings with zero back-and-forth friction.",
        description: "Presents real-time available slots matching sales rep calendars.",
        metrics: [{ label: "Bookings", value: "+45%" }, { label: "Friction", value: "Zero" }],
        x: 620,
        y: 90,
      },
      {
        id: "s6",
        stepNumber: "06",
        label: "AI No-Show Recovery",
        sublabel: "Multi-Touch Reminders",
        icon: "shield",
        category: "Recovery",
        businessImpact: "Slashes no-show rates from 35% down to under 8%.",
        description: "Sends SMS/WhatsApp reminder cadences with 1-click easy reschedule.",
        metrics: [{ label: "No-Show Rate", value: "< 8%" }, { label: "Attendance", value: "92%+" }],
        x: 820,
        y: 190,
      },
      {
        id: "s7",
        stepNumber: "07",
        label: "Dashboard & Handover",
        sublabel: "CRM Sync & Rep Alert",
        icon: "user-check",
        category: "Booking",
        businessImpact: "Sales reps receive enriched buyer dossiers before calls.",
        description: "Updates CRM with lead intent score and notifies sales in Slack.",
        metrics: [{ label: "CRM Sync", value: "Realtime" }, { label: "Manual Entry", value: "0 mins" }],
        x: 1010,
        y: 190,
      },
    ],
    connections: [
      { from: "s1", to: "s2" },
      { from: "s2", to: "s3" },
      { from: "s3", to: "s5" },
      { from: "s3", to: "s4", dashed: true },
      { from: "s4", to: "s6" },
      { from: "s5", to: "s6" },
      { from: "s6", to: "s7" },
    ],
  },

  growth: {
    id: "growth",
    badge: "SYSTEM 02 · GROWTH (MOST POPULAR)",
    name: "AI Funnel + AI Receptionist",
    tagline: "24/7 Voice & WhatsApp front desk with missed-call recovery",
    nodes: [
      {
        id: "g1",
        stepNumber: "01",
        label: "Inbound Channels",
        sublabel: "Web, WhatsApp & Calls",
        icon: "phone-incoming",
        category: "Capture",
        businessImpact: "Zero missed enquiries, even after hours and on weekends.",
        description: "Unifies website enquiries, WhatsApp messages, and phone calls in one engine.",
        metrics: [{ label: "Uptime", value: "24/7/365" }, { label: "Channels", value: "3 Unified" }],
        x: 40,
        y: 190,
      },
      {
        id: "g2",
        stepNumber: "02",
        label: "AI Receptionist",
        sublabel: "Voice & WhatsApp Agent",
        icon: "bot",
        category: "AI Agent",
        businessImpact: "Handles calls & chats simultaneously with < 350ms natural tone.",
        description: "Conversational front desk answering questions, pricing, and company FAQs.",
        metrics: [{ label: "Latency", value: "320ms" }, { label: "Concurrency", value: "Unlimited" }],
        x: 230,
        y: 190,
      },
      {
        id: "g3",
        stepNumber: "03",
        label: "Lead Qualification",
        sublabel: "Intent & Fit Assessment",
        icon: "filter",
        category: "AI Agent",
        businessImpact: "Prioritises ready-to-buy prospects in real-time.",
        description: "Verifies caller requirements and budget naturally during conversation.",
        metrics: [{ label: "Accuracy", value: "98.2%" }, { label: "Routing", value: "Instant" }],
        x: 420,
        y: 190,
      },
      {
        id: "g4",
        stepNumber: "04",
        label: "Missed-Call Recovery",
        sublabel: "Instant SMS/Chat Triage",
        icon: "phone-forwarded",
        category: "Recovery",
        businessImpact: "Recovers 64% of dropped or after-hours calls immediately.",
        description: "Sends an immediate text to dropped calls to continue triage over WhatsApp.",
        metrics: [{ label: "Recovery", value: "64%" }, { label: "Trigger", value: "< 10s" }],
        x: 620,
        y: 290,
      },
      {
        id: "g5",
        stepNumber: "05",
        label: "Intelligent Booking",
        sublabel: "Conversational Slots",
        icon: "calendar",
        category: "Booking",
        businessImpact: "Negotiates mutual times naturally without sending raw links.",
        description: "Finds calendar availability dynamically during voice or WhatsApp chats.",
        metrics: [{ label: "Conv. Rate", value: "+48%" }, { label: "Friction", value: "Zero Links" }],
        x: 620,
        y: 90,
      },
      {
        id: "g6",
        stepNumber: "06",
        label: "AI No-Show Recovery",
        sublabel: "Voice & Text Reminders",
        icon: "shield",
        category: "Recovery",
        businessImpact: "Guarantees attendance and re-books cancellations automatically.",
        description: "Multi-touch reminder sequences on WhatsApp/SMS with instant re-booking.",
        metrics: [{ label: "No-Show Rate", value: "< 7%" }, { label: "Re-booking", value: "48%" }],
        x: 820,
        y: 190,
      },
      {
        id: "g7",
        stepNumber: "07",
        label: "Dashboard & Handover",
        sublabel: "Transcript & CRM Sync",
        icon: "user-check",
        category: "Booking",
        businessImpact: "Closer gets full call recording and AI executive summary.",
        description: "Logs call transcript, objection notes, and alerts sales team in Slack.",
        metrics: [{ label: "CRM Sync", value: "Instant" }, { label: "Summary", value: "AI Briefing" }],
        x: 1010,
        y: 190,
      },
    ],
    connections: [
      { from: "g1", to: "g2" },
      { from: "g2", to: "g3" },
      { from: "g3", to: "g5" },
      { from: "g3", to: "g4", dashed: true },
      { from: "g4", to: "g6" },
      { from: "g5", to: "g6" },
      { from: "g6", to: "g7" },
    ],
  },

  scale: {
    id: "scale",
    badge: "SYSTEM 03 · SCALE",
    name: "AI Growth Intelligence",
    tagline: "Autonomous engine with cold CRM lead reactivation & conversion insights",
    nodes: [
      {
        id: "c1",
        stepNumber: "01",
        label: "Omnichannel Capture",
        sublabel: "Enterprise Ingestion",
        icon: "layers",
        category: "Capture",
        businessImpact: "Centralises all marketing, phone, and messaging leads into one stream.",
        description: "Ingests web traffic, paid campaigns, WhatsApp, and phone calls at scale.",
        metrics: [{ label: "Ingestion", value: "< 1s" }, { label: "Channels", value: "All Sources" }],
        x: 40,
        y: 190,
      },
      {
        id: "c2",
        stepNumber: "02",
        label: "AI Receptionist",
        sublabel: "Enterprise Triage",
        icon: "bot",
        category: "AI Agent",
        businessImpact: "Custom objection handling tuned to high-ticket B2B service buyers.",
        description: "Enterprise front desk with multi-tier qualification and company knowledge.",
        metrics: [{ label: "Accuracy", value: "99.1%" }, { label: "Availability", value: "24/7" }],
        x: 230,
        y: 190,
      },
      {
        id: "c3",
        stepNumber: "03",
        label: "Booking & No-Show",
        sublabel: "Attendance Guarantee",
        icon: "calendar",
        category: "Booking",
        businessImpact: "Maximises sales rep utilization with verified, committed meetings.",
        description: "Automated booking paired with multi-channel attendance recovery cadences.",
        metrics: [{ label: "Show-Up Rate", value: "94%+" }, { label: "Cadence", value: "3-Touch" }],
        x: 430,
        y: 90,
      },
      {
        id: "c4",
        stepNumber: "04",
        label: "AI Lead Reactivation",
        sublabel: "Wakes Dormant Leads",
        icon: "refresh-cw",
        category: "Recovery",
        businessImpact: "Re-opens closed/lost CRM opportunities without ad spend.",
        description: "Engages cold contacts from 30-180 days ago with natural re-connect offers.",
        metrics: [{ label: "Reactivated", value: "14-19%" }, { label: "Ad Cost", value: "$0" }],
        x: 430,
        y: 290,
      },
      {
        id: "c5",
        stepNumber: "05",
        label: "Conversation Insights",
        sublabel: "Objection Mining",
        icon: "pie-chart",
        category: "Insights",
        businessImpact: "Reveals exact buyer hesitations and reasons for lost deals.",
        description: "Analyses 100% of customer interactions to extract patterns and competitor trends.",
        metrics: [{ label: "Coverage", value: "100% Calls" }, { label: "Reports", value: "Weekly" }],
        x: 680,
        y: 190,
      },
      {
        id: "c6",
        stepNumber: "06",
        label: "Conversion Tuning",
        sublabel: "Autonomous Loop",
        icon: "trending-up",
        category: "Insights",
        businessImpact: "Continuously lifts meeting booking and close rates automatically.",
        description: "Optimises response prompts, follow-up timing, and recovery cadences automatically.",
        metrics: [{ label: "Pipeline Lift", value: "+38%" }, { label: "Optimization", value: "Continuous" }],
        x: 920,
        y: 190,
      },
    ],
    connections: [
      { from: "c1", to: "c2" },
      { from: "c2", to: "c3" },
      { from: "c2", to: "c4", dashed: true },
      { from: "c3", to: "c5" },
      { from: "c4", to: "c5" },
      { from: "c5", to: "c6" },
    ],
  },
};

function VideoDashboardSection({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowType>("growth");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [selectedNodeId, setSelectedNodeId] = useState<string>("g2");
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const currentWf = WORKFLOWS[activeWorkflow];
  const nodeCount = currentWf.nodes.length;

  // Auto-play loop advancing through nodes sequentially
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => {
        const next = prev >= nodeCount - 1 ? 0 : prev + 1;
        const nextNode = currentWf.nodes[next];
        if (nextNode) setSelectedNodeId(nextNode.id);
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nodeCount, currentWf]);

  const handleSwitchWorkflow = (type: WorkflowType) => {
    setActiveWorkflow(type);
    setActiveStepIndex(0);
    const firstNode = WORKFLOWS[type].nodes[0];
    if (firstNode) setSelectedNodeId(firstNode.id);
    if (canvasContainerRef.current) {
      canvasContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const selectedNode = useMemo(() => {
    return currentWf.nodes.find((n) => n.id === selectedNodeId) || currentWf.nodes[0]!;
  }, [currentWf, selectedNodeId]);

  // Center active or selected node in canvas when stepping through on mobile/smaller screens
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;
    const node = currentWf.nodes.find((n) => n.id === selectedNodeId) || currentWf.nodes[activeStepIndex];
    if (node && container.scrollWidth > container.clientWidth) {
      const scale = zoomLevel / 100;
      const nodeCenterX = (node.x + 77) * scale;
      const targetScroll = nodeCenterX - container.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  }, [selectedNodeId, activeStepIndex, activeWorkflow, zoomLevel]);

  const renderNodeIcon = (type: string) => {
    switch (type) {
      case "globe":
        return <Globe className="w-4 h-4 text-purple-600" />;
      case "zap":
        return <Zap className="w-4 h-4 text-amber-500" />;
      case "filter":
        return <Search className="w-4 h-4 text-blue-600" />;
      case "mail":
        return <MessageSquare className="w-4 h-4 text-purple-600" />;
      case "calendar":
        return <Calendar className="w-4 h-4 text-emerald-600" />;
      case "shield":
        return <CheckCircle2 className="w-4 h-4 text-indigo-600" />;
      case "user-check":
        return <UserCheck className="w-4 h-4 text-emerald-600" />;
      case "phone-incoming":
        return <PhoneCall className="w-4 h-4 text-purple-600" />;
      case "bot":
        return <Bot className="w-4 h-4 text-purple-600" />;
      case "phone-forwarded":
        return <RotateCcw className="w-4 h-4 text-amber-600" />;
      case "layers":
        return <Layers className="w-4 h-4 text-blue-600" />;
      case "refresh-cw":
        return <RotateCcw className="w-4 h-4 text-purple-600" />;
      case "pie-chart":
        return <BarChart3 className="w-4 h-4 text-indigo-600" />;
      case "trending-up":
        return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-purple-600" />;
    }
  };

  return (
    <section id="demo" className="px-3 sm:px-6 py-14 md:px-8 md:py-24 bg-[#faf8f5] text-slate-900 overflow-hidden relative">
      <div id="dashboard" className="sr-only" />
      {/* Section Header */}
      <div className="max-w-5xl mx-auto mb-8 sm:mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-purple-800 text-xs font-mono uppercase tracking-widest font-semibold mb-3">
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
          Interactive System Demo
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-900 font-display">
          How Buildicy&apos;s AI Systems Work &amp; Help Your Business
        </h2>
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
          Select a package to see how enquiries are captured, qualified, and booked on autopilot.
        </p>

        {/* Workflow Switcher Tabs: Starter, Growth, Scale */}
        <div className="mt-6 sm:mt-8 inline-flex flex-wrap items-center justify-center p-1 rounded-2xl bg-white border border-slate-200 shadow-sm gap-1 max-w-full">
          {(["starter", "growth", "scale"] as const).map((type) => {
            const wf = WORKFLOWS[type];
            const isSelected = activeWorkflow === type;
            return (
              <button
                key={type}
                onClick={() => handleSwitchWorkflow(type)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white" : "bg-slate-400"}`} />
                <span>{wf.name}</span>
                {type === "growth" && (
                  <span className={`text-[9px] uppercase font-mono px-1 py-0.2 rounded font-bold ${
                    isSelected ? "bg-purple-700 text-white" : "bg-purple-100 text-purple-700"
                  }`}>
                    Popular
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main n8n Workflow Studio Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col">
        {/* Canvas Top Bar */}
        <div className="px-4 sm:px-5 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50 animate-pulse" />
            <span className="font-semibold text-slate-900 font-mono text-xs truncate max-w-[170px] sm:max-w-none">
              buildicy_{activeWorkflow}_workflow.n8n
            </span>
            <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-mono font-medium text-[10px] hidden sm:inline-block">
              {currentWf.badge}
            </span>
          </div>

          {/* Controls: Play/Pause, Reset, and Zoom */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsAutoPlaying((p) => !p)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-xl font-medium flex items-center gap-1.5 transition-all text-xs cursor-pointer ${
                isAutoPlaying
                  ? "bg-slate-200/80 text-slate-700 hover:bg-slate-300/80"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isAutoPlaying ? "Pause" : "Resume"}</span>
            </button>
            <button
              onClick={() => {
                setActiveStepIndex(0);
                const firstNode = currentWf.nodes[0];
                if (firstNode) setSelectedNodeId(firstNode.id);
              }}
              title="Restart Workflow"
              className="p-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Quick Zoom on Mobile & Desktop */}
            <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden p-0.5">
              <button
                onClick={() => setZoomLevel((z) => Math.max(z - 15, 50))}
                className="w-6 h-6 flex items-center justify-center hover:bg-slate-100 text-slate-700 text-xs font-mono font-bold"
                title="Zoom Out"
              >
                −
              </button>
              <span className="px-1 text-[11px] font-mono text-slate-600 min-w-[32px] text-center">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(z + 15, 120))}
                className="w-6 h-6 flex items-center justify-center hover:bg-slate-100 text-slate-700 text-xs font-mono font-bold"
                title="Zoom In"
              >
                +
              </button>
              <button
                onClick={() => setZoomLevel(zoomLevel === 100 ? 55 : 100)}
                className="px-1.5 h-6 flex items-center justify-center hover:bg-slate-100 text-purple-700 font-mono text-[10px] font-semibold border-l border-slate-200"
                title="Toggle Fit / 100%"
              >
                {zoomLevel === 100 ? "Fit" : "100%"}
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE 2D WORKFLOW CANVAS (Used for BOTH Mobile & Desktop)
            ========================================================================= */}
        <div
          ref={canvasContainerRef}
          className="relative w-full h-[450px] sm:h-[480px] bg-[#faf8f5] overflow-x-auto overflow-y-hidden select-none cursor-grab active:cursor-grabbing touch-auto overscroll-x-contain"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1.25px, transparent 1.25px)",
            backgroundSize: "24px 24px",
            WebkitOverflowScrolling: "touch",
            overscrollBehaviorX: "contain",
          }}
        >
          {/* Mobile Drag / Swipe Guidance Pill */}
          <div className="md:hidden absolute top-3 right-3 z-20 pointer-events-none px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur text-white text-[10px] font-mono flex items-center gap-1.5 shadow-md">
            <span>👈 Swipe canvas or tap nodes 👉</span>
          </div>

          <div
            className="relative min-w-[1220px] h-[450px] sm:h-[480px] transition-transform duration-300 origin-top-left"
            style={{
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: "top left",
            }}
          >
            {/* SVG Dynamic Connecting Wires */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <filter id="wireGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {currentWf.connections.map((conn, idx) => {
                const fromNode = currentWf.nodes.find((n) => n.id === conn.from);
                const toNode = currentWf.nodes.find((n) => n.id === conn.to);
                if (!fromNode || !toNode) return null;

                // Card dimensions: 155px width, 110px height. Ports are vertically centered at y + 55px.
                const NODE_WIDTH = 155;
                const PORT_OFFSET_Y = 55;

                const startX = fromNode.x + NODE_WIDTH;
                const startY = fromNode.y + PORT_OFFSET_Y;
                const endX = toNode.x;
                const endY = toNode.y + PORT_OFFSET_Y;

                const dx = endX - startX;
                const curvature = Math.max(dx * 0.5, 20);
                const pathD = `M ${startX} ${startY} C ${startX + curvature} ${startY}, ${endX - curvature} ${endY}, ${endX} ${endY}`;

                const fromIndex = currentWf.nodes.findIndex((n) => n.id === conn.from);
                const isWireCompleted = activeStepIndex > fromIndex;
                const isCurrentWire = activeStepIndex === fromIndex;
                const isWireActive = isWireCompleted || isCurrentWire;

                return (
                  <g key={`${conn.from}-${conn.to}-${idx}`}>
                    <path
                      d={pathD}
                      fill="none"
                      stroke={isWireActive ? "#7c3aed" : "#cbd5e1"}
                      strokeWidth={isWireActive ? "2.5" : "1.8"}
                      strokeDasharray={conn.dashed ? "4 4" : "none"}
                      className="transition-colors duration-500"
                    />

                    {isCurrentWire && (
                      <circle r="4" fill="#7c3aed" filter="url(#wireGlow)">
                        <animateMotion path={pathD} dur="1.2s" repeatCount="indefinite" />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Workflow Step Nodes */}
            {currentWf.nodes.map((node, index) => {
              const isNodeActive = activeStepIndex === index;
              const isNodeCompleted = activeStepIndex > index;
              const isSelected = selectedNodeId === node.id;

              const hasIncoming = currentWf.connections.some((c) => c.to === node.id);
              const hasOutgoing = currentWf.connections.some((c) => c.from === node.id);

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  style={{ left: `${node.x}px`, top: `${node.y}px` }}
                  className={`absolute w-[155px] h-[110px] rounded-2xl bg-white border cursor-pointer transition-all duration-300 z-10 p-3 shadow-sm hover:shadow-md flex flex-col justify-between ${
                    isSelected
                      ? "ring-2 ring-purple-600 border-purple-500 shadow-purple-500/20 shadow-lg"
                      : isNodeActive
                      ? "border-purple-500 shadow-purple-500/20 shadow-lg ring-1 ring-purple-400"
                      : isNodeCompleted
                      ? "border-purple-200 bg-purple-50/20"
                      : "border-slate-200"
                  }`}
                >
                  {/* Left (Input) Port Circle */}
                  {hasIncoming && (
                    <span
                      className={`w-2.5 h-2.5 rounded-full bg-white border-2 absolute -left-[5px] top-1/2 -translate-y-1/2 z-20 transition-colors ${
                        isNodeActive || isNodeCompleted
                          ? "border-purple-600 bg-purple-50 ring-2 ring-purple-100"
                          : "border-slate-300"
                      }`}
                    />
                  )}

                  {/* Right (Output) Port Circle */}
                  {hasOutgoing && (
                    <span
                      className={`w-2.5 h-2.5 rounded-full bg-white border-2 absolute -right-[5px] top-1/2 -translate-y-1/2 z-20 transition-colors ${
                        isNodeActive || isNodeCompleted
                          ? "border-purple-600 bg-purple-50 ring-2 ring-purple-100"
                          : "border-slate-300"
                      }`}
                    />
                  )}

                  {/* Node Header & Details */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className={`w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          isNodeActive
                            ? "bg-purple-600 text-white shadow-sm"
                            : isNodeCompleted
                            ? "bg-purple-100 text-purple-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {renderNodeIcon(node.icon)}
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[9px] font-mono font-bold uppercase text-purple-700 block leading-tight">
                          Step {node.stepNumber}
                        </span>
                        <span className="block text-xs font-bold text-slate-900 leading-tight truncate">
                          {node.label}
                        </span>
                      </div>
                    </div>

                    <p className="text-[10px] text-slate-500 leading-snug line-clamp-1">
                      {node.sublabel}
                    </p>
                  </div>

                  {/* Node Footer: Category & Execution Status */}
                  <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono">
                    <span className="text-slate-400 truncate max-w-[70px]">{node.category}</span>
                    {isNodeActive ? (
                      <span className="text-purple-600 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-ping" />
                        Active
                      </span>
                    ) : isNodeCompleted ? (
                      <span className="text-emerald-600 font-semibold">✓ Done</span>
                    ) : (
                      <span className="text-slate-400">Idle</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Center Execution Status */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-3 sm:bottom-4 z-20 w-max max-w-[90%]">
            <button
              onClick={() => {
                setActiveStepIndex(0);
                setIsAutoPlaying(true);
              }}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-mono text-[11px] sm:text-xs font-semibold shadow-xl shadow-slate-900/20 flex items-center gap-2 border border-slate-700 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
                ▶
              </div>
              <span>Simulate Lead Execution</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-800 text-purple-300 text-[10px]">
                {activeStepIndex + 1}/{nodeCount}
              </span>
            </button>
          </div>
        </div>

        {/* Minimalist Lower Information Panel */}
        <div className="border-t border-slate-200 bg-white px-4 py-3 sm:px-6 sm:py-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">
                  Step {selectedNode.stepNumber} · {selectedNode.category}
                </span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  {currentWf.name}
                </span>

                {/* Inline Minimalist Metrics */}
                <div className="flex items-center gap-1.5 ml-auto sm:ml-2">
                  {selectedNode.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
                    >
                      <span className="text-slate-400">{metric.label}:</span>
                      <strong className="text-slate-900 font-bold">{metric.value}</strong>
                    </span>
                  ))}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {selectedNode.label}
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                {selectedNode.description}
              </p>

              {/* Clean Single-Line Business Impact */}
              <div className="mt-1.5 flex items-center gap-1.5 text-xs text-purple-900 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
                <span className="text-slate-400 text-[10px] uppercase font-mono font-semibold">Impact:</span>
                <span>{selectedNode.businessImpact}</span>
              </div>
            </div>

            {/* Sleek Minimalist CTA */}
            <div className="pt-1 md:pt-0 shrink-0">
              <button
                onClick={onOpenAudit}
                className="w-full md:w-auto px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs shadow-sm hover:shadow-purple-600/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Deploy This System</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   THE THREE AI GROWTH SYSTEMS (Minimalist 10-Row Matrix & Mobile Plan Card)
   ========================================================================= */

const INDUSTRIES = [
  "Dental & Healthcare",
  "Real Estate",
  "Education",
  "Coaching & Consulting",
  "Hospitality",
  "Other",
] as const;

type IndustryType = (typeof INDUSTRIES)[number];

interface IndustryTierData {
  tagline: string;
  features: string[];
}

interface IndustryData {
  starter: IndustryTierData;
  growth: IndustryTierData;
  scale: IndustryTierData;
}

const INDUSTRY_DATA: Record<IndustryType, IndustryData> = {
  "Dental & Healthcare": {
    starter: {
      tagline: "For patient appointment requests & treatment enquiry capture",
      features: [
        "Patient intake forms & instant emergency response",
        "Treatment qualification & medical urgency scoring",
        "Automated dental slot booking & clinic calendar sync",
        "Automated appointment reminders cutting clinic no-shows",
        "Front-desk patient dashboard & reception handover",
        "Instant WhatsApp alert to clinic coordinator",
      ],
    },
    growth: {
      tagline: "24/7 AI Clinic Receptionist for emergency calls & WhatsApp patient booking",
      features: [
        "Everything in Starter, plus:",
        "24/7 AI Clinic Receptionist (Emergency triage & FAQs)",
        "Voice AI phone agent (Inbound appointments & inquiries)",
        "2-Way WhatsApp patient consultation & rescheduling",
        "Missed-call recovery (Instant SMS to dropped callers)",
        "2-Way CRM & EMR integration (Dentrix, Practo, HubSpot)",
        "Staff alerts with patient summary & call recording",
      ],
    },
    scale: {
      tagline: "Full clinic growth engine with dormant patient recall & multi-doctor routing",
      features: [
        "Everything in Growth, plus:",
        "AI Patient Recall (wakes dormant 6-month checkup lists)",
        "AI Conversation Insights (treatment hesitation mining)",
        "Treatment plan conversion loop optimization",
        "Multi-doctor & multi-branch round-robin calendar routing",
        "Omnichannel patient capture across web, ads & phone",
        "Dedicated clinic systems architect & priority SLA",
      ],
    },
  },

  "Real Estate": {
    starter: {
      tagline: "Capture property buyers & schedule verified site visits on autopilot",
      features: [
        "Inbound property enquiry capture & instant lead response",
        "BANT qualification (Budget, Locality, Possession timeline)",
        "Automated site visit booking synced with broker calendar",
        "Instant property brochure delivery via SMS & WhatsApp",
        "Automated viewing reminders cutting client no-shows",
        "Lead scoring dashboard & sales agent handover",
      ],
    },
    growth: {
      tagline: "24/7 AI Real Estate Desk for instant ad call response & WhatsApp viewing booking",
      features: [
        "Everything in Starter, plus:",
        "24/7 AI Property Desk (Answers pricing, floorplans & specs)",
        "Voice AI answering inbound buyer calls in < 350ms",
        "2-Way WhatsApp property consultant & slot booking",
        "Missed-call recovery (Call-to-text when agents are touring)",
        "Full CRM sync (LeadSquared, Salesforce, HubSpot)",
        "Instant agent alerts with buyer budget & audio transcript",
      ],
    },
    scale: {
      tagline: "Autonomous real estate engine with cold database reactivation & buyer matching",
      features: [
        "Everything in Growth, plus:",
        "AI Database Reactivation (wakes 90-day cold buyer leads)",
        "AI Objection Mining (tracks pricing & locality hesitations)",
        "Dynamic property inventory matching & follow-up tuning",
        "Multi-agent round-robin territory & project routing",
        "Omnichannel capture across 99acres, MagicBricks, Meta & Google",
        "Dedicated real estate systems architect & priority support",
      ],
    },
  },

  "Education": {
    starter: {
      tagline: "Automated student enquiry capture & campus tour scheduling",
      features: [
        "Course enquiry intake & sub-second lead response",
        "Eligibility & intake year qualification scoring",
        "Counselor consultation & campus visit calendar booking",
        "Prospectus & fee structure delivery via email/WhatsApp",
        "Reminder cadences cutting counseling no-show rates",
        "Admissions lead dashboard & counselor handover",
      ],
    },
    growth: {
      tagline: "24/7 AI Admissions Desk for course FAQs & instant WhatsApp counseling booking",
      features: [
        "Everything in Starter, plus:",
        "24/7 AI Admissions Receptionist (Curriculum & fee FAQs)",
        "Voice AI hotline handling admission inquiries in real-time",
        "Full WhatsApp 2-way student counseling & slot scheduling",
        "Instant missed-call triage for high-volume admissions peaks",
        "Admissions CRM sync (LeadSquared, ExtraaEdge, HubSpot)",
        "Counselor alerts with student academic background summary",
      ],
    },
    scale: {
      tagline: "Complete admissions engine with past-applicant reactivation & batch conversion",
      features: [
        "Everything in Growth, plus:",
        "AI Applicant Reactivation (wakes past-cycle enquiries)",
        "AI Drop-off Analysis (pinpoints application friction points)",
        "Admission conversion loop & fee objection handling tuning",
        "Multi-counselor round-robin routing by department/course",
        "Omnichannel capture across campus ads, web & phone",
        "Dedicated education systems architect & priority SLA",
      ],
    },
  },

  "Coaching & Consulting": {
    starter: {
      tagline: "High-ticket discovery call booking & pre-qualification funnel",
      features: [
        "Inbound client application capture & instant greeting",
        "Strict budget & business revenue fit qualification",
        "Automated discovery call booking on Google Cal / Calendly",
        "Pre-call intake dossier sent to consultant before call",
        "Multi-touch reminder cadences cutting client no-shows",
        "Lead tracking dashboard & high-intent handover",
      ],
    },
    growth: {
      tagline: "24/7 AI Front Desk for inbound client calls & instant WhatsApp triage",
      features: [
        "Everything in Starter, plus:",
        "24/7 AI Client Concierge (Answers methodology & pricing FAQs)",
        "Voice AI qualifying prospective clients over phone",
        "2-Way WhatsApp consultation scheduling & vetting",
        "Missed-call recovery (Immediate WhatsApp continuation)",
        "Full 2-way CRM sync (HubSpot, GoHighLevel, Pipedrive)",
        "Slack/Email alerts with enriched client business brief",
      ],
    },
    scale: {
      tagline: "Complete advisory growth engine with cold pipeline reactivation & objection mining",
      features: [
        "Everything in Growth, plus:",
        "AI Proposal Reactivation (re-engages lost deals from 3-6 mos)",
        "AI Objection Mining (extracts hesitation patterns from sales calls)",
        "Monthly pitch & close-rate conversion optimization loop",
        "Multi-partner round-robin calendar & advisory routing",
        "Omnichannel capture across LinkedIn, YouTube, web & ads",
        "Dedicated systems architect & white-glove advisory support",
      ],
    },
  },

  "Hospitality": {
    starter: {
      tagline: "Direct reservation enquiries & private event booking funnel",
      features: [
        "Direct guest enquiry capture & instant confirmation",
        "Party size, date & dining preference qualification",
        "Table & private event calendar booking integration",
        "Instant booking confirmation via SMS & WhatsApp",
        "Automated arrival reminders cutting cancellation rates",
        "Reservation dashboard & front-of-house handover",
      ],
    },
    growth: {
      tagline: "24/7 AI Front Desk Concierge for guest calls, room FAQs & WhatsApp booking",
      features: [
        "Everything in Starter, plus:",
        "24/7 AI Front Desk Concierge (Room rates & menu FAQs)",
        "Voice AI taking phone inquiries & table reservations",
        "Full 2-way WhatsApp guest booking & concierge chat",
        "Zero missed reservation calls during peak dinner rush",
        "Integration with hotel PMS / restaurant reservation system",
        "Host alerts with VIP guest notes & special requests",
      ],
    },
    scale: {
      tagline: "Autonomous guest engine with repeat stay reactivation & occupancy optimization",
      features: [
        "Everything in Growth, plus:",
        "AI Guest Reactivation (prompts past guests with seasonal offers)",
        "AI Guest Review & Sentiment Mining (actionable feedback loops)",
        "Dynamic occupancy tuning & high-demand rate notifications",
        "Multi-property & outlet reservation routing",
        "Omnichannel capture across Google, social, web & phone",
        "Dedicated hospitality systems architect & priority support",
      ],
    },
  },

  "Other": {
    starter: {
      tagline: "For inbound web enquiry capture & high-intent meeting booking",
      features: [
        "AI enquiry capture & instant sub-second responses",
        "Lead qualification & automated ICP scoring",
        "Personalised follow-ups & FAQ objection handling",
        "Appointment booking & calendar integration (Cal/Google)",
        "Automated reminders & AI No-show recovery cadences",
        "Lead dashboard & human sales rep handover",
      ],
    },
    growth: {
      tagline: "For 24/7 Voice & WhatsApp Front Desk with missed-call recovery",
      features: [
        "Everything in Starter, plus:",
        "24/7 AI Receptionist (Inbound Front Desk & FAQs)",
        "Voice AI phone calls triage & appointment booking",
        "Full AI WhatsApp conversations & conversational booking",
        "Missed-call recovery (automated call-to-text in < 10s)",
        "Full 2-way CRM sync (HubSpot, GoHighLevel, Pipedrive)",
        "Slack & team alerts with call audio transcripts",
      ],
    },
    scale: {
      tagline: "For complete autonomous revenue engine with dormant lead reactivation",
      features: [
        "Everything in Growth, plus:",
        "AI Lead Reactivation (wakes dormant CRM leads without ad spend)",
        "AI Conversation Insights (objection & market trend mining)",
        "AI Conversion Optimisation (monthly feedback loop tuning)",
        "Omnichannel capture across all digital & phone channels",
        "Custom multi-rep round-robin calendar routing",
        "Dedicated systems architect & priority SLA",
      ],
    },
  },
};

function AIGrowthSystemsPackages({
  onSelectPkg,
}: {
  onSelectPkg: (name: string, market: string) => void;
}) {
  const [market, setMarket] = useState<"india" | "intl">("india");
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>("Dental & Healthcare");
  const [mobilePlanTab, setMobilePlanTab] = useState<"starter" | "growth" | "scale">("growth");
  const isIntl = market === "intl";
  const indData = INDUSTRY_DATA[selectedIndustry];

  const starter = {
    id: "starter",
    name: "Starter — AI Funnel & Booking",
    badge: "Starter",
    systemNumber: "01",
    tagline: indData.starter.tagline,
    popular: false,
    indiaSetup: "₹35,000",
    indiaMonthly: "₹6,999/mo",
    intlSetup: "$1,500",
    intlMonthly: "$299/mo",
    cta: "Get Started",
    features: indData.starter.features,
  };

  const growth = {
    id: "growth",
    name: "Growth — AI Funnel + AI Receptionist",
    badge: "Growth",
    systemNumber: "02",
    tagline: indData.growth.tagline,
    popular: true,
    indiaSetup: "₹55,000",
    indiaMonthly: "₹12,999/mo",
    intlSetup: "$2,500",
    intlMonthly: "$499/mo",
    cta: "Book a Consultation",
    features: indData.growth.features,
  };

  const scale = {
    id: "scale",
    name: "Scale — AI Growth Intelligence",
    badge: "Scale",
    systemNumber: "03",
    tagline: indData.scale.tagline,
    popular: false,
    indiaSetup: "₹90,000",
    indiaMonthly: "₹19,999/mo",
    intlSetup: "$4,500",
    intlMonthly: "$899/mo",
    cta: "Book a Consultation",
    features: indData.scale.features,
  };

  // 12-row comparison table (each higher tier includes all features of the previous tier)
  const coreComparisonRows = [
    {
      name: "Inbound Enquiry Capture",
      desc: "Web forms vs 24/7 Calls & WhatsApp",
      starter: "Web Forms",
      growth: "Web, WhatsApp & Phone",
      scale: "Omnichannel",
    },
    {
      name: "Instant Speed-to-Lead (< 3s)",
      desc: "Sub-3-second autonomous response",
      starter: "✓",
      growth: "✓",
      scale: "✓",
    },
    {
      name: "Lead Qualification & Scoring",
      desc: "BANT fit assessment filters tire-kickers",
      starter: "✓",
      growth: "✓",
      scale: "✓",
    },
    {
      name: "Appointment Booking & Calendar Sync",
      desc: "Direct integration with Cal.com / Google Calendar",
      starter: "✓",
      growth: "✓",
      scale: "✓",
    },
    {
      name: "AI No-show Recovery",
      desc: "1-Click auto-reschedule cuts no-shows to < 8%",
      starter: "✓",
      growth: "✓",
      scale: "✓",
      highlight: true,
    },
    {
      name: "WhatsApp AI Integration",
      desc: "Lead alerts vs 2-way AI conversational booking",
      starter: "Lead Alerts",
      growth: "✓ Full 2-Way AI",
      scale: "✓ Full 2-Way AI",
    },
    {
      name: "2-Way CRM Integration",
      desc: "HubSpot, GoHighLevel, Pipedrive sync",
      starter: "✓",
      growth: "✓",
      scale: "✓",
    },
    {
      name: "AI Voice Receptionist",
      desc: "24/7 inbound voice call triage & booking in < 400ms",
      starter: "—",
      growth: "✓",
      scale: "✓",
    },
    {
      name: "Missed-Call Recovery",
      desc: "Immediate call-to-text when callers drop off",
      starter: "—",
      growth: "✓",
      scale: "✓",
    },
    {
      name: "AI Reactivation",
      desc: "Wakes cold dormant CRM leads without ad spend",
      starter: "—",
      growth: "—",
      scale: "✓",
    },
    {
      name: "AI Conversation Insights",
      desc: "Objection, drop-off & market trend mining",
      starter: "—",
      growth: "—",
      scale: "✓",
    },
    {
      name: "AI Conversion Optimisation / Intelligence",
      desc: "Monthly feedback loop & conversion rate tuning",
      starter: "—",
      growth: "—",
      scale: "✓",
    },
  ];

  const activeMobilePkg = mobilePlanTab === "starter" ? starter : mobilePlanTab === "growth" ? growth : scale;

  return (
    <section
      id="systems"
      className="px-4 py-16 sm:px-6 md:px-12 md:py-24 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Header with Title and Currency Toggle */}
        <div className="reveal-blur flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-2">
              PRICING &amp; PACKAGES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Simple, transparent pricing.
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              One-time setup fee plus recurring monthly subscription. No hidden fees.
            </p>
          </div>

          {/* Currency Toggle Pill - International USD is first by default */}
          <div className="shrink-0">
            <div className="inline-flex items-center p-1 rounded-full bg-white border border-slate-200 shadow-2xs">
              <button
                type="button"
                onClick={() => setMarket("intl")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  market === "intl"
                    ? "bg-purple-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                International — USD ($)
              </button>
              <button
                type="button"
                onClick={() => setMarket("india")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  market === "india"
                    ? "bg-purple-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                India — INR (₹)
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Explanations */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 mb-8 pb-6 border-b border-slate-200/80 text-xs">
          <div className="flex items-start sm:items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5 sm:mt-0" />
            <p className="text-slate-600 leading-relaxed">
              <span className="font-mono font-bold uppercase tracking-wider text-slate-900 mr-1.5">
                Setup Fee:
              </span>
              One-time implementation, configuration and onboarding charge.
            </p>
          </div>
          <span className="hidden md:inline text-slate-300">/</span>
          <div className="flex items-start sm:items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5 sm:mt-0" />
            <p className="text-slate-600 leading-relaxed">
              <span className="font-mono font-bold uppercase tracking-wider text-slate-900 mr-1.5">
                Monthly Subscription:
              </span>
              Recurring fee for platform access and ongoing services.
            </p>
          </div>
        </div>

        {/* Industry Selector */}
        <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-semibold shrink-0">
            Industry Context
          </span>
          <div className="flex sm:flex-wrap items-center gap-1.5 overflow-x-auto no-scrollbar overscroll-x-contain pb-1 sm:pb-0">
            {INDUSTRIES.map((ind) => {
              const isSelected = selectedIndustry === ind;
              return (
                <button
                  key={ind}
                  type="button"
                  onClick={() => setSelectedIndustry(ind)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap border ${
                    isSelected
                      ? "bg-slate-900 border-slate-900 text-white shadow-2xs"
                      : "bg-transparent border-slate-200/90 text-slate-600 hover:border-purple-300 hover:text-slate-900"
                  }`}
                >
                  {ind}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Packages Cards (Organized, Structured, Luxury Studio Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-8 sm:mb-10">
          {/* Card 1: Starter */}
          <div className="reveal-zoom rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  {starter.systemNumber} · ESSENTIAL
                </span>
                <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 font-medium">
                  Inbound Funnel
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                {starter.name}
              </h3>
              <p className="mt-2 text-xs text-slate-600 min-h-[36px] leading-relaxed transition-all duration-300">
                {starter.tagline}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                    {isIntl ? starter.intlSetup : starter.indiaSetup}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">setup fee</span>
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-purple-700 font-mono">
                  + {isIntl ? starter.intlMonthly : starter.indiaMonthly} monthly subscription
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                {starter.features.slice(0, 4).map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelectPkg(starter.name, market)}
              className="mt-8 w-full py-3.5 px-4 rounded-xl border border-slate-300 hover:border-purple-400 bg-white hover:bg-purple-50/50 text-slate-900 font-semibold text-xs transition-all cursor-pointer shadow-2xs"
            >
              {starter.cta} →
            </button>
          </div>

          {/* Card 2: Growth (Signature / Most Popular) */}
          <div className="reveal-zoom rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-purple-50/40 via-white to-white border-2 border-purple-600 shadow-xl shadow-purple-600/15 flex flex-col justify-between relative scale-[1.01] z-10 transition-all duration-300">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md shadow-purple-600/25 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" /> Most Popular Plan
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700">
                  {growth.systemNumber} · SIGNATURE
                </span>
                <span className="text-[10px] font-mono text-purple-700 bg-purple-100/70 px-2.5 py-0.5 rounded-full border border-purple-200/80 font-bold">
                  Full Front Desk
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                {growth.name}
              </h3>
              <p className="mt-2 text-xs text-slate-600 min-h-[36px] leading-relaxed transition-all duration-300">
                {growth.tagline}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                    {isIntl ? growth.intlSetup : growth.indiaSetup}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">setup fee</span>
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-purple-700 font-mono">
                  + {isIntl ? growth.intlMonthly : growth.indiaMonthly} monthly subscription
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="mb-3 px-3 py-1.5 rounded-xl bg-purple-100/70 border border-purple-200/70 text-[11px] font-mono font-bold text-purple-900 flex items-center gap-1.5">
                  <span className="text-purple-600">★</span>
                  <span>Everything in Starter, plus:</span>
                </div>
                <div className="space-y-3">
                  {growth.features
                    .filter((f) => !f.toLowerCase().includes("everything in starter"))
                    .slice(0, 4)
                    .map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800">
                        <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPkg(growth.name, market)}
              className="mt-8 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-purple-600/25 transition-all cursor-pointer"
            >
              {growth.cta} →
            </button>
          </div>

          {/* Card 3: Scale */}
          <div className="reveal-zoom rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  {scale.systemNumber} · AUTONOMOUS
                </span>
                <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 font-medium">
                  Enterprise Scope
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                {scale.name}
              </h3>
              <p className="mt-2 text-xs text-slate-600 min-h-[36px] leading-relaxed transition-all duration-300">
                {scale.tagline}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                    {isIntl ? scale.intlSetup : scale.indiaSetup}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">setup fee</span>
                </div>
                <div className="mt-1 text-sm font-semibold text-purple-700 font-mono">
                  + {isIntl ? scale.intlMonthly : scale.indiaMonthly} monthly subscription
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="mb-3 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-[11px] font-mono font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="text-slate-600">★</span>
                  <span>Everything in Growth, plus:</span>
                </div>
                <div className="space-y-3">
                  {scale.features
                    .filter((f) => !f.toLowerCase().includes("everything in growth"))
                    .slice(0, 4)
                    .map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPkg(scale.name, market)}
              className="mt-8 w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-purple-600 text-white font-semibold text-xs transition-colors cursor-pointer shadow-sm"
            >
              {scale.cta} →
            </button>
          </div>
        </div>

        {/* Anchor link to 12-Point Technical Comparison Matrix */}
        <div className="text-center mt-2 mb-12 sm:mb-16">
          <a
            href="#comparison-matrix"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-purple-50 border border-slate-200/90 hover:border-purple-300 text-xs font-mono font-semibold text-slate-700 hover:text-purple-700 shadow-2xs transition-all duration-200"
          >
            <span>Explore Full Technical Deliverable Matrix</span>
            <ChevronDown className="w-3.5 h-3.5 text-purple-600" />
          </a>
        </div>

        {/* =========================================================================
            MOBILE PLAN COMPARISON CARD (Shown on mobile phones < 768px for zero lag)
            ========================================================================= */}
        <div id="comparison-matrix-mobile" className="block md:hidden bg-white rounded-3xl border border-slate-200 p-5 shadow-sm scroll-mt-24">
          <div className="text-center mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 block">
              Mobile Plan Comparison
            </span>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Tap a plan to see its complete feature breakdown
            </p>
          </div>

          {/* Plan Selector Pills */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-2xl mb-5">
            <button
              type="button"
              onClick={() => setMobilePlanTab("starter")}
              className={`py-2.5 min-h-[44px] flex items-center justify-center rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                mobilePlanTab === "starter" ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600"
              }`}
            >
              Starter
            </button>
            <button
              type="button"
              onClick={() => setMobilePlanTab("growth")}
              className={`py-2.5 min-h-[44px] flex items-center justify-center rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                mobilePlanTab === "growth" ? "bg-purple-600 text-white shadow-xs font-bold" : "text-slate-600"
              }`}
            >
              Growth ★
            </button>
            <button
              type="button"
              onClick={() => setMobilePlanTab("scale")}
              className={`py-2.5 min-h-[44px] flex items-center justify-center rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                mobilePlanTab === "scale" ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600"
              }`}
            >
              Scale
            </button>
          </div>

          {/* Active Mobile Plan Summary Card */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono uppercase text-purple-700 font-bold">
                {activeMobilePkg.badge}
              </span>
              <span className="text-xs font-bold font-mono text-slate-900">
                {isIntl ? activeMobilePkg.intlSetup : activeMobilePkg.indiaSetup}
              </span>
            </div>
            <h3 className="text-sm font-bold text-slate-900">
              {activeMobilePkg.name}
            </h3>
            <div className="text-xs font-mono text-purple-700 mt-0.5">
              + {isIntl ? activeMobilePkg.intlMonthly : activeMobilePkg.indiaMonthly}
            </div>
          </div>

          {/* Clean Checklist of the 10 Core Features */}
          <div className="space-y-2.5 divide-y divide-slate-100">
            {coreComparisonRows.map((row, idx) => {
              const val = row[mobilePlanTab];
              const isExcluded = val === "—";
              const isTick = val === "✓";

              return (
                <div key={idx} className="pt-2 flex items-start justify-between gap-3 text-xs">
                  <div>
                    <span className="font-semibold text-slate-800 block leading-tight">
                      {row.name}
                    </span>
                    <span className="text-[10px] text-slate-500 leading-snug">
                      {row.desc}
                    </span>
                  </div>

                  {isExcluded ? (
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-500 shrink-0">
                      <X className="w-3 h-3 stroke-[3]" />
                    </span>
                  ) : isTick ? (
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-800 text-[10px] font-mono font-semibold shrink-0">
                      {val.replace(/^✓\s*/, "")}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={() => onSelectPkg(activeMobilePkg.name, market)}
            className="mt-6 w-full py-3 rounded-xl bg-purple-600 text-white font-semibold text-xs shadow-md shadow-purple-600/20 cursor-pointer"
          >
            {activeMobilePkg.cta} →
          </button>
        </div>

        {/* =========================================================================
            DESKTOP 10-ROW COMPARISON MATRIX (Shown on screens >= 768px)
            Improvised with luxury purple accents, enhanced column hierarchy & crisp badges
            ========================================================================= */}
        <div id="comparison-matrix" className="hidden md:block bg-white rounded-3xl border border-purple-200/70 overflow-hidden shadow-lg shadow-purple-500/5 scroll-mt-24">
          <div className="px-6 py-4.5 bg-gradient-to-r from-slate-50 via-purple-50/40 to-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 shadow-sm shadow-purple-500/50 animate-pulse" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                  Detailed Feature Comparison
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Core deliverables across Starter, Growth, and Scale architectures
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-xs font-mono">
              <span className="text-slate-600 text-[11px]">Active Industry:</span>
              <strong className="text-purple-900 font-bold">{selectedIndustry}</strong>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="py-4 px-6 font-bold text-slate-800 w-[38%]">Feature</th>
                  <th className="py-4 px-4 font-bold text-slate-800 text-center w-[20%]">Starter</th>
                  <th className="py-4 px-4 font-bold text-purple-950 bg-purple-100/40 text-center w-[22%] border-x border-purple-200/60">
                    <div className="inline-flex items-center justify-center gap-1.5">
                      <span>Growth</span>
                      <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[9px] font-mono font-bold uppercase tracking-wider shadow-xs">
                        Popular
                      </span>
                    </div>
                  </th>
                  <th className="py-4 px-4 font-bold text-slate-800 text-center w-[20%]">Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {coreComparisonRows.map((row, rowIdx) => {
                  const renderCell = (val: string, isPop: boolean = false) => {
                    if (val === "—") {
                      return (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-500 mx-auto" title="Not Included">
                          <X className="w-3 h-3 stroke-[3]" />
                        </span>
                      );
                    }
                    if (val === "✓") {
                      return (
                        <span
                          className={`inline-flex items-center justify-center rounded-full mx-auto ${
                            isPop
                              ? "w-6 h-6 bg-purple-600 text-white shadow-xs shadow-purple-600/30"
                              : "w-5 h-5 bg-emerald-50 border border-emerald-200 text-emerald-600"
                          }`}
                          title="Included"
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                      );
                    }
                    if (val.startsWith("✓")) {
                      const label = val.replace(/^✓\s*/, "");
                      return (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 text-[11px] font-semibold border border-purple-200/80 mx-auto shadow-2xs">
                          <Check className="w-3 h-3 text-purple-600 stroke-[3]" />
                          <span>{label}</span>
                        </span>
                      );
                    }
                    return (
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-mono font-medium border border-slate-200/70 mx-auto">
                        {val}
                      </span>
                    );
                  };

                  return (
                    <tr key={rowIdx} className={`hover:bg-purple-50/20 transition-colors ${(row as any).highlight ? "bg-purple-50/30" : ""}`}>
                      <td className="py-3.5 px-6">
                        <div className="font-semibold text-slate-900 text-xs">
                          {row.name}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          {row.desc}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        {renderCell(row.starter)}
                      </td>
                      <td className="py-3.5 px-4 text-center bg-purple-50/40 border-x border-purple-100/80">
                        {renderCell(row.growth, true)}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        {renderCell(row.scale)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   FEATURED SYSTEMS & CLIENT WORK (3D Circular Carousel)
   ========================================================================= */

interface FeaturedProject {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  year: string;
  description: string;
  outcome: string;
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "growzo",
    src: "/thumbnails/growzo.jpg",
    alt: "GrowZO AI Voice Agent",
    title: "GrowZO",
    subtitle: "AI Voice & Cold Calling Agent",
    category: "AI Voice",
    badge: "Live Voice Agent",
    year: "2025",
    description: "Autonomous AI voice agent handling outbound calls, live qualification, and calendar booking 24/7.",
    outcome: "10× outreach volume • −80% manual sales effort",
  },
  {
    id: "bizbrain",
    src: "/thumbnails/bizbrain.jpg",
    alt: "BizBrain Autonomous CRM",
    title: "BizBrain",
    subtitle: "Autonomous Pipeline CRM",
    category: "AI CRM",
    badge: "Production CRM",
    year: "2025",
    description: "Centralized AI CRM unifying omnichannel inquiries, lead scoring, and automated deal pipeline routing.",
    outcome: "−60% manual CRM work",
  },
  {
    id: "markeee",
    src: "/thumbnails/markeee.jpg",
    alt: "Markeee Lead Funnel",
    title: "Markeee",
    subtitle: "Inbound Lead Qualification Funnel",
    category: "Lead Inbound",
    badge: "Inbound Engine",
    year: "2025",
    description: "Multi-channel inbound marketing and automated lead capture funnel converting visits to booked calls.",
    outcome: "3× faster lead response",
  },
  {
    id: "clientsync-os",
    src: "/thumbnails/clientsync-os.jpg",
    alt: "ClientSync Operations OS",
    title: "ClientSync OS",
    subtitle: "Client Onboarding & Operations OS",
    category: "Operations",
    badge: "Client OS",
    year: "2024",
    description: "Automated onboarding, project milestones, and client communication system eliminating operational bottlenecks.",
    outcome: "−50% fragmented workflows",
  },
  {
    id: "vibestay",
    src: "/thumbnails/vibestay.jpg",
    alt: "VibeStay Direct Booking Engine",
    title: "VibeStay",
    subtitle: "Direct Booking & Guest Engine",
    category: "Hospitality",
    badge: "Booking Platform",
    year: "2025",
    description: "High-conversion direct booking engine with instant room inventory reservation and guest messaging.",
    outcome: "+65% direct booking engagement",
  },
  {
    id: "tuition-os",
    src: "/thumbnails/tuition-os.jpg",
    alt: "Tuition OS Academy System",
    title: "Tuition OS",
    subtitle: "Academy Operations & Inquiries System",
    category: "Education",
    badge: "Academy SaaS",
    year: "2024",
    description: "Multi-branch platform automating student enrollment inquiries, attendance, and tuition collections.",
    outcome: "−65% administrative manual workload",
  },
];

function FeaturedProjectsSection({
  onOpenAudit,
}: {
  onOpenAudit: (pkgName?: string) => void;
}) {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = orig;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="px-6 py-16 md:px-12 md:py-24 bg-[#faf8f5] text-slate-900 border-t border-slate-200 overflow-hidden relative"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Minimalist Section Header */}
        <div className="reveal-blur text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-3">Client Systems</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Systems We've Deployed.
          </h2>
          <p className="mt-2 text-slate-500 text-xs sm:text-sm">
            Live AI agents and autonomous platforms built for real businesses.
          </p>
        </div>

        {/* 3D Circular Carousel Container */}
        <div className="w-full h-[460px] sm:h-[550px] md:h-[580px] relative overflow-hidden flex items-center justify-center select-none touch-pan-y">
          <CircularCarousel
            items={FEATURED_PROJECTS}
            preset="cylinder"
            intro="rise"
            cardWidth={isDesktop ? 260 : 210}
            aspectRatio={1.35}
            speed={11}
            captions={true}
            draggable={true}
            fadeColor="#faf8f5"
            innerShade={0.12}
            onItemClick={(item) => setSelectedProject(item as FeaturedProject)}
          />
        </div>
      </div>

      {/* Case Preview Modal */}
      {isClient &&
        selectedProject &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3.5 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-lg max-h-[88dvh] overflow-y-auto rounded-3xl bg-white border border-slate-200 text-slate-900 shadow-2xl p-5 sm:p-7 no-scrollbar my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer text-sm font-bold z-10"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-200">
                <img
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono">
                  <span>{selectedProject.badge}</span>
                  <span>•</span>
                  <span>{selectedProject.year}</span>
                </div>
              </div>

              <div className="mb-3">
                <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block mb-1.5">
                  {selectedProject.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-light leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="my-3.5 p-3 rounded-2xl bg-[#faf8f5] border border-slate-200 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Documented Studio Outcome
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-900">
                    {selectedProject.outcome}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    const label = selectedProject.title;
                    setSelectedProject(null);
                    onOpenAudit(label);
                  }}
                  className="flex-1 rounded-full bg-purple-600 hover:bg-purple-700 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Deploy System Like {selectedProject.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full bg-slate-100 hover:bg-slate-200 py-3 px-5 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

/* =========================================================================
   DEPLOYMENT PROTOCOL (Minimalist Split: Left Headline & Arrow, Right Folder)
   ========================================================================= */

function DeploymentProtocol({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [selectedDeliverable, setSelectedDeliverable] = useState<string | null>(null);

  const DELIVERABLES = [
    "01 • System Leakage Audit",
    "02 • Conversation Blueprint",
    "03 • WhatsApp Business API",
    "04 • AI Voice Concierge",
    "05 • HubSpot & CRM Sync",
    "06 • Smart Calendar Slotting",
    "07 • Synthetic Stress Testing",
    "08 • Zero-Downtime Launch",
  ];

  const handleSelectPill = (val: string) => {
    setSelectedDeliverable(val);
    toast.success("Deployment Module Selected", {
      description: `${val} calibrated and staged for zero-downtime cutover.`,
    });
  };

  return (
    <section
      id="protocol"
      className="px-6 py-14 md:px-12 md:py-20 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="reveal-left lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-4">Deployment Protocol</span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              From Audit to Live System.
            </h2>

            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
              8 modules. 14 days. Zero downtime. We audit your pipeline, build the system, stress-test it, and hand it over fully running.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-purple-700 text-white text-xs font-mono font-semibold transition-all shadow-md group cursor-pointer"
              >
                <span>Book a Free AI Growth Audit</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
              <span className="text-xs text-slate-500 font-mono">14-Day Delivery SLA</span>
            </div>
          </div>

          {/* Right Column: FolderFloat on both mobile and desktop */}
          <div className="reveal-right lg:col-span-7 flex flex-col items-center justify-center relative">

            {/* Mobile: clean 2-col module grid instead of FolderFloat (avoids overflow/bleed issues) */}
            <div className="lg:hidden w-full">
              <div className="grid grid-cols-2 gap-2">
                {DELIVERABLES.map((item, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col justify-end p-3 rounded-xl bg-transparent border border-slate-300/70 hover:border-slate-500 transition-colors min-h-[72px]"
                  >
                    <span className="absolute top-2.5 right-3 text-[10px] font-mono text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-medium text-slate-700 leading-snug pr-6">
                      {item.replace(/^\d+ • /, "")}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={onOpenAudit}
                className="w-full mt-4 py-3 rounded-full bg-slate-900 hover:bg-purple-700 text-white text-xs font-semibold transition-all cursor-pointer"
              >
                Book a Free AI Growth Audit →
              </button>
            </div>

            {/* Desktop: FolderFloat with hover trigger */}
            <div className="hidden lg:flex flex-col items-center justify-center w-full" style={{ minHeight: 460 }}>
              <FolderFloat
                items={DELIVERABLES}
                label="Buildicy Deployment Dossier"
                sublabel="8 Core Architecture Modules"
                trigger="hover"
                physics={true}
                drift={0.65}
                closeOnSelect={false}
                onSelect={handleSelectPill}
                folderColor="#4c1d95"
                frontColor="#7c3aed"
                paperColor="#ffffff"
                itemColor="#ffffff"
                itemTextColor="#0f172a"
                labelColor="#ffffff"
                width={300}
                height={200}
                radius={18}
                spread={220}
                lift={44}
                tilt={10}
                bounce={0.32}
              />
            </div>
            {selectedDeliverable && (
              <div className="mt-3 px-4 py-1.5 rounded-full bg-white border border-purple-200 text-xs font-mono text-purple-900 shadow-sm animate-in fade-in">
                Selected: <span className="font-bold">{selectedDeliverable}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   REAL ESTATE CASE STUDY: BEFORE VS AFTER (With ✕ and ✓)
   (Exactly matching user's requested single-industry high-impact format)
   ========================================================================= */

function RealEstateProofOfImpact({ onOpenAudit }: { onOpenAudit: () => void }) {
  const testimonials = [
    {
      quote: "We went from replying to leads the next morning to under 20 seconds. First month — 14 extra viewings, zero new hires.",
      author: "Marcus Vance",
      role: "Managing Director",
      company: "Prime Realty Partners",
      metric: "+14 Viewings/Mo",
      initials: "MV",
      color: "bg-purple-100 text-purple-700",
    },
    {
      quote: "Every call on our calendar is now pre-qualified. Our closers stopped wasting time on tire-kickers the week we went live.",
      author: "Elena Rostova",
      role: "Head of Operations",
      company: "Prestige Advisory Group",
      metric: "100% ICP Qualified",
      initials: "ER",
      color: "bg-blue-100 text-blue-700",
    },
    {
      quote: "Missed calls used to just disappear. Now they get a WhatsApp follow-up in seconds and half of them book a slot.",
      author: "Arjun Mehta",
      role: "Founder",
      company: "Elevate Clinics",
      metric: "−60% Missed Leads",
      initials: "AM",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      quote: "The AI handled 300+ WhatsApp enquiries in our first campaign week. We only touched the ones that were ready to sign.",
      author: "Sarah Jenkins",
      role: "VP Sales",
      company: "Elevate Growth Partners",
      metric: "300+ Leads Handled",
      initials: "SJ",
      color: "bg-amber-100 text-amber-700",
    },
    {
      quote: "Setup took 11 days. The system was live before I expected it. Response time went from hours to under a minute.",
      author: "Rohan Pillai",
      role: "CEO",
      company: "NestFinder Realty",
      metric: "11-Day Go-Live",
      initials: "RP",
      color: "bg-rose-100 text-rose-700",
    },
  ];

  return (
    <section
      id="proof"
      className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Header - Clean, Minimalist, Punchy */}
        <div className="reveal-left max-w-2xl mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-purple-700 block mb-2">Named Case Study & Impact</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Before vs. After Buildicy.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            In this client engagement, automated recovery produced 14 additional qualified viewings per month.
          </p>
        </div>

        {/* Side-by-side Before (✕) vs After (✓) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Before Buildicy (✕) */}
          <div className="reveal-left rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-600 font-bold">
                  Before Buildicy (Manual Delays)
                </span>
                <span className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 font-bold text-xs flex items-center justify-center">
                  ✕
                </span>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-sm shrink-0">✕</span>
                  <span><strong>Slow replies:</strong> Enquiries sat unread until morning — intent already cold.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-sm shrink-0">✕</span>
                  <span><strong>Wasted rep hours:</strong> 15+ hrs/week on FAQs for leads that were never going to buy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-sm shrink-0">✕</span>
                  <span><strong>High no-shows:</strong> No reminders, no reschedule flow — consultations just disappeared.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-rose-700 font-medium">
              Result: Slow replies and missed after-hours enquiries sent warm buyers to competitors.
            </div>
          </div>

          {/* After Buildicy (✓) */}
          <div className="reveal-right rounded-3xl p-6 sm:p-8 bg-white border-2 border-purple-500 shadow-xl shadow-purple-600/10 flex flex-col justify-between" style={{ transitionDelay: "100ms" }}>
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-100">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold">
                  After Buildicy (Automated Recovery)
                </span>
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center">
                  ✓
                </span>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-800">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-sm shrink-0">✓</span>
                  <span><strong>Sub-20s reply:</strong> Calls and WhatsApp answered instantly 24/7 with live qualification.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-sm shrink-0">✓</span>
                  <span><strong>Autonomous qualification:</strong> AI verifies budget and timeline before offering calendar slots.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-sm shrink-0">✓</span>
                  <span><strong>Attendance near 90%:</strong> Multi-touch WhatsApp reminders with 1-click reschedule.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ★ Outcome: +14 Qualified Viewings / Month
              </span>

              <button
                onClick={onOpenAudit}
                className="text-xs font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-1 cursor-pointer"
              >
                <span>Get Your Free Lead-Leak Audit</span>
                <Arrow className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Marquee */}
        <TestimonialsMarquee testimonials={testimonials} />
      </div>
    </section>
  );
}

/* =========================================================================
   BUILDICY STUDIO (Impressive, Clean, Professional Software Engineering)
   ========================================================================= */

function BuildicyStudioSection({ onOpenAudit }: { onOpenAudit: () => void }) {
  const capabilities = [
    {
      title: "Custom CRM & Pipelines",
      desc: "Tailored deal stages, automated routing rules, and custom data schemas.",
      icon: <Database className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Branded Client Portals",
      desc: "Secure hubs for deliverable reviews, asynchronous messaging & project tracking.",
      icon: <Laptop className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Internal AI Operations Tools",
      desc: "Custom agents that summarize calls, parse contracts, and eliminate busywork.",
      icon: <Bot className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Full-Stack SaaS / MVP",
      desc: "Production web applications engineered on modern high-velocity stacks.",
      icon: <Code2 className="w-5 h-5 text-purple-600" />,
    },
  ];

  return (
    <section
      id="studio"
      className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Header */}
        <div className="reveal-blur flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 block mb-2">
              Custom Engineering Division
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Need custom software built around your business?
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Buildicy Studio designs and engineers custom software for businesses that have
              outgrown generic off-the-shelf tools.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="rounded-full bg-slate-900 hover:bg-purple-600 text-white px-6 py-3.5 text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer shrink-0"
          >
            Discuss a Custom Build →
          </button>
        </div>

        {/* 4 Impressive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="reveal-zoom rounded-3xl p-6 bg-white border border-slate-200 shadow-2xs hover:border-purple-300 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center mb-4">
                {cap.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                {cap.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   MINIMALIST FAQ (Concise Answers)
   ========================================================================= */

const StarIcon = () => (
  <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

function TestimonialsMarquee({ testimonials }: { testimonials: { quote: string; author: string; role: string; company: string; metric: string; initials: string; color: string }[] }) {
  const extended = [...testimonials, ...testimonials, ...testimonials];
  return (
    <div className="mt-10 pt-8 border-t border-slate-200 overflow-hidden">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-1">Client Words</span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">What partners say.</h3>
        </div>
        <div className="hidden sm:flex items-center gap-1">
          {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          <span className="text-xs font-mono text-slate-500 ml-1.5">5.0</span>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#faf8f5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#faf8f5] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]" style={{ width: "max-content" }}>
          {extended.map((t, idx) => (
            <div key={idx} className="w-[300px] shrink-0 rounded-2xl p-5 bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200 flex flex-col gap-4">
              {/* Top: avatar + name + stars */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${t.color}`}>
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-900 truncate">{t.author}</div>
                  <div className="text-[11px] text-slate-400 truncate">{t.role} · {t.company}</div>
                </div>
              </div>
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              {/* Quote */}
              <p className="text-sm text-slate-700 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Metric badge */}
              <div className="pt-3 border-t border-slate-100">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  ✓ {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MinimalistFAQ({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      topic: "Ownership",
      q: "Do we own the AI system after launch?",
      a: "Yes — everything. Prompts, workflows, dialogue trees, automation code. All transferred to you on day 14. No black-box lock-in, ever.",
    },
    {
      topic: "Data",
      q: "Where does our customer data live?",
      a: "In your own accounts. We never store your lead records or transcripts on Buildicy infrastructure. End-to-end encrypted, fully private.",
    },
    {
      topic: "Channels",
      q: "Which channels do you connect?",
      a: "WhatsApp Business API, website chat, inbound voice, email, Instagram DMs, and LinkedIn — all feeding into one unified pipeline.",
    },
    {
      topic: "Integrations",
      q: "Which CRMs and calendars work with this?",
      a: "HubSpot, GoHighLevel, Salesforce, Zoho, Pipedrive, Calendly, Cal.com, Google Sheets, and custom REST APIs. If you use it, we connect it.",
    },
    {
      topic: "Timeline",
      q: "How fast is the 14-day deployment?",
      a: "Day 1–3: audit & blueprint. Day 4–10: build & integrate. Day 11–13: stress test. Day 14: zero-downtime go-live. You're live in two weeks, guaranteed.",
    },
    {
      topic: "Support",
      q: "What happens after we go live?",
      a: "Ongoing transcript monitoring, model tuning, SLA auditing, and a dedicated support line. Your system gets sharper every month, not stale.",
    },
  ];

  return (
    <section id="faq" className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-[920px]">
        {/* Minimalist Editorial Headline */}
        <div className="reveal-blur mb-10 sm:mb-14">
          <div className="inline-block relative">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-purple-700 font-bold block mb-2 pl-0.5">
              FAQS
            </span>
            <div className="flex flex-col items-start gap-1">
              {/* Box 1: "More" */}
              <div className="bg-slate-950 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-sm shadow-md inline-block">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none text-white">
                  More
                </h2>
              </div>
              {/* Box 2: "information" */}
              <div className="bg-slate-950 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-sm shadow-md inline-block ml-6 sm:ml-10 -mt-1 sm:-mt-1.5">
                <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-purple-200 leading-none">
                  information
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Seamless Accordion (Plain & Simple, Matching Theme Background) */}
        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={faq.q} className="transition-colors duration-200">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left py-5 sm:py-6 hover:text-purple-700 transition-colors group cursor-pointer gap-4"
                >
                  <div className="flex items-center gap-3 sm:gap-4.5 min-w-0">
                    <span
                      className={`shrink-0 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full border text-[11px] sm:text-xs font-mono transition-colors ${
                        isOpen
                          ? "border-purple-600 bg-purple-50 text-purple-700 font-semibold"
                          : "border-slate-300 text-slate-500 group-hover:border-purple-400 group-hover:text-purple-700"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`font-display text-base sm:text-lg font-bold tracking-tight transition-colors leading-snug ${
                        isOpen ? "text-purple-900" : "text-slate-900 group-hover:text-purple-700"
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-purple-600" : "group-hover:text-slate-600"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-5 sm:pb-6 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="pl-0 sm:pl-11 pt-1">
                      <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-sans max-w-2xl">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Plain & Simple Contact Prompt */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-500">
          <p>
            Have a different question? Email us at{" "}
            <a
              href="mailto:hello@buildicy.com"
              className="text-purple-700 font-semibold hover:underline"
            >
              hello@buildicy.com
            </a>{" "}
            or message us on{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 font-semibold hover:underline"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   RESOURCES / DOCS DOWNLOAD SECTION
   ========================================================================= */

function ResourcesSection() {
  const [previewing, setPreviewing] = useState<string | null>(null);

  const docs = [
    {
      title: "AI Growth Systems Guide",
      desc: "3 AI systems, deployment process & ROI benchmarks.",
      file: "/Buildicy_AI_Growth_Systems_Guide new.pdf",
      preview: "/Buildicy_AI_Growth_Systems_Guide new.pdf",
      ext: "PDF",
    },
    {
      title: "Company Profile",
      desc: "Who we are, what we build, and global clients.",
      file: "/Buildicy_Company_Profile_new.pdf",
      preview: "/Buildicy_Company_Profile_new.pdf",
      ext: "PDF",
    },
    {
      title: "Product Engineering Guide",
      desc: "Custom SaaS, MVPs & internal AI tools — scope & process.",
      file: "/docs/Product_Engineering_Service_Guide.pdf",
      preview: "/docs/Product_Engineering_Service_Guide.pdf",
      ext: "PDF",
    },
  ];

  return (
    <>
      <section className="px-6 py-12 md:px-12 bg-[#faf8f5] border-t border-slate-200">
        <div className="mx-auto max-w-[1380px]">
          <div className="reveal flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-700">Free Resources</span>
              <h2 className="font-display text-xl font-extrabold text-slate-900 mt-0.5">Download Our Guides</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {docs.map((doc, i) => (
              <div
                key={doc.title}
                className="reveal-zoom flex flex-col gap-3 px-4 py-4 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-sm transition-all duration-200"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div>
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
                    {doc.ext}
                  </span>
                  <p className="text-sm font-semibold text-slate-900 mt-2 leading-snug">{doc.title}</p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">{doc.desc}</p>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                  {doc.preview && (
                    <button
                      onClick={() => setPreviewing(doc.preview!)}
                      className="flex-1 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 hover:text-purple-600 hover:border-purple-300 transition-colors cursor-pointer flex items-center justify-center gap-1"
                      title="Preview"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Preview
                    </button>
                  )}
                  <a
                    href={doc.file}
                    download
                    className="flex-1 py-1.5 rounded-lg bg-purple-600 text-xs font-medium text-white hover:bg-purple-700 transition-colors cursor-pointer flex items-center justify-center gap-1"
                    title="Download"
                  >
                    <ArrowUpRight className="w-3 h-3" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Preview Modal */}
      {previewing && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewing(null)}
        >
          <div
            className="relative w-full max-w-3xl h-[85dvh] rounded-2xl overflow-hidden bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
              <span className="text-xs font-mono font-semibold text-slate-600">Preview</span>
              <div className="flex items-center gap-2">
                <a
                  href={previewing}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-600 text-white text-xs font-semibold hover:bg-purple-700 transition-colors"
                >
                  <ArrowUpRight className="w-3 h-3" />
                  Download PDF
                </a>
                <button
                  onClick={() => setPreviewing(null)}
                  className="w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-600 cursor-pointer transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <iframe
              src={`${previewing}#toolbar=0`}
              className="flex-1 w-full"
              title="Document Preview"
            />
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================================================
   FREE AUDIT OFFER BANNER (Clean Minimalist Dark Background - No Marquee)
   ========================================================================= */

function AuditBanner({ onOpenAudit }: { onOpenAudit: () => void }) {
  return (
    <section className="bg-gradient-to-b from-[#180a33] via-[#0f0421] to-[#070110] text-white relative overflow-hidden border-y border-purple-600/40 py-20 sm:py-28">
      {/* Radiant atmospheric violet mesh lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_0%,rgba(168,85,247,0.35)_0%,rgba(99,102,241,0.15)_40%,transparent_75%)] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-80 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(147,51,234,0.25)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Main Banner Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Pill - Static, calm, elegant with NO blinking dot */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-200 text-xs font-mono font-medium mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>LIMITED DISCOVERY CAPACITY · 4 SLOTS REMAINING THIS WEEK</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Stop losing leads to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-300 to-indigo-200">
              slow response times.
            </span>
          </h2>

          {/* Core Offer Statement with luxury frosted glassmorphic card */}
          <div className="my-8 p-7 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/15 backdrop-blur-2xl text-left sm:text-center shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.18)]">
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl font-normal text-purple-100 leading-relaxed">
              &ldquo;In <strong className="font-sans font-bold text-purple-300 not-italic">30 minutes</strong>, we&apos;ll identify where enquiries are being missed, map the right AI system, and give you a <strong className="font-sans font-bold text-white not-italic underline decoration-purple-400 underline-offset-4">fixed implementation estimate</strong>.&rdquo;
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-9 py-4.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all shadow-[0_0_35px_rgba(147,51,234,0.5)] hover:shadow-[0_0_45px_rgba(147,51,234,0.7)] flex items-center justify-center gap-2 cursor-pointer group active:scale-95"
            >
              <span>Claim Your Free 30-Minute Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 3 Trust Pillar Chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-purple-300/80">
            <div className="flex items-center gap-1.5">
              <span className="text-purple-400 font-bold">✓</span>
              <span>100% Free Strategy Session</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-purple-400 font-bold">✓</span>
              <span>Zero Sales Pressure</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-purple-400 font-bold">✓</span>
              <span>Fixed 14-Day Delivery Estimate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   ORIGINAL FOOTER (Restored Exact Match from Original Codebase)
   ========================================================================= */

function Footer({ onOpenAudit }: { onOpenAudit?: () => void }) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden text-white pt-24 md:pt-36 pb-0"
      style={{
        background: "linear-gradient(180deg, #0b111e 0%, #060913 45%, #020306 100%)",
        position: "relative",
        zIndex: 0,
      }}
    >
      {/* Subtle atmospheric ambient glow matching deep night ocean */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(168,85,247,0.12)_0%,rgba(59,130,246,0.06)_40%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Subtle twilight ocean mist line in the distance */}
      <div
        className="absolute bottom-0 inset-x-0 h-96 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 90% 40% at 50% 90%, rgba(30, 58, 138, 0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12">
        {/* Top Tag */}
        <div className="mb-6 md:mb-10">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-white/50 block">
            Have something in mind?
          </span>
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Cinematic Headline */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2.6rem,6.2vw,5.6rem)] font-light md:font-normal leading-[1.05] tracking-tight text-white">
              Let’s build your <br className="hidden sm:inline" />
              growth system
            </h2>
          </div>

          {/* Right Column: Studio Info, Description, CTA, Direct Email */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-1 lg:pt-3 space-y-7">
            {/* Actual Logo & Studio Tag */}
            <div className="flex items-center gap-3.5">
              <img
                src="/logo.png"
                alt="Buildicy Logo"
                loading="lazy"
                decoding="async"
                width="48"
                height="48"
                className="h-10 md:h-12 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-xl font-bold tracking-tight text-white">
                    Buildicy
                  </span>

                </div>
                <span className="text-[11px] font-mono tracking-wider text-purple-300/80 uppercase">
                  AI Growth Systems Studio
                </span>
              </div>
            </div>

            {/* Concise Mission / Positioning matching reference */}
            <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-md">
              Thoughtful AI systems engineered to capture, qualify, and convert leads 24/7.
              Built around your business.
            </p>

            {/* Action Links */}
            <div className="space-y-3 pt-1">
              <button
                type="button"
                onClick={onOpenAudit}
                className="group inline-flex items-center gap-2.5 text-xl md:text-2xl font-medium text-white hover:text-purple-300 transition-colors cursor-pointer text-left"
              >
                <span>Start a conversation</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-purple-400">
                  ↗
                </span>
              </button>

              <div>
                <a
                  href="mailto:hello@buildicy.com"
                  className="text-sm md:text-base font-mono text-white/50 hover:text-white transition-colors"
                >
                  hello@buildicy.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Systems & Live Ecosystem Portals (Minimalist Text Style) */}
        <div className="mt-14 md:mt-18 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-white/50">
              Studio Systems &amp; Portals:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-white/60">
            {PORTAL_ITEMS.map((portal) => (
              <a
                key={portal.id}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors flex items-center gap-1 group"
              >
                <span>{portal.name}</span>
                <span className="text-[10px] text-white/30 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-transform">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white/10 mt-12 md:mt-16 pt-8 md:pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Studio Physical Location & Direct Line (Local SEO Compliant) */}
          <div className="text-xs md:text-sm font-mono text-white/50 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Studio HQ: Coimbatore, Tamil Nadu, India (641001)</span>
            </div>
            <div>Working with high-growth businesses worldwide.</div>
            <div className="pt-0.5">
              <span>Direct Phone / WhatsApp: </span>
              <a href="tel:+919150890205" className="text-purple-300 hover:text-white font-medium transition-colors">
                +91 91508 90205
              </a>
            </div>
          </div>

          {/* Nav Links + Back to top */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-xs md:text-sm font-medium text-white/70">
            <a href="#problem" className="hover:text-white transition-colors">
              Problem
            </a>
            <a href="#demo" className="hover:text-white transition-colors">
              Demo Engine
            </a>
            <a href="#proof" className="hover:text-white transition-colors">
              Proof
            </a>
            <a href="#systems" className="hover:text-white transition-colors">
              AI Growth Systems
            </a>
            <a href="#protocol" className="hover:text-white transition-colors">
              Protocol
            </a>
            <Link
              to="/founders"
              className="hover:text-white transition-colors text-purple-300 font-semibold"
            >
              Founders
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1 text-white hover:text-purple-400 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <span className="text-purple-400">↗</span>
            </button>
          </div>
        </div>

        {/* Social Channels & Authority Profiles (SEOptimer & Search Engine Graph) */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-white/30 uppercase text-[10px] tracking-wider">Social Channels:</span>
            <a href="https://linkedin.com/company/buildicy" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">LinkedIn ↗</a>
            <a href="https://x.com/buildicy" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">X (Twitter) ↗</a>
            <a href="https://instagram.com/buildicy" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">Instagram ↗</a>
            <a href="https://youtube.com/@buildicy" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">YouTube ↗</a>
          </div>
          <div>© {new Date().getFullYear()} Buildicy Studio. All rights reserved.</div>
        </div>

        {/* Massive Bottom Wordmark: BUILDICY */}
        <div className="relative mt-12 md:mt-20 overflow-hidden select-none pointer-events-none -mx-6 sm:-mx-8 md:-mx-12">
          <div className="w-full text-center">
            <div
              className="font-display font-black text-[15.5vw] tracking-[-0.035em] leading-[0.76] text-white uppercase text-center w-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.22) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BUILDICY
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
