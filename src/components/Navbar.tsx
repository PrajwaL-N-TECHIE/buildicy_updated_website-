import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

interface NavbarProps {
  onOpenAudit?: () => void;
  activeRoute?: "home" | "founders" | "contact" | "privacy";
}

export function Navbar({ onOpenAudit, activeRoute }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleAuditClick = () => {
    if (onOpenAudit) {
      onOpenAudit();
    } else {
      window.location.href = "/contact";
    }
  };

  const isHome = activeRoute === "home" || !activeRoute;
  const linkPrefix = isHome ? "" : "/";

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#faf8f5]/85 backdrop-blur-md text-slate-900">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Buildicy Logo"
            width="48"
            height="48"
            decoding="async"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex items-center gap-1.5">
            <span className="font-display text-2xl font-bold tracking-tight text-slate-900">
              Buildicy
            </span>
            <span className="h-2 w-2 rounded-full bg-purple-600 shadow-[0_0_12px_#9333ea] animate-pulse" />
          </div>
        </Link>

        {/* Desktop Primary Navigation */}
        <nav
          className="hidden gap-7 text-xs font-semibold text-slate-700 lg:flex items-center"
          aria-label="Primary"
        >
          <a
            href={`${linkPrefix}#problem`}
            className="link-line hover:text-slate-900 transition-colors"
          >
            Problem
          </a>
          <a
            href={`${linkPrefix}#demo`}
            className="link-line hover:text-slate-900 transition-colors"
          >
            Demo
          </a>
          <a
            href={`${linkPrefix}#proof`}
            className="link-line hover:text-slate-900 transition-colors"
          >
            Proof
          </a>
          <a
            href={`${linkPrefix}#systems`}
            className="link-line hover:text-slate-900 transition-colors"
          >
            Offer
          </a>
          <a
            href={`${linkPrefix}#protocol`}
            className="link-line hover:text-slate-900 transition-colors"
          >
            Process
          </a>
          <a
            href={`${linkPrefix}#faq`}
            className="link-line hover:text-slate-900 transition-colors"
          >
            FAQ
          </a>
          <Link
            to="/founders"
            className={`link-line transition-colors ${
              activeRoute === "founders"
                ? "text-purple-600 font-bold border-b-2 border-purple-600 pb-0.5"
                : "hover:text-purple-600"
            }`}
          >
            Founders
          </Link>
        </nav>

        {/* Right CTA + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleAuditClick}
            className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-slate-900 px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-purple-600 hover:shadow-lg cursor-pointer shrink-0"
          >
            <span className="hidden sm:inline">Get Free Lead-Leak Audit</span>
            <span className="sm:hidden">Free Audit</span>
            <Arrow className="transition-transform group-hover:rotate-45" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

    </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#faf8f5] z-[9999] flex flex-col justify-between p-6 overflow-y-auto border-t border-slate-200/80">
          <nav className="flex flex-col gap-2 text-base font-semibold text-slate-800 pt-1">
            <a
              href={`${linkPrefix}#problem`}
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 min-h-[48px] rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Problem</span>
              <span className="text-xs font-mono text-purple-700">01</span>
            </a>
            <a
              href={`${linkPrefix}#demo`}
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 min-h-[48px] rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Demo Engine</span>
              <span className="text-xs font-mono text-purple-700">02</span>
            </a>
            <a
              href={`${linkPrefix}#proof`}
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 min-h-[48px] rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Proof &amp; Case Study</span>
              <span className="text-xs font-mono text-purple-700">03</span>
            </a>
            <a
              href={`${linkPrefix}#systems`}
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 min-h-[48px] rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Offer &amp; Packages</span>
              <span className="text-xs font-mono text-purple-700">04</span>
            </a>
            <a
              href={`${linkPrefix}#protocol`}
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 min-h-[48px] rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Process (14-Day)</span>
              <span className="text-xs font-mono text-purple-700">05</span>
            </a>
            <a
              href={`${linkPrefix}#faq`}
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 min-h-[48px] rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>FAQ</span>
              <span className="text-xs font-mono text-purple-700">06</span>
            </a>
            <Link
              to="/founders"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-3 min-h-[48px] rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-between ${
                activeRoute === "founders" ? "bg-purple-100/60 text-purple-900 font-bold" : ""
              }`}
            >
              <span>Founders &amp; Leadership</span>
              <span className="text-xs font-mono font-bold text-purple-700">07</span>
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 min-h-[48px] rounded-2xl bg-purple-50 text-purple-900 border border-purple-200/80 transition-colors flex items-center justify-between"
            >
              <span>Contact Studio &amp; Inquiries</span>
              <span className="text-xs font-mono font-bold text-purple-700">↗</span>
            </Link>
            <Link
              to="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 min-h-[48px] rounded-2xl hover:bg-slate-100 text-xs font-mono text-slate-500 transition-colors flex items-center justify-between"
            >
              <span>Privacy Policy</span>
              <span>↗</span>
            </Link>
          </nav>

          <div className="pt-6 border-t border-slate-200/80 space-y-3 pb-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleAuditClick();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-purple-600 hover:bg-purple-700 px-6 py-3.5 text-sm font-semibold text-white transition-all shadow-md cursor-pointer"
            >
              <span>Get Free Lead-Leak Audit</span>
              <Arrow />
            </button>
            <p className="text-[11px] font-mono text-slate-400 text-center">
              Coimbatore, India · Worldwide Delivery
            </p>
          </div>
        </div>
      )}
    </>
  );
}
