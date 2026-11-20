import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  Maximize2,
  X,
} from "lucide-react";
import { HeroTypewriter } from "../components/HeroTypewriter";
import { AuditBookingModal } from "../components/AuditBookingModal";
import FolderFloat from "../components/FolderFloat";
import CircularCarousel from "../components/CircularCarousel";
import { PORTAL_ITEMS } from "../config/links";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Buildicy | AI Growth Systems & Lead Recovery for B2B Service Businesses",
      },
      {
        name: "description",
        content:
          "Buildicy installs AI Growth Systems that capture every enquiry, respond instantly, qualify prospects, and book more qualified meetings for B2B service businesses.",
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
          "Buildicy | AI Growth Systems & Lead Recovery for B2B Service Businesses",
      },
      {
        property: "og:description",
        content:
          "Stop losing leads to slow follow-up. Buildicy installs AI Growth Systems that capture, qualify, and book meetings 24/7 across WhatsApp, Web & Calls.",
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
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      setProgress(Math.min(100, Math.max(0, (window.scrollY / total) * 100)));
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
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          });
          renderer.setSize(width, height);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));
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
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));
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

    return () => {
      cancelled = true;
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
    <div className="lg:hidden w-full flex justify-center mt-8 mb-2">
      <div className="w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] relative">
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
  const [selectedMarket, setSelectedMarket] = useState<string>("India — INR");

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
        <FeaturedProjectsSection onOpenAudit={(pkgName) => handleOpenAudit(pkgName)} />

        {/* 5. Offer: one clean package ladder */}
        <AIGrowthSystemsPackages onSelectPkg={(pkg, market) => handleOpenAudit(pkg, market)} />

        {/* 6. Process: 14-day implementation */}
        <DeploymentProtocol onOpenAudit={() => handleOpenAudit()} />

        {/* 7. FAQ: ownership, data, channels, integrations, support */}
        <MinimalistFAQ onOpenAudit={() => handleOpenAudit()} />

        {/* Documentation & Profiles */}
        <ResourcesSection />

        {/* 8. Final CTA: audit with explicit deliverables */}
        <FinalCTA onOpenAudit={() => handleOpenAudit()} />
      </main>
      <Footer onOpenAudit={() => handleOpenAudit()} />
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#faf8f5]/85 backdrop-blur-md text-slate-900">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Buildicy Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex items-center gap-1.5">
            <span className="font-display text-2xl font-bold tracking-tight text-slate-900">
              Buildicy
            </span>
            <span className="h-2 w-2 rounded-full bg-purple-600 shadow-[0_0_12px_#9333ea] animate-pulse" />
          </div>
        </a>
        <nav
          className="hidden gap-7 text-xs font-semibold text-slate-700 lg:flex items-center"
          aria-label="Primary"
        >
          <a href="#problem" className="link-line hover:text-slate-900 transition-colors">
            Problem
          </a>
          <a href="#dashboard" className="link-line hover:text-slate-900 transition-colors">
            Demo
          </a>
          <a href="#proof" className="link-line hover:text-slate-900 transition-colors">
            Proof
          </a>
          <a href="#systems" className="link-line hover:text-slate-900 transition-colors">
            Offer
          </a>
          <a href="#protocol" className="link-line hover:text-slate-900 transition-colors">
            Process
          </a>
          <a href="#faq" className="link-line hover:text-slate-900 transition-colors">
            FAQ
          </a>
          <Link to="/founders" className="link-line hover:text-purple-600 transition-colors">
            Founders
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenAudit}
            className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-slate-900 px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-purple-600 hover:shadow-lg cursor-pointer shrink-0"
          >
            <span className="hidden sm:inline">Get Free Lead-Leak Audit</span>
            <span className="sm:hidden">Free Audit</span>
            <Arrow className="transition-transform group-hover:rotate-45" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#faf8f5]/98 backdrop-blur-2xl z-50 flex flex-col justify-between p-6 overflow-y-auto border-t border-slate-200/80 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2.5 text-base font-semibold text-slate-800 pt-2">
            <a
              href="#dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Engine</span>
              <span className="text-xs font-mono text-purple-700">01</span>
            </a>
            <a
              href="#systems"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Systems</span>
              <span className="text-xs font-mono text-purple-700">02</span>
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Projects</span>
              <span className="text-xs font-mono text-purple-700">03</span>
            </a>
            <a
              href="#proof"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Case Study</span>
              <span className="text-xs font-mono text-purple-700">04</span>
            </a>
            <Link
              to="/founders"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Founders & Leadership</span>
              <span className="text-xs font-mono font-bold text-purple-700">05</span>
            </Link>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>FAQ</span>
              <span className="text-xs font-mono text-purple-700">06</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl bg-purple-50 text-purple-900 border border-purple-200/80 transition-colors flex items-center justify-between"
            >
              <span>Contact Studio & Inquiries</span>
              <span className="text-xs font-mono font-bold text-purple-700">↗</span>
            </Link>
            <Link
              to="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-slate-100 text-xs font-mono text-slate-500 transition-colors flex items-center justify-between"
            >
              <span>Privacy Policy</span>
              <span>↗</span>
            </Link>
          </nav>

          <div className="pt-6 border-t border-slate-200/80 space-y-3 pb-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Free AI Growth Audit</span>
              <Arrow />
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2"
            >
              <span>WhatsApp: +91 91508 90205</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
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
            <span className="inline-block text-purple-700 whitespace-nowrap align-bottom">
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

          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-medium max-w-lg leading-relaxed">
            In 30 minutes, we’ll identify where enquiries are being missed, map the right AI system, and give you a fixed implementation estimate.
          </p>

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
    {
      metric: "Slow Replies",
      title: "Delayed Frontline Response",
      desc: "Slow replies and missed after-hours enquiries can send warm buyers to competitors.",
      icon: Clock,
    },
    {
      metric: "After-Hours Leak",
      title: "Unanswered Enquiries",
      desc: "Warm buyers researching at night bounce immediately when no instant response arrives.",
      icon: PhoneCall,
    },
    {
      metric: "Tire-Kickers",
      title: "Unqualified Prospects",
      desc: "Sales reps waste hours filtering low-budget leads instead of talking to ready buyers.",
      icon: Users,
    },
    {
      metric: "+14 Viewings / Mo",
      title: "Automated Recovery",
      desc: "In this client engagement, automated recovery produced 14 additional qualified viewings per month.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="problem" className="px-6 py-14 md:px-12 md:py-24 bg-[#faf8f5] text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-[1380px]">
        <div className="reveal-blur max-w-4xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-50 text-purple-700 border border-purple-200/80 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            THE REVENUE LEAK
          </div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
            Every delayed reply, missed call, and unqualified enquiry creates a revenue leak.{" "}
            <span className="text-purple-700 font-semibold">Buildicy closes those gaps with automated response, qualification, and booking.</span>
          </h2>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="reveal-zoom bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-md uppercase tracking-wide">
                      {p.metric}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
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

function VideoDashboardSection({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const STAGES = [
    { id: 0, label: "01 Pipeline Overview", subtitle: "01 Pipeline Overview: Real-time lead recovery velocity and SLA response tracking." },
    { id: 1, label: "02 Inbound Stream", subtitle: "02 Inbound Stream: Multi-channel capture across WhatsApp, Website Chat & Voice." },
    { id: 2, label: "03 Sub-Minute Triage", subtitle: "03 Sub-Minute Triage: Autonomous AI responds in under 18s at peak intent." },
    { id: 3, label: "04 Qualification & Booking", subtitle: "04 Qualification & Booking: Verified ICP scoring and direct calendar sync." },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const STAGE_DURATION = 5000; // 5 seconds per stage
    const INTERVAL_MS = 40;
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += INTERVAL_MS;
      const pct = Math.min(100, (elapsed / STAGE_DURATION) * 100);
      setProgress(pct);

      if (elapsed >= STAGE_DURATION) {
        clearInterval(interval);
        setProgress(0);
        setActiveTab((curr) => (curr + 1) % 4);
      }
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isPlaying, activeTab]);

  const handleSelectTab = (idx: number) => {
    setActiveTab(idx);
    setProgress(0);
  };

  return (
    <section
      id="dashboard"
      className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Section Header */}
        <div className="reveal-left max-w-3xl mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 block mb-2">
            Interactive system demo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Watch how the system runs your pipeline.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            See how Buildicy captures, qualifies, and books inbound leads across WhatsApp, web, and voice.
          </p>
        </div>

        {/* Compact dot tab indicators */}
        <div className="reveal flex items-center gap-2 mb-5" style={{ transitionDelay: "120ms" }}>
          {STAGES.map((s) => {
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleSelectTab(s.id)}
                title={s.label}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive ? "w-8 bg-purple-600" : "w-3 bg-slate-300 hover:bg-purple-300"
                }`}
              />
            );
          })}
          <span className="ml-1 text-[11px] font-mono text-slate-400">
            {STAGES[activeTab]?.label}
          </span>
        </div>

        {/* Dashboard Canvas Container (Ultra-Minimalist Light Aesthetic) */}
        <div className="reveal-scale rounded-3xl bg-white border border-slate-200/90 shadow-[0_24px_60px_-12px_rgba(15,23,42,0.08)] overflow-hidden" style={{ transitionDelay: "180ms" }}>
          {/* Top Window Bar */}
          <div className="bg-slate-50/90 border-b border-slate-200 px-6 py-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="h-4 w-px bg-slate-200 mx-1" />
              <span className="font-mono text-xs font-semibold text-slate-700">
                buildicy.engine / autonomous-pipeline-demo
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Simulation
              </span>

              {/* Play / Pause Toggle */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 hover:text-slate-900 shadow-2xs cursor-pointer"
                title={isPlaying ? "Pause Auto-play" : "Resume Auto-play"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-slate-600" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-purple-600" />
                    <span className="text-purple-700 font-bold">Auto-Play</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Dynamic Canvas */}
          <div className="relative bg-gradient-to-br from-[#f0f4ff]/70 via-[#f8fafc] to-[#ffffff] p-4 sm:p-6 md:p-8 min-h-[420px] sm:min-h-[460px] flex flex-col justify-between overflow-hidden">
            {/* Soft Ambient Radial Blur Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/25 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full filter blur-3xl pointer-events-none" />

            {/* TAB 0: 01 PIPELINE OVERVIEW (Style of frame_1.jpg) */}
            {activeTab === 0 && (
              <div className="relative z-10 animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Overview
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                      Live Inbound Pipeline • All Connected Workspaces
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Active SLA 99.98%
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Card 1 */}
                  <div className="rounded-[18px] sm:rounded-[24px] bg-white border border-slate-100 p-4 sm:p-6 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.06)] hover:border-purple-200 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm">
                        $
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        ↑ +28.4%
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500 block mt-4">
                      Pipeline Value
                    </span>
                    <div className="font-display text-3xl font-extrabold text-slate-900 mt-1">
                      $184.5k
                    </div>
                    {/* Minimalist Sparkline */}
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">Target: $250k</span>
                      <span className="text-[11px] font-mono font-semibold text-purple-700">73.8% to goal</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-[18px] sm:rounded-[24px] bg-white border border-slate-100 p-4 sm:p-6 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.06)] hover:border-purple-200 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        ↑ +38 new
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500 block mt-4">
                      Inbound Enquiries
                    </span>
                    <div className="font-display text-3xl font-extrabold text-slate-900 mt-1">
                      1,482
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">WhatsApp & Web</span>
                      <span className="text-[11px] font-mono font-semibold text-blue-700">Zero Leakage</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="rounded-[18px] sm:rounded-[24px] bg-white border border-slate-100 p-4 sm:p-6 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.06)] hover:border-purple-200 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        &lt; 30s SLA
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500 block mt-4">
                      Median Response
                    </span>
                    <div className="font-display text-3xl font-extrabold text-emerald-600 mt-1">
                      18.4s
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">Manual Lag: 4.2h</span>
                      <span className="text-[11px] font-mono font-semibold text-emerald-600">99.2% faster</span>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="rounded-[18px] sm:rounded-[24px] bg-white border border-slate-100 p-4 sm:p-6 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.06)] hover:border-purple-200 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full">
                        92% show rate
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500 block mt-4">
                      Booked Meetings
                    </span>
                    <div className="font-display text-3xl font-extrabold text-slate-900 mt-1">
                      318 Calls
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">Direct CRM sync</span>
                      <span className="text-[11px] font-mono font-semibold text-indigo-700">Qualified Only</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 1: 02 OMNICHANNEL STREAM */}
            {activeTab === 1 && (
              <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-4 items-stretch animate-in fade-in duration-300">
                {/* Left Live Volume Box */}
                <div className="lg:col-span-5 rounded-[20px] bg-white border border-slate-100 p-4 sm:p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-base sm:text-lg">Interactive system demo</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live Demo
                      </span>
                    </div>
                    <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      See how Buildicy captures, qualifies, and books inbound leads across WhatsApp, web, and voice.
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full mt-3">
                      ⚡ &lt; 18s sub-minute response SLA
                    </div>
                  </div>

                  {/* Soundwave / Activity Bars */}
                  <div className="mt-8 flex items-end gap-2.5 h-24 pt-4">
                    {[35, 55, 40, 75, 60, 95, 50, 80, 65, 100].map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t-md transition-all duration-500 ${
                          i === 9 ? "bg-purple-600" : "bg-purple-200"
                        }`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Live Activity Feed */}
                <div className="lg:col-span-7 rounded-[20px] bg-white border border-slate-100 p-4 sm:p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-bold text-slate-900 text-lg">Live Inbound Activity</span>
                    <span className="text-xs font-mono text-purple-700 font-semibold">Sub-30s Triage</span>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      {
                        initials: "WA",
                        color: "bg-emerald-50 text-emerald-700 border-emerald-200",
                        name: "Rajesh V.",
                        company: "Commercial Real Estate (Bangalore)",
                        msg: "Need automated booking for 8 commercial office parks",
                        time: "Just now",
                      },
                      {
                        initials: "WB",
                        color: "bg-blue-50 text-blue-700 border-blue-200",
                        name: "Sarah Jenkins",
                        company: "VP Sales • Elevate Growth Partners",
                        msg: "Inbound demo qualification for 40 monthly website leads",
                        time: "6s ago",
                      },
                      {
                        initials: "VR",
                        color: "bg-purple-50 text-purple-700 border-purple-200",
                        name: "Marcus Vance",
                        company: "Principal • Executive Search",
                        msg: "Missed call recovered • Transcribed intent: Retained search",
                        time: "18s ago",
                      },
                      {
                        initials: "WA",
                        color: "bg-emerald-50 text-emerald-700 border-emerald-200",
                        name: "Dr. Alan Hayes",
                        company: "Founder • Private Aesthetic Clinic",
                        msg: "After-hours WhatsApp consultation booking inquiry",
                        time: "34s ago",
                      },
                    ].map((row, idx) => (
                      <div
                        key={idx}
                        className="flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-slate-50/80 hover:bg-purple-50/40 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs border shrink-0 ${row.color}`}
                          >
                            {row.initials}
                          </span>
                          <div>
                            <div className="text-xs font-semibold text-slate-900">
                              {row.name}{" "}
                              <span className="font-normal text-slate-500">• {row.company}</span>
                            </div>
                            <div className="text-xs text-slate-600 mt-0.5 line-clamp-1">
                              "{row.msg}"
                            </div>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 shrink-0">
                          {row.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: 03 SUB-MINUTE TRIAGE */}
            {activeTab === 2 && (
              <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-4 items-stretch animate-in fade-in duration-300">
                {/* Left Conversational AI Box */}
                <div className="lg:col-span-7 rounded-[20px] bg-white border border-slate-100 p-4 sm:p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-slate-900 text-lg">Autonomous AI Exchange</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active Chat
                      </span>
                    </div>

                    <div className="space-y-3.5 mt-2">
                      {/* Prospect message */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 max-w-lg">
                        <span className="text-[11px] font-mono font-semibold text-slate-500 block mb-1">
                          Sarah Jenkins (Website Chat • 18s ago)
                        </span>
                        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                          "Hi! We are losing after-hours leads on our website. Can Buildicy help qualify and book them automatically?"
                        </p>
                      </div>

                      {/* AI Concierge response */}
                      <div className="bg-purple-50/80 p-4 rounded-2xl border border-purple-200/80 ml-auto max-w-lg">
                        <span className="text-[11px] font-mono font-bold text-purple-700 block mb-1">
                          Buildicy AI Concierge • Dispatched in 18.2s
                        </span>
                        <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-medium">
                          "Hi Sarah! Absolutely. We install systems that qualify and book prospects in under 60 seconds across WhatsApp, web & voice. How many active monthly inquiries do you currently handle?"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-purple-700 font-semibold">
                    <span>✓ ZERO HUMAN LATENCY</span>
                    <span>1-CLICK MEETING SCHEDULING</span>
                  </div>
                </div>

                {/* Right Latency Benchmark Box */}
                <div className="lg:col-span-5 rounded-[20px] bg-white border border-slate-100 p-4 sm:p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-slate-900 text-lg block">Speed-to-Lead</span>
                    <span className="text-xs text-slate-500 font-normal mt-0.5 block">
                      Buying intent peaks within the first 10 minutes.
                    </span>

                    <div className="font-display text-5xl sm:text-6xl font-extrabold text-slate-900 mt-6 tracking-tight">
                      18.2s
                    </div>
                    <span className="text-xs font-mono text-purple-700 font-semibold block mt-1">
                      Buildicy AI Median Latency
                    </span>

                    <div className="mt-6 space-y-3">
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="font-semibold text-slate-800">Buildicy AI</span>
                          <span className="text-emerald-600 font-bold">&lt; 20s (Instant)</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full w-[95%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
                          <span>Traditional Manual Delay</span>
                          <span className="text-rose-500 font-semibold">4.2 Hours</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full bg-rose-400 rounded-full w-[12%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold text-center border border-emerald-200 mt-4">
                    ✓ 99.2% faster engagement than standard teams
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: 04 QUALIFICATION & BOOKING */}
            {activeTab === 3 && (
              <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-4 items-stretch animate-in fade-in duration-300">
                {/* Left Channel Attribution */}
                <div className="lg:col-span-5 rounded-[20px] bg-white border border-slate-100 p-4 sm:p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-lg">Channel Distribution</span>
                      <span className="text-xs font-mono text-slate-500">All Sources</span>
                    </div>

                    {/* Donut Simulation */}
                    <div className="my-6 flex items-center justify-center">
                      <div className="relative w-40 h-40 rounded-full border-[18px] border-purple-600 flex items-center justify-center border-t-blue-500 border-l-emerald-500 shadow-inner">
                        <div className="text-center">
                          <div className="font-display text-2xl font-extrabold text-slate-900">
                            1,482
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 uppercase">
                            Ingested
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs font-medium">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          WhatsApp Business
                        </span>
                        <span className="font-mono font-bold text-slate-900">42% (622 leads)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                          Website Concierge
                        </span>
                        <span className="font-mono font-bold text-slate-900">36% (534 leads)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                          Voice AI Reception
                        </span>
                        <span className="font-mono font-bold text-slate-900">22% (326 leads)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Confirmed Booking & CRM Sync */}
                <div className="lg:col-span-7 rounded-[20px] bg-white border border-slate-100 p-4 sm:p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-slate-900 text-lg">Confirmed Booking</span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        ✓ SLOTTED & SYNCED
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/80 mb-5">
                      <div className="text-xs font-mono text-purple-700 font-bold uppercase tracking-wider">
                        Discovery Call Reserved
                      </div>
                      <div className="font-display text-2xl font-bold text-slate-900 mt-1">
                        Tomorrow, Thursday • 2:30 PM EST
                      </div>
                      <div className="text-xs text-slate-600 mt-1">
                        Attendee: Sarah Jenkins (VP Sales • Elevate Growth Partners)
                      </div>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-center gap-2 text-slate-800">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Google Meet invitation generated and delivered</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>HubSpot CRM deal ($24,000 value) automatically created</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>WhatsApp & SMS reminder sequences armed (T-24h & T-1h)</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Slack notification dispatched to sales leadership</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">ICP Score: 96/100 (Tier 1)</span>
                    <button
                      onClick={onOpenAudit}
                      className="text-xs font-semibold text-purple-700 hover:text-purple-800 cursor-pointer inline-flex items-center gap-1"
                    >
                      Install this engine →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Minimalist Bottom Caption & Progress Bar (Matching reference video's clean caption) */}
            <div className="relative z-10 mt-8 pt-4 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                <span className="font-mono text-slate-700 font-medium">
                  {STAGES[activeTab]?.subtitle || ""}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full sm:w-48 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full bg-purple-600 rounded-full transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist CTA Below Dashboard */}
        <div className="reveal-flip mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs" style={{ transitionDelay: "200ms" }}>
          <div>
            <div className="font-display text-lg font-bold text-slate-900">
              Want this autonomous engine installed into your business?
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
              We audit your inbound channels, design your custom blueprint, and connect your CRM within 7–14 days.
            </div>
          </div>
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto shrink-0 rounded-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md shadow-purple-600/20"
          >
            Book a Free AI Growth Audit →
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   THE THREE AI GROWTH SYSTEMS (React Bits Pricing 6: Highlighted Middle)
   ========================================================================= */

function AIGrowthSystemsPackages({
  onSelectPkg,
}: {
  onSelectPkg: (name: string, market: string) => void;
}) {
  const [market, setMarket] = useState<"india" | "intl">("india");
  const isIntl = market === "intl";
  const marketLabel = isIntl ? "International — USD" : "India — INR";

  const systems = [
    {
      id: "starter",
      name: "Starter — AI Lead Capture & Booking",
      systemNumber: "01",
      tagline: 'AI Lead Machine: "Turn website and ad traffic into qualified booked calls."',
      popular: false,
      indiaSetup: "₹40,000",
      indiaMonthly: "₹8,000/mo",
      intlSetup: "$2,000",
      intlMonthly: "$500/mo",
      includes: [
        "Turn website and ad traffic into qualified booked calls",
        "Custom AI Lead Capture Landing Funnel",
        "Interactive Qualification & Scoring Form",
        "Automated calendar booking & reminder sequences",
        "Instant WhatsApp & email lead notification alerts",
      ],
      cta: "Get Starter System",
    },
    {
      id: "growth",
      name: "Growth — 24/7 AI Receptionist",
      systemNumber: "02",
      tagline: 'AI Front Desk + Funnel: "Never miss an inbound call or WhatsApp enquiry again."',
      popular: true,
      indiaSetup: "₹65,000",
      indiaMonthly: "₹15,000/mo",
      intlSetup: "$3,500",
      intlMonthly: "$900/mo",
      includes: [
        "Everything in Starter System",
        "Never miss an inbound call or WhatsApp enquiry again",
        "24/7 AI Voice Receptionist for inbound calls",
        "24/7 WhatsApp AI Chat Agent for instant replies (< 18s)",
        "Missed-call to text/WhatsApp automated recovery",
        "Live lead triage & calendar booking over voice & chat",
      ],
      cta: "Deploy Growth Receptionist",
    },
    {
      id: "scale",
      name: "Scale — Full AI Growth Engine",
      systemNumber: "03",
      tagline: 'Complete AI Growth Engine: "Run lead capture, follow-up, CRM, and reporting on one automated system."',
      popular: false,
      indiaSetup: "₹1,25,000",
      indiaMonthly: "₹35,000–₹40,000/mo",
      intlSetup: "$6,000",
      intlMonthly: "$2,000/mo",
      includes: [
        "Everything in Growth Receptionist",
        "Run lead capture, follow-up, CRM, and reporting on one system",
        "Full 2-way sync with HubSpot / GoHighLevel / Salesforce",
        "Automated closer routing & multi-stage pipeline automation",
        "Multi-touch no-show recovery & long-term nurture campaigns",
        "Executive owner analytics & monthly conversion tuning",
      ],
      cta: "Deploy Full Engine",
    },
  ];

  return (
    <section
      id="systems"
      className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Minimalist Section Header */}
        <div className="reveal-blur text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-50 text-purple-700 border border-purple-200/80 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            CORE SYSTEMS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            The Three AI Growth Systems.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Transparent pricing: Fixed one-time setup plus managed monthly optimization.
          </p>

          {/* Minimalist Currency Pill Toggle */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center p-1 rounded-full bg-white border border-slate-200 shadow-2xs">
              <button
                type="button"
                onClick={() => setMarket("india")}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  market === "india"
                    ? "bg-purple-600 text-white shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                India — INR (₹)
              </button>
              <button
                type="button"
                onClick={() => setMarket("intl")}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  market === "intl"
                    ? "bg-purple-600 text-white shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                International — USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: one card at a time — full width snap */}
        <div className="lg:hidden overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-6">
          <div className="flex w-max px-6 gap-3">
          {systems.map((sys, idx) => {
            const setup = isIntl ? sys.intlSetup : sys.indiaSetup;
            const monthly = isIntl ? sys.intlMonthly : sys.indiaMonthly;
            const isPopular = sys.popular;
            return (
              <div
                key={sys.id}
                style={{ width: "calc(100vw - 48px)" }}
                className={`snap-start snap-always shrink-0 rounded-3xl p-6 flex flex-col ${
                  isPopular
                    ? "bg-slate-950 text-white border-2 border-purple-500 shadow-xl"
                    : "bg-white border border-slate-200"
                }`}
              >
                {isPopular && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-600 text-white">
                      <Sparkles className="w-2.5 h-2.5" /> Most Popular
                    </span>
                  </div>
                )}
                <span className={`text-[10px] font-mono font-semibold ${isPopular ? "text-purple-400" : "text-slate-500"}`}>System {sys.systemNumber}</span>
                <h3 className={`font-display text-xl font-bold mt-1 mb-2 ${isPopular ? "text-white" : "text-slate-900"}`}>{sys.name}</h3>
                <p className={`text-xs mb-4 leading-relaxed ${isPopular ? "text-slate-400" : "text-slate-500"}`}>{sys.tagline}</p>
                <div className={`p-3 rounded-xl mb-4 ${isPopular ? "bg-white/5 border border-white/10" : "bg-[#faf8f5] border border-slate-200"}`}>
                  <span className={`font-display text-2xl font-extrabold ${isPopular ? "text-white" : "text-slate-900"}`}>{setup}</span>
                  <span className={`text-[10px] font-mono ml-1 ${isPopular ? "text-slate-400" : "text-slate-500"}`}>setup</span>
                  <span className={`text-xs font-mono font-bold block mt-0.5 ${isPopular ? "text-purple-400" : "text-purple-700"}`}>+ {monthly}</span>
                </div>
                <div className="space-y-2 flex-1">
                  {sys.includes.map((item) => (
                    <div key={item} className={`flex items-start gap-2 text-[11px] ${isPopular ? "text-slate-300" : "text-slate-600"}`}>
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isPopular ? "text-purple-400" : "text-purple-600"}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onSelectPkg(sys.name, marketLabel)}
                  className={`mt-5 w-full py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer ${
                    isPopular ? "bg-purple-600 hover:bg-purple-500 text-white" : "bg-slate-900 hover:bg-purple-600 text-white"
                  }`}
                >
                  {sys.cta} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
          </div>
        </div>
        {/* swipe hint dots */}
        <div className="lg:hidden flex justify-center gap-1.5 mt-3">
          {systems.map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          ))}
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 lg:gap-7 items-stretch pt-4">
          {systems.map((sys, idx) => {
            const setup = isIntl ? sys.intlSetup : sys.indiaSetup;
            const monthly = isIntl ? sys.intlMonthly : sys.indiaMonthly;
            const isPopular = sys.popular;

            if (isPopular) {
              /* HIGHLIGHTED MIDDLE CARD (Centerpiece) */
              return (
                <div
                  key={sys.id}
                  className="reveal-zoom rounded-3xl p-7 sm:p-9 bg-slate-950 text-white border-2 border-purple-500 shadow-2xl shadow-purple-950/25 lg:-translate-y-4 relative flex flex-col justify-between transition-all duration-300"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Floating Highlight Badge */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-purple-600 text-white shadow-md shadow-purple-600/30">
                      <Sparkles className="w-3 h-3 text-purple-200" />
                      <span>Most Popular</span>
                    </span>
                  </div>

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-semibold text-purple-400">
                        System {sys.systemNumber}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {sys.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 mt-2 mb-6 leading-relaxed">
                      {sys.tagline}
                    </p>

                    {/* Price Box */}
                    <div className="mb-7 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            {setup}
                          </span>
                          <span className="text-xs text-slate-400 font-mono uppercase ml-1.5">
                            Setup
                          </span>
                        </div>
                        <div className="text-xs font-mono font-bold text-purple-400">
                          + {monthly}
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {sys.includes.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-white/10">
                    <button
                      onClick={() => onSelectPkg(sys.name, marketLabel)}
                      className="w-full py-4 rounded-full text-xs sm:text-sm font-semibold bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <span>{sys.cta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              );
            }

            /* STANDARD TIER CARDS (Left & Right) */
            return (
              <div
                key={sys.id}
                className="reveal-scale rounded-3xl p-7 sm:p-9 bg-white text-slate-900 border border-slate-200 shadow-xs hover:border-purple-300 hover:shadow-md relative flex flex-col justify-between transition-all duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      System {sys.systemNumber}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900 tracking-tight">
                    {sys.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-6 leading-relaxed">
                    {sys.tagline}
                  </p>

                  {/* Price Box */}
                  <div className="mb-7 p-4 rounded-2xl bg-[#faf8f5] border border-slate-200/80">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                          {setup}
                        </span>
                        <span className="text-xs text-slate-500 font-mono uppercase ml-1.5">
                          Setup
                        </span>
                      </div>
                      <div className="text-xs font-mono font-bold text-purple-700">
                        + {monthly}
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {sys.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectPkg(sys.name, marketLabel)}
                    className="w-full py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-purple-600 text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>{sys.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* end desktop grid */}
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-50 text-purple-700 border border-purple-200/80 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            CLIENT SYSTEMS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Systems We've Deployed.
          </h2>
          <p className="mt-2 text-slate-500 text-xs sm:text-sm">
            Live AI agents and autonomous platforms built for real businesses.
          </p>
        </div>

        {/* 3D Circular Carousel Container */}
        <div className="w-full h-[500px] sm:h-[550px] md:h-[580px] relative overflow-hidden flex items-center justify-center select-none">
          <CircularCarousel
            items={FEATURED_PROJECTS}
            preset="cylinder"
            intro="rise"
            cardWidth={260}
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
      className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Minimalist Context with Direct Arrow Pointer */}
          <div className="reveal-left lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-50 text-purple-700 border border-purple-200/80 mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
              DEPLOYMENT PROTOCOL
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              From Audit to Live System.
            </h2>

            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
              Every system deliverable calibrated, stress-tested, and launched with zero downtime to your existing operations.
            </p>

            {/* Clean Arrow Pointer to Folder */}
            <div className="mt-8 flex items-center gap-3">
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-purple-100/70 border border-purple-200 text-purple-900 shadow-sm">
                <span className="text-xs font-mono font-bold tracking-tight">
                  Hover or click the dossier
                </span>
                <ArrowRight className="w-4 h-4 text-purple-700 animate-pulse" />
              </div>
            </div>

            {/* Clean CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-purple-700 text-white text-xs font-mono font-semibold transition-all shadow-md group"
              >
                <span>Book a Free AI Growth Audit</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
              <span className="text-xs text-slate-500 font-mono">14-Day Delivery SLA</span>
            </div>
          </div>

          {/* Right Column: Folder on desktop, clean list on mobile */}
          <div className="reveal-right lg:col-span-7 flex flex-col items-center justify-center relative overflow-hidden">

            {/* Mobile: clean numbered step list */}
            <div className="lg:hidden w-full space-y-2">
              {DELIVERABLES.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-[10px] font-bold flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item.replace(/^\d+ • /, "")}</span>
                </div>
              ))}
              <button
                onClick={onOpenAudit}
                className="w-full mt-2 py-3 rounded-full bg-slate-900 hover:bg-purple-700 text-white text-xs font-semibold transition-all cursor-pointer"
              >
                Book a Free AI Growth Audit →
              </button>
            </div>

            {/* Desktop: FolderFloat animation — contained in fixed height box */}
            <div className="hidden lg:flex flex-col items-center justify-center w-full" style={{ height: 520 }}>
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
              {selectedDeliverable && (
                <div className="mt-6 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-purple-200 text-xs font-mono text-purple-900 shadow-sm animate-in fade-in">
                  Active: <span className="font-bold">{selectedDeliverable}</span>
                </div>
              )}
            </div>
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
      quote:
        "Buildicy answered WhatsApp enquiries in under 20 seconds while our team was off the clock. Within the first month, we booked 14 verified private viewings without adding a single extra staff member.",
      author: "Marcus Vance",
      role: "Managing Director",
      company: "Prime Realty Partners",
      metric: "+14 Viewings/Mo",
    },
    {
      quote:
        "Before Buildicy, our closers spent half their day screening tire-kickers. Now, every call on our calendar is already budget-qualified with financing verified.",
      author: "Elena Rostova",
      role: "Head of Operations",
      company: "Prestige Advisory Group",
      metric: "100% ICP Qualified",
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
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 block mb-2">
            • Named Case Study & Impact
          </span>
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
                  <span>
                    <strong>Lost warm prospects:</strong> Slow replies and missed after-hours enquiries can send warm buyers to competitors.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-sm shrink-0">✕</span>
                  <span>
                    <strong>Hours of response delay:</strong> Enquiries sat in unread inboxes until the next morning when intent was already cold.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-sm shrink-0">✕</span>
                  <span>
                    <strong>Wasted rep hours:</strong> Sales team spent 15+ hours weekly answering basic FAQs for unqualified inquiries.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-sm shrink-0">✕</span>
                  <span>
                    <strong>High appointment drop-off:</strong> Lack of instant calendar slotting and reminder sequences led to missed consultations.
                  </span>
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
                  <span>
                    <strong>Sub-20s multi-channel reply:</strong> Inbound calls and WhatsApp messages get answered instantly 24/7 with interactive qualification.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-sm shrink-0">✓</span>
                  <span>
                    <strong>Autonomous qualification:</strong> AI verifies budget, timeline, and purchase requirements before offering calendar slots.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-sm shrink-0">✓</span>
                  <span>
                    <strong>Direct calendar booking:</strong> Vetted buyers schedule meetings straight to the sales rep's calendar.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-sm shrink-0">✓</span>
                  <span>
                    <strong>Automated reminders:</strong> Multi-channel WhatsApp confirmation briefings keep appointment attendance near 90%.
                  </span>
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

        {/* Testimonials Block */}
        <div className="mt-12 pt-10 border-t border-slate-200">
          <div className="mb-6">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 block mb-1">
              Client Feedback & Proof
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              What partners say after deployment.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <p className="text-sm text-slate-700 italic leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{t.author}</div>
                    <div className="text-slate-500">{t.role}, {t.company}</div>
                  </div>
                  <span className="font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md text-[11px]">
                    {t.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
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

function MinimalistFAQ({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      topic: "Ownership",
      q: "Do we own the AI system, prompts, and workflows?",
      a: "Yes, 100%. All custom prompts, pipeline architectures, conversational dialogue trees, and automation code are transferred directly to your company upon launch. You are never locked into proprietary black-box software.",
    },
    {
      topic: "Data & Privacy",
      q: "How is our business and customer data protected?",
      a: "Your lead records, customer transcripts, and CRM data remain 100% confidential and reside within your private accounts. We implement end-to-end encryption and enterprise privacy controls.",
    },
    {
      topic: "Channels",
      q: "Which communication channels can Buildicy connect?",
      a: "We deploy across WhatsApp Business API, live website chat, telephony & inbound voice agents, email, and social messaging (Instagram DMs, LinkedIn).",
    },
    {
      topic: "Integrations",
      q: "Which CRMs, calendars, and sales tools do you integrate with?",
      a: "We build seamless 2-way sync with HubSpot, GoHighLevel (GHL), Salesforce, Zoho, Pipedrive, Google Sheets, Calendly, Cal.com, and custom PostgreSQL/REST APIs.",
    },
    {
      topic: "Support",
      q: "What ongoing support is included after the 14-day launch?",
      a: "Every tier includes continuous transcript monitoring, periodic model tuning, SLA response auditing, and dedicated technical support to keep conversion rates compounding.",
    },
  ];

  return (
    <section
      id="faq"
      className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[900px]">
        <div className="reveal-blur text-center mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-700 block mb-2">
            FAQ • Ownership, Data, Channels, Integrations & Support
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Everything you need to know about ownership, integrations, and deployment.
          </p>
        </div>

        <div className="divide-y divide-slate-200">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={faq.q} className="py-4">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left py-2 font-display text-base sm:text-lg font-bold text-slate-900 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-100 shrink-0">
                      {faq.topic}
                    </span>
                    <span>{faq.q}</span>
                  </div>
                  <span className="text-slate-400 text-sm ml-4 shrink-0">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-1 sm:pl-16">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {docs.map((doc, i) => (
              <div
                key={doc.title}
                className="reveal-zoom group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-sm transition-all duration-200"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
                      {doc.ext}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900 truncate">{doc.title}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{doc.desc}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {doc.preview && (
                    <button
                      onClick={() => setPreviewing(doc.preview!)}
                      className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-purple-600 hover:border-purple-300 transition-colors cursor-pointer"
                      title="Preview"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <a
                    href={doc.file}
                    download
                    className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white hover:bg-purple-700 transition-colors cursor-pointer"
                    title="Download"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
   FINAL CTA
   ========================================================================= */

function FinalCTA({ onOpenAudit }: { onOpenAudit: () => void }) {
  const deliverables = [
    {
      title: "Lead Leakage Audit",
      desc: "Identify exactly where enquiries are dropping off across WhatsApp, website, and phone calls.",
    },
    {
      title: "Custom AI System Blueprint",
      desc: "Map the right AI system architecture, conversational dialogue flows, and CRM integration.",
    },
    {
      title: "Fixed Implementation Estimate",
      desc: "Guaranteed 14-day zero-downtime implementation roadmap with fixed transparent pricing.",
    },
  ];

  return (
    <section className="px-6 py-20 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-50 text-purple-700 border border-purple-200/80 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
          FREE 30-MINUTE AUDIT
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Get Your Free Lead-Leak Audit
        </h2>
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          In 30 minutes, we’ll identify where enquiries are being missed, map the right AI system, and give you a fixed implementation estimate.
        </p>

        {/* Explicit Deliverables Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <span className="text-purple-600 font-mono font-bold text-xs block mb-1">
                  0{idx + 1} • Deliverable
                </span>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={onOpenAudit}
            className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-sm font-semibold transition-all shadow-md shadow-purple-600/20 cursor-pointer"
          >
            Get Your Free Lead-Leak Audit
          </button>
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

        {/* Studio Systems & Live Ecosystem Portals (Minimalist) */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
              Live Systems & Portals
            </span>
            <span className="text-xs font-mono text-white/30 hidden sm:inline">
              Production consoles & internal engines
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {PORTAL_ITEMS.map((portal) => (
              <a
                key={portal.id}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-purple-500/40 text-xs font-mono text-white/70 hover:text-white transition-all duration-200"
              >
                <span>{portal.name}</span>
                <span className="text-[10px] text-white/30 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white/10 mt-12 md:mt-16 pt-8 md:pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Based in... */}
          <div className="text-xs md:text-sm font-mono text-white/50 space-y-1">
            <div>Based in India.</div>
            <div>Working worldwide.</div>
          </div>

          {/* Nav Links + Back to top */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-xs md:text-sm font-medium text-white/70">
            <a href="#problem" className="hover:text-white transition-colors">
              Follow-Up
            </a>
            <a href="#dashboard" className="hover:text-white transition-colors">
              Autonomous Engine
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
