"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/button";
import { products } from "@/lib/constants";
import { ProductCard } from "@/components/product-card";

const heroWords = [
  "Building",
  "simple",
  "products",
  "that",
  "solve",
  "real,",
  "practical",
  "problems.",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-6">
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
          {/* Radial fade so the dots fade out at edges */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 20%, white 70%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          {/* Staggered word reveal */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.04, delayChildren: 0.15 },
              },
            }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {heroWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 24,
                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="mr-[0.25em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center"
          >
            <Button href="/products">Products</Button>
          </motion.div>
        </div>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute bottom-0 left-0 right-0 h-px origin-left bg-border"
        />
      </section>

      {/* Product section */}
      <section className="relative px-6 py-24 md:py-32">
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
            Product
          </motion.p>
          <ProductCard product={products[0]} index={0} />
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
