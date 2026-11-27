import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Linkedin, Mail } from "lucide-react";
import { AuditBookingModal } from "./AuditBookingModal";
import { Navbar } from "./Navbar";

export function FoundersPage() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [portraitLoaded, setPortraitLoaded] = useState(false);
  const [portraitRevealed, setPortraitRevealed] = useState(false);
  const portraitRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (portraitRef.current?.complete && portraitRef.current.naturalWidth > 0) {
      setPortraitLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!portraitLoaded) return;
    const timer = window.setTimeout(() => {
      setPortraitRevealed(true);
    }, 140);
    return () => window.clearTimeout(timer);
  }, [portraitLoaded]);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 font-sans antialiased selection:bg-purple-600 selection:text-white relative flex flex-col justify-between">
      {/* Subtle Studio Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-1/4 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08)_0%,rgba(99,102,241,0.02)_40%,transparent_70%)]" />
        <div className="cinematic-noise opacity-20" />
      </div>

      {/* Official Buildicy Fixed Header */}
      <Navbar onOpenAudit={() => setAuditModalOpen(true)} activeRoute="founders" />

      {/* Main Page Layout */}
      <main className="relative z-10 pt-28 sm:pt-32 pb-20 md:pb-28">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-8 md:px-10">

          {/* Centered Borderless Transparent Portrait */}
          <section className="mb-14 sm:mb-20 flex flex-col items-center">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
              <div className="relative w-full flex items-center justify-center">
                {/* Subtle Ambient Radial Warmth */}
                <div
                  className={`pointer-events-none absolute inset-0 -top-6 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12)_0%,rgba(245,158,11,0.06)_40%,transparent_70%)] blur-2xl transition-all duration-1000 ease-out ${
                    portraitRevealed ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                />

                {/* Pre-load Shimmer Indicator */}
                {!portraitRevealed && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-slate-200/80 shadow-2xs backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-600 font-semibold">
                        Loading...
                      </span>
                    </div>
                  </div>
                )}

                {/* Pure Borderless Transparent-Blended Portrait */}
                <div className="relative w-full flex items-center justify-center overflow-hidden py-2">
                  <img
                    ref={portraitRef}
                    src="/The Founders_ Buildicy Sunset Portrait.png"
                    alt="The Founders — Buildicy Sunset Portrait (Prajwal N and Mayur P)"
                    onLoad={() => setPortraitLoaded(true)}
                    onError={() => setPortraitLoaded(true)}
                    className={`w-full max-w-3xl max-h-[560px] object-contain rounded-3xl transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      portraitRevealed
                        ? "scale-100 blur-0 saturate-100 opacity-100"
                        : "scale-105 blur-md saturate-75 opacity-0"
                    }`}
                    style={{
                      maskImage:
                        "radial-gradient(ellipse 92% 88% at 50% 50%, black 72%, transparent 100%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse 92% 88% at 50% 50%, black 72%, transparent 100%)",
                    }}
                  />

                  {/* Diagonal Sheen Sweep */}
                  {portraitRevealed && (
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-founders-sheen" />
                  )}
                </div>
              </div>

              {/* Minimal Wikipedia-style Caption */}
              <div
                className={`mt-4 text-center text-xs text-slate-500 font-sans transition-all duration-700 delay-200 ${
                  portraitRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                <p>
                  <strong className="text-slate-800 font-semibold">Prajwal N</strong> (CEO) and{" "}
                  <strong className="text-slate-800 font-semibold">Mayur P</strong> (CTO) — Founders of Buildicy Studio.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: The Story of Buildicy */}
          <section className="border-t border-slate-200/90 pt-14 sm:pt-16 mb-20 md:mb-28">
            <div className="max-w-3xl mx-auto text-center">
              <span className="eyebrow text-purple-600 font-semibold tracking-wider block mb-3">
                ABOUT BUILDICY // EST. FEBRUARY 2026
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.2] uppercase">
                Two Friends. Different Journeys. One Bigger Vision.
              </h2>

              <div className="mt-8 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal text-center max-w-2xl mx-auto">
                <p>
                  Some partnerships begin in boardrooms. Ours began as schoolmates with a shared curiosity about technology and a desire to build something meaningful.
                </p>

                <p>
                  As life took us in different academic directions, we each started building our own journeys. From software development and blockchain to hackathons, international competitions, mentoring aspiring innovators, and exploring entrepreneurship, we gained different experiences, faced challenges, and learned by doing.
                </p>

                <p>
                  Towards the end of our college journeys, we reconnected, bringing together our knowledge, experiences, and ambitions. We realised we shared something bigger than individual goals: a vision to build a technology company of our own.
                </p>

                <p className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight pt-2">
                  In February 2026, Buildicy was born.
                </p>

                <p>
                  Today, we're growing Buildicy into an AI-powered technology and product engineering company, working with businesses, onboarding international clients, developing intelligent solutions, and creating opportunities for the next generation of builders.
                </p>

                <p>
                  We're young, ambitious, and just getting started. We believe great things aren't built by waiting for the perfect opportunity, but by having the courage to create one.
                </p>

                <div className="pt-4 pb-2 space-y-2">
                  <p className="font-semibold text-slate-900 text-lg sm:text-xl">
                    We didn't wait for the future to happen. We started building it.
                  </p>
                  <p className="font-mono font-bold tracking-widest text-purple-700 text-sm sm:text-base uppercase">
                    BUILDICY — BUILD THE FUTURE.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setAuditModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 text-sm font-semibold transition-all shadow-md shadow-purple-600/20 active:scale-95 cursor-pointer"
                  >
                    <span>Book Your Free AI Growth Audit</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: The Founders */}
          <section className="border-t border-slate-200/80 pt-16 md:pt-20">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="eyebrow text-purple-600 font-semibold tracking-wider block mb-2">
                LEADERSHIP
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Meet The Founders
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Two builders doing it all together — from AI engineering and product architecture to client growth.
              </p>
            </div>

            {/* Clean, airy 2-column founder grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Founder 1: Prajwal N */}
              <div className="group rounded-2xl bg-white/95 border border-slate-200/70 p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_14px_36px_rgba(124,58,237,0.08)] hover:border-purple-300/80 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <img
                    src="/prajwal.png"
                    alt="Prajwal N — Buildicy CEO & Founder"
                    className="w-16 h-16 rounded-2xl object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href="mailto:hello@buildicy.com"
                      aria-label="Email Prajwal N"
                      className="text-slate-400 hover:text-purple-600 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/prajwal-n-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Prajwal N LinkedIn"
                      className="text-slate-400 hover:text-purple-600 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight">
                    Prajwal N
                  </h3>
                  <span className="text-slate-300 font-light">|</span>
                  <span className="text-sm text-purple-700 font-medium">
                    CEO / Founder
                  </span>
                </div>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                  Co-leads everything at Buildicy — from software engineering and AI system architecture to product strategy, client growth, and turning ambitious ideas into shipped products.
                </p>
              </div>

              {/* Founder 2: Mayur P */}
              <div className="group rounded-2xl bg-white/95 border border-slate-200/70 p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_14px_36px_rgba(124,58,237,0.08)] hover:border-purple-300/80 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <img
                    src="/mayur.png"
                    alt="Mayur P — Buildicy CTO & Co-founder"
                    className="w-16 h-16 rounded-2xl object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href="mailto:hello@buildicy.com"
                      aria-label="Email Mayur P"
                      className="text-slate-400 hover:text-purple-600 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mayurp03/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Mayur P LinkedIn"
                      className="text-slate-400 hover:text-purple-600 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight">
                    Mayur P
                  </h3>
                  <span className="text-slate-300 font-light">|</span>
                  <span className="text-sm text-purple-700 font-medium">
                    CTO / Co-founder
                  </span>
                </div>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                  Co-leads everything at Buildicy — from full-stack engineering and autonomous AI pipelines to product design, client delivery, and scaling real-world systems.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Signature Buildicy Dark Footer */}
      <footer
        id="contact"
        className="relative overflow-hidden text-white pt-24 md:pt-36 pb-0"
        style={{
          background: "linear-gradient(180deg, #0b111e 0%, #060913 45%, #020306 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(168,85,247,0.12)_0%,rgba(59,130,246,0.06)_40%,transparent_75%)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12">
          <div className="mb-6 md:mb-10">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-white/50 block">
              Have something in mind?
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[clamp(2.6rem,6.2vw,5.6rem)] font-light md:font-normal leading-[1.05] tracking-tight text-white">
                Let’s build your <br className="hidden sm:inline" />
                growth system
                <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-500 shadow-[0_0_16px_#a855f7] ml-3 align-baseline animate-pulse" />
              </h2>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between pt-1 lg:pt-3 space-y-7">
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
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc] animate-pulse" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-purple-300/80 uppercase">
                    AI Growth Systems Studio
                  </span>
                </div>
              </div>

              <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-md">
                Thoughtful AI systems engineered to capture, qualify, and convert leads 24/7. Built around your business.
              </p>

              <div className="space-y-3 pt-1">
                <button
                  type="button"
                  onClick={() => setAuditModalOpen(true)}
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

          <div className="border-t border-white/10 mt-16 md:mt-24 pt-8 md:pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="text-xs md:text-sm font-mono text-white/50 space-y-1">
              <div>Founded February 2026 by Mayur P & Prajwal N.</div>
              <div>Based in India. Working worldwide.</div>
            </div>

            <div className="flex flex-wrap items-center gap-6 md:gap-8 text-xs md:text-sm font-medium text-white/70">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <a href="/#services" className="hover:text-white transition-colors">
                Services
              </a>
              <a href="/#process" className="hover:text-white transition-colors">
                Pipeline
              </a>
              <a href="/#packages" className="hover:text-white transition-colors">
                Pricing
              </a>
              <a href="/#docs" className="hover:text-white transition-colors">
                Docs
              </a>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

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

      {/* Audit Modal */}
      {auditModalOpen && (
        <AuditBookingModal
          initialPackage="AI Front Desk + Funnel"
          initialMarket="India — INR"
          onClose={() => setAuditModalOpen(false)}
        />
      )}
    </div>
  );
}
