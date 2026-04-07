"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/constants";

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <motion.a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
        delay: index * 0.1,
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8"
    >
      {/* Shimmer sweep on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 shimmer opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-3">
            <h3 className="text-lg font-semibold text-foreground md:text-xl">
              {product.name}
            </h3>
            {product.status === "live" && <LiveBadge delay={0.5 + index * 0.1} />}
          </div>
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
            {product.description.includes("effortlessly")
              ? <>
                  {product.description.split("effortlessly")[0]}
                  <em className="italic">effortlessly</em>
                  {product.description.split("effortlessly")[1]}
                </>
              : product.description}
          </p>
        </div>

        <motion.div
          className="shrink-0 mt-1"
          initial={{ opacity: 0, x: -4 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <motion.div
            whileHover={{ x: 2, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ArrowUpRight
              size={20}
              className="text-muted-foreground transition-colors group-hover:text-foreground"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.a>
  );
}

function LiveBadge({ delay }: { delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground"
    >
      <span className="relative flex h-1.5 w-1.5">
        <motion.span
          className="absolute inline-flex h-full w-full rounded-full bg-foreground"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.span
          className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </span>
      Live
    </motion.span>
  );
}
