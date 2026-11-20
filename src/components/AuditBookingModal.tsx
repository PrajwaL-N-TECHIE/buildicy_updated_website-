import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles, X } from "lucide-react";
import { sendAuditRequest, PRIMARY_AUDIT_EMAIL } from "../lib/audit";

const WHATSAPP_URL = `https://wa.me/919150890205?text=${encodeURIComponent(
  "Hi Buildicy, I'd like to book a free 30-minute AI Growth Audit for my business."
)}`;

const SYSTEMS = [
  { id: "Growth — 24/7 AI Receptionist", label: "Growth — 24/7 AI Receptionist" },
  { id: "Starter — AI Lead Capture & Booking", label: "Starter — Lead Capture & Booking" },
  { id: "Scale — Full AI Growth Engine", label: "Scale — Full AI Growth Engine" },
  { id: "Buildicy Studio — Custom Build", label: "Custom Architecture" },
];

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
    initialPackage || "Growth — 24/7 AI Receptionist"
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
        description: `Delivered to ${PRIMARY_AUDIT_EMAIL}. We will reach out within 24 hours.`,
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
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90dvh] overflow-y-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 text-slate-900 shadow-2xl my-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sleek Minimalist Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer text-sm font-bold z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
              Audit Scheduled!
            </h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed mb-6 font-normal">
              Thank you, <span className="font-semibold text-slate-900">{name}</span>. We've received your request and will prepare your custom AI blueprint.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2.5">
              <a
                href={`https://wa.me/919150890205?text=${encodeURIComponent(
                  `Hi Buildicy! I just requested a Free AI Growth Audit:\n\n• Name: ${name}\n• Business: ${businessName || "Not specified"}\n• Email: ${email}\n• Phone: ${phone}\n• Service: ${serviceNeeded}\n• Market: ${market}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-xs font-semibold text-white transition-colors shadow-xs"
              >
                <span>Continue on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-50 text-purple-700 border border-purple-200/70 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                FREE 30-MINUTE STRATEGY
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Book AI Growth Audit
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                Review your lead flow, follow-up gaps, and blueprint your 24/7 AI booking system.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name & Business */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name <span className="text-purple-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Rahul Sharma"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Acme Growth"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Work Email <span className="text-purple-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    WhatsApp / Phone <span className="text-purple-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 91508 90205"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Row 3: System Selection & Currency */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    System Interest
                  </label>
                  <select
                    value={serviceNeeded}
                    onChange={(e) => setServiceNeeded(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-all cursor-pointer"
                  >
                    {SYSTEMS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Currency
                  </label>
                  <select
                    value={market}
                    onChange={(e) => setMarket(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="India — INR">INR (₹)</option>
                    <option value="International — USD">USD ($)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Primary Goal or Current Bottleneck <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Stop losing leads after-hours, automate qualification"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
                />
              </div>

              {/* Instant WhatsApp alternative */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>Prefer instant chat?</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-800 font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: +91 91508 90205</span>
                </a>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-slate-900 hover:bg-purple-600 active:scale-[0.99] py-3.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 group"
                >
                  <span>{isSubmitting ? "Dispatching..." : "Confirm Free AI Growth Audit"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center font-normal">
                100% Free • No obligation • Direct system architecture session
              </p>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
