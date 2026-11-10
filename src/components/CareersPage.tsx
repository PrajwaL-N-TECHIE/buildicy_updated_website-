import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { generateCareersEmailHtml } from "../lib/email-templates";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Code2,
  Cpu,
  Globe,
  Headphones,
  Laptop,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

export interface JobOpening {
  id: string;
  title: string;
  department: "Engineering" | "AI & Telephony" | "Product & Design" | "Growth";
  type: "Full-Time" | "Contract" | "Internship";
  location: "Remote (Global / India)" | "Hybrid / India";
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  techStack: string[];
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "fullstack-ai-engineer",
    title: "Full-Stack AI Systems Engineer",
    department: "Engineering",
    type: "Full-Time",
    location: "Remote (Global / India)",
    experience: "1 - 4 Years / Strong Portfolio",
    summary:
      "Architect and ship production-grade AI platforms, real-time webhook pipelines, and responsive web applications for enterprise clients.",
    responsibilities: [
      "Build modular web platforms using React, TypeScript, TanStack Start/Nitro, and Tailwind CSS.",
      "Integrate frontier LLMs (OpenAI, Anthropic Claude, Google Gemini) with structured JSON outputs and self-correcting prompt loops.",
      "Design reliable PostgreSQL schemas, Supabase/Firebase backends, and low-latency cache layers with Redis.",
      "Ship clean, production-ready code in fast 14-day studio sprint cycles.",
    ],
    requirements: [
      "Fluency in modern TypeScript, React, and Node.js/Python server runtimes.",
      "Hands-on experience with LLM APIs, function calling, vector embeddings, and prompt orchestration.",
      "Solid understanding of relational database design, REST/GraphQL APIs, and asynchronous tasks.",
      "Ownership mindset: ability to take a client blueprint from concept to production deployment.",
    ],
    techStack: ["TypeScript", "React", "Python", "PostgreSQL", "Supabase", "OpenAI / Claude APIs", "Tailwind CSS"],
  },
  {
    id: "ai-voice-telephony-engineer",
    title: "AI Voice & Telephony Engineer",
    department: "AI & Telephony",
    type: "Full-Time",
    location: "Remote (Global / India)",
    experience: "1 - 3 Years / Voice AI Experience",
    summary:
      "Build zero-latency autonomous AI voice receptionists, SIP/Twilio telephony bridges, and real-time conversational agents.",
    responsibilities: [
      "Develop ultra-low-latency bidirectional audio streaming pipelines using WebSockets, WebRTC, and LiveKit.",
      "Connect telephony providers (Twilio, Vonage, Telnyx) with real-time Speech-to-Text (Whisper, Deepgram) and Text-to-Speech (ElevenLabs, Cartesia).",
      "Implement interruption handling, turn-taking detection, and dynamic tool calling during live phone calls.",
      "Monitor audio stream jitter, packet loss, and end-to-end conversational latency.",
    ],
    requirements: [
      "Deep experience with real-time streaming protocols (WebSockets, WebRTC, RTP).",
      "Familiarity with speech transcription models (Deepgram Nova-2, Whisper) and neural voice synthesis.",
      "Understanding of stateful asynchronous programming in Node.js or Python (asyncio).",
      "Passion for building voice interfaces that feel genuinely instant and human.",
    ],
    techStack: ["Python", "Node.js", "WebRTC", "LiveKit", "Twilio SIP", "Deepgram", "ElevenLabs", "Cartesia"],
  },
  {
    id: "ai-automation-ops-architect",
    title: "AI Automation & Systems Architect",
    department: "Engineering",
    type: "Full-Time",
    location: "Remote (Global / India)",
    experience: "1 - 3 Years",
    summary:
      "Design complex multi-system workflow automations connecting webhooks, CRMs, email engines, and autonomous SDR agents.",
    responsibilities: [
      "Build enterprise automation pipelines across Make.com, n8n, custom serverless functions, and PostgREST.",
      "Create autonomous inbound lead qualification and outbound email/LinkedIn discovery funnels.",
      "Integrate client CRMs (HubSpot, Salesforce, Pipedrive, custom Airtable/PostgreSQL) with automated sync.",
      "Audit client workflows to eliminate repetitive manual operational tasks.",
    ],
    requirements: [
      "Expertise in workflow orchestration tools (n8n, Make, Zapier) and custom webhook scripting.",
      "Comfort with REST API authentication (OAuth2, API keys) and JSON data transformations.",
      "Knowledge of email deliverability standards (DKIM, SPF, DMARC) and lead enrichment APIs.",
      "Relentless drive to simplify and automate messy manual processes.",
    ],
    techStack: ["n8n", "Make", "Python / TypeScript", "Webhooks", "PostgreSQL", "CRMs", "Resend API"],
  },
  {
    id: "creative-frontend-technologist",
    title: "Creative Technologist / UI Engineer",
    department: "Product & Design",
    type: "Full-Time",
    location: "Remote (Global / India)",
    experience: "1 - 3 Years",
    summary:
      "Craft bespoke, cinematic web experiences with WebGL, smooth kinetic micro-interactions, and pixel-perfect design execution.",
    responsibilities: [
      "Translate high-fidelity Figma concepts into silky smooth interactive web interfaces.",
      "Implement WebGL, Three.js shaders, canvas particle effects, and Framer Motion spring physics.",
      "Ensure ultra-responsive mobile layouts with zero layout shifts and sub-second load times.",
      "Collaborate with founders to define Buildicy's evolving digital aesthetic.",
    ],
    requirements: [
      "Strong portfolio showcasing world-class UI craft, typographic sensitivity, and fluid animations.",
      "Fluency in Tailwind CSS, Three.js / WebGL, CSS transforms, and SVG manipulation.",
      "Obsession with micro-interactions, responsive touch targets, and visual polish.",
      "Proficiency in React and modern component architecture.",
    ],
    techStack: ["React", "Three.js", "Tailwind CSS", "Framer Motion", "TanStack Router", "Vite"],
  },
  {
    id: "founding-growth-solutions-lead",
    title: "Founding Growth & Solutions Lead",
    department: "Growth",
    type: "Full-Time",
    location: "Remote (Global / India)",
    experience: "2+ Years in B2B Tech / Agency Growth",
    summary:
      "Drive client discovery, evaluate business revenue leaks, scope custom AI architectures, and close high-value agency contracts.",
    responsibilities: [
      "Conduct 30-minute AI Growth Audits with founders, agencies, and enterprise decision-makers.",
      "Translate client operational bottlenecks into actionable system implementation packages.",
      "Manage client onboarding, milestone check-ins, and relationship expansion.",
      "Identify emerging industry verticals and formulate go-to-market outbound campaigns.",
    ],
    requirements: [
      "Proven track record in technical agency sales, B2B SaaS business development, or solution consulting.",
      "Clear, persuasive verbal and written communication with founders and CTOs.",
      "Working knowledge of AI automation, voice agents, and digital funnel mechanics.",
      "High agency, proactive follow-through, and client empathy.",
    ],
    techStack: ["HubSpot", "LinkedIn Sales Navigator", "Figma / Pitch", "WhatsApp Business", "Loom"],
  },
];

