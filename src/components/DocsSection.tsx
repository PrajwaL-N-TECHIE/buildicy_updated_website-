import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  FileText,
  Download,
  Eye,
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
  X,
} from "lucide-react";

export interface DocItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  type: "pdf" | "docx";
  file: string;
}

export const STUDIO_DOCS: DocItem[] = [
  {
    id: "ai-growth-systems",
    title: "AI Growth Systems",
    description: "Enquiry workflows, 5 automation modules, and 30-day pilot framework.",
    badge: "11 Pages · PDF",
    type: "pdf",
    file: "/docs/AI_Growth_Systems_Solutions_Guide.pdf",
  },
  {
    id: "product-engineering",
    title: "Product Engineering",
    description: "SaaS development, 7 delivery stages, and engineering principles.",
    badge: "10 Pages · PDF",
    type: "pdf",
    file: "/docs/Product_Engineering_Service_Guide.pdf",
  },
  {
    id: "company-profile",
    title: "Company Profile",
    description: "Studio background, 4 disciplines, and 9 founder-built systems.",
    badge: "Agency Brief · PDF",
    type: "pdf",
    file: "/buildicy-company-profile.pdf",
  },
];

export function DocsSection({ onOpenAudit }: { onOpenAudit?: () => void }) {
  const [activePreviewDoc, setActivePreviewDoc] = useState<DocItem | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Lock body scroll and handle Escape key while preview is active
  useEffect(() => {
    if (!activePreviewDoc) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePreviewDoc(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = orig;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePreviewDoc]);

  return (
    <section
      id="docs"
      className="relative z-10 px-6 py-14 md:px-10 md:py-20 bg-[#faf8f5] text-slate-900 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Minimalist Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-purple-700">
                STUDIO BLUEPRINTS
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Download How We Work.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 sm:text-right max-w-sm">
            Official client guides from <span className="text-purple-700 font-semibold">public/docs</span>.
            Inspect our architecture before booking.
          </p>
        </div>

        {/* Minimalist 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {STUDIO_DOCS.map((doc) => (
            <div
              key={doc.id}
              className="group rounded-2xl bg-white border border-slate-200/90 p-5 shadow-2xs hover:shadow-lg hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                    {doc.badge}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors tracking-tight">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-500 font-light mt-1.5 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              {/* Minimal Buttons Row */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActivePreviewDoc(doc)}
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200/80 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                <a
                  href={doc.file}
                  download
                  className="py-2 px-3.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-purple-600 text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  title={`Download ${doc.title}`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Minimalist Next Step Bar */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white/70 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="text-xs sm:text-sm text-slate-700 font-light">
            Done reviewing the guides?{" "}
            <span className="font-semibold text-slate-900">
              Let's map your enquiry system in a 30-minute discovery call.
            </span>
          </div>
          <button
            type="button"
            onClick={onOpenAudit}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-900 hover:underline cursor-pointer shrink-0"
          >
            <span>Book Free AI Growth Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Live Preview Modal (Portaled directly to document.body to ensure exact viewport centering on mobile & desktop) */}
      {isClient &&
        activePreviewDoc &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setActivePreviewDoc(null)}
          >
            <div
              className="relative w-full max-w-4xl h-[88dvh] max-h-[88dvh] rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-2xl flex flex-col overflow-hidden text-slate-900 my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 border-b border-slate-200 bg-[#faf8f5] shrink-0">
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 pr-2 sm:pr-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-display text-sm sm:text-base font-bold text-slate-900 truncate block">
                      {activePreviewDoc.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 block">
                      {activePreviewDoc.badge}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <a
                    href={activePreviewDoc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-mono text-slate-700 transition-colors shadow-2xs"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-purple-600" />
                    <span className="hidden sm:inline">New Tab</span>
                  </a>
                  <a
                    href={activePreviewDoc.file}
                    download
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium transition-colors shadow-2xs"
                    title="Download document"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setActivePreviewDoc(null)}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
                    aria-label="Close preview"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 w-full bg-slate-100 overflow-hidden flex flex-col relative">
                {activePreviewDoc.type === "pdf" ? (
                  <>
                    {/* Mobile fallback helper banner */}
                    <div className="sm:hidden px-3.5 py-2 bg-purple-50/90 border-b border-purple-100/80 flex items-center justify-between text-[11px] text-purple-900 shrink-0">
                      <span className="font-mono text-purple-700 font-medium">Reading on mobile?</span>
                      <a
                        href={activePreviewDoc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline flex items-center gap-1 text-purple-700 hover:text-purple-900"
                      >
                        <span>Open Fullscreen</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="flex-1 w-full h-full relative">
                      <iframe
                        src={`${activePreviewDoc.file}#toolbar=1&navpanes=0`}
                        title={activePreviewDoc.title}
                        className="w-full h-full border-0 absolute inset-0"
                      />
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-white overflow-y-auto">
                    <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 border border-purple-100">
                      <FileText className="w-8 h-8" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full mb-3">
                      {activePreviewDoc.badge}
                    </span>
                    <h4 className="font-display text-2xl font-bold text-slate-900 tracking-tight">
                      {activePreviewDoc.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-md mt-2 mb-6 font-light leading-relaxed">
                      {activePreviewDoc.description}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={activePreviewDoc.file}
                        download
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-purple-600 text-white px-6 py-2.5 text-xs font-semibold transition-colors shadow-xs cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Document</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setActivePreviewDoc(null);
                          onOpenAudit?.();
                        }}
                        className="inline-flex items-center gap-2 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 px-5 py-2.5 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <span>Book Free Audit</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
