import { useState } from "react";
import {
  PhoneCall,
  MessageSquare,
  Database,
  Calendar,
  CreditCard,
  Workflow,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
} from "lucide-react";

interface IntegrationItem {
  id: string;
  name: string;
  category: "telephony" | "crm" | "ops";
  categoryLabel: string;
  description: string;
  latencyOrMetric: string;
  brandColor: string;
  glowColor: string;
  accentBg: string;
  svg: (color: string) => React.ReactNode;
}

export const INTEGRATIONS: IntegrationItem[] = [
  // Telephony & AI Voice
  {
    id: "twilio",
    name: "Twilio Voice",
    category: "telephony",
    categoryLabel: "Telephony & SIP",
    description: "Carrier-grade global SIP trunking, programmable voice streams, and carrier compliance.",
    latencyOrMetric: "< 850ms SIP Handshake",
    brandColor: "#F22F46",
    glowColor: "rgba(242, 47, 70, 0.15)",
    accentBg: "hover:border-[#F22F46]/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.2c4.308 0 7.8 3.492 7.8 7.8s-3.492 7.8-7.8 7.8-7.8-3.492-7.8-7.8 3.492-7.8 7.8-7.8zm-2.4 3a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm4.8 0a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm-4.8 4.8a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm4.8 0a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    name: "WhatsApp Cloud API",
    category: "telephony",
    categoryLabel: "Messaging Triage",
    description: "Official Meta Cloud API. Rich interactive buttons, templates, and sub-15s auto-recovery.",
    latencyOrMetric: "Sub-15s Auto-Engage",
    brandColor: "#25D366",
    glowColor: "rgba(37, 211, 102, 0.15)",
    accentBg: "hover:border-[#25D366]/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "telephony",
    categoryLabel: "Voice Synthesis",
    description: "Ultra-low-latency neural speech streaming with emotion calibration and accent matching.",
    latencyOrMetric: "< 350ms Audio Stream",
    brandColor: "#000000",
    glowColor: "rgba(0, 0, 0, 0.12)",
    accentBg: "hover:border-slate-800/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M7 4h3v16H7V4zm7 0h3v16h-3V4z" />
      </svg>
    ),
  },
  {
    id: "vapi",
    name: "Vapi AI Telephony",
    category: "telephony",
    categoryLabel: "Voice Orchestration",
    description: "Real-time speech-to-speech engine with instant human interruption and silence detection.",
    latencyOrMetric: "Natural Interruption Handling",
    brandColor: "#6366F1",
    glowColor: "rgba(99, 102, 241, 0.15)",
    accentBg: "hover:border-[#6366F1]/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "retell",
    name: "Retell AI",
    category: "telephony",
    categoryLabel: "Conversational Voice",
    description: "Sub-second bidirectional conversational agent handling enterprise inbound phone queues.",
    latencyOrMetric: "Zero Audio Jitter",
    brandColor: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.15)",
    accentBg: "hover:border-[#8B5CF6]/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
        <path d="M12 6v6l4 2" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },

  // CRMs & Calendars
  {
    id: "hubspot",
    name: "HubSpot CRM",
    category: "crm",
    categoryLabel: "CRM Sync",
    description: "Two-way deal creation, contact property logging, and instant sales rep assignment.",
    latencyOrMetric: "Full Dossier Population",
    brandColor: "#FF7A59",
    glowColor: "rgba(255, 122, 89, 0.15)",
    accentBg: "hover:border-[#FF7A59]/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M18.8 8.4V5.7a2.1 2.1 0 10-2.1 2.1h.4v3.1a5.6 5.6 0 00-2.8 1.4L7.8 7.6a2.1 2.1 0 10-1.6 1.3l6.3 4.6a5.6 5.6 0 00-.2 1.5 5.6 5.6 0 105.6-5.6h.9zM16.7 5a.7.7 0 11-.7.7c0-.4.3-.7.7-.7zM5.5 8.4a.7.7 0 11.7-.7c0 .4-.3.7-.7.7zm12.4 9.4a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
      </svg>
    ),
  },
  {
    id: "salesforce",
    name: "Salesforce",
    category: "crm",
    categoryLabel: "Enterprise CRM",
    description: "Enterprise lead routing, custom object ingestion, and automated pipeline governance.",
    latencyOrMetric: "Native API Architecture",
    brandColor: "#00A1E0",
    glowColor: "rgba(0, 161, 224, 0.15)",
    accentBg: "hover:border-[#00A1E0]/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M10.1 5.3a5.5 5.5 0 015.2-3.3 5.4 5.4 0 014.8 3 5.7 5.7 0 013.9 5.4c0 3.2-2.6 5.7-5.8 5.7H6.2A5.2 5.2 0 011 10.9a5.3 5.3 0 014.4-5.2 5.8 5.8 0 014.7-.4z" />
      </svg>
    ),
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    category: "crm",
    categoryLabel: "Calendar Engine",
    description: "Conflict-free real-time slot booking, dynamic timezone conversion, and Zoom/Meet links.",
    latencyOrMetric: "Zero Double-Bookings",
    brandColor: "#4285F4",
    glowColor: "rgba(66, 133, 244, 0.15)",
    accentBg: "hover:border-[#4285F4]/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
      </svg>
    ),
  },
  {
    id: "calendly",
    name: "Calendly",
    category: "crm",
    categoryLabel: "Scheduling Hub",
    description: "Round-robin team availability, routing forms, and automated reminder sync.",
    latencyOrMetric: "Automated Round-Robin",
    brandColor: "#006BFF",
    glowColor: "rgba(0, 107, 255, 0.15)",
    accentBg: "hover:border-[#006BFF]/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.6 13.8a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2zm-5.6 0a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2zm-5.6 0a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2z" />
      </svg>
    ),
  },
  {
    id: "zoho",
    name: "Zoho CRM",
    category: "crm",
    categoryLabel: "Multi-App CRM",
    description: "Direct sync with Zoho Bigin, Zoho CRM, and Desk ticketing for streamlined client tracking.",
    latencyOrMetric: "Bi-Directional Sync",
    brandColor: "#E42528",
    glowColor: "rgba(228, 37, 40, 0.15)",
    accentBg: "hover:border-[#E42528]/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M3 5h8v6H3V5zm10 0h8v6h-8V5zM3 13h8v6H3v-6zm10 0h8v6h-8v-6z" />
      </svg>
    ),
  },
  {
    id: "notion",
    name: "Notion Workspaces",
    category: "crm",
    categoryLabel: "Internal Database",
    description: "Client dossiers, transcript archives, and founder pipeline tables auto-populated on fly.",
    latencyOrMetric: "Instant Database Rows",
    brandColor: "#000000",
    glowColor: "rgba(0, 0, 0, 0.12)",
    accentBg: "hover:border-slate-800/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.047-.326L17.86 1.9c-.42-.326-.98-.7-2.053-.606L3.106 2.47c-.42.046-.513.326-.373.513l1.726 1.225zm.84 3.733v13.627c0 .7.466 1.027 1.26 1.027l14.288-.84c.793-.047.933-.56.933-1.073V7.054c0-.513-.28-.793-.746-.746l-15.042.887c-.466.046-.693.326-.693.746zm13.12 1.4c.094.42 0 .84-.42.887l-.793.14v8.868c-.606.326-1.166.513-1.633.513-.793 0-1.027-.28-1.587-.98l-4.527-7.14v7.42l1.353.28c.373.047.467.42.467.794 0 .373-.28.467-.653.467l-3.36.233c-.373 0-.466-.373-.466-.746 0-.374.14-.654.56-.7l1.073-.187V10.22l-1.447-.14c-.373-.047-.466-.374-.466-.747 0-.373.28-.466.653-.466l3.547-.234c.793 0 1.26.327 1.773 1.074l4.573 7.047V9.754l-1.12-.14c-.373-.047-.466-.42-.466-.794 0-.373.28-.466.653-.466l3.22-.187c.373 0 .56.28.653.56z" />
      </svg>
    ),
  },

  // Payment & Workflow Automation
  {
    id: "stripe",
    name: "Stripe Connect",
    category: "ops",
    categoryLabel: "Global Checkout",
    description: "Automated invoice dispatch, subscription lifecycle management, and webhooks to Slack/CRM.",
    latencyOrMetric: "Automated Invoicing",
    brandColor: "#635BFF",
    glowColor: "rgba(99, 91, 255, 0.15)",
    accentBg: "hover:border-[#635BFF]/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.97 15.697.5 12.873.5 6.843.5 2.87 3.52 2.87 8.528c0 5.485 5.568 6.452 8.423 7.545 2.296.88 3.09 1.579 3.09 2.545 0 .979-.89 1.488-2.227 1.488-2.585 0-5.35-1.178-7.23-2.19l-.91 5.58c1.94 1.08 4.975 1.744 7.973 1.744 6.35 0 10.635-3.08 10.635-8.384 0-5.328-5.385-6.527-8.648-7.696z" />
      </svg>
    ),
  },
  {
    id: "razorpay",
    name: "Razorpay Invoicing",
    category: "ops",
    categoryLabel: "India Payment Rails",
    description: "Automated UPI, NetBanking, and SmartCollect payment links generated instantly on call close.",
    latencyOrMetric: "Instant UPI Collect",
    brandColor: "#0C2340",
    glowColor: "rgba(12, 35, 64, 0.15)",
    accentBg: "hover:border-blue-900/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M22.436 0l-11.91 7.773-2.732 4.148 4.673 2.508 5.753-3.754-3.523 9.479L4.85 24l4.577-12.336L13.8 4.22 22.436 0z" />
      </svg>
    ),
  },
  {
    id: "make",
    name: "Make.com (Integromat)",
    category: "ops",
    categoryLabel: "Workflow Engine",
    description: "Visual webhook orchestrations, retry logic, error-catching handlers, and API bridging.",
    latencyOrMetric: "99.98% Execution Reliability",
    brandColor: "#6D28D9",
    glowColor: "rgba(109, 40, 217, 0.15)",
    accentBg: "hover:border-purple-600/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 4.8a7.2 7.2 0 110 14.4 7.2 7.2 0 010-14.4zm0 2.4a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6z" />
      </svg>
    ),
  },
  {
    id: "zapier",
    name: "Zapier Enterprise",
    category: "ops",
    categoryLabel: "Integration Hub",
    description: "5,000+ app connector syncs with automated webhooks and data transformation filters.",
    latencyOrMetric: "Zero-Code Interop",
    brandColor: "#FF4F00",
    glowColor: "rgba(255, 79, 0, 0.15)",
    accentBg: "hover:border-[#FF4F00]/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M13.5 0H10.5V9H1.5V12H10.5V21H13.5V12H22.5V9H13.5V0Z" />
      </svg>
    ),
  },
  {
    id: "postgres",
    name: "PostgreSQL Database",
    category: "ops",
    categoryLabel: "Self-Hosted Storage",
    description: "Encrypted, client-owned relational tables with zero third-party vendor lock-in.",
    latencyOrMetric: "100% Client IP Ownership",
    brandColor: "#336791",
    glowColor: "rgba(51, 103, 145, 0.15)",
    accentBg: "hover:border-[#336791]/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    id: "slack",
    name: "Slack Connect",
    category: "ops",
    categoryLabel: "Instant Founder Alerts",
    description: "Priority notifications pushed to founder channels with full audio snippets and call dossiers.",
    latencyOrMetric: "Sub-Second Push",
    brandColor: "#4A154B",
    glowColor: "rgba(74, 21, 75, 0.15)",
    accentBg: "hover:border-[#4A154B]/40",
    svg: (fill) => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
    ),
  },
];