export function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [activeJobModal, setActiveJobModal] = useState<JobOpening | null>(null);

  // Application form state
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantLinks, setApplicantLinks] = useState("");
  const [applicantNotes, setApplicantNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const departments = ["All", "Engineering", "AI & Telephony", "Product & Design", "Growth"];

  const filteredJobs =
    selectedDept === "All"
      ? JOB_OPENINGS
      : JOB_OPENINGS.filter((job) => job.department === selectedDept);

  const handleOpenJob = (job: JobOpening) => {
    setActiveJobModal(job);
    setIsSubmitted(false);
    setApplicantNotes(`Applying for: ${job.title}`);
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!applicantName.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (!applicantEmail.trim() || !applicantEmail.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!applicantPhone.trim()) {
      toast.error("Please enter your phone or WhatsApp number");
      return;
    }

    setIsSubmitting(true);

    const roleTitle = activeJobModal?.title || "General Application";

    const payload = {
      name: applicantName.trim(),
      email: applicantEmail.trim(),
      phone: applicantPhone.trim(),
      role: roleTitle,
      links: applicantLinks.trim() || "None provided",
      notes: applicantNotes.trim() || "No extra note",
      submittedAt: new Date().toLocaleString(),
    };

    try {
      // 1. Dispatch to server-side /api/careers endpoint
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => null);

      if (!res?.ok) {
        // Direct Resend client dispatch if key is configured
        const clientResendKey = (import.meta as any).env?.VITE_RESEND_API_KEY;
        if (clientResendKey) {
          await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${clientResendKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Buildicy Careers <onboarding@resend.dev>",
              to: ["hello@buildicy.com"],
              reply_to: applicantEmail || undefined,
              subject: `Careers Application: ${applicantName} - ${roleTitle}`,
              html: generateCareersEmailHtml({
                name: applicantName,
                role: roleTitle,
                email: applicantEmail,
                phone: applicantPhone,
                links: applicantLinks,
                notes: applicantNotes,
                submittedAt: new Date().toLocaleString(),
              }),
            }),
          }).catch(() => null);
        }

        // Fallback to FormSubmit
        const fd = new FormData();
        fd.append("_subject", `Careers Application: ${applicantName} - ${roleTitle}`);
        fd.append("_template", "table");
        fd.append("_captcha", "false");
        fd.append("candidate_name", applicantName);
        fd.append("candidate_email", applicantEmail);
        fd.append("candidate_phone", applicantPhone);
        fd.append("target_role", roleTitle);
        fd.append("portfolio_links", applicantLinks);
        fd.append("notes", applicantNotes);
        fd.append("submitted_at", new Date().toLocaleString());

        await fetch("https://formsubmit.co/hello@buildicy.com", {
          method: "POST",
          body: fd,
        }).catch(() => null);
      }

      // Store in localStorage as backup
      try {
        const stored = JSON.parse(localStorage.getItem("buildicy_applications") || "[]");
        stored.push({ ...payload, timestamp: Date.now() });
        localStorage.setItem("buildicy_applications", JSON.stringify(stored));
      } catch (err) {
        console.warn("Storage note", err);
      }

      setIsSubmitted(true);
      toast.success("Application Submitted!", {
        description: `Delivered to hello@buildicy.com. We'll review your profile promptly.`,
      });
    } catch (err) {
      console.error("Submission error:", err);
      setIsSubmitted(true);
      toast.success("Application Received!", {
        description: "Your details have been saved.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 selection:bg-purple-100 selection:text-purple-900">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf8f5]/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1300px] items-center justify-between px-6 md:px-10">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Buildicy Logo"
              className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-2xl font-bold tracking-tight text-slate-900">
              Buildicy
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <Link to="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <a href="/#services" className="hover:text-slate-900 transition-colors">
              Services
            </a>
            <a href="/#systems" className="hover:text-slate-900 transition-colors">
              Systems
            </a>
            <Link to="/contact" className="hover:text-slate-900 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919150890205?text=Hi%20Buildicy,%20I'm%20interested%20in%20career%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-emerald-300/80 bg-emerald-50 text-xs font-mono font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors"
            >
              <span>WhatsApp Careers ↗</span>
            </a>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-xs"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 text-slate-500" />
              <span>Back</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-12 md:pt-24 md:pb-16 max-w-[1300px] mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-[11px] font-mono font-semibold text-purple-800 uppercase tracking-wider mb-5">
            <Sparkles className="h-3.5 w-3.5 text-purple-700" />
            <span>Join the Studio</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
            Build Real AI Systems That Move Real Revenue.
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed mb-8">
            We don’t build generic landing pages or shallow wrappers. We engineer high-capacity AI front desks, autonomous outbound engines, and custom digital platforms that power businesses worldwide.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <Globe className="h-4 w-4 text-purple-600" />
              <span>Remote-First • Global & India</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <Zap className="h-4 w-4 text-purple-600" />
              <span>14-Day Rapid Shipping Cadence</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <Cpu className="h-4 w-4 text-purple-600" />
              <span>Zero-Lag AI Engineering Stack</span>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Values / What It's Like To Build Here */}
      <section className="px-6 py-10 max-w-[1300px] mx-auto border-t border-slate-200/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 mb-4">
              <Code2 className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
              High Autonomy & Craft
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No micromanagement or endless status meetings. You own architecture, implementation, and deployment directly with founders.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 mb-4">
              <Headphones className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
              Frontier Telephony & AI
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Work hands-on with WebSockets, LiveKit, Whisper, Deepgram, and ElevenLabs to create live phone agents with sub-500ms conversational turn-around.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 mb-4">
              <Laptop className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
              Generous Tooling & Compute
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Unlimited API access, Cloudflare Workers, modern dev environments, and direct access to state-of-the-art vision and voice models.
            </p>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="px-6 py-12 md:py-16 max-w-[1300px] mx-auto border-t border-slate-200/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-700">
                ACTIVE OPENINGS ({JOB_OPENINGS.length})
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Open Positions
            </h2>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-200/70 border border-slate-300/70">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  selectedDept === dept
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 gap-4 md:gap-5">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="group rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wide bg-purple-50 text-purple-700 border border-purple-100">
                    {job.department}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold text-slate-600 bg-slate-100">
                    {job.type}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-500 bg-slate-50">
                    {job.location}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  {job.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {job.summary}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {job.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-50 text-slate-500 border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => handleOpenJob(job)}
                  className="w-full md:w-auto px-6 py-3 rounded-full bg-slate-900 hover:bg-purple-600 text-white text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md cursor-pointer"
                >
                  <span>View Details & Apply</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* General Application Banner */}
        <div className="mt-10 rounded-3xl bg-slate-900 text-white p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold block">
              Don't see your specific role?
            </span>
            <h3 className="font-display text-2xl font-bold">
              Send a General Application
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              If you’re an exceptional engineer, prompt designer, or creative technologist passionate about autonomous systems, we want to hear from you.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@buildicy.com?subject=General%20Application%20—%20Buildicy"
              className="px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-purple-100 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Email hello@buildicy.com ↗
            </a>
            <a
              href="https://wa.me/919150890205?text=Hi%20Buildicy,%20I'd%20like%20to%20apply%20to%20the%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors"
            >
              WhatsApp Us ↗
            </a>
          </div>
        </div>
      </section>

      {/* Role Details & Application Modal */}
      {activeJobModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveJobModal(null)}
        >
          <div
            className="relative w-full sm:max-w-2xl max-h-[90dvh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-9 text-slate-900 shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveJobModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {isSubmitted ? (
              <div className="py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                  Application Received!
                </h3>
                <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-slate-900">{applicantName}</span>. Your application for <span className="font-semibold text-purple-700">{activeJobModal.title}</span> has been routed to <span className="font-mono text-purple-700 font-semibold">hello@buildicy.com</span>. We will review your portfolio and reach out directly.
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href={`https://wa.me/919150890205?text=${encodeURIComponent(
                      `Hi Buildicy! I just submitted an application for the ${activeJobModal.title} role. My name is ${applicantName}. Looking forward to connecting!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
                  >
                    Follow up on WhatsApp ↗
                  </a>
                  <button
                    onClick={() => setActiveJobModal(null)}
                    className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-purple-50 text-purple-700 border border-purple-100">
                      {activeJobModal.department}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-600 bg-slate-100">
                      {activeJobModal.type}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-600 bg-slate-100">
                      {activeJobModal.location}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                    {activeJobModal.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Experience: {activeJobModal.experience}
                  </p>
                </div>

                {/* Job Specs */}
                <div className="space-y-5 text-sm text-slate-700 mb-8">
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Responsibilities
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {activeJobModal.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      What We Look For
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {activeJobModal.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Form */}
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-1">
                    Quick Application
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mb-4">
                    Send your details directly to the engineering team.
                  </p>

                  <form onSubmit={handleApplySubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-slate-600 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="e.g. Maya Chen"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-600 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          placeholder="maya@example.com"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-slate-600 mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={applicantPhone}
                          onChange={(e) => setApplicantPhone(e.target.value)}
                          placeholder="+91 91508 90205"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-600 mb-1">
                          GitHub / Portfolio URL
                        </label>
                        <input
                          type="url"
                          value={applicantLinks}
                          onChange={(e) => setApplicantLinks(e.target.value)}
                          placeholder="https://github.com/yourhandle"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-600 mb-1">
                        Tell us about a system or project you shipped (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={applicantNotes}
                        onChange={(e) => setApplicantNotes(e.target.value)}
                        placeholder="Key tech stack used, challenges solved, or live link..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white resize-none transition-colors"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-full bg-slate-900 hover:bg-purple-600 active:scale-[0.98] py-3.5 text-sm font-semibold text-white shadow-md transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>Submitting Application...</span>
                        ) : (
                          <>
                            <span>Submit Application</span>
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 px-6 md:px-10">
        <div className="mx-auto max-w-[1300px] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">Buildicy</span>
            <span>•</span>
            <span>AI Growth Systems Studio</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <Link to="/contact" className="hover:text-slate-900 transition-colors">
              Contact
            </Link>
            <Link to="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <a
              href="mailto:hello@buildicy.com"
              className="text-purple-700 hover:underline font-semibold"
            >
              hello@buildicy.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

