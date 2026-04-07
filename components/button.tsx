"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  showArrow?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
  showArrow = true,
}: ButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-foreground text-background px-7 py-3.5 hover:shadow-[0_0_24px_rgba(0,0,0,0.15)]",
    secondary:
      "border border-border bg-white text-foreground px-7 py-3.5 hover:bg-muted hover:border-foreground/20",
  };

  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Link
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...linkProps}
      >
        {children}
        {showArrow && <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
      </Link>
    </motion.div>
  );
}
