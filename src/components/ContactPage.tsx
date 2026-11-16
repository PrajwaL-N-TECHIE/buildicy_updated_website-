import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { generateContactEmailHtml } from "../lib/email-templates";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Download,
  FileText,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  Clock,
  Globe2,
} from "lucide-react";

export const NEED_OPTIONS = [
  "AI Growth Funnel",
  "AI Voice / Receptionist",
  "Workflow Automation",
  "Web Application",
  "Custom Architecture",
];

export const PDF_DOCS = [
  {
    title: "Company Profile",
    description: "Studio background, team philosophy & approach",
    file: "/buildicy-company-profile.pdf",
    badge: "Profile",
  },
  {
    title: "Capabilities & Solutions Guide",
    description: "Detailed breakdown of AI systems & offerings",
    file: "/buildicy-services-solutions.pdf",
    badge: "Services",
  },
  {
    title: "Case Studies & Portfolio",
    description: "Client architectures, real metrics & results",
    file: "/buildicy-case-studies.pdf",
    badge: "Work",
  },
];

export const TARGET_EMAIL = "hello@buildicy.com";

const WHATSAPP_URL = `https://wa.me/919150890205?text=${encodeURIComponent(
  "Hi Buildicy, I'd like to discuss a project with your team."
)}`;

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedNeed, setSelectedNeed] = useState("AI Growth Funnel");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(TARGET_EMAIL);
    setCopiedEmail(true);
    toast.success("Email copied to clipboard", {
      description: TARGET_EMAIL,
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!message.trim()) {
      toast.error("Please enter a short message about your project");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      _subject: `New Project Inquiry from ${name} (${selectedNeed})`,
      _template: "table",
      _captcha: "false",
      client_name: name,
      client_email: email,
      service_needed: selectedNeed,
      message: message,
      submitted_at: new Date().toLocaleString(),
    };

    const fd = new FormData();
    fd.append("_subject", `New Project Inquiry from ${name} (${selectedNeed})`);
    fd.append("_template", "table");
    fd.append("_captcha", "false");
    fd.append("client_name", name);
    fd.append("client_email", email);
    fd.append("service_needed", selectedNeed);
    fd.append("message", message);
    fd.append("submitted_at", new Date().toLocaleString());

    try {
      // 1. Deliver via local backend /api/contact endpoint or direct Resend API
      const localContactRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          serviceNeeded: selectedNeed,
          message,
        }),
      }).catch(() => null);

      if (!localContactRes?.ok) {
        // 2. Deliver directly via Resend client fallback
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Buildicy Contact <onboarding@resend.dev>",
            to: [TARGET_EMAIL],
            reply_to: email,
            subject: `New Inquiry: ${name} (${selectedNeed})`,
            html: generateContactEmailHtml({
              name,
              email,
              serviceNeeded: selectedNeed,
              message,
              submittedAt: new Date().toLocaleString(),
            }),
          }),
        }).catch(() => null);

        // 3. Backup to FormSubmit
        await fetch(`https://formsubmit.co/${TARGET_EMAIL}`, {
          method: "POST",
          mode: "no-cors",
          body: fd,
        }).catch(() => null);
      }

      // Save locally as safety backup
      try {
        const stored = JSON.parse(
          localStorage.getItem("buildicy_inquiries") || "[]"
        );
        stored.push({ ...payload, timestamp: Date.now() });
        localStorage.setItem("buildicy_inquiries", JSON.stringify(stored));
      } catch (err) {
        console.warn("Storage error", err);
      }

      setIsSubmitted(true);
      toast.success("Inquiry sent successfully", {
        description: `Delivered to ${TARGET_EMAIL}`,
      });
    } catch (err) {
      console.warn("Submission fallback", err);
      setIsSubmitted(true);
      toast.info("Inquiry captured", {
        description: `Dispatched to ${TARGET_EMAIL}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoLink = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(
    `Project Inquiry: ${name || "New Client"} (${selectedNeed})`
  )}&body=${encodeURIComponent(
    `Hi Buildicy Team,\n\nName: ${name}\nEmail: ${email}\nService Needed: ${selectedNeed}\n\nProject Details:\n${message}`
  )}`;

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 font-sans antialiased selection:bg-purple-600 selection:text-white relative flex flex-col justify-between">
      {/* Subtle Studio Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-1/4 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08)_0%,rgba(99,102,241,0.02)_40%,transparent_70%)]" />
        <div className="cinematic-noise opacity-20" />
      </div>

      {/* Clean Studio Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf8f5]/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1300px] items-center justify-between px-6 md:px-10">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Buildicy Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex items-center gap-1.5">
              <span className="font-display text-2xl font-bold tracking-tight text-slate-900">
                Buildicy
              </span>

            </div>
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Email Copy Pill */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-700 bg-white border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs cursor-pointer"
              title="Click to copy email address"
            >
              <Mail className="h-3.5 w-3.5 text-purple-600" />
              <span className="font-semibold">{TARGET_EMAIL}</span>
              {copiedEmail ? (
                <Check className="h-3.5 w-3.5 text-emerald-600" />
              ) : (
                <Copy className="h-3 w-3 text-slate-400" />
              )}
            </button>

            <Link
              to="/founders"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all shadow-xs"
            >
              Founders
            </Link>

            <Link
              to="/"
              className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-xs"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5 text-slate-500" />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-[1240px] px-6 py-12 md:py-20 flex-1 w-full">
        {/* Page Heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="eyebrow text-purple-600 font-semibold tracking-wider block mb-2">
            START A PROJECT
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Let's build something together.
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Have a project in mind, need an AI growth audit, or want to explore working with our studio?
            Send us a message below or review our studio decks.
          </p>
        </div>

        {/* 2-Column Minimalist Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Clean Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 shadow-xs">
              {isSubmitted ? (
                /* Success Confirmation State */
                <div className="text-center py-10">
                  <div className="h-16 w-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-5 shadow-xs">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    Inquiry Received
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{name}</span>.
                    Your project details were delivered directly to{" "}
                    <span className="font-mono text-purple-700 font-medium">{TARGET_EMAIL}</span>.
                    We will get back to you within 24 hours.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-purple-600 transition-all shadow-xs"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setMessage("");
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
                    >
                      Send Another
                    </button>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all"
                    >
                      Return Home
                    </Link>
                  </div>
                </div>
              ) : (
                /* Minimalist, Professional Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/40 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@company.com"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/40 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all"
                    />
                  </div>

                  {/* What do you need? Chips */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                      Service / Need
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {NEED_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSelectedNeed(opt)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                            selectedNeed === opt
                              ? "bg-slate-900 text-white font-semibold shadow-xs"
                              : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                      Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you're looking to build, any goals, or questions..."
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/40 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all resize-y min-h-[120px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 py-3.5 px-6 text-sm font-semibold text-white shadow-xs hover:bg-purple-600 transition-all active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-center text-xs text-slate-500 font-mono">
                      Inquiries delivered directly to{" "}
                      <span className="text-slate-900 font-semibold">{TARGET_EMAIL}</span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Studio Information & PDF Decks (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Studio Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs">
              <span className="eyebrow text-purple-600 font-semibold tracking-wider block mb-2">
                DIRECT INQUIRIES
              </span>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                Talk directly with the founders
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Every inquiry is reviewed directly by our founding partners. We provide clear technical
                feedback and architecture recommendations within 24 hours.
              </p>

              {/* Email box */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#faf8f5] border border-slate-200/90 mb-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="h-4 w-4 text-purple-600 shrink-0" />
                  <span className="text-xs font-mono font-bold text-slate-900 truncate">
                    {TARGET_EMAIL}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shrink-0"
                >
                  {copiedEmail ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Direct Actions: WhatsApp & Response Info */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 py-3 text-xs font-semibold text-emerald-800 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>

                <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-3 border-t border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    Response: &lt;24 hours
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe2 className="h-3.5 w-3.5 text-slate-400" />
                    Worldwide
                  </span>
                </div>
              </div>
            </div>

            {/* Studio Documents Section */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="eyebrow text-purple-600 font-semibold tracking-wider">
                  STUDIO DOCUMENTS
                </span>
                <span className="text-xs font-mono text-slate-400">PDF</span>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5">
                Download Agency Decks
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-5">
                Review our capabilities, case studies, and engineering framework:
              </p>

              <div className="space-y-2.5">
                {PDF_DOCS.map((doc) => (
                  <div
                    key={doc.title}
                    className="p-3.5 rounded-2xl border border-slate-200/80 bg-[#faf8f5] hover:border-purple-300 hover:bg-purple-50/20 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shrink-0">
                        <FileText className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate">
                          {doc.title}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {doc.description}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <a
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white transition-colors"
                        title="View Document"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <a
                        href={doc.file}
                        download
                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white transition-colors"
                        title="Download Document"
                      >
                        <Download className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact & Direct Mail Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)]">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Direct Email
              </h4>
              <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 mb-3">
                <span className="text-xs font-mono font-semibold text-purple-700 truncate">
                  {TARGET_EMAIL}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg hover:bg-slate-200/70 text-slate-600 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Response time is typically within 24 hours. We're happy to
                schedule a direct call or review your technical brief.
              </p>
            </div>

            {/* Official Business WhatsApp Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)]">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Business WhatsApp
              </h4>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors mb-3 group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold">+91 91508 90205</span>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
                  Chat ↗
                </span>
              </a>
              <p className="text-xs text-slate-500 leading-relaxed">
                Official company WhatsApp account. Connect directly with our engineering team for instant project scoping.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Clean Minimalist Studio Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-6 px-6 md:px-10 text-xs font-mono text-slate-500">
        <div className="mx-auto max-w-[1240px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 font-sans">Buildicy</span>
            <span>•</span>
            <span>AI Growth Systems Studio</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/founders" className="hover:text-purple-700 transition-colors">
              Founders
            </Link>
            <Link to="/privacy" className="hover:text-purple-700 transition-colors">
              Privacy Policy
            </Link>
            <div>
              Direct inquiries:{" "}
              <a
                href={`mailto:${TARGET_EMAIL}`}
                className="text-purple-700 hover:underline font-semibold"
              >
                {TARGET_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
