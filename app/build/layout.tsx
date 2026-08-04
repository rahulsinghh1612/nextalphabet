import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { founder } from "@/lib/constants";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Build — A practical series by Next Alphabet",
    template: "%s | BUILD",
  },
  description:
    "A practical series about turning an idea into a real product, from Next Alphabet founder Rahul Singh.",
};

export default function BuildLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white font-sans text-foreground antialiased">
        {children}
        <footer className="px-6 py-8">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <a href={founder.twitter} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              By {founder.name}
            </a>
            <a href={founder.twitter} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              {founder.twitterHandle}
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
