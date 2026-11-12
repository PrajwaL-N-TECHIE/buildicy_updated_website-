import { useState } from "react";
import {
  PhoneCall,
  MessageSquare,
  Calendar,
  Zap,
  ArrowRight,
  Briefcase,
  Stethoscope,
  Building2,
  Layers,
  ShieldCheck,
  Check,
  X as CloseIcon,
  Radio,
} from "lucide-react";

interface AutonomousStackProps {
  onOpenAudit?: () => void;
}

export function AutonomousStackShowcase({ onOpenAudit }: AutonomousStackProps) {
  const [activeTab, setActiveTab] = useState<"live-feed" | "morning-brief" | "stack">("live-feed");
  const [selectedIndustry, setSelectedIndustry] = useState<number>(0);

  const LIVE_EVENTS = [
    {
      time: "09:14:02 AM",
      channel: "AI Voice Telephony",
      icon: PhoneCall,
      accent: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      title: "Inbound Call Answered (0.8s Latency)",
      detail: "Prospect asked about custom B2B workflow setup. Handled business FAQs and verified monthly lead volume.",
      outcome: "High-Intent Lead • Booked 45-min Zoom Call",
      value: "+₹1,20,000 Pipeline",
      pulse: "Live",
    },
    {
      time: "09:32:15 AM",
      channel: "WhatsApp Business API",
      icon: MessageSquare,
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      title: "Missed Call Auto-Recovery Triggered",
      detail: "Visitor dropped call after 2 rings. Automated WhatsApp triggered in 18s. Qualified requirements in 4 messages.",
      outcome: "Captured Work Email & Team Size • Sent Capability Deck",
      value: "Recovered Drop-off",
      pulse: "Recovered",
    },
    {
      time: "10:05:40 AM",
      channel: "CRM & Calendar Engine",
      icon: Calendar,
      accent: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      title: "Google Calendar & HubSpot Auto-Sync",
      detail: "Full lead dossier populated into CRM. Automated reminder sequence pre-scheduled 24h and 1h prior to consultation.",
      outcome: "Meeting Confirmed with Founder",
      value: "Zero Manual Entry",
      pulse: "Synced",
    },
    {
      time: "10:48:11 AM",
      channel: "Payment & Checkout",
      icon: Zap,
      accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      title: "Stripe / Razorpay Invoice Settled",
      detail: "Pilot agreement accepted. Automated onboarding package and Slack invite dispatched immediately upon payment.",
      outcome: "Instant Client Onboarding Active",
      value: "Payment Settled",
      pulse: "Success",
    },
  ];

  const INDUSTRIES = [
    {
      id: "agencies",
      icon: Briefcase,
      title: "Agencies & Consultancies",
      badge: "High-Ticket B2B",
      withoutBuildicy: "Inbound 6-figure leads decay because account managers are tied up in client deliverables.",
      withBuildicy: "24/7 AI Voice & WhatsApp receptionist pre-qualifies budget and books directly to calendar.",
      impactNumber: "+3.2×",
      impactLabel: "Consultations Booked",
      highlight: "Sub-Second Inbound Lead Response",
    },
    {
      id: "practices",
      icon: Stethoscope,
      title: "Clinics, Healthcare & Legal",
      badge: "Professional Practices",
      withoutBuildicy: "Front-desk staff overwhelmed with appointment reschedules, FAQs, and after-hours drop-offs.",
      withBuildicy: "Autonomous voice agent triages patient inquiries, answers practice FAQs, and locks appointments.",
      impactNumber: "100%",
      impactLabel: "Inbound Call Capture",
      highlight: "Zero Dropped Enquiries",
    },
    {
      id: "realestate",
      icon: Building2,
      title: "Real Estate & High-Volume Sales",
      badge: "High-Volume Pipeline",
      withoutBuildicy: "Buyer interest goes cold if not engaged within 5 minutes of ad form submission.",
      withBuildicy: "Instant WhatsApp auto-responder shares brochures, qualifies budget, and books private tours.",
      impactNumber: "−85%",
      impactLabel: "Lead Drop-off Rate",
      highlight: "Sub-15s WhatsApp Response",
    },
    {
      id: "saas",
      icon: Layers,
      title: "SaaS & Product Companies",
      badge: "Technology & SaaS",
      withoutBuildicy: "Manual demo qualification, tedious email friction, and fragmented onboarding handovers.",
      withBuildicy: "Schema-driven intake forms and intelligent qualification engines piping directly into your CRM.",
      impactNumber: "Zero",
      impactLabel: "Human Bottlenecks",
      highlight: "Continuous 24/7 Operation",
    },
  ];

  return (
    <section className="px-6 py-20 md:px-10 md:py-32 bg-[#faf8f5] text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="reveal mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/90 text-purple-900 text-xs font-mono font-semibold tracking-wide uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Autonomous Operations Blueprint</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                What a day on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">
                  Autopilot
                </span>{" "}
                looks like.
              </h2>
              <p className="mt-4 text-slate-600 text-base md:text-lg font-light leading-relaxed">
                Rather than letting inbound leads decay overnight or hiring extra headcount, Buildicy installs an autonomous system that captures, qualifies, and books meetings for you 24/7.
              </p>
            </div>

            {/* Switcher Pills */}
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xs self-start lg:self-end">
              <button
                type="button"
                onClick={() => setActiveTab("live-feed")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "live-feed"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                Live Event Stream
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("morning-brief")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "morning-brief"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                Founder Daily Brief
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("stack")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "stack"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                The Architecture
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Live Event Stream — Luxury Dark Obsidian Terminal */}
        {activeTab === "live-feed" && (
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-in fade-in duration-300">
            {/* Left Console: Dark Obsidian Studio Terminal */}
            <div className="lg:col-span-8 rounded-3xl bg-[#0a0d16] border border-white/10 p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
              {/* Subtle ambient violet radial glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Terminal Window Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    {/* Window Controls */}
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-white/80 uppercase tracking-widest pl-2 border-l border-white/10">
                      TELEMETRY STREAM • REAL-TIME DISPATCH
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>Latency &lt; 850ms</span>
                    </span>
                  </div>
                </div>

                {/* Event Stream List */}
                <div className="space-y-3.5">
                  {LIVE_EVENTS.map((event, idx) => {
                    const Icon = event.icon;
                    return (
                      <div
                        key={idx}
                        className="group relative p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-purple-500/40 transition-all duration-300"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className={`p-1.5 rounded-lg border ${event.accent}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="font-mono text-xs font-bold text-white tracking-wide">
                              {event.channel}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-white/40">{event.time}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-purple-300 font-medium">
                              {event.value}
                            </span>
                          </div>
                        </div>

                        <h4 className="text-sm sm:text-base font-semibold text-white/95 group-hover:text-purple-300 transition-colors">
                          {event.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-white/60 font-light mt-1 leading-relaxed">
                          {event.detail}
                        </p>

                        <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                          <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>{event.outcome}</span>
                          </span>
                          <span className="text-white/30 group-hover:text-white/60 transition-colors text-[11px] hidden sm:inline">
                            Synced to Ledger ↗
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Console Status Bar */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-white/40">
                <div className="flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                  <span>Twilio Voice • WhatsApp Cloud API • Stripe Webhooks</span>
                </div>
                <span>Continuous Pipeline Monitoring</span>
              </div>
            </div>

            {/* Right Column: Executive Yield & Governance Deck */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              {/* Top Card: Yield Metrics */}
              <div className="rounded-3xl bg-[#0f1424] border border-white/10 text-white p-7 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                <span className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-widest block mb-2">
                  Operational Yield
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  Stop losing high-ticket pipeline to slow response times.
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-3 leading-relaxed font-light">
                  58% of callers hang up if not answered within 3 rings. Buildicy captures and qualifies them instantaneously on voice and WhatsApp.
                </p>

                <div className="mt-6 space-y-3.5 pt-4 border-t border-white/10 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Voice Latency</span>
                    <span className="text-emerald-400 font-bold">&lt; 850ms Pick-up</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">WhatsApp Triage</span>
                    <span className="text-emerald-400 font-bold">Instant (24/7)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Show-up Rate</span>
                    <span className="text-purple-300 font-bold">88.4% with Reminders</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="mt-6 w-full py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                >
                  <span>Book Free AI Growth Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Card: Enterprise Governance */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-purple-700 font-bold uppercase">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                  <span>Enterprise Security &amp; Ownership</span>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Every dialogue is logged, transcribed, and summarized directly to your phone. 100% client code and IP ownership — no vendor lock-in.
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Zero Data Retention AI</span>
                  <span className="text-purple-700 font-semibold">Self-Hosted / Cloud</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Founder Daily Briefing */}
        {activeTab === "morning-brief" && (
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-6 rounded-3xl bg-[#0a0d16] border border-white/10 p-6 sm:p-8 shadow-2xl text-white">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    Buildicy Executive Daily WhatsApp Briefing
                  </h4>
                  <p className="text-[11px] font-mono text-white/40">
                    Delivered at 08:30 AM directly to Founder WhatsApp
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 font-mono text-xs sm:text-sm text-white/90 space-y-3 leading-relaxed">
                <div className="font-bold text-purple-300">
                  ☀️ Good morning! Here is your 24h Growth Pulse:
                </div>
                <div className="space-y-1 text-white/80">
                  <p>• <strong>Inbound Inquiries:</strong> 14 captured across Voice &amp; WhatsApp</p>
                  <p>• <strong>Pre-Qualified Leads:</strong> 6 high-intent prospects verified</p>
                  <p>• <strong>Appointments Booked:</strong> 3 consultations locked to calendar</p>
                  <p>• <strong>Pipeline Value Added:</strong> ₹2,85,000</p>
                </div>
                <div className="p-3 bg-white/[0.06] rounded-xl border border-white/10 text-xs text-white/70">
                  <span className="font-bold text-white block mb-1">Today's Priority Consultation:</span>
                  11:30 AM — Dr. Arvind (Apex Healthcare). Full transcript and qualification notes attached to calendar event.
                </div>
                <div className="text-[10px] text-white/40 text-right">
                  System Operating Nominal • Zero manual data entry
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="eyebrow text-purple-700 font-bold block">
                Daily Operations Brief
              </span>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Wake up to confirmed bookings, not unanswered voicemails.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                Founders spend 10+ hours a week reviewing inboxes, returning voicemails, and manually updating spreadsheets. Buildicy synthesizes all activity into a single concise morning WhatsApp brief.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="rounded-full bg-slate-900 hover:bg-purple-600 text-white px-7 py-3.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md"
                >
                  Install Autopilot for Your Business
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: The Architecture */}
        {activeTab === "stack" && (
          <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 animate-in fade-in duration-300">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4 border border-purple-100">
                01
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900">Inbound Capture</h4>
              <p className="text-xs text-slate-500 font-light mt-2 leading-relaxed">
                High-converting landing funnels, intake forms, and dedicated voice telephony numbers.
              </p>
              <span className="inline-block mt-4 text-[10px] font-mono font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                Sub-Second Triage
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4 border border-purple-100">
                02
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900">Autonomous Dialogue</h4>
              <p className="text-xs text-slate-500 font-light mt-2 leading-relaxed">
                AI voice receptionists and WhatsApp agents conduct natural two-way conversations and answer FAQs.
              </p>
              <span className="inline-block mt-4 text-[10px] font-mono font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                24/7 Availability
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4 border border-purple-100">
                03
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900">Calendar &amp; CRM</h4>
              <p className="text-xs text-slate-500 font-light mt-2 leading-relaxed">
                Direct integration with Google Calendar, Calendly, HubSpot, Notion, and PostgreSQL databases.
              </p>
              <span className="inline-block mt-4 text-[10px] font-mono font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                Zero Data Loss
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4 border border-purple-100">
                04
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900">Revenue &amp; Handover</h4>
              <p className="text-xs text-slate-500 font-light mt-2 leading-relaxed">
                Automated Stripe/Razorpay invoice generation, contract dispatch, and live human notification handover.
              </p>
              <span className="inline-block mt-4 text-[10px] font-mono font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                Instant Cashflow
              </span>
            </div>
          </div>
        )}

        {/* Section 2: "Engineered For Operators" — Sleek Before/After Matrix */}
        <div className="mt-20 md:mt-28 pt-16 border-t border-slate-200">
          <div className="reveal mb-12 text-center max-w-2xl mx-auto">
            <span className="eyebrow text-purple-700 font-bold block mb-2">
              Industry Matrix
            </span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Engineered for operators who cannot afford dropped leads.
            </h3>
            <p className="text-slate-500 text-sm font-light mt-3 leading-relaxed">
              Whether you are running an 8-figure agency or a multi-location practice, our systems integrate directly into your operations.
            </p>
          </div>

          {/* 4 Clean Luxury Cards with Subtle Before/After Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="reveal rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold">
                        {ind.badge}
                      </span>
                    </div>

                    <h4 className="font-display text-xl font-bold text-slate-900 mb-1">
                      {ind.title}
                    </h4>
                    <span className="text-[11px] font-mono text-purple-600 font-semibold block mb-4">
                      {ind.highlight}
                    </span>

                    {/* Clean Before / After Comparison */}
                    <div className="space-y-3 pt-3 border-t border-slate-100 text-xs leading-relaxed">
                      {/* Without */}
                      <div className="flex items-start gap-2.5 text-slate-500 font-light">
                        <span className="shrink-0 w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-[10px] mt-0.5">
                          ✕
                        </span>
                        <span>{ind.withoutBuildicy}</span>
                      </div>

                      {/* With Buildicy */}
                      <div className="flex items-start gap-2.5 text-slate-800 font-medium">
                        <span className="shrink-0 w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] mt-0.5">
                          ✓
                        </span>
                        <span>{ind.withBuildicy}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Metric & Action */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Expected Impact</span>
                      <span className="text-base font-display font-extrabold text-slate-900">{ind.impactNumber} <span className="text-xs font-mono font-medium text-emerald-600">{ind.impactLabel}</span></span>
                    </div>
                    <button
                      type="button"
                      onClick={onOpenAudit}
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-purple-600 hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer"
                      title="Request Audit"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
