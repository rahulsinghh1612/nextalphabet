"use client";

import { motion } from "framer-motion";
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden px-6 pt-28 pb-16 md:pt-36 md:pb-20">
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
          {/* Z-shaped headline */}
          <div className="relative mb-8 md:mb-14">
            <div className="relative grid grid-cols-1 gap-2 sm:gap-3 md:gap-4 justify-items-center md:justify-items-stretch">
              {/* Line 1: "Real Problems." — centered on mobile, left on desktop */}
              <div className="overflow-hidden flex justify-center md:justify-start w-full">
                <motion.h1
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease, delay: 0.15 }}
                  className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap inline-block md:block"
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
                  className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap inline-block md:block"
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
      </section>

      {/* Products section */}
      <section id="product" className="relative px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-xs font-medium tracking-[0.2em] text-muted-foreground"
          >
            Products
          </motion.p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Next product teaser */}
      <section className="px-6 py-20 md:py-24">
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
