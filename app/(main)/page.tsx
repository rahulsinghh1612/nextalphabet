"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { founder, products, siteConfig } from "@/lib/constants";
import { Logo } from "@/components/logo";
import { ProductRow } from "@/components/product-row";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const linkClass =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground";

export default function Home() {
  return (
    <main className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-lg">
        <Reveal>
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-black/[0.06]">
            <Image
              src="/rahul.webp"
              alt={founder.name}
              fill
              sizes="48px"
              priority
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-6 text-[32px] font-bold leading-[1.2] tracking-[-0.035em] text-foreground sm:text-[38px]">
            Hey, I&apos;m {founder.name.split(" ")[0]}.
            <br />
            I love building products.
          </h1>
        </Reveal>

        <div className="mt-12">
          {products.map((product, i) => (
            <ProductRow key={product.name} product={product} index={i} />
          ))}
        </div>

        <Reveal delay={0.5} className="mt-12">
          <p className="text-[15px] leading-7 text-muted-foreground">
            Find me on{" "}
            <a
              href={founder.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              X
            </a>{" "}
            or email me at{" "}
            <a href={`mailto:${siteConfig.email}`} className={linkClass}>
              {siteConfig.email}
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.56} className="mt-20">
          <Logo size="sm" tone="muted" />
        </Reveal>
      </div>
    </main>
  );
}