interface IntegrationsProps {
  onOpenAudit?: () => void;
}

export function IntegrationsMarquee({ onOpenAudit }: IntegrationsProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "telephony" | "crm" | "ops">("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? INTEGRATIONS
      : INTEGRATIONS.filter((item) => item.category === activeCategory);

  // Marquee rows (Row 1 and Row 2)
  const row1 = INTEGRATIONS.slice(0, 8);
  const row2 = INTEGRATIONS.slice(8);

  return (
    <section id="integrations" className="relative px-6 py-20 md:px-10 md:py-32 bg-[#faf8f5] text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/90 text-purple-900 text-xs font-mono font-semibold tracking-wide uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Plug &amp; Play Enterprise Interop</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Works with the tools <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">
              you already run on.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg font-light leading-relaxed">
            No proprietary walled gardens or forced platform migrations. Buildicy wires autonomous voice, messaging, and qualification engines directly into your existing stack.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "Complete Ecosystem (18+)" },
              { id: "telephony", label: "Telephony & AI Voice" },
              { id: "crm", label: "CRMs & Calendars" },
              { id: "ops", label: "Payment & Workflow Engines" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-[1.02]"
                    : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-purple-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display: If "all", show Dual Infinite Marquee; else show Filtered Grid */}
        {activeCategory === "all" ? (
          <div className="space-y-4 my-8">
            {/* Infinite Row 1: Leftward */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max gap-4 animate-carousel-left py-2">
                {[...row1, ...row1].map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`group relative w-[290px] sm:w-[320px] rounded-2xl bg-white border border-slate-200/90 p-5 shadow-2xs hover:shadow-xl ${item.accentBg} transition-all duration-300 flex flex-col justify-between cursor-default shrink-0`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 transition-colors duration-300 group-hover:text-white"
                          style={{
                            backgroundColor: hoveredId === item.id ? item.brandColor : undefined,
                            borderColor: hoveredId === item.id ? item.brandColor : undefined,
                          }}
                        >
                          {item.svg(item.brandColor)}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Native Integration</span>
                        </span>
                      </div>

                      <h4 className="font-display text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-light mt-1 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>{item.categoryLabel}</span>
                      <span className="text-purple-700 font-semibold">{item.latencyOrMetric}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Infinite Row 2: Rightward */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max gap-4 animate-carousel-right py-2">
                {[...row2, ...row2].map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`group relative w-[290px] sm:w-[320px] rounded-2xl bg-white border border-slate-200/90 p-5 shadow-2xs hover:shadow-xl ${item.accentBg} transition-all duration-300 flex flex-col justify-between cursor-default shrink-0`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 transition-colors duration-300 group-hover:text-white"
                          style={{
                            backgroundColor: hoveredId === item.id ? item.brandColor : undefined,
                            borderColor: hoveredId === item.id ? item.brandColor : undefined,
                          }}
                        >
                          {item.svg(item.brandColor)}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Native Integration</span>
                        </span>
                      </div>

                      <h4 className="font-display text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-light mt-1 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>{item.categoryLabel}</span>
                      <span className="text-purple-700 font-semibold">{item.latencyOrMetric}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Filtered Interactive Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 animate-in fade-in duration-300">
            {filtered.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative rounded-3xl bg-white border border-slate-200/90 p-6 shadow-2xs hover:shadow-xl ${item.accentBg} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 transition-all duration-300 group-hover:text-white group-hover:scale-105"
                      style={{
                        backgroundColor: hoveredId === item.id ? item.brandColor : undefined,
                        borderColor: hoveredId === item.id ? item.brandColor : undefined,
                      }}
                    >
                      {item.svg(item.brandColor)}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>● Native Integration</span>
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-light mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">{item.categoryLabel}</span>
                  <span className="text-purple-700 font-bold">{item.latencyOrMetric}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Stack Guarantee Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-950 p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <Cpu className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                Using a custom in-house database or bespoke ERP?
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-light mt-0.5">
                We engineer custom secure REST/GraphQL webhooks and private API bridges with zero disruption to your daily operations.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenAudit}
            className="shrink-0 px-6 py-3.5 rounded-full bg-white text-slate-900 hover:bg-purple-100 font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Verify Your Stack Compatibility</span>
            <ArrowRight className="w-4 h-4 text-purple-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
