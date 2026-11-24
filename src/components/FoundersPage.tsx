import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Linkedin, Mail } from "lucide-react";
import { AuditBookingModal } from "./AuditBookingModal";
import { Navbar } from "./Navbar";

export function FoundersPage() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

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
      <main className="relative z-10 pt-32 sm:pt-36 pb-20 md:pb-28">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-8 md:px-10">
          {/* SECTION 1: The Story of Buildicy */}
          <section className="mb-20 md:mb-28">
            <div className="max-w-3xl">
              <span className="eyebrow text-purple-600 font-semibold tracking-wider block mb-3">
                ABOUT BUILDICY // EST. FEBRUARY 2026
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                The Story of Buildicy
              </h1>
            </div>

            {/* Story Paragraphs & Metrics in a clean 2-column grid */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Authentic Story text */}
              <div className="lg:col-span-8 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  <strong className="text-slate-900 font-semibold">Buildicy was founded in February 2026</strong>{" "}
                  by two childhood friends who have shared a common interest in technology, engineering,
                  and entrepreneurship since 2016. Having studied at the same school before pursuing
                  different academic paths, both founders continued exploring their passion for technology
                  through software development, engineering, hackathons, and collaborative initiatives.
                </p>

                <p>
                  With complementary technical expertise and a shared vision, they came together to
                  establish Buildicy as a technology and product engineering company focused on helping
                  businesses solve real-world challenges through software development, AI-powered
                  solutions, and intelligent automation.
                </p>

                <p>
                  What began as a shared ambition has grown into a company working with clients,
                  developing digital solutions, building internal products, and exploring new
                  opportunities across the technology landscape. Today, Buildicy continues to evolve
                  with a clear focus on engineering meaningful solutions, driving business growth through
                  technology, and transforming promising ideas into practical digital products.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setAuditModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white px-7 py-3.5 text-sm font-semibold transition-all shadow-md shadow-purple-600/20 active:scale-95 cursor-pointer"
                  >
                    <span>Book Free AI Growth Audit</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Clean Telemetry Stats matching index.tsx metrics */}
              <div className="lg:col-span-4 rounded-3xl bg-white border border-slate-200/90 p-8 shadow-xs space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-purple-600 font-semibold">
                    Studio Baseline
                  </div>
                  <div className="text-2xl font-display font-extrabold text-slate-900 mt-1">
                    10-Year Friendship
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Childhood schoolmates collaborating since 2016.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#faf8f5] border border-slate-200/80">
                    <div className="font-display text-3xl font-extrabold text-slate-900">2016</div>
                    <div className="eyebrow text-slate-500 mt-1 text-[11px]">First Collab</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#faf8f5] border border-slate-200/80">
                    <div className="font-display text-3xl font-extrabold text-purple-600">Feb '26</div>
                    <div className="eyebrow text-slate-500 mt-1 text-[11px]">Studio Inception</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                  <div className="text-xs font-mono text-purple-900 font-semibold">
                    100% Founder-Led Engineering
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Prajwal N (CEO) directs product strategy. Mayur P (CTO) architects the AI & software systems.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: The Founders */}
          <section className="border-t border-slate-200 pt-16 md:pt-20">
            <div className="max-w-2xl mb-12">
              <span className="eyebrow text-purple-600 font-semibold tracking-wider block mb-2">
                LEADERSHIP
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Meet The Founders
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                No stock photos or corporate avatars. Built on pure engineering, product vision,
                and a decade of shared conviction.
              </p>
            </div>

            {/* The 2 Founder Cards: Clean, Professional, Minimalist, In-Theme */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px]">
              {/* Founder 1: Prajwal N */}
              <div className="group rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-700 font-display font-extrabold text-xl flex items-center justify-center border border-purple-100 group-hover:scale-105 transition-transform">
                      PN
                    </div>
                    <span className="text-xs font-mono font-semibold tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/50 uppercase">
                      CEO / Founder
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      Prajwal N
                    </h3>
                    <p className="text-sm font-mono text-purple-600 font-semibold mt-1">
                      CEO / Founder
                    </p>
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Focuses on product direction, commercial systems, client partnerships, and transforming
                    promising ideas into high-growth, practical digital products.
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>School Cohort '16 • Co-Founder</span>
                  <a
                    href="mailto:hello@buildicy.com"
                    className="inline-flex items-center gap-1.5 text-slate-700 hover:text-purple-600 transition-colors font-semibold"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Founder 2: Mayur P */}
              <div className="group rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-700 font-display font-extrabold text-xl flex items-center justify-center border border-purple-100 group-hover:scale-105 transition-transform">
                      MP
                    </div>
                    <span className="text-xs font-mono font-semibold tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/50 uppercase">
                      CTO / Co-founder
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      Mayur P
                    </h3>
                    <p className="text-sm font-mono text-purple-600 font-semibold mt-1">
                      CTO / Co-founder
                    </p>
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Architects core full-stack software, autonomous AI agent pipelines, and intelligent
                    workflow automation systems built for reliability and speed.
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>School Cohort '16 • Co-Founder</span>
                  <a
                    href="mailto:hello@buildicy.com"
                    className="inline-flex items-center gap-1.5 text-slate-700 hover:text-purple-600 transition-colors font-semibold"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
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
