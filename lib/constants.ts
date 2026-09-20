export const siteConfig = {
  name: "Next Alphabet",
  description:
    "Building simple products that solve real, practical problems.",
  url: "https://www.nextalphabet.com",
  twitter: "https://x.com/nextalphabet_",
  /** Leave empty to hide the Instagram link in the footer. */
  instagram: "",
  email: "contact@nextalphabet.com",
};

export const founder = {
  name: "Rahul Singh",
  role: "Founder",
  twitter: "https://x.com/rahulsinghh__",
  twitterHandle: "@rahulsinghh__",
};

export interface Product {
  name: string;
  tagline: string;
  description: string;
  url: string;
  icon: string;
  features: string[];
  platforms: ("web" | "macos" | "iphone")[];
  status: "live" | "coming-soon";
}

/** Order matters — this is the order products appear on the site. */
export const products: Product[] = [
  {
    name: "ToneScribe",
    tagline: "Type 4x faster.",
    description:
      "100% private, on-device dictation. Works in every app.",
    url: "https://tonescribe.com",
    icon: "/icons/tonescribe.png",
    features: [],
    platforms: ["macos", "iphone"],
    status: "live",
  },
  {
    name: "Traction",
    tagline: "Build better habits.",
    description:
      "Habit and goal tracking, kept entirely on your device.",
    url: "https://apps.apple.com/in/app/habit-goal-tracker-traction/id6790078790",
    icon: "/icons/traction.png",
    features: [],
    platforms: ["iphone"],
    status: "live",
  },
  {
    name: "Biscuit",
    tagline: "Screenshots in minutes.",
    description: "The easiest way to make beautiful app screenshots.",
    url: "https://www.meetbiscuit.com",
    icon: "/icons/biscuit.png",
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
    features: [],
    platforms: ["web"],
    status: "live",
  },
];
