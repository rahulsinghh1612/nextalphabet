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
  features: string[];
  status: "live" | "coming-soon";
}

export const products: Product[] = [
  {
    name: "ToneScribe",
    tagline: "Voice to Note.",
    description:
      "Voice to Note effortlessly.\nCompose it into anything.",
    url: "https://tonescribe.com",
    features: [],
    status: "live",
  },
  {
    name: "PnLCard",
    tagline: "Log. Share. Grow.",
    description:
      "The trading journal that only takes 60 seconds a day.",
    url: "https://www.pnlcard.com",
    features: [],
    status: "live",
  },
];
