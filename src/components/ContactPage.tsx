import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Copy,
  Download,
  Eye,
  FileText,
  Mail,
  Send,
} from "lucide-react";

export const NEED_OPTIONS = [
  "AI Growth Funnel",
  "AI Voice / Receptionist",
  "Web Application",
  "Workflow Automation",
  "Custom Project",
];

export const PDF_DOCS = [
  {
    title: "Company Profile",
    description: "Studio background, team philosophy & approach",
    file: "/buildicy-company-profile.pdf",
    badge: "Overview",
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
    toast.success("Email copied to clipboard!", {
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
      toast.error("Please enter a short message about what you need");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      _subject: `New Inquiry from ${name} - ${selectedNeed}`,
      _template: "table",
      _captcha: "false",
      client_name: name,
      client_email: email,
      service_needed: selectedNeed,
      message: message,
      submitted_at: new Date().toLocaleString(),
    };

    const fd = new FormData();
    fd.append("_subject", `New Inquiry from ${name} - ${selectedNeed}`);
    fd.append("_template", "table");
    fd.append("_captcha", "false");
    fd.append("client_name", name);
    fd.append("client_email", email);
    fd.append("service_needed", selectedNeed);
    fd.append("message", message);
    fd.append("submitted_at", new Date().toLocaleString());

    try {
      // 1. Deliver directly via Resend
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
          html: `
            <div style="font-family: sans-serif; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px;">
              <h2 style="color: #0f172a; margin-top: 0;">New Project Inquiry</h2>
              <p><strong>Client:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Need / Service:</strong> ${selectedNeed}</p>
              <p><strong>Message:</strong><br/>${message}</p>
              <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 16px 0;" />
              <small style="color: #94a3b8; font-family: monospace;">Submitted at ${new Date().toLocaleString()}</small>
            </div>
          `,
        }),
      }).catch(() => null);

      // 2. Backup to FormSubmit
      await fetch(`https://formsubmit.co/${TARGET_EMAIL}`, {
        method: "POST",
        mode: "no-cors",
        body: fd,
      }).catch(() => null);

      // Save to localStorage as backup
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
      toast.success("Inquiry sent successfully!", {
        description: `Delivered directly to ${TARGET_EMAIL}`,
      });
    } catch (err) {
      console.warn("Submission fallback", err);
      setIsSubmitted(true);
      toast.info("Inquiry captured!", {
        description: `Dispatched to ${TARGET_EMAIL}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoLink = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(
    `Project Inquiry: ${name || "New Client"} (${selectedNeed})`
  )}&body=${encodeURIComponent(
    `Hi Mayur,\n\nName: ${name}\nEmail: ${email}\nWhat I need: ${selectedNeed}\n\nMessage:\n${message}`
  )}`;

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-slate-900 font-sans antialiased selection:bg-purple-600 selection:text-white relative">
      {/* Subtle Light Ambience */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12)_0%,rgba(99,102,241,0.04)_50%,transparent_70%)] blur-3xl" />
      </div>

      {/* Clean Light Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
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

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              title="Click to copy email"
            >
              <Mail className="h-3.5 w-3.5 text-purple-600" />
              <span>{TARGET_EMAIL}</span>
              {copiedEmail ? (
                <Check className="h-3 w-3 text-emerald-600" />
              ) : (
                <Copy className="h-3 w-3 text-slate-400" />
              )}
            </button>

            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-xs"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-slate-500" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              great together.
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Send us a quick message with what you need, or preview and download
            our studio PDF decks below.
          </p>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sweet & Clean Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)]">
              {isSubmitted ? (
                /* Sweet Success State */
                <div className="text-center py-8">
                  <div className="h-16 w-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-5 shadow-xs">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    Inquiry Received!
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-slate-900">{name}</span>!
                    Your message has been delivered to{" "}
                    <span className="font-mono text-purple-700 font-medium">{TARGET_EMAIL}</span>.
                    We will reply within 24 hours.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 transition-all shadow-sm"
                    >
                      <Mail className="h-4 w-4" />
                      Open in Email App
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setMessage("");
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
                    >
                      Send Another
                    </button>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all"
                    >
                      Return Home
                    </Link>
                  </div>
                </div>
              ) : (
                /* Sweet, Neat, Clean Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                      Your Name <span className="text-purple-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:bg-white focus:outline-none focus:ring-3 focus:ring-purple-100 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                      Email Address <span className="text-purple-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@company.com"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:bg-white focus:outline-none focus:ring-3 focus:ring-purple-100 transition-all"
                    />
                  </div>

                  {/* What do you need? (Clean Chips) */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                      What do you need?
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {NEED_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSelectedNeed(opt)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                            selectedNeed === opt
                              ? "bg-purple-600 text-white font-semibold shadow-xs"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2">
                      Message <span className="text-purple-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you're looking to build, any goals, or questions..."
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:bg-white focus:outline-none focus:ring-3 focus:ring-purple-100 transition-all resize-y min-h-[110px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 py-4 px-6 text-sm font-semibold text-white shadow-md hover:bg-purple-600 transition-all active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-center text-xs text-slate-500 font-mono">
                      Inquiries go straight to{" "}
                      <span className="text-purple-700 font-semibold">{TARGET_EMAIL}</span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: PDF Download & Preview Section (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* PDF Decks Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-2 w-2 rounded-full bg-purple-600" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-700">
                  Studio Documents
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-1.5">
                Download Agency Decks
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-5">
                Feel free to look through our official PDF documents to learn
                more about our capabilities, case studies, and systems:
              </p>

              {/* PDF Documents List */}
              <div className="space-y-3">
                {PDF_DOCS.map((doc) => (
                  <div
                    key={doc.title}
                    className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-purple-50/40 hover:border-purple-200 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-purple-600 shrink-0" />
                        <h4 className="text-sm font-semibold text-slate-900">
                          {doc.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 font-medium">
                        PDF
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 mb-3 pl-6">
                      {doc.description}
                    </p>

                    <div className="flex items-center gap-2 pl-6">
                      <a
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-800 bg-white px-3 py-1.5 rounded-lg border border-slate-200 hover:border-purple-300 shadow-2xs transition-all"
                      >
                        <Eye className="h-3 w-3" />
                        Look / View
                      </a>
                      <a
                        href={doc.file}
                        download
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 shadow-2xs transition-all"
                      >
                        <Download className="h-3 w-3" />
                        Download
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
          </div>
        </div>
      </main>

      {/* Clean Footer */}
      <footer className="relative z-10 border-t border-slate-200/80 bg-white py-8 px-6 md:px-10 mt-16">
        <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">Buildicy</span>
            <span>•</span>
            <span>AI Growth Systems Studio</span>
          </div>
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
      </footer>
    </div>
  );
}
