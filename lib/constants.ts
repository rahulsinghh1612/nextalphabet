export const siteConfig = {
  name: "Next Alphabet",
  description:
    "Building simple products that solve real, practical problems.",
  url: "https://www.nextalphabet.com",
  twitter: "https://x.com/nextalphabet",
};

export const founder = {
  name: "Rahul Singh",
  role: "Founder",
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
    name: "PNLCard",
    tagline: "Log. Share. Grow.",
    description:
      "Beautiful trading recap cards for X and Instagram. Log your P&L in 60 seconds.",
    url: "https://www.pnlcard.com",
    features: [],
    status: "live",
  },
];
