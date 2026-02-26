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
          className="border-t border-border pt-8"
        >
          <p className="text-sm font-medium text-foreground">{founder.name}</p>
          <p className="text-xs text-muted-foreground">{founder.role}</p>
        </motion.div>
      </div>
    </section>
  );
}
