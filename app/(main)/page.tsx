"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { founder, products, siteConfig } from "@/lib/constants";
import { Logo } from "@/components/logo";
import { FeaturedProduct } from "@/components/featured-product";

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

function HeadlineWords({ text, className, start }: { text: string; className: string; start: number }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i}>
          {i ? " " : null}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6, delay: start + i * 0.07, ease }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

const linkClass =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground";

export default function Home() {
  return (
    <main className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-lg">
        <Reveal>
          <div className="relative h-14 w-14 overflow-hidden rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.12)] ring-[3px] ring-white outline outline-1 outline-black/[0.06]">
            <Image
              src="/rahul.webp"
              alt={founder.name}
              fill
              sizes="56px"
              priority
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Two-tone headline that arrives word by word, the same blur-in as the dictation demo (Rahul, Oct 16: more premium, same words). */}
        <h1 className="mt-6 text-[32px] font-bold leading-[1.2] tracking-[-0.035em] sm:text-[38px]">
          <HeadlineWords text={`Hey, I'm ${founder.name.split(" ")[0]}.`} className="text-foreground" start={0.1} />
          <br />
          <HeadlineWords text="I love building products." className="text-foreground/40" start={0.32} />
        </h1>

        <div className="mt-12">
          <FeaturedProduct />
        </div>

        <Reveal delay={0.3} className="mt-12">
          <p className="text-sm font-medium text-foreground">Other things I&apos;ve built</p>
        </Reveal>
        {/* Just the icons (Rahul, Oct 16): ToneScribe gets the attention, the rest are one tap away. */}
        <Reveal delay={0.36} className="mt-4 flex gap-6">
          {products
            .filter((product) => product.name !== "ToneScribe")
            .map((product) => (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-16 flex-col items-center gap-2"
              >
                <span className="relative h-14 w-14 overflow-hidden rounded-[14px] shadow-sm ring-1 ring-black/[0.06] transition-transform duration-200 group-hover:-translate-y-0.5">
                  <Image src={product.icon} alt="" fill sizes="56px" className="object-cover" />
                </span>
                <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">{product.name}</span>
              </a>
            ))}
        </Reveal>

        <Reveal delay={0.5} className="mt-12">
          <p className="text-[15px] leading-7 text-muted-foreground">
            For collaborations, email me at{" "}
            <a href={`mailto:${siteConfig.email}`} className={linkClass}>
              {siteConfig.email}
            </a>
            .
            <br />
            Find me on{" "}
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Instagram
            </a>{" "}
            and{" "}
            <a href={founder.twitter} target="_blank" rel="noopener noreferrer" className={linkClass}>
              X
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
