function AIGrowthSystemsPackages({
  onSelectPkg,
}: {
  onSelectPkg: (name: string, market: string) => void;
}) {
  const [market, setMarket] = useState<"india" | "intl">("india");
  const isIntl = market === "intl";
  const marketLabel = isIntl ? "International — USD" : "India — INR";

  const plans = [
    {
      id: "starter",
      name: "Starter",
      systemNumber: "01",
      tagline: "AI lead capture, qualification & booking",
      popular: false,
      indiaSetup: "₹35,000", indiaMonthly: "₹6,999/mo",
      intlSetup: "$1,500",   intlMonthly: "$299/mo",
      cta: "Get Started",
    },
    {
      id: "growth",
      name: "Growth",
      systemNumber: "02",
      tagline: "24/7 Voice & WhatsApp AI front desk",
      popular: true,
      indiaSetup: "₹55,000", indiaMonthly: "₹12,999/mo",
      intlSetup: "$2,500",   intlMonthly: "$499/mo",
      cta: "Book a Consultation",
    },
    {
      id: "scale",
      name: "Scale",
      systemNumber: "03",
      tagline: "Complete autonomous revenue engine",
      popular: false,
      indiaSetup: "₹90,000", indiaMonthly: "₹19,999/mo",
      intlSetup: "$4,500",   intlMonthly: "$899/mo",
      cta: "Book a Consultation",
    },
  ];

  const rows = [
    { name: "AI Enquiry Capture",            s: "✓", g: "✓", sc: "✓" },
    { name: "Instant AI Responses",          s: "✓", g: "✓", sc: "✓" },
    { name: "Lead Qualification & Scoring",  s: "✓", g: "✓", sc: "✓" },
    { name: "Personalised Follow-ups",       s: "✓", g: "✓", sc: "✓" },
    { name: "FAQ Handling",                  s: "✓", g: "✓", sc: "✓" },
    { name: "Appointment Booking",           s: "✓", g: "✓", sc: "✓" },
    { name: "Booking Reminders",             s: "✓", g: "✓", sc: "✓" },
    { name: "AI No-show Recovery",           s: "✓", g: "✓", sc: "✓" },
    { name: "Human Handover",                s: "✓", g: "✓", sc: "✓" },
    { name: "WhatsApp AI",                   s: "Notifications only", g: "✓ Full conversations", sc: "✓ Full conversations" },
    { name: "CRM Integration",               s: "Contact routing", g: "2-way CRM sync", sc: "Custom 2-way pipeline" },
    { name: "24/7 AI Voice Receptionist",    s: "—", g: "✓", sc: "✓" },
    { name: "Missed-Call Recovery",          s: "—", g: "✓", sc: "✓" },
    { name: "AI Reactivation",               s: "—", g: "—", sc: "✓" },
    { name: "Conversation Insights",         s: "—", g: "—", sc: "✓" },
    { name: "Conversion Optimisation",       s: "—", g: "—", sc: "✓" },
  ];

  const Cell = ({ val, isGrowth }: { val: string; isGrowth?: boolean }) => {
    const isDash = val === "—";
    const isTick = val === "✓";
    return (
      <td className={`py-3 px-3 text-center text-xs ${isGrowth ? "border-x-2 border-purple-500 bg-purple-50/30" : ""} ${isDash ? "text-slate-300 font-mono" : isTick ? "text-emerald-600 font-bold text-sm" : "text-slate-600 font-medium"}`}>
        {val}
      </td>
    );
  };

  return (
    <section id="systems" className="px-4 py-20 sm:px-6 md:px-12 md:py-28 bg-[#faf8f5] text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-[1280px]">

        {/* Header */}
        <div className="reveal-blur flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 block mb-2">Pricing & Packages</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">Simple, transparent pricing.</h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed max-w-lg">One-time setup. Monthly subscription. No hidden fees.</p>
          </div>
          <div className="shrink-0">
            <div className="inline-flex items-center p-1 rounded-full bg-white border border-slate-200 shadow-2xs">
              <button type="button" onClick={() => setMarket("india")} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${market === "india" ? "bg-purple-600 text-white" : "text-slate-600 hover:text-slate-900"}`}>India — INR (₹)</button>
              <button type="button" onClick={() => setMarket("intl")}  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${market === "intl"  ? "bg-purple-600 text-white" : "text-slate-600 hover:text-slate-900"}`}>International — USD ($)</button>
            </div>
          </div>
        </div>

        {/* Pricing fee explanation */}
        <div className="mb-8 flex flex-wrap gap-4">
          <div className="flex items-start gap-2 text-xs text-slate-500">
            <span className="font-mono font-bold text-slate-700 shrink-0">Setup Fee</span>
            <span>One-time implementation, configuration and onboarding charge.</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-slate-500">
            <span className="font-mono font-bold text-slate-700 shrink-0">Monthly</span>
            <span>Recurring fee for platform access and ongoing services.</span>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-sm">
          <table className="w-full min-w-[700px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="w-[28%] p-6 lg:p-8 align-bottom bg-slate-50/50">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 font-bold block mb-1">System Comparison</span>
                  <h3 className="font-display text-lg font-bold text-slate-900">Feature Matrix</h3>
                </th>

                {/* Starter */}
                <th className="w-[24%] p-6 lg:p-8 text-center align-top bg-white">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">Starter</span>
                  <div className="mb-1">
                    <span className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900">{isIntl ? plans[0].intlSetup : plans[0].indiaSetup}</span>
                    <span className="text-[10px] font-mono text-slate-400 block mt-0.5">one-time setup</span>
                  </div>
                  <div className="text-sm font-bold text-purple-700 mb-1">{isIntl ? plans[0].intlMonthly : plans[0].indiaMonthly}</div>
                  <p className="text-[11px] text-slate-400 mb-4 leading-snug">{plans[0].tagline}</p>
                  <button type="button" onClick={() => onSelectPkg(plans[0].name, marketLabel)} className="w-full py-2 px-4 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-purple-600 text-white transition-all cursor-pointer active:scale-95">Get Started</button>
                </th>

                {/* Growth — highlighted */}
                <th className="w-[24%] p-0 text-center align-top relative bg-purple-50/30 border-x-2 border-t-2 border-purple-500">
                  <div className="bg-purple-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest py-1.5 flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-purple-200" /><span>Most Popular</span>
                  </div>
                  <div className="p-6 lg:p-8 pt-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-2">Growth</span>
                    <div className="mb-1">
                      <span className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900">{isIntl ? plans[1].intlSetup : plans[1].indiaSetup}</span>
                      <span className="text-[10px] font-mono text-slate-400 block mt-0.5">one-time setup</span>
                    </div>
                    <div className="text-sm font-bold text-purple-700 mb-1">{isIntl ? plans[1].intlMonthly : plans[1].indiaMonthly}</div>
                    <p className="text-[11px] text-slate-500 mb-4 leading-snug font-medium">{plans[1].tagline}</p>
                    <button type="button" onClick={() => onSelectPkg(plans[1].name, marketLabel)} className="w-full py-2 px-4 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white transition-all cursor-pointer shadow-md shadow-purple-600/25 active:scale-95">Book a Consultation</button>
                  </div>
                </th>

                {/* Scale */}
                <th className="w-[24%] p-6 lg:p-8 text-center align-top bg-white">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">Scale</span>
                  <div className="mb-1">
                    <span className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900">{isIntl ? plans[2].intlSetup : plans[2].indiaSetup}</span>
                    <span className="text-[10px] font-mono text-slate-400 block mt-0.5">one-time setup</span>
                  </div>
                  <div className="text-sm font-bold text-purple-700 mb-1">{isIntl ? plans[2].intlMonthly : plans[2].indiaMonthly}</div>
                  <p className="text-[11px] text-slate-400 mb-4 leading-snug">{plans[2].tagline}</p>
                  <button type="button" onClick={() => onSelectPkg(plans[2].name, marketLabel)} className="w-full py-2 px-4 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-purple-600 text-white transition-all cursor-pointer active:scale-95">Book a Consultation</button>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-slate-100/70 border-b border-slate-200">
                <td colSpan={4} className="py-2 px-6 lg:px-8 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">Features</td>
              </tr>
              {rows.map((r, idx) => (
                <tr key={r.name} className={`border-b border-slate-200/60 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"} hover:bg-purple-50/10 transition-colors`}>
                  <td className="py-3 px-6 lg:px-8 text-xs font-medium text-slate-800">{r.name}</td>
                  <Cell val={r.s} />
                  <Cell val={r.g} isGrowth />
                  <Cell val={r.sc} />
                </tr>
              ))}
              <tr className="border-t border-slate-200 bg-slate-50/50">
                <td className="py-4 px-6 lg:px-8 text-xs text-slate-400 font-medium">Ready to get started?</td>
                <td className="py-4 px-3 text-center"><button type="button" onClick={() => onSelectPkg(plans[0].name, marketLabel)} className="text-xs font-semibold text-purple-700 hover:underline cursor-pointer">Get Started →</button></td>
                <td className="py-4 px-3 text-center border-x-2 border-b-2 border-purple-500 bg-purple-50/30"><button type="button" onClick={() => onSelectPkg(plans[1].name, marketLabel)} className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white cursor-pointer">Book a Consultation <ArrowRight className="w-3 h-3" /></button></td>
                <td className="py-4 px-3 text-center"><button type="button" onClick={() => onSelectPkg(plans[2].name, marketLabel)} className="text-xs font-semibold text-purple-700 hover:underline cursor-pointer">Book a Consultation →</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Additional cost note */}
        <p className="mt-5 text-[11px] text-slate-400 leading-relaxed max-w-2xl">
          <span className="font-semibold text-slate-500">Additional costs billed separately:</span> WhatsApp message charges, voice/telephony usage and AI usage beyond the included allowance. Meta advertising spend is paid separately by the client.
        </p>

      </div>
    </section>
  );
}
