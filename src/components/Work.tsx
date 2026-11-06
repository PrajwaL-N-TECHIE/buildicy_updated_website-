import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";

interface WorkSystem {
  id: string;
  name: string;
  label: string;
  category: string;
  badge: string;
  year: string;
  description: string;
  outcome: string;
  image: string;
}

const PAGES: WorkSystem[][] = [
  // Page 1 (1 / 3)
  [
    {
      id: "markeee",
      name: "MARKEEE",
      label: "Markeee",
      category: "AI Marketing Automation",
      badge: "SaaS",
      year: "2025",
      description: "Unified AI marketing platform with automated workflows, lead management and campaign automation.",
      outcome: "3× faster lead response",
      image: "/thumbnails/markeee.jpg",
    },
    {
      id: "bizbrain",
      name: "BIZBRAIN",
      label: "BizBrain",
      category: "AI CRM Platform",
      badge: "SaaS",
      year: "2025",
      description: "Centralized AI CRM that unifies customer management, sales workflows and business operations.",
      outcome: "−60% manual CRM work",
      image: "/thumbnails/bizbrain.jpg",
    },
    {
      id: "growzo",
      name: "GROWZO",
      label: "GrowZO",
      category: "AI Cold Calling & Sales",
      badge: "AI Voice",
      year: "2025",
      description: "Autonomous AI voice agent that handles outbound cold calls, qualifications, and live bookings 24/7.",
      outcome: "10× outreach volume • −80% manual sales effort",
      image: "/thumbnails/growzo.jpg",
    },
  ],
  // Page 2 (2 / 3)
  [
    {
      id: "vibestay",
      name: "VIBESTAY",
      label: "VibeStay",
      category: "Hospitality Platform",
      badge: "Platform",
      year: "2025",
      description: "Modern hospitality platform for discovering and booking boutique accommodation experiences.",
      outcome: "+65% user engagement",
      image: "/thumbnails/vibestay.jpg",
    },
    {
      id: "campus-aid-buddy",
      name: "CAMPUS AID BUDDY",
      label: "Campus Aid Buddy",
      category: "Student Campus Hub",
      badge: "Platform",
      year: "2024",
      description: "Centralized hub for college students covering academic resources, campus activities and automated student support.",
      outcome: "+70% resource accessibility",
      image: "/thumbnails/campus-aid-buddy.jpg",
    },
    {
      id: "tuition-os",
      name: "TUITION OS",
      label: "Tuition OS",
      category: "Education SaaS",
      badge: "SaaS",
      year: "2024",
      description: "Comprehensive SaaS platform for tuition centres to manage students, attendance, fee collections, and administrative workflows.",
      outcome: "−65% admin manual work",
      image: "/thumbnails/tuition-os.jpg",
    },
  ],
  // Page 3 (3 / 3)
  [
    {
      id: "clientsync-os",
      name: "CLIENTSYNC OS",
      label: "ClientSync OS",
      category: "Client Management OS",
      badge: "SaaS",
      year: "2024",
      description: "Unified client management OS with real-time communication, workflow coordination and milestone tracking.",
      outcome: "−50% fragmented workflows",
      image: "/thumbnails/clientsync-os.jpg",
    },
    {
      id: "kindred",
      name: "KINDRED",
      label: "Kindred",
      category: "Community Platform",
      badge: "Platform",
      year: "2024",
      description: "Modern community engagement platform featuring personalized interaction feeds and seamless UX.",
      outcome: "+80% user retention",
      image: "/thumbnails/kindred.jpg",
    },
    {
      id: "rs-technologies",
      name: "RS TECHNOLOGIES",
      label: "RS Technologies",
      category: "Technology Website",
      badge: "Platform",
      year: "2024",
      description: "Professional business website with clear capability showcase, brand identity and enterprise inquiry routing.",
      outcome: "+90% online credibility",
      image: "/thumbnails/rs-technologies.jpg",
    },
  ],
];

