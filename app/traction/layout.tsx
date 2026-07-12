import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { TractionNavbar } from "@/components/traction-navbar";
import { TractionFooter } from "@/components/traction-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Traction",
    template: "%s | Traction",
  },
  description: "Privacy Policy, Terms of Use, and Support for Traction.",
};

export default function TractionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <TractionNavbar />
        <main className="min-h-screen">{children}</main>
        <TractionFooter />
      </body>
    </html>
  );
}
