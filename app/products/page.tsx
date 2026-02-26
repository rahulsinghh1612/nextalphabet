"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/constants";
import { ProductCard } from "@/components/product-card";

export default function ProductsPage() {
  return (
    <section className="px-6 pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-bold tracking-tight text-foreground"
        >
          Products
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
