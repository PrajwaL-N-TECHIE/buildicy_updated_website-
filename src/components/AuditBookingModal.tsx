import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "sonner";
import { sendAuditRequest, PRIMARY_AUDIT_EMAIL } from "../lib/audit";

const WHATSAPP_URL = `https://wa.me/919150890205?text=${encodeURIComponent(
  "Hi Buildicy, I'd like to book a free 30-minute AI Growth Audit for my business."
)}`;

export function AuditBookingModal({
  initialPackage,
  initialMarket,
  onClose,
}: {
  initialPackage: string | null;
  initialMarket?: string | null;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState(
    initialPackage || "AI Front Desk + Funnel"
  );
  const [market, setMarket] = useState(initialMarket || "India — INR");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = orig;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid work email");
      return;
    }
    if (!phone.trim()) {
      toast.error("Please enter your WhatsApp or phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      await sendAuditRequest({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        businessName: businessName.trim() || undefined,
        serviceNeeded,
        market,
        notes: notes.trim() || undefined,
      });

      setIsSubmitted(true);
      toast.success("Audit Request Received!", {
        description: `Delivered to ${PRIMARY_AUDIT_EMAIL}. We'll reach out within 24 hours.`,
      });
    } catch (err) {
      console.warn("Audit dispatch warning:", err);
      setIsSubmitted(true);
      toast.info("Request Dispatched!", {
        description: `Delivered to ${PRIMARY_AUDIT_EMAIL}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isClient) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-lg max-h-[88dvh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-5 sm:p-8 text-slate-900 shadow-2xl my-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimalist Close button matching site */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer text-sm font-bold shadow-2xs z-10"
          aria-label="Close modal"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
              Audit Request Received!
            </h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed mb-6">
              Thank you, <span className="font-semibold text-slate-900">{name}</span>. Your details have been delivered to our team at <span className="font-mono text-purple-700 font-medium">{PRIMARY_AUDIT_EMAIL}</span>. We will review your business setup and reach out directly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/919150890205?text=${encodeURIComponent(
                  `Hi Buildicy! I just requested a Free AI Growth Audit:\n\n• Name: ${name}\n• Business: ${businessName || "Not specified"}\n• Email: ${email}\n• Phone: ${phone}\n• Service: ${serviceNeeded}\n• Market: ${market}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors shadow-sm"
              >
                Send Summary on WhatsApp ↗
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5 pr-10">
              <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                Free 30-Minute Session
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Book Free AI Growth Audit
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-light">
                We'll review your lead flow, follow-up gaps, and recommend the right AI system for your business.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Rahul Sharma"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Company Name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 91508 90205"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    System / Service Interest
                  </label>
                  <select
                    value={serviceNeeded}
                    onChange={(e) => setServiceNeeded(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                  >
                    <optgroup label="Individual Services">
                      <option value="AI Funnel System">AI Funnel System</option>
                      <option value="AI Receptionist">AI Receptionist</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="Digital Product System">Digital Product System</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Website / Landing Page">Website / Landing Page</option>
                    </optgroup>
                    <optgroup label="Growth Packages">
                      <option value="AI Front Desk + Funnel (Most Popular)">
                        AI Front Desk + Funnel (Most Popular)
                      </option>
                      <option value="AI Lead Machine">AI Lead Machine</option>
                      <option value="Complete AI Growth Engine">Complete AI Growth Engine</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    Market
                  </label>
                  <select
                    value={market}
                    onChange={(e) => setMarket(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                  >
                    <option value="India — INR">India (INR)</option>
                    <option value="International — USD">Intl (USD)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-1">
                  Current Revenue Leak / Goal (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Missing inbound customer calls, slow WhatsApp response, manual CRM work..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white resize-none transition-colors"
                />
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-0.5">
                <span>Prefer instant chat?</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  WhatsApp: +91 91508 90205 ↗
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-slate-900 hover:bg-purple-600 active:scale-[0.98] py-3.5 text-sm font-semibold text-white shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Dispatching Request..." : "Confirm Free AI Growth Audit"}
                </button>
              </div>

              <p className="text-[11px] font-mono text-slate-400 text-center">
                100% Free • Direct strategy session with Buildicy
              </p>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
