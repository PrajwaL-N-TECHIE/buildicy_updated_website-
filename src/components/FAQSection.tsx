import { useState } from "react";
import { Plus, Minus, MessageCircle, HelpCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface FAQItem {
  id: string;
  category: "voice" | "ownership" | "integration" | "pricing";
  categoryLabel: string;
  question: string;
  answer: string;
  highlight?: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "latency-naturalness",
    category: "voice",
    categoryLabel: "AI Voice Telephony",
    question: "How natural does the AI voice sound on real telephone calls? Does it sound robotic?",
    answer:
      "Not at all. We build on neural streaming models (ElevenLabs & Cartesia) wired through low-latency telephony pipelines (Twilio SIP). Audio latency is sub-second (< 850ms), allowing the AI to naturally pause, handle human interruptions without speaking over the caller, breathe, and match your industry's specific dialect and tone. In blind tests, over 91% of callers do not realize they are conversing with an autonomous agent.",
    highlight: "< 850ms Sub-Second Voice Latency",
  },
  {
    id: "edge-cases-hallucinations",
    category: "voice",
    categoryLabel: "AI Safety & Guardrails",
    question: "What happens if a prospect asks an unexpected question the AI doesn't know?",
    answer:
      "Buildicy systems operate with strict deterministic enterprise guardrails. The AI will never hallucinate, invent false pricing, or promise deliverables outside your capability parameters. If a prospect's inquiry exceeds its calibrated knowledge base, the system executes an intelligent, graceful escalation: it validates the caller's query, captures their direct contact details, and immediately dispatches a priority alert with the call transcript and audio recording to the founder or senior sales rep via WhatsApp and SMS.",
    highlight: "Zero Hallucination Guarantee & Instant Human Handover",
  },
  {
    id: "stack-integration",
    category: "integration",
    categoryLabel: "Integrations & Tools",
    question: "Will Buildicy work with our existing CRM, calendar, and software stack?",
    answer:
      "Yes, seamlessly. We believe in zero-friction interop. We natively integrate with HubSpot, Salesforce, Zoho, Google Calendar, Calendly, Notion, Stripe, Razorpay, and WhatsApp Business API. If you run a custom internal database (PostgreSQL, Supabase, Airtable, or internal REST APIs), we engineer custom bidirectional webhooks so lead data and appointment dossiers populate directly into where your team already works.",
    highlight: "Native Interop with 18+ Enterprise Tools",
  },
  {
    id: "data-ownership",
    category: "ownership",
    categoryLabel: "IP & Data Security",
    question: "Who owns the prompts, codebase, workflows, and client conversation data?",
    answer:
      "You do — 100% full client IP and code ownership from day one. Unlike SaaS platforms that trap you inside recurring proprietary lock-in, Buildicy hands over all prompt repositories, webhook blueprints, database schemas, and API configurations to your team. Furthermore, we enforce Zero Data Retention AI protocols: your customer calls and transcripts are never stored on public model servers or used to train third-party foundation models.",
    highlight: "100% Client Code & IP Ownership • Zero Vendor Lock-in",
  },
  {
    id: "founder-time-investment",
    category: "ownership",
    categoryLabel: "Deployment Protocol",
    question: "How much time is required from my internal team during the 14-day deployment?",
    answer:
      "Under 3 hours total across the entire 14-day protocol. Our model is built specifically for time-constrained founders and operators: 45 minutes for the initial discovery and FAQ intake audit, 30 minutes to review conversational dialogue branches and qualification criteria, and 45 minutes for live staging verification before going live. Buildicy engineers handle 100% of the prompt engineering, webhook wiring, audio testing, and API integration.",
    highlight: "Under 3 Hours of Total Founder Input",
  },
  {
    id: "ongoing-costs",
    category: "pricing",
    categoryLabel: "Pricing & Unit Economics",
    question: "What are the ongoing operational costs after the system goes live?",
    answer:
      "We operate with complete unit-economic transparency. Your baseline operational costs (Twilio phone numbers at ~$1.15/month, telephony minutes at ~$0.014/min, and LLM token usage) are billed directly through your own provider accounts at cost — with zero hidden agency markups. For continuous uptime monitoring, weekly transcript audits, conversation optimization, and prompt updates, we offer flexible monthly maintenance retainers (or you can manage the deployed system entirely in-house).",
    highlight: "Transparent At-Cost API Billing • Zero Hidden Markups",
  },
  {
    id: "modular-expansion",
    category: "pricing",
    categoryLabel: "System Scope",
    question: "Can we start with one channel (like WhatsApp or AI Voice) and scale up later?",
    answer:
      "Absolutely. In fact, many of our clients start with our AI Lead Machine (funnel + qualification form + WhatsApp missed-call auto-recovery) or an AI Front Desk for inbound voice, and then expand into a complete multi-channel autonomous growth engine as their pipeline volume expands.",
    highlight: "Modular Architecture That Scales with Your Revenue",
  },
];

interface FAQSectionProps {
  onOpenAudit?: () => void;
}

export function FAQSection({ onOpenAudit }: FAQSectionProps) {
  const [openIds, setOpenIds] = useState<string[]>(["latency-naturalness"]);
  const [activeCategory, setActiveCategory] = useState<"all" | "voice" | "ownership" | "integration" | "pricing">("all");

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQS =
    activeCategory === "all"
      ? FAQS
      : FAQS.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="relative px-6 py-20 md:px-10 md:py-32 bg-[#faf8f5] text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/90 text-purple-900 text-xs font-mono font-semibold tracking-wide uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-purple-700" />
            <span>Clarity &amp; Architecture Standards</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Frequently asked <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">
              questions &amp; objections.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg font-light leading-relaxed">
            Everything you need to know about latency, enterprise safety, codebase ownership, and our 14-day deployment protocol.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "All Questions (7)" },
              { id: "voice", label: "AI Voice & Telephony" },
              { id: "integration", label: "Integrations & Tech Stack" },
              { id: "ownership", label: "Code Ownership & Protocol" },
              { id: "pricing", label: "Pricing & Economics" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                    : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-purple-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="reveal space-y-4 max-w-4xl mx-auto">
          {filteredFAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-purple-300 shadow-md ring-1 ring-purple-100"
                    : "bg-white/80 border-slate-200/90 hover:border-purple-200 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1.5 pr-2">
                    <span className="text-[10px] font-mono text-purple-700 uppercase tracking-widest font-bold block">
                      {faq.categoryLabel}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 mt-1 ${
                      isOpen
                        ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 rotate-180"
                        : "bg-slate-100 text-slate-600 hover:bg-purple-100 hover:text-purple-700"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 pt-0 border-t border-slate-100 animate-in fade-in duration-200">
                    <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed mt-4">
                      {faq.answer}
                    </p>

                    {faq.highlight && (
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-purple-700 font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                        <span>{faq.highlight}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="reveal mt-14 max-w-4xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-7 sm:p-9 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold block">
              Have a bespoke enterprise workflow?
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
              Talk directly with Buildicy's systems engineers.
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-lg leading-relaxed">
              We audit your call volume, CRM mapping, and qualification logic to give you an exact 14-day implementation blueprint.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenAudit}
              className="px-6 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/919150890205?text=${encodeURIComponent(
                "Hi Buildicy, I have a specific question about your AI systems architecture."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
