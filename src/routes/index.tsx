import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Work } from "../components/Work";
import { DocsSection } from "../components/DocsSection";
import { PORTAL_ITEMS } from "../config/links";
import { HeroTypewriter } from "../components/HeroTypewriter";
import { AuditBookingModal } from "../components/AuditBookingModal";



export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Buildicy — AI Growth Systems Studio | Turn Your Business Into A Growth System" },
      {
        name: "description",
        content:
          "Thoughtful AI systems engineered to capture, qualify, and convert leads 24/7. AI Funnel Systems, AI Receptionists, Automation Engines, and Digital Product Systems built around your business.",
      },
      {
        name: "keywords",
        content:
          "Buildicy, AI Growth Systems Studio, AI Receptionist, AI Voice Agent, AI Telephony, Autonomous Lead Generation, AI Funnel System, Workflow Automation, SaaS Product Engineering, WhatsApp AI Agent, India AI Agency",
      },
      { name: "author", content: "Buildicy Studio" },
      { name: "creator", content: "Buildicy" },
      { name: "publisher", content: "Buildicy" },
      // Open Graph
      { property: "og:site_name", content: "Buildicy" },
      { property: "og:title", content: "Buildicy — AI Growth Systems Studio" },
      {
        property: "og:description",
        content:
          "Thoughtful AI systems engineered to capture, qualify, and convert leads 24/7. Built around your business.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.buildicy.com/" },
      { property: "og:image", content: "https://www.buildicy.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Buildicy — AI Growth Systems Studio" },
      { property: "og:locale", content: "en_US" },
      // Twitter
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
  }),
});

const METRICS: { value: number; suffix: string; prefix?: string; label: string; decimals?: number }[] = [
  { value: 9, suffix: "+", label: "Founder-Built AI Systems" },
  { value: 4, suffix: "", label: "Core Growth Services" },
  { value: 24, suffix: "/7", label: "AI Lead Response & Booking" },
  { value: 14, suffix: "-Day", label: "Typical Launch Timeline" },
];

const SERVICES = [
  { n: "01", title: "AI Funnel System", body: "Turn traffic into qualified leads and booked calls." },
  { n: "02", title: "AI Receptionist", body: "Answer calls and WhatsApp 24/7, capture leads, and book appointments." },
  { n: "03", title: "AI Automation", body: "Automate follow-ups, reminders, CRM updates, and repetitive work." },
  { n: "04", title: "Digital Product System", body: "Sell and deliver courses, templates, and digital products automatically." },
];

const INDIVIDUAL_SERVICES = [
  { id: "ai-funnel-system", name: "AI Funnel System", description: "Turn traffic into qualified leads and booked calls.", indiaSetup: "₹35,000", indiaMonthly: "₹7,000/month", intlSetup: "$1,500", intlMonthly: "$400/month", pricingType: "setup_monthly" as const, deliverables: ["One landing page + lead capture", "AI qualification + automated follow-up", "Calendar booking + CRM tracking"], note: null },
  { id: "ai-receptionist", name: "AI Receptionist", description: "Answer enquiries and book appointments automatically.", indiaSetup: "₹20,000", indiaMonthly: "₹7,000/month", intlSetup: "$750", intlMonthly: "$350/month", pricingType: "setup_monthly" as const, deliverables: ["One AI voice OR WhatsApp agent", "Business FAQs + lead capture", "Booking + human handover"], note: "Additional channels quoted separately. Usage extra." },
  { id: "ai-automation", name: "AI Automation", description: "Automate repetitive work across your business tools.", indiaSetup: "₹25,000–₹75,000", indiaMonthly: "₹5,000–₹15,000/month", intlSetup: "$1,000–$4,000", intlMonthly: "$300–$1,000/month", pricingType: "setup_monthly" as const, deliverables: ["Workflow mapping + integrations", "Follow-ups + CRM updates", "Notifications + monitoring"], note: "Final quote depends on workflow complexity." },
  { id: "digital-product-system", name: "Digital Product System", description: "Sell and deliver your digital products automatically.", indiaSetup: "₹25,000", indiaMonthly: "₹4,000/month", intlSetup: "$1,200", intlMonthly: "$250/month", pricingType: "setup_monthly" as const, deliverables: ["One product sales page + checkout", "Automated product delivery", "Purchase confirmation + follow-up"], note: "Product content creation is not included." },
  { id: "digital-marketing", name: "Digital Marketing", description: "Bring targeted traffic to your business.", indiaSetup: null, indiaMonthly: "₹20,000–₹50,000/month", intlSetup: null, intlMonthly: "$1,000–$2,500/month", pricingType: "monthly_only" as const, deliverables: ["Campaign strategy + ads management", "Conversion tracking", "Reporting + optimization"], note: "Ad spend and creative production are separate." },
  { id: "website-landing-page", name: "Website / Landing Page", description: "A focused digital presence for your business.", indiaSetup: "₹15,000–₹30,000 one-time", indiaMonthly: null, intlSetup: "$500–$1,000 one-time", intlMonthly: null, pricingType: "one_time" as const, deliverables: ["Responsive design", "Enquiry form", "Basic analytics setup"], note: "Page count and functionality confirmed before quoting." },
];

