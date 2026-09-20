"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/constants";

/**
 * A product as a single quiet row — icon, name, one line. The arrow stays next
 * to the name so the link reads as one object.
 */
export function ProductRow({
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
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group -mx-4 flex items-start gap-4 rounded-2xl px-4 py-3.5 transition-colors duration-200 hover:bg-muted"
    >
      <div className="relative mt-0.5 h-11 w-11 shrink-0 overflow-hidden rounded-[11px] shadow-sm ring-1 ring-black/[0.06]">
        <Image src={product.icon} alt="" fill sizes="44px" className="object-cover" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1">
          <h2 className="text-[15px] font-medium tracking-tight text-foreground">
            {product.name}
          </h2>
          <ArrowUpRight
            className="h-3.5 w-3.5 text-muted-foreground/45 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
            strokeWidth={2}
          />
        </div>
        <p className="mt-0.5 text-sm leading-6 text-muted-foreground">
          {product.description}
        </p>
      </div>
    </motion.a>
  );
}
