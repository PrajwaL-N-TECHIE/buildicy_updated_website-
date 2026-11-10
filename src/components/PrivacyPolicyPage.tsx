import { Link } from "@tanstack/react-router";
import { ArrowLeft, Shield, Lock, FileCode2, Cpu, EyeOff, Server, HelpCircle, ArrowUpRight } from "lucide-react";

export function PrivacyPolicyPage() {
  const lastUpdated = "November 2026";

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 selection:bg-purple-100 selection:text-purple-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf8f5]/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 md:px-10">
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

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex text-xs font-mono font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact Studio
            </Link>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-xs"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 text-slate-500" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-[960px] px-6 py-12 md:py-20">
        {/* Header Badge & Title */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-[11px] font-mono font-semibold text-purple-800 uppercase tracking-wider mb-4">
            <Shield className="h-3.5 w-3.5 text-purple-700" />
            <span>Legal & Client Trust</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            Privacy Policy
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            How Buildicy protects client intelligence, proprietary workflows, and customer data. We practice zero-training AI confidentiality and guaranteed client code ownership.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-4 border-t border-slate-200/80">
            <span>Effective Date: {lastUpdated}</span>
            <span>•</span>
            <span>Jurisdiction: India & Worldwide</span>
            <span>•</span>
            <a
              href="mailto:hello@buildicy.com"
              className="text-purple-700 hover:underline font-semibold"
            >
              hello@buildicy.com
            </a>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 md:space-y-10">
          {/* Section 1: Overview */}
          <section className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-700">
                <Shield className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                1. Overview & Studio Scope
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3 font-normal">
              <p>
                This Privacy Policy outlines how <strong>Buildicy</strong> (“we”, “us”, or “our”) collects, handles, and safeguards information when you visit our website (<strong>buildicy.com</strong>), request a growth system audit, use our interactive prototypes, or engage us to design, engineer, and deploy AI growth systems.
              </p>
              <p>
                We build bespoke systems for founders, agencies, and enterprises worldwide. Because our systems interact with high-value revenue operations, we hold our privacy and data segregation practices to the highest engineering standards.
              </p>
            </div>
          </section>

          {/* Section 2: Zero Training Guarantee */}
          <section className="rounded-3xl border-2 border-purple-500/30 bg-purple-50/20 p-7 sm:p-9 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-2xl bg-purple-600 text-white">
                <EyeOff className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-700 block">
                  Core Engineering Principle
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  2. Zero-Retention AI Policy
                </h2>
              </div>
            </div>
            <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3 font-normal">
              <p>
                <strong>Your company data is never used to train public foundational AI models.</strong>
              </p>
              <p>
                When Buildicy deploys AI systems (including AI voice receptionists, autonomous SDR workflows, lead qualification funnels, and CRM agents), all underlying LLM integrations utilize enterprise-tier API agreements (via OpenAI, Anthropic, Google Cloud Vertex, or self-hosted models). Under these agreements:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm font-mono">
                <li>Zero retention for foundational training is legally enforced.</li>
                <li>Your customer conversations and transcripts remain strictly private to your isolated tenant.</li>
                <li>Inputs, outputs, and system prompts are not inspected or shared across organizations.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Information We Collect */}
          <section className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-700">
                <Lock className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                3. Information We Collect
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3 font-normal">
              <p>
                We only collect information directly relevant to evaluating your system requirements or delivering contracted product engineering services:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-slate-900 mb-1">Inquiry & Audit Data</div>
                  <p className="text-slate-500 font-sans">
                    Client name, business work email, WhatsApp/phone number, target market, and operational pain points submitted via our audit or contact forms.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-slate-900 mb-1">System Integration Credentials</div>
                  <p className="text-slate-500 font-sans">
                    Scoped API keys, webhook URLs, and CRM endpoints provided during system installation, stored in encrypted environment vaults.
                  </p>
                </div>
              </div>
              <p className="text-sm">
                We do not collect sensitive personal financial information on this website. Payments are billed through official corporate invoicing or trusted payment processors (Stripe/Bank Wire).
              </p>
            </div>
          </section>

          {/* Section 4: 100% Client Code & IP Ownership */}
          <section className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-700">
                <FileCode2 className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                4. Client Code & Intellectual Property
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3 font-normal">
              <p>
                Upon completion of milestones and project settlement, <strong>100% of custom software, private GitHub repositories, architecture blueprints, database schemas, and workflows belong to you</strong>.
              </p>
              <p>
                Buildicy does not lock you into proprietary hosting monopolies or retain ownership of your production deliverables. Your code is pushed directly to your organization’s private repositories.
              </p>
            </div>
          </section>

          {/* Section 5: Third-Party Infrastructure */}
          <section className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-700">
                <Server className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                5. Third-Party Infrastructure
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3 font-normal">
              <p>
                To provide high availability and zero-latency global delivery, we partner with industry-standard infrastructure providers:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
                <li><strong>Cloudflare:</strong> Edge routing, SSL/TLS termination, and DDoS protection.</li>
                <li><strong>Resend:</strong> High-deliverability transactional email delivery for inquiry notifications.</li>
                <li><strong>WhatsApp Business API:</strong> Official encrypted messaging channels for client instant communications.</li>
              </ul>
              <p className="text-sm text-slate-500">
                Each provider operates under strict GDPR and enterprise privacy agreements.
              </p>
            </div>
          </section>

          {/* Section 6: Data Rights & Contact */}
          <section className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-700">
                <HelpCircle className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                6. Your Rights & Contact Details
              </h2>
            </div>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4 font-normal">
              <p>
                You retain complete control over your data. At any time, you may request:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
                <li>A complete export of all contact records or consultation logs.</li>
                <li>Immediate, permanent purging of your data and credentials from our internal consoles.</li>
                <li>Review of any third-party processors connected to your active systems.</li>
              </ul>

              <div className="mt-6 p-5 rounded-2xl bg-[#faf8f5] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="font-display text-base font-bold text-slate-900">
                    Official Privacy & Security Office
                  </div>
                  <div className="text-xs font-mono text-slate-500 mt-0.5">
                    Buildicy AI Studio • India (Operating Worldwide)
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1 text-xs font-mono">
                  <a
                    href="mailto:hello@buildicy.com"
                    className="text-purple-700 hover:underline font-bold"
                  >
                    hello@buildicy.com
                  </a>
                  <a
                    href="https://wa.me/919150890205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline"
                  >
                    WhatsApp: +91 91508 90205 ↗
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 px-6 md:px-10">
        <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">Buildicy</span>
            <span>•</span>
            <span>AI Growth Systems Studio</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <Link to="/contact" className="hover:text-slate-900 transition-colors">
              Contact
            </Link>
            <a
              href="https://wa.me/919150890205"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 transition-colors"
            >
              WhatsApp
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-purple-700 hover:underline cursor-pointer"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

