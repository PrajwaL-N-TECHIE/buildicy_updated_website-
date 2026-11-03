/**
 * Centralized Hyperlinks & Subdomains Configuration
 * 
 * Production portals, internal operations, and interactive live engines.
 */
export const PORTAL_LINKS = {
  // 1. Admin Portal (Executive Console & Cohort Intelligence)
  admin: "https://admin.buildicy.com",

  // 2. AI SDR Suite (Autonomous Lead Discovery & Pitch Engine)
  sdr: "https://sdr.buildicy.com",

  // 3. B-Auction (Multiplayer Real-Time Bidding Arena)
  auction: "https://auction.buildicy.com",

  // 4. B-Buzzer (Sub-10ms Precision Quiz & Game Buzzer)
  buzzer: "https://buzzer.buildicy.com",

  // 5. B-Forms Engine (Dynamic Survey & PostgreSQL Forms Engine)
  forms: "https://bforms.buildicy.com",

  // 6. B-QR Studio (Vector QR Code & Dynamic Canvas Studio)
  qr: "https://qr.buildicy.com",

  // 7. B-Rotator (High-Capacity Candidate & Student Wheel Engine)
  rotator: "https://rotator.buildicy.com",

  // 8. Buiz Arena (500+ Live Multiplayer Interactive Game Engine)
  arena: "https://buiz.buildicy.com",

  // 9. Buiz Host (Presenter & Stage Studio Console)
  host: "https://buizhost.buildicy.com",

  // 10. Finance Portal (Enterprise Runway & Revenue Ops Ledger)
  finance: "https://finance.buildicy.com",

  // Supplementary Verified Ecosystem Subdomains
  student: "https://student.buildicy.com",
  internship: "https://internship.buildicy.com",
  verify: "https://verify.buildicy.com",
};

export interface EcosystemPortal {
  id: string;
  name: string;
  url: string;
  badge: string;
  desc: string;
  tag: string;
}

export const PORTAL_ITEMS: EcosystemPortal[] = [
  {
    id: "admin",
    name: "Admin Portal",
    url: PORTAL_LINKS.admin,
    badge: "Console",
    desc: "Operations & Cohort Intelligence",
    tag: "Internal",
  },
  {
    id: "sdr",
    name: "AI SDR",
    url: PORTAL_LINKS.sdr,
    badge: "Outreach",
    desc: "Autonomous Lead Discovery Engine",
    tag: "Intelligence",
  },
  {
    id: "auction",
    name: "B-Auction",
    url: PORTAL_LINKS.auction,
    badge: "Live",
    desc: "Multiplayer Bidding & Draft Arena",
    tag: "Interactive",
  },
  {
    id: "buzzer",
    name: "B-Buzzer",
    url: PORTAL_LINKS.buzzer,
    badge: "Sub-10ms",
    desc: "Realtime Precision Game Buzzer",
    tag: "Interactive",
  },
  {
    id: "forms",
    name: "B-Forms",
    url: PORTAL_LINKS.forms,
    badge: "SaaS",
    desc: "PostgreSQL & Dynamic Survey Engine",
    tag: "SaaS",
  },
  {
    id: "qr",
    name: "B-QR",
    url: PORTAL_LINKS.qr,
    badge: "Studio",
    desc: "Vector QR Branding & Stage Engine",
    tag: "Studio",
  },
  {
    id: "rotator",
    name: "B-Rotator",
    url: PORTAL_LINKS.rotator,
    badge: "Engine",
    desc: "High-Capacity Wheel Selector",
    tag: "Interactive",
  },
  {
    id: "arena",
    name: "Buiz Arena",
    url: PORTAL_LINKS.arena,
    badge: "Multiplayer",
    desc: "500+ Live Game Show Engine",
    tag: "Interactive",
  },
  {
    id: "host",
    name: "Buiz Host",
    url: PORTAL_LINKS.host,
    badge: "Stage",
    desc: "Auditorium Presenter Console",
    tag: "Stage",
  },
  {
    id: "finance",
    name: "Finance Portal",
    url: PORTAL_LINKS.finance,
    badge: "Ledger",
    desc: "Enterprise Runway & Revenue Ops",
    tag: "Internal",
  },
];