const PACKAGES = [
  { id: "lead-machine", name: "AI Lead Machine", popular: false, indiaSetup: "₹40,000", indiaMonthly: "₹8,000/month", intlSetup: "$2,000", intlMonthly: "$500/month", bestFor: "Best for businesses that want more qualified leads and bookings.", deliverables: ["Custom AI Lead Capture Landing Funnel", "Interactive Qualification & Scoring Form", "Automated Calendar Booking Integration", "Instant WhatsApp & Email Lead Notifications", "Automated Follow-up Sequences"] },
  { id: "front-desk", name: "AI Front Desk + Funnel", popular: true, tagline: "Most Popular", indiaSetup: "₹65,000", indiaMonthly: "₹15,000/month", intlSetup: "$3,500", intlMonthly: "$900/month", bestFor: "Best for businesses that miss calls and need AI reception.", deliverables: ["Everything in AI Lead Machine", "24/7 AI Voice Receptionist for Inbound Calls", "24/7 WhatsApp AI Chat Agent for Instant Replies", "Missed Call to Text/WhatsApp Auto-Recovery", "Live Lead Triage & Calendar Booking over Voice & Chat", "CRM Contact Sync & Activity Logging"] },
  { id: "growth-engine", name: "Complete AI Growth Engine", popular: false, indiaSetup: "₹1,25,000", indiaMonthly: "₹40,000/month", intlSetup: "$6,000", intlMonthly: "$2,000/month", bestFor: "Best for businesses ready to scale with ads, AI, and automation.", deliverables: ["Full Multi-Channel Funnel Architecture", "Autonomous Voice & WhatsApp Receptionists", "End-to-End CRM, Billing & Task Automation", "Ad Ingestion & Retargeting Lead Pipeline", "Custom Client Dashboard & Analytics", "Bi-Weekly Performance Audits & Optimization"] },
];

const PIPELINE_NODES = [
  { step: "01", name: "Audit", sub: "Map Leaks", timeline: "Days 1–3", metric: "48h Turnaround", detail: "Audit drop-offs & blueprint system architecture." },
  { step: "02", name: "Architect", sub: "Calibrate AI", timeline: "Days 4–6", metric: "Dialogue Trees", detail: "Script conversational agents & qualification logic." },
  { step: "03", name: "Assemble", sub: "Wire APIs", timeline: "Days 7–10", metric: "Full-Stack Sync", detail: "Connect funnels, calendars, and CRM automation." },
  { step: "04", name: "Deploy", sub: "Go Live", timeline: "Days 11–14", metric: "Zero Downtime", detail: "Live routing active with 24/7 instant response." },
  { step: "05", name: "Scale", sub: "Compound Yield", timeline: "Continuous", metric: "Compounding ROI", detail: "Continuous transcript audits & conversion tuning." },
];

