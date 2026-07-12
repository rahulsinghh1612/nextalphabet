import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore products built by Next Alphabet — simple tools that solve real, practical problems.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
