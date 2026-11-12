import { useState } from "react";
import {
  PhoneCall,
  MessageSquare,
  Calendar,
  Sparkles,
  Bot,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  Building2,
  Stethoscope,
  Briefcase,
  Layers,
  Zap,
} from "lucide-react";

interface AutonomousStackProps {
  onOpenAudit?: () => void;
}

export function AutonomousStackShowcase({ onOpenAudit }: AutonomousStackProps) {
  const [activeTab, setActiveTab] = useState<"live-feed" | "morning-brief" | "stack">("live-feed");

  const LIVE_EVENTS = [
    {
      time: "09:14 AM",
      channel: "AI Voice Telephony",
      icon: PhoneCall,
      color: "text-purple-600 bg-purple-50 border-purple-200",
      title: "Inbound Call Answered (0.8s Latency)",
      detail: "Prospect asked about custom B2B workflow setup. Handled business FAQs and verified monthly lead volume.",
      outcome: "High-Intent Qualified • Booked 45-min Zoom Call",
      badge: "₹1,20,000 Deal Pipeline",
    },
    {
      time: "09:32 AM",
      channel: "WhatsApp Business API",
      icon: MessageSquare,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      title: "Missed Call Auto-Recovery Triggered",
      detail: "Visitor dropped call. Automated WhatsApp triggered within 20s. Qualified requirements in 4 back-and-forth messages.",
      outcome: "Captured Email & Team Size • Sent Capability Deck",
      badge: "Recovered Drop-off",
    },
    {
      time: "10:05 AM",
      channel: "CRM & Calendar Engine",
      icon: Calendar,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      title: "Google Calendar & HubSpot Auto-Sync",
      detail: "Lead data populated into CRM. Automated reminder sequence pre-scheduled 24h and 1h prior to consultation.",
      outcome: "Meeting Confirmed with Founder",
      badge: "Zero Manual Entry",
    },
    {
      time: "10:48 AM",
      channel: "Payment & Checkout",
      icon: Zap,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      title: "Stripe / Razorpay Invoice Settled",
      detail: "Pilot agreement accepted. Automated onboarding package and Slack invite dispatched immediately upon payment.",
      outcome: "Instant Client Onboarding Active",
      badge: "Payment Received",
    },
  ];

  const INDUSTRIES = [
    {
      id: "agencies",
      icon: Briefcase,
      title: "Agencies & Consultancies",
      problem: "Losing high-ticket inbound prospects because account executives are stuck in client deliverables.",
      solution: "24/7 AI Voice & WhatsApp receptionist pre-qualifies budget and books directly to your senior team's calendar.",
      impact: "+3.2× Scheduled Consults",
      badge: "High-Ticket B2B",
    },
    {
      id: "practices",
      icon: Stethoscope,
      title: "Clinics, Legal & Practices",
      problem: "Front desk staff overwhelmed with routine FAQs, appointment reschedules, and missed after-hours calls.",
      solution: "Bespoke voice agent triages patient/client inquiries, provides operating hours, and books appointments into your calendar.",
      impact: "100% Inbound Capture",
      badge: "Professional Services",
    },
    {
      id: "realestate",
      icon: Building2,
      title: "Real Estate & High-Volume Sales",
      problem: "Inbound property inquiries go cold if not replied to within 5 minutes of ad submission.",
      solution: "Sub-second WhatsApp auto-responder engages leads instantly, sends floor plans, and schedules site visits 24/7.",
      impact: "−85% Lead Decay",
      badge: "High-Volume Leads",
    },
    {
      id: "saas",
      icon: Layers,
      title: "SaaS & Product Companies",
      problem: "Manual demo qualification, tedious email back-and-forths, and fragmented onboarding handovers.",
      solution: "Dynamic schema forms and intelligent qualification engines that pipe enterprise leads straight into your CRM.",
      impact: "Zero Human Bottlenecks",
      badge: "Tech & SaaS",
    },
  ];

  return (
    <section className="px-6 py-20 md:px-10 md:py-32 bg-[#faf8f5] text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header (Foundable-inspired value proposition) */}
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
                Rather than hiring an extra front-desk shift or letting inbound leads decay overnight, Buildicy installs an autonomous system that captures, qualifies, and schedules meetings for you 24/7.
              </p>
            </div>

            {/* Quick Interactive Switcher */}
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
                Live Activity Feed
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
                The Stack
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Live Autopilot Simulation Feed */}
        {activeTab === "live-feed" && (
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
            {/* Left Column: Simulated Feed Console */}
            <div className="lg:col-span-8 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Buildicy Autonomous Lead Engine • Real-Time Event Stream
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                  Latency &lt; 850ms • Zero Human Latency
                </span>
              </div>

              <div className="space-y-4">
                {LIVE_EVENTS.map((event, idx) => {
                  const Icon = event.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-slate-200/70 hover:border-purple-300 transition-all duration-300 hover:shadow-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className={`p-1.5 rounded-lg border ${event.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-mono text-xs font-bold text-slate-900">
                            {event.channel}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-slate-400">{event.time}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-purple-700 font-semibold">
                            {event.badge}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-light mt-1 leading-relaxed">
                        {event.detail}
                      </p>

                      <div className="mt-3 pt-2.5 border-t border-slate-200/50 flex items-center justify-between text-xs font-mono">
                        <span className="text-emerald-700 font-medium flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{event.outcome}</span>
                        </span>
                        <span className="text-slate-400 group-hover:text-purple-600 transition-colors hidden sm:inline">
                          Logged to Ledger →
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Autopilot Metrics & CTA */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-3xl bg-slate-900 text-white p-7 shadow-lg">
                <span className="text-[11px] font-mono text-purple-300 uppercase tracking-widest block mb-2">
                  System Yield
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  Stop missing 6-figure revenue opportunities.
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-3 leading-relaxed font-light">
                  58% of inbound callers hang up and call a competitor if no one answers within 3 rings. Buildicy captures and qualifies them instantaneously on voice and WhatsApp.
                </p>

                <div className="mt-6 space-y-3 pt-4 border-t border-white/10 text-xs font-mono">
                  <div className="flex items-center justify-between text-white/80">
                    <span>Average Voice Pickup</span>
                    <span className="text-emerald-400 font-bold">&lt; 1 Second</span>
                  </div>
                  <div className="flex items-center justify-between text-white/80">
                    <span>WhatsApp Response</span>
                    <span className="text-emerald-400 font-bold">Instant (24/7)</span>
                  </div>
                  <div className="flex items-center justify-between text-white/80">
                    <span>Calendar Show-up Rate</span>
                    <span className="text-purple-300 font-bold">88.4%</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="mt-6 w-full py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Audit Your Revenue Leaks</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="rounded-3xl bg-white border border-slate-200/90 p-6">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-purple-700 font-semibold uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>Foundable-Grade Autonomous Triage</span>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Every inbound dialogue is transcribed, analyzed for buyer intent, and summarized directly to your phone. If a high-value customer needs human attention, your team receives an instant priority SMS/WhatsApp ping.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Founder Daily Briefing (Foundable-inspired Daily Morning Brief) */}
        {activeTab === "morning-brief" && (
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-6 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Buildicy Executive Daily WhatsApp Briefing
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400">
                    Delivered at 08:30 AM to Founder
                  </p>
                </div>
              </div>

              {/* Chat Message Bubble */}
              <div className="rounded-2xl bg-[#faf8f5] border border-slate-200 p-5 font-mono text-xs sm:text-sm text-slate-800 space-y-3 leading-relaxed">
                <div className="font-bold text-purple-700">
                  ☀️ Good morning! Here is your 24h Growth Pulse:
                </div>
                <div className="space-y-1 text-slate-700">
                  <p>• <strong>Inbound Inquiries:</strong> 14 captured across Voice & WhatsApp</p>
                  <p>• <strong>Pre-Qualified Leads:</strong> 6 high-intent prospects verified</p>
                  <p>• <strong>Appointments Booked:</strong> 3 consultations locked to calendar</p>
                  <p>• <strong>Pipeline Value Added:</strong> ₹2,85,000</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                  <span className="font-bold text-slate-900 block mb-1">Today's Key Priority Call:</span>
                  11:30 AM — Dr. Arvind (Apex Healthcare). Needs 24/7 patient booking across 3 clinics. Full transcript & lead notes attached to calendar event.
                </div>
                <div className="text-[10px] text-slate-400 text-right">
                  System Operating Nominal • Zero manual data entry required
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="eyebrow text-purple-700 font-bold block">
                Daily Operations Brief
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Wake up to confirmed bookings, not unanswered voicemails.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                Founders spend 10+ hours a week reviewing messy inbox emails, checking voicemails, and manually typing details into spreadsheets. Buildicy's background autopilot synthesizes all activity into a single concise morning WhatsApp brief.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
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

        {/* Tab 3: The Integrated Autonomous Stack */}
        {activeTab === "stack" && (
          <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 animate-in fade-in duration-300">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4 border border-purple-100">
                01
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900">Inbound Capture</h4>
              <p className="text-xs text-slate-500 font-light mt-2 leading-relaxed">
                High-converting landing pages, conversational intake forms, and dedicated voice telephony numbers.
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
                AI voice receptionists and WhatsApp agents conduct natural two-way conversations and answer company FAQs.
              </p>
              <span className="inline-block mt-4 text-[10px] font-mono font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                24/7 Availability
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4 border border-purple-100">
                03
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900">Calendar & CRM</h4>
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
              <h4 className="font-display font-bold text-lg text-slate-900">Revenue & Handover</h4>
              <p className="text-xs text-slate-500 font-light mt-2 leading-relaxed">
                Automated Stripe/Razorpay invoice generation, contract dispatch, and live human notification handover.
              </p>
              <span className="inline-block mt-4 text-[10px] font-mono font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                Instant Cashflow
              </span>
            </div>
          </div>
        )}

        {/* Section 2: "Who Buildicy Is Engineered For" (Foundable-inspired Segmentation Grid) */}
        <div className="mt-20 md:mt-28 pt-16 border-t border-slate-200">
          <div className="reveal mb-12 text-center max-w-2xl mx-auto">
            <span className="eyebrow text-purple-700 font-bold block mb-2">
              Industry Matrix
            </span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Engineered for operators who cannot afford dropped leads.
            </h3>
            <p className="text-slate-500 text-sm font-light mt-3 leading-relaxed">
              Whether you are running an 8-figure agency or a multi-location clinic, our autonomous systems fit directly into your operational workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="reveal rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold">
                        {ind.badge}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-bold text-slate-900 mb-2">
                      {ind.title}
                    </h4>

                    <div className="space-y-3 my-4 text-xs">
                      <div className="p-3 rounded-xl bg-red-50/60 border border-red-100 text-slate-700">
                        <span className="font-bold text-red-700 block mb-0.5 font-mono uppercase text-[10px]">
                          Bottleneck:
                        </span>
                        {ind.problem}
                      </div>

                      <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 text-slate-700">
                        <span className="font-bold text-purple-700 block mb-0.5 font-mono uppercase text-[10px]">
                          Buildicy Solution:
                        </span>
                        {ind.solution}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Expected Impact</span>
                      <span className="text-sm font-mono font-bold text-emerald-600">{ind.impact}</span>
                    </div>
                    <button
                      type="button"
                      onClick={onOpenAudit}
                      className="text-xs font-semibold text-purple-700 hover:text-purple-900 cursor-pointer flex items-center gap-1 group"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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

