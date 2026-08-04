export const siteConfig = {
  name: "Next Alphabet",
  description:
    "Building simple products that solve real, practical problems.",
  url: "https://www.nextalphabet.com",
  twitter: "https://x.com/nextalphabet_",
  email: "contact@nextalphabet.com",
};

export const founder = {
  name: "Rahul Singh",
  role: "Founder",
  twitter: "https://x.com/rahulsinghh__",
  twitterHandle: "@rahulsinghh__",
};

export const navLinks = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
] as const;

export interface Product {
  name: string;
  tagline: string;
  description: string;
  url: string;
  icon: string;
  /** "R, G, B" — used for a subtle per-product hover tint on the product card */
  accent: string;
  features: string[];
  platforms: ("web" | "macos" | "iphone")[];
  status: "live" | "coming-soon";
}

export const products: Product[] = [
  {
    name: "Traction",
    tagline: "Build better habits.",
    description:
      "Habit and goal tracking, kept entirely on your device.",
    url: "https://apps.apple.com/in/app/habit-goal-tracker-traction/id6790078790",
    icon: "/icons/traction.png",
    accent: "99, 102, 241",
    features: [],
    platforms: ["iphone"],
    status: "live",
  },
  {
    name: "ToneScribe",
    tagline: "Type 4x faster.",
    description:
      "100% private, on-device dictation. Works in every app.",
    url: "https://tonescribe.com",
    icon: "/icons/tonescribe.png",
    accent: "39, 39, 42",
    features: [],
    platforms: ["macos", "iphone"],
    status: "live",
  },
  {
    name: "Biscuit",
    tagline: "Screenshots in minutes.",
    description:
      "The easiest way to make beautiful App Store & Google Play screenshots.",
    url: "https://www.meetbiscuit.com",
    icon: "/icons/biscuit.png",
    accent: "59, 130, 246",
    features: [],
    platforms: ["web"],
    status: "live",
  },
  {
    name: "PnLCard",
    tagline: "Log. Share. Grow.",
    description:
      "The trading journal that only takes 60 seconds a day.",
    url: "https://www.pnlcard.com",
    icon: "/icons/pnlcard.svg",
    accent: "22, 163, 74",
    features: [],
    platforms: ["web"],
    status: "live",
  },
];
