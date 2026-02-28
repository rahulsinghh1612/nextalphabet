"use client";

import { motion } from "framer-motion";
import { founder } from "@/lib/constants";

export default function AboutPage() {
  return (
    <section className="px-6 pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-3xl font-bold tracking-tight text-foreground"
        >
          About
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 text-muted-foreground leading-relaxed"
        >
          We build simple products that solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-foreground">
            <span className="font-semibold">{founder.name}</span>
            <span className="mx-2 text-muted-foreground">·</span>
            <span className="text-muted-foreground">{founder.role}</span>
          </p>
          <a
            href={founder.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
          >
            <span className="text-sm">𝕏</span>
            {founder.twitterHandle}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