const WHATSAPP_URL = `https://wa.me/919150890205?text=${encodeURIComponent("Hi Buildicy, I'd like to book a free 30-minute AI Growth Audit for my business.")}`;

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
    const observeAll = () => {
      document
        .querySelectorAll(".reveal:not(.is-in), .reveal-zoom:not(.is-in), .reveal-left:not(.is-in), .reveal-right:not(.is-in), .reveal-scale:not(.is-in), .img-reveal:not(.is-in), .word-inner:not(.is-in), .stagger-child:not(.is-in)")
        .forEach((el) => observer.observe(el));
    };
    observeAll();
    let moRaf: number | null = null;
    const mo = new MutationObserver(() => {
      if (moRaf) return;
      moRaf = requestAnimationFrame(() => {
        observeAll();
        moRaf = null;
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mo.disconnect();
      if (moRaf) cancelAnimationFrame(moRaf);
    };
  }, []);
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

function Counter({ value, suffix, prefix = "", decimals = 0 }: { value: number; suffix: string; prefix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return; io.disconnect();
      const start = performance.now();
      const tick = (t: number) => { const p = Math.min((t - start) / 1600, 1); setN(value * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    io.observe(el); return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{prefix}{n.toFixed(decimals)}<span className="text-purple-600">{suffix}</span></span>;
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

function MobileHeroGlobe() {
  return (
    <div className="lg:hidden w-full flex justify-center mt-8 mb-2">
      <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22)_0%,transparent_70%)] rounded-full" />
        <WebGLParticleGlobe />
      </div>
    </div>
  );
}


const GLOBAL_HUBS = [
  { id: "delhi", name: "New Delhi", lat: 28.6139, lng: 77.209, color: "#ffffff", size: 0.95 },
  { id: "bangalore", name: "Bangalore", lat: 12.9716, lng: 77.5946, color: "#ffffff", size: 0.95 },
  { id: "mumbai", name: "Mumbai", lat: 19.0760, lng: 72.8777, color: "#ffffff", size: 0.9 },
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
  { order: 2, startLat: 25.2048, startLng: 55.2708, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.30, color: "#c084fc" },
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

    // Pause WebGL rendering loop when scrolled off-screen to save 100% of mobile CPU/GPU
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
            antialias: !isMobile,
            alpha: true,
            powerPreference: "high-performance",
          });
          renderer.setSize(width, height);
          renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));
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

          // Globe with clearly visible beacon dots and synchronized flight arcs
          const globe = new ThreeGlobe()
            .showAtmosphere(true)
            .atmosphereColor("#c084fc")
            .atmosphereAltitude(0.20)
            .arcsData(SAMPLE_ARCS)
            .arcColor((e: any) => e.color)
            .arcAltitude((e: any) => e.arcAlt)
            .arcStroke(0.65)
            .arcDashLength(0.45)
            .arcDashGap(2.2)
            .arcDashInitialGap((e: any) => e.order * 0.7)
            .arcDashAnimateTime(1100)
            // Visible City Beacon Dots
            .pointsData(GLOBAL_HUBS)
            .pointLat((d: any) => d.lat)
            .pointLng((d: any) => d.lng)
            .pointColor(() => "#ffffff")
            .pointAltitude(0.028)
            .pointRadius((d: any) => d.size || 0.9);

          // Concentric Wave Rings Originating Directly From the City Dots
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
                  .hexPolygonResolution(isMobile ? 2 : 3)
                  .hexPolygonMargin(0.35)
                  .hexPolygonAltitude(0.005)
                  .hexPolygonColor(() => "rgba(255,255,255,0.92)");
              }
            })
            .catch(() => {});

          const globeGroup = new THREE.Group();
          globeGroup.add(globe);
          scene.add(globeGroup);

          // --- Interactive Drag & Fast Dynamic Rotation Like Before ---
          let isDragging = false;
          let prevX = 0, prevY = 0;
          let userRotY = 0, userRotX = 0.08;
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
            if (!isVisible) return; // Skip rendering when off-screen!
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.35)_0%,rgba(168,85,247,0.18)_55%,transparent_80%)] rounded-full filter blur-2xl pointer-events-none" />
      <div
        ref={mountRef}
        className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing touch-none"
      />
    </div>
  );
}

