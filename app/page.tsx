"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/button";
import { products } from "@/lib/constants";
import { ProductCard } from "@/components/product-card";

const ease = [0.22, 1, 0.36, 1] as const;

function PulsingPeriod({ delay }: { delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease }}
      className="inline-block"
    >
      <motion.span
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{
          delay: delay + 0.5,
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="inline-block"
      >
        .
      </motion.span>
    </motion.span>
  );
}

function ZStroke() {
  return (
    <motion.svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      viewBox="0 0 800 200"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <motion.line
        x1="420"
        y1="55"
        x2="380"
        y2="145"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-border"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7, ease }}
      />
    </motion.svg>
  );
}

export default function Home() {
  const productRef = useRef<HTMLElement>(null);
  const productInView = useInView(productRef, { amount: 0.1 });

  return (
    <>
      {/* Hero - full screen on mobile so content is centered, product section below fold */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 md:min-h-[88vh]">
        {/* Animated dot grid */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 20%, white 70%)",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-4xl">
          {/* Z-shaped headline with connecting stroke */}
          <div className="relative mb-8 md:mb-14">
            <ZStroke />

            <div className="relative grid grid-cols-1 gap-2 sm:gap-3 md:gap-4 justify-items-center md:justify-items-stretch">
              {/* Line 1: "Real Problems." — centered on mobile, left on desktop */}
              <div className="overflow-hidden flex justify-center md:justify-start w-full">
                <motion.h1
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease, delay: 0.15 }}
                  className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap inline-block md:block"
                >
                  Real Problems
                  <PulsingPeriod delay={0.95} />
                </motion.h1>
              </div>

              {/* Line 2: "Simple Products." — centered on mobile, right on desktop */}
              <div className="overflow-hidden flex justify-center md:justify-end w-full">
                <motion.h1
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease, delay: 0.4 }}
                  className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap inline-block md:block"
                >
                  Simple Products
                  <PulsingPeriod delay={1.2} />
                </motion.h1>
              </div>
            </div>
          </div>

          {/* CTA button — centered below the Z */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5, ease }}
            className="flex flex-col items-center gap-4"
          >
            <Button href="/products">Explore Products</Button>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.6 }}
              className="text-xs text-muted-foreground"
            >
              See what we&apos;re shipping
            </motion.p>
          </motion.div>
        </div>

        {/* Animated divider - below fold on mobile, visible once user scrolls */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease }}
          className="absolute bottom-0 left-0 right-0 h-px origin-left bg-border"
        />

        {/* Scroll indicator - hides when product section scrolls into view */}
        <motion.a
          href="#product"
          aria-label="Scroll to products"
          initial={{ opacity: 0 }}
          animate={{
            opacity: productInView ? 0 : 1,
          }}
          transition={{ delay: productInView ? 0 : 2, duration: 0.5 }}
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-muted-foreground hover:text-foreground transition-colors ${productInView ? "pointer-events-none" : ""}`}
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-0.5"
          >
            <ChevronDown size={16} strokeWidth={2} />
            <ChevronDown size={16} strokeWidth={2} />
            <ChevronDown size={16} strokeWidth={2} />
          </motion.div>
        </motion.a>
      </section>

      {/* Products section */}
      <section ref={productRef} id="product" className="relative px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            Products
          </motion.p>
          <div className="space-y-4">
            {products.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Next product teaser */}
      <section className="border-t border-border px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="text-sm text-muted-foreground">
            Next product is currently being built
            <span className="cursor-blink ml-px">|</span>
          </p>
        </motion.div>
      </section>
    </>
  );
}