export function Work({ onOpenAudit }: { onOpenAudit?: (pkgName?: string) => void }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<WorkSystem | null>(null);
  const [isClient, setIsClient] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Lock body scroll and handle Escape key when project preview modal is open
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

  const currentSystems: WorkSystem[] = PAGES[currentPage] ?? (PAGES[0] as WorkSystem[]);
  const activeSystem: WorkSystem =
    (hoveredIdx !== null ? currentSystems[hoveredIdx] : currentSystems[0]) ??
    (currentSystems[0] as WorkSystem);

  const handlePrev = () => {
    setCurrentPage((p) => (p > 0 ? p - 1 : PAGES.length - 1));
    setHoveredIdx(null);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    setCurrentPage((p) => (p < PAGES.length - 1 ? p + 1 : 0));
    setHoveredIdx(null);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const goToPage = (pageIdx: number) => {
    setCurrentPage(pageIdx);
    setHoveredIdx(null);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleTrackScroll = () => {
    if (!trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    const cardWidth = trackRef.current.firstElementChild?.clientWidth || 280;
    const newIdx = Math.round(scrollLeft / (cardWidth + 14));
    const safeIdx = Math.max(0, Math.min(newIdx, currentSystems.length - 1));
    setHoveredIdx(safeIdx);
  };

  return (
    <section
      id="systems"
      className="relative z-10 px-5 sm:px-6 py-16 sm:py-20 md:px-10 md:py-32 bg-[#faf8f5] text-slate-900 border-t border-slate-200 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header Block matching reference */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 mb-8 sm:mb-10 md:mb-14">
          {/* Left Title */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-purple-700 font-bold block mb-2 sm:mb-3">
              ARCHITECTURE
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[0.98]">
              Founder-built
              <br />
              work.
            </h2>
          </div>

          {/* Right Subtitle */}
          <div className="text-left sm:text-right pb-1">
            <div className="text-xs sm:text-sm font-mono tracking-wider uppercase text-slate-400">
              OUR PORTFOLIO /{" "}
              <span className="text-purple-600 font-bold tracking-widest transition-colors duration-200">
                {activeSystem.name}
              </span>
            </div>
            <div className="text-[11px] sm:text-xs font-mono text-slate-400 mt-1">
              9 systems • Slide {currentPage + 1} of 3
            </div>
          </div>
        </div>

        {/* Work Images Row: Mobile Touch-Snap Horizontal Carousel & Desktop 3-Column Grid */}
        <div
          ref={trackRef}
          onScroll={handleTrackScroll}
          className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar pb-2 md:pb-0 px-1 -mx-1 items-stretch"
        >
          {currentSystems.map((system, idx) => (
            <div
              key={system.id}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setSelectedProject(system)}
              className="group relative w-[85vw] sm:w-[360px] md:w-auto shrink-0 snap-center md:snap-align-none h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={system.image}
                alt={system.label}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Mobile-Friendly Informational Overlay */}
              <div className="md:hidden absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-4 sm:p-5 pt-16 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold bg-purple-900/70 border border-purple-400/30 px-2 py-0.5 rounded-full">
                    {system.category}
                  </span>
                  <span className="text-[10px] font-mono text-white/60">
                    {system.badge} • {system.year}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-white tracking-tight">
                    {system.label}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-purple-300 font-semibold bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
                <p className="text-xs text-white/75 font-light mt-1 line-clamp-2 leading-relaxed">
                  {system.description}
                </p>
              </div>

              {/* Desktop subtle hover vignette matching reference screenshot */}
              <div className="hidden md:block absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-between text-[11px] font-mono text-slate-400 mt-3 px-1">
          <span>← Swipe to explore projects →</span>
          <span className="text-purple-600 font-medium">
            Tap project to inspect
          </span>
        </div>

        {/* Bottom Pagination & Counter Row */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex items-center justify-between">
          {/* Left: Pill & Dots Indicators */}
          <div className="flex items-center gap-2">
            {PAGES.map((_, pageIdx) => (
              <button
                key={pageIdx}
                type="button"
                onClick={() => goToPage(pageIdx)}
                aria-label={`Go to slide ${pageIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentPage === pageIdx
                    ? "w-6 h-1.5 bg-slate-900"
                    : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Right: Arrows and 1 / 3 counter */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full border border-slate-300 hover:border-slate-900 hover:text-slate-900 flex items-center justify-center text-xs font-mono text-slate-600 transition-colors cursor-pointer active:scale-95"
            >
              ←
            </button>
            <span className="text-xs font-mono text-slate-500 select-none tracking-wider px-1">
              {currentPage + 1} / {PAGES.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full border border-slate-300 hover:border-slate-900 hover:text-slate-900 flex items-center justify-center text-xs font-mono text-slate-600 transition-colors cursor-pointer active:scale-95"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Project Case Preview Modal (Mounted to document.body via Portal to guarantee 100% viewport centering on mobile!) */}
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
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer text-sm font-bold z-10"
                aria-label="Close details"
              >
                ✕
              </button>

              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-200">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.label}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono">
                  <span>{selectedProject.badge}</span>
                  <span>•</span>
                  <span>{selectedProject.year}</span>
                </div>
              </div>

              {/* Title & Category */}
              <div className="mb-3">
                <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block mb-1.5">
                  {selectedProject.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {selectedProject.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-light leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Documented Outcome Pill */}
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

              {/* Actions */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    const label = selectedProject.label;
                    setSelectedProject(null);
                    onOpenAudit?.(label);
                  }}
                  className="flex-1 rounded-full bg-purple-600 hover:bg-purple-700 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Book Free AI Growth Audit</span>
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