function Index() {
  useReveal();
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [selectedAuditPkg, setSelectedAuditPkg] = useState<string | null>(null);
  const [selectedMarket, setSelectedMarket] = useState<string>("India — INR");
  const handleOpenAudit = (pkg?: string, market?: string) => { setSelectedAuditPkg(pkg || null); if (market) setSelectedMarket(market); setAuditModalOpen(true); };
  return (
    <div className="bg-background text-foreground relative selection:bg-purple-600 selection:text-white page-enter">
      <Nav onOpenAudit={() => handleOpenAudit()} />
      <main className="relative">
        <Hero onOpenAudit={() => handleOpenAudit()} />
        <Metrics />
        <Services />
        <Process />
        <Packages onSelectPkg={(pkg, market) => handleOpenAudit(pkg, market)} />
        <Work onOpenAudit={() => handleOpenAudit()} />
        <DocsSection onOpenAudit={() => handleOpenAudit()} />
      </main>
      <Footer onOpenAudit={() => handleOpenAudit()} />
      {auditModalOpen && (<AuditBookingModal initialPackage={selectedAuditPkg} initialMarket={selectedMarket} onClose={() => setAuditModalOpen(false)} />)}

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

function Nav({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
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
          <img src="/logo.png" alt="Buildicy Logo" className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          <div className="flex items-center gap-1.5">
            <span className="font-display text-2xl font-bold tracking-tight text-slate-900">Buildicy</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 lg:gap-8 text-sm font-medium text-slate-700 md:flex items-center" aria-label="Primary">
          <a href="#services" className="link-line hover:text-slate-900 transition-colors">Services</a>
          <a href="#process" className="link-line hover:text-slate-900 transition-colors">Pipeline</a>
          <a href="#packages" className="link-line hover:text-slate-900 transition-colors">Packages</a>
          <a href="#systems" className="link-line hover:text-slate-900 transition-colors">Founder Systems</a>
          <a href="#docs" className="link-line hover:text-slate-900 transition-colors">Documentation</a>
          <Link to="/careers" className="link-line hover:text-slate-900 transition-colors">Careers</Link>
          <Link to="/contact" className="link-line hover:text-slate-900 transition-colors">Contact</Link>
        </nav>

        {/* Action Button & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={onOpenAudit} className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-slate-900 px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-purple-600 hover:shadow-lg cursor-pointer shrink-0">
            <span className="hidden sm:inline">Book Free AI Growth Audit</span>
            <span className="sm:hidden">Book Audit</span>
            <Arrow className="transition-transform group-hover:rotate-45" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
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

      {/* Mobile Menu Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-[#faf8f5]/98 backdrop-blur-2xl z-50 flex flex-col justify-between p-6 overflow-y-auto border-t border-slate-200/80 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2.5 text-base font-semibold text-slate-800 pt-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Services</span>
              <span className="text-xs font-mono text-purple-700">01</span>
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Pipeline & Methodology</span>
              <span className="text-xs font-mono text-purple-700">02</span>
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Pricing & Packages</span>
              <span className="text-xs font-mono text-purple-700">03</span>
            </a>
            <a
              href="#systems"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Founder Systems & Work</span>
              <span className="text-xs font-mono text-purple-700">04</span>
            </a>
            <a
              href="#docs"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Documentation & Decks</span>
              <span className="text-xs font-mono text-purple-700">05</span>
            </a>
            <Link
              to="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Careers (We're Hiring)</span>
              <span className="text-xs font-mono font-bold text-purple-700">06</span>
            </Link>
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

function Hero({ onOpenAudit }: { onOpenAudit: () => void }) {
  const isDesktop = useIsDesktop();

  return (
    <section id="top" className="relative min-h-[92vh] w-full bg-[#faf8f5] text-slate-900 flex flex-col justify-center overflow-hidden px-6 pt-36 pb-20 md:px-12 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.10)_0%,rgba(99,102,241,0.03)_40%,#faf8f5_75%)] pointer-events-none" />
      <div className="cinematic-noise opacity-30" />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 order-1 flex flex-col justify-center items-start text-left max-w-3xl pl-0 sm:pl-8 lg:pl-12 mt-4 lg:mt-16">
          <h1 className="font-sans text-[clamp(2.2rem,5.6vw,5.5rem)] leading-[1.12] tracking-tight text-slate-900 font-extrabold text-left animate-in fade-in duration-500">
            Turn Your Business Into a <HeroTypewriter />
          </h1>
          <p className="mt-4 sm:mt-6 max-w-xl text-slate-600 text-base md:text-xl leading-relaxed font-normal text-left animate-in fade-in duration-700">
            We install AI growth systems that capture leads, respond instantly, qualify prospects, book appointments, and remove manual work.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto animate-in fade-in duration-700">
            <button onClick={onOpenAudit} className="w-full sm:w-auto text-center rounded-full bg-purple-600 text-white px-7 py-3.5 sm:py-4 text-sm font-semibold transition-all hover:bg-purple-700 hover:shadow-lg active:scale-95 shadow-md shadow-purple-600/20 cursor-pointer">Book Free AI Growth Audit</button>
            <a href="#systems" className="w-full sm:w-auto text-center rounded-full border border-slate-300 bg-white px-6 py-3.5 sm:py-4 text-sm font-semibold text-slate-800 transition-all hover:bg-purple-50 hover:border-purple-300 shadow-2xs">View Our Systems</a>
          </div>
          {!isDesktop && <MobileHeroGlobe />}
        </div>
        <div className="lg:col-span-4 order-2 hidden lg:flex items-center justify-center min-h-[480px] relative pointer-events-auto">
          <div className="w-[340px] h-[340px] xl:w-[420px] xl:h-[420px] relative flex items-center justify-center">
            {isDesktop && <WebGLParticleGlobe />}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="border-y border-slate-200 bg-[#faf8f5] px-6 md:px-10 text-slate-900">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {METRICS.map((m, i) => (
          <div key={m.label} className={`py-12 md:py-16 ${i ? "md:border-l" : ""} ${i % 2 ? "border-l md:border-l" : ""} border-slate-200 px-4 md:px-8`}>
            <div className="font-display text-5xl sm:text-6xl tracking-tight md:text-7xl font-extrabold text-slate-900">
              <Counter value={m.value} suffix={m.suffix} prefix={m.prefix ?? ""} decimals={m.decimals ?? 0} />
            </div>
            <p className="eyebrow mt-3 text-slate-500 font-semibold">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const SERVICE_ICONS = [
  <svg key="funnel" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path className="origin-top transition-all duration-700 group-hover:stroke-white" strokeLinecap="round" d="M6 10h36l-14 16v10l-8-4V26L6 10z" /><circle cx="24" cy="38" r="3" className="transition-all duration-500 group-hover:fill-white group-hover:stroke-white scale-0 group-hover:scale-100 origin-center" /></svg>,
  <svg key="headset" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path strokeLinecap="round" d="M10 26v-4a14 14 0 0128 0v4" className="transition-all duration-500 group-hover:stroke-white" /><rect x="6" y="24" width="8" height="12" rx="3" className="transition-all duration-500 group-hover:fill-purple-300/30 group-hover:stroke-white" /><rect x="34" y="24" width="8" height="12" rx="3" className="transition-all duration-500 group-hover:fill-purple-300/30 group-hover:stroke-white" /><path strokeLinecap="round" d="M38 36v2a6 6 0 01-6 6h-4" className="transition-all duration-500 group-hover:stroke-white" /></svg>,
  <svg key="auto" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path strokeLinecap="round" d="M40 24a16 16 0 01-27.3 11.3" className="transition-all duration-700 group-hover:stroke-white group-hover:rotate-180 origin-center" /><path strokeLinecap="round" d="M8 24a16 16 0 0127.3-11.3" className="transition-all duration-700 group-hover:stroke-white" /><path strokeLinecap="round" d="M40 16v8h-8" className="transition-all duration-500 group-hover:stroke-white" /><path strokeLinecap="round" d="M8 32v-8h8" className="transition-all duration-500 group-hover:stroke-white" /></svg>,
  <svg key="product" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><rect x="4" y="8" width="40" height="28" rx="3" className="transition-all duration-500 group-hover:stroke-white" /><path strokeLinecap="round" d="M16 44h16M24 36v8" className="transition-all duration-500 group-hover:stroke-white" /><path strokeLinecap="round" d="M18 20l4 4 8-8" className="transition-all duration-700 group-hover:stroke-white scale-0 group-hover:scale-100 origin-center" /></svg>,
];

function Services() {
  const isDesktop = useIsDesktop();

  return (
    <section id="services" className="px-6 py-16 md:px-10 md:py-36 bg-[#faf8f5] text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 order-1 hidden lg:flex items-center justify-center min-h-[480px] relative pointer-events-auto">
            <div className="w-[320px] h-[320px] xl:w-[420px] xl:h-[420px] relative flex items-center justify-center sticky top-32">
              {isDesktop && <WebGLParticleGlobe />}
            </div>
          </div>
          <div className="lg:col-span-7 order-2">
            <div className="mb-8">
              <span className="eyebrow text-purple-700 font-bold block mb-2">Services</span>
              <h2 className="reveal-zoom font-display text-4xl leading-[1.05] tracking-tight md:text-6xl text-slate-900 font-bold">Four disciplines.<br /><em className="text-slate-500 font-normal italic">One growth engine.</em></h2>
            </div>
            <ul className="border-t border-slate-200">
              {SERVICES.map((s, i) => (
                <li key={s.n} className="reveal group grid cursor-default gap-6 border-b border-slate-200 py-8 transition-all duration-500 md:grid-cols-12 md:items-center md:px-4" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="md:col-span-2 flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-2xl border border-purple-200 group-hover:border-purple-500 bg-white group-hover:bg-purple-600 transition-all duration-500 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-[0_0_20px_rgba(140,40,220,0.4)] group-hover:scale-110 text-purple-600">{SERVICE_ICONS[i]}</div>
                  </div>
                  <h3 className="font-display text-2xl transition-all duration-500 group-hover:translate-x-2 group-hover:text-purple-700 md:col-span-4 md:text-3xl text-slate-900 font-bold">{s.title}</h3>
                  <p className="text-sm text-slate-600 md:col-span-6 font-normal leading-relaxed md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Packages({ onSelectPkg }: { onSelectPkg: (name: string, market: string) => void }) {
  const [market, setMarket] = useState<"india" | "intl">("india");
  const [activeTab, setActiveTab] = useState<"services" | "packages">("services");
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const trackServicesRef = useRef<HTMLDivElement>(null);
  const trackPackagesRef = useRef<HTMLDivElement>(null);
  const trackRef = activeTab === "services" ? trackServicesRef : trackPackagesRef;
  const isIntl = market === "intl";
  const marketLabel = isIntl ? "International — USD" : "India — INR";
  const handleTabChange = (tab: "services" | "packages") => { setActiveTab(tab); setActiveMobileIdx(0); if (tab === "services" && trackServicesRef.current) trackServicesRef.current.scrollTo({ left: 0, behavior: "smooth" }); if (tab === "packages" && trackPackagesRef.current) trackPackagesRef.current.scrollTo({ left: 0, behavior: "smooth" }); };
  const scrollToCard = (index: number) => { setActiveMobileIdx(index); const ref = activeTab === "services" ? trackServicesRef : trackPackagesRef; if (ref.current) { const card = ref.current.children[index] as HTMLElement; if (card) card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" }); } };
  const handleTrackScroll = () => { if (!trackRef.current) return; const scrollLeft = trackRef.current.scrollLeft; const cardWidth = trackRef.current.firstElementChild?.clientWidth || 280; const newIdx = Math.round(scrollLeft / (cardWidth + 16)); const maxIdx = activeTab === "services" ? INDIVIDUAL_SERVICES.length - 1 : PACKAGES.length - 1; setActiveMobileIdx(Math.max(0, Math.min(newIdx, maxIdx))); };
  return (
    <section id="packages" className="relative z-20 px-6 py-20 md:px-10 md:py-36 bg-[#faf8f5] text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal text-center max-w-3xl mx-auto mb-8 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3"><span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" /></div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">Growth System Packages</h2>
          <p className="mt-2 text-slate-500 text-sm md:text-base font-light leading-relaxed">Individual AI modules or a full autonomous growth engine.</p>
          <div className="mt-5 flex justify-center">
            <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-200/80 border border-slate-300/80 shadow-2xs">
              <button type="button" onClick={() => setMarket("india")} className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${market === "india" ? "bg-purple-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"}`}>India — INR</button>
              <button type="button" onClick={() => setMarket("intl")} className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${market === "intl" ? "bg-purple-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"}`}>International — USD</button>
            </div>
          </div>
          <div className="mt-3 flex justify-center">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <button type="button" onClick={() => handleTabChange("services")} className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === "services" ? "bg-slate-900 text-white shadow-xs" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}>Individual Services</button>
              <button type="button" onClick={() => handleTabChange("packages")} className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === "packages" ? "bg-slate-900 text-white shadow-xs" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}>Growth Packages</button>
            </div>
          </div>

        </div>
        <div className={activeTab === "services" ? "block animate-in fade-in duration-200" : "hidden"}>
          <div ref={trackServicesRef} onScroll={handleTrackScroll} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar pb-4 md:pb-0 px-1 md:px-0 -mx-1 md:mx-0 items-stretch">
            {INDIVIDUAL_SERVICES.map((s, i) => {
              const setup = isIntl ? s.intlSetup : s.indiaSetup;
              const monthly = isIntl ? s.intlMonthly : s.indiaMonthly;
              return (
                <div key={s.id} className="relative rounded-3xl p-6 sm:p-7 bg-white/95 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between w-[85vw] sm:w-[350px] md:w-auto shrink-0 md:shrink snap-center md:snap-align-none">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2"><h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{s.name}</h3><span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-semibold border border-purple-100 shrink-0">0{i + 1}</span></div>
                    <p className="text-xs text-slate-500 font-light leading-relaxed min-h-[32px]">{s.description}</p>
                    <div className="my-4 p-3.5 rounded-2xl bg-[#faf8f5] border border-slate-200/80">
                      {s.pricingType === "setup_monthly" && (<div className="flex items-baseline justify-between gap-2"><div><span className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{setup}</span><span className="text-[11px] font-mono text-slate-400 uppercase ml-1">Setup</span></div><div className="text-xs sm:text-sm font-mono text-purple-700 font-bold">+ {monthly}</div></div>)}
                      {s.pricingType === "monthly_only" && (<div className="flex items-baseline justify-between gap-2"><span className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{monthly}</span><span className="text-[11px] font-mono text-slate-400">Monthly Fee</span></div>)}
                      {s.pricingType === "one_time" && (<div className="flex items-baseline justify-between gap-2"><span className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{setup}</span><span className="text-[11px] font-mono text-slate-400">One-Time Project</span></div>)}
                    </div>
                    <div className="space-y-1.5 my-3"><span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-medium block">Included Deliverables:</span>{s.deliverables.map((item) => (<div key={item} className="flex items-start gap-2 text-xs text-slate-600 font-light"><span className="text-purple-600 font-bold text-[11px] mt-0.5">✓</span><span className="leading-tight">{item}</span></div>))}</div>
                    {s.note && (<p className="text-[10px] font-mono text-slate-400 italic mt-3 pt-2 border-t border-slate-100">* {s.note}</p>)}
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100"><button onClick={() => onSelectPkg(s.name, marketLabel)} className="w-full py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-slate-900 hover:bg-purple-600 text-white cursor-pointer hover:shadow-md"><span>Discuss This Service</span><Arrow /></button></div>
                </div>
              );
            })}
          </div>
          <div className="md:hidden flex items-center justify-center gap-2 mt-4">{INDIVIDUAL_SERVICES.map((_, dotIdx) => (<button key={dotIdx} type="button" onClick={() => scrollToCard(dotIdx)} aria-label={`Go to service ${dotIdx + 1}`} className={`transition-all duration-300 rounded-full ${activeMobileIdx === dotIdx ? "w-6 h-1.5 bg-purple-600" : "w-1.5 h-1.5 bg-slate-300"}`} />))}</div>
          <p className="md:hidden text-center text-[11px] font-mono text-slate-400 mt-2">← Swipe to explore services ({activeMobileIdx + 1}/6) →</p>
        </div>

        <div className={activeTab === "packages" ? "block animate-in fade-in duration-200" : "hidden"}>
          <div ref={trackPackagesRef} onScroll={handleTrackScroll} className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar pb-4 md:pb-0 px-1 md:px-0 -mx-1 md:mx-0 items-start md:items-stretch pt-4 md:pt-0">
            {PACKAGES.map((pkg, i) => {
              const isPopular = pkg.popular;
              const setup = isIntl ? pkg.intlSetup : pkg.indiaSetup;
              const monthly = isIntl ? pkg.intlMonthly : pkg.indiaMonthly;
              return (
                <div key={pkg.id} className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 w-[85vw] sm:w-[350px] md:w-auto md:h-full shrink-0 md:shrink-0 snap-center md:snap-align-none ${isPopular ? "bg-white border-2 border-purple-500 shadow-xl shadow-purple-600/10 md:-translate-y-2 ring-1 ring-purple-300/30" : "bg-white/95 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-purple-300"}`}>
                  {isPopular && (<div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="inline-flex items-center gap-1.5 rounded-full bg-purple-600 px-3.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-md shadow-purple-600/30">★ Most Popular</span></div>)}
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2"><h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{pkg.name}</h3><span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-semibold border border-purple-100 shrink-0">Package 0{i + 1}</span></div>
                    <p className="text-xs text-slate-500 font-light leading-relaxed min-h-[32px]">{pkg.bestFor}</p>
                    <div className="my-4 p-4 rounded-2xl bg-[#faf8f5] border border-slate-200/80"><div className="flex items-baseline justify-between gap-2"><div><span className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{setup}</span><span className="text-[11px] font-mono text-slate-400 uppercase ml-1">Setup</span></div><div className="text-xs sm:text-sm font-mono text-purple-700 font-bold">+ {monthly}</div></div></div>
                    <div className="space-y-1.5 my-3"><span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-medium block">Included Deliverables:</span>{pkg.deliverables.map((item) => (<div key={item} className="flex items-start gap-2 text-xs text-slate-600 font-light"><span className="text-purple-600 font-bold text-[11px] mt-0.5">✓</span><span className="leading-tight">{item}</span></div>))}</div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100"><button onClick={() => onSelectPkg(pkg.name, marketLabel)} className={`w-full py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${isPopular ? "bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/20 hover:scale-[1.01]" : "bg-slate-900 hover:bg-purple-600 text-white"}`}><span>Discuss This Package</span><Arrow /></button></div>
                </div>
              );
            })}
          </div>
          <div className="md:hidden flex items-center justify-center gap-2 mt-4">{PACKAGES.map((_, dotIdx) => (<button key={dotIdx} type="button" onClick={() => scrollToCard(dotIdx)} aria-label={`Go to package ${dotIdx + 1}`} className={`transition-all duration-300 rounded-full ${activeMobileIdx === dotIdx ? "w-6 h-1.5 bg-purple-600" : "w-1.5 h-1.5 bg-slate-300"}`} />))}</div>
          <p className="md:hidden text-center text-[11px] font-mono text-slate-400 mt-2">← Swipe to view packages ({activeMobileIdx + 1}/3) →</p>
        </div>
        <div className="reveal mt-12 text-center max-w-2xl mx-auto"><p className="text-xs font-mono text-slate-500 leading-relaxed bg-white border border-slate-200 p-4 rounded-2xl shadow-2xs">"Prices exclude applicable taxes. Ad spend, AI usage, WhatsApp/SMS/email charges, software subscriptions, domain, and hosting are separate. Final scope is confirmed before work begins."</p></div>
      </div>
    </section>
  );
}

function MobileStepper() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [ripple, setRipple] = useState<number | null>(null);
  const handleTap = (idx: number) => { setRipple(idx); setTimeout(() => setRipple(null), 600); setActiveIdx(idx === activeIdx ? -1 : idx); };
  return (
    <div className="md:hidden">
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-purple-300 via-purple-200 to-transparent pointer-events-none" />
        <div className="space-y-0">
          {PIPELINE_NODES.map((s, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div key={s.step} className="reveal relative" style={{ transitionDelay: `${idx * 70}ms` }}>
                <button onClick={() => handleTap(idx)} className="w-full flex items-center gap-4 text-left py-4">
                  <div className="relative shrink-0 w-10 h-10">
                    {ripple === idx && (<span className="absolute inset-0 rounded-full bg-purple-400/25 animate-ping" />)}
                    <div className={`absolute inset-0 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isOpen ? "bg-purple-600 border-purple-600 shadow-[0_0_18px_rgba(168,85,247,0.55)] scale-110" : "bg-white border-purple-200 shadow-sm"}`}>
                      <span className={`text-xs font-mono font-bold transition-colors duration-300 ${isOpen ? "text-white" : "text-purple-700"}`}>{isOpen ? "✓" : s.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-between min-w-0">
                    <div>
                      <h3 className={`font-display text-base font-bold leading-tight transition-colors duration-300 ${isOpen ? "text-purple-700" : "text-slate-900"}`}>{s.name}</h3>
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5">{s.timeline}</p>
                    </div>
                    <span className={`shrink-0 ml-3 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${isOpen ? "bg-purple-100 text-purple-600 rotate-45" : "bg-slate-100 text-slate-400"}`}>+</span>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-36 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pl-14 pb-5 pr-1">
                    <p className="text-xs font-mono text-purple-600 font-semibold mb-1.5">{s.sub}</p>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">{s.detail}</p>
                    <span className="inline-block mt-2.5 text-[11px] font-mono font-semibold text-purple-600 bg-purple-50 border border-purple-100 px-2.5 py-0.5 rounded-full">{s.metric}</span>
                  </div>
                </div>
                {idx < PIPELINE_NODES.length - 1 && (<div className="ml-14 h-px bg-slate-100" />)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Process() {
  return (
    <section id="process" className="px-6 py-20 md:px-10 md:py-36 bg-[#faf8f5] text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal mb-12 md:mb-16">
          <span className="eyebrow text-purple-700 font-bold block mb-2">How It Works</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">The 14-Day<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">Growth Protocol.</span></h2>
            <p className="text-slate-500 text-sm font-light max-w-xs leading-relaxed">Five stages. Zero fluff. From audit to autonomous operations.</p>
          </div>
        </div>
        <MobileStepper />
        <div className="hidden md:block space-y-0">
          {PIPELINE_NODES.map((s, idx) => (
            <div key={s.step} className="reveal group grid grid-cols-12 items-center gap-6 py-8 border-t border-slate-200 last:border-b" style={{ transitionDelay: `${idx * 70}ms` }}>
              <div className="col-span-1"><span className="font-display text-6xl font-extrabold text-slate-100 group-hover:text-purple-200 transition-colors duration-300 select-none">{s.step}</span></div>
              <div className="col-span-3"><h3 className="font-display text-3xl font-bold text-slate-900">{s.name}</h3><p className="text-xs font-mono text-purple-600 font-semibold mt-0.5 tracking-wide">{s.sub}</p></div>
              <div className="col-span-5"><p className="text-sm text-slate-600 font-light leading-relaxed">{s.detail}</p></div>
              <div className="col-span-3 flex flex-col items-end gap-1"><span className="text-xs font-mono font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{s.timeline}</span><span className="text-xs font-mono text-purple-600 font-semibold">{s.metric}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


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
              Thoughtful AI systems engineered to capture, qualify, and convert leads 24/7. Built around your business.
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
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Pipeline
            </a>
            <a href="#packages" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#docs" className="hover:text-white transition-colors">
              Docs
            </a>
            <Link to="/careers" className="hover:text-white transition-colors">
              Careers
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
