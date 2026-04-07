"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const BANNER_HEIGHT = 52;
const STORAGE_KEY = "tonescribe-banner-dismissed";

export function LaunchBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--banner-height",
      visible ? `${BANNER_HEIGHT}px` : "0px"
    );
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -BANNER_HEIGHT, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -BANNER_HEIGHT, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center overflow-hidden"
          style={{
            height: BANNER_HEIGHT,
            background:
              "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 40%, #16213e 70%, #0a0a0a 100%)",
          }}
        >
          {/* Subtle animated shimmer overlay */}
          <motion.div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Top highlight edge */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 50%, transparent)",
            }}
          />

          {/* Bottom highlight edge */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)",
            }}
          />

          <a
            href="https://tonescribe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5 sm:gap-3 px-4"
          >
            {/* NEW badge */}
            <span className="flex items-center rounded-full bg-white/[0.12] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/80 ring-1 ring-white/[0.08]">
              New
            </span>

            {/* Live dot */}
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>

            {/* Text */}
            <span className="text-[13px] sm:text-sm text-white/60 transition-colors duration-200 group-hover:text-white/80">
              <span className="font-semibold text-white/90 transition-colors duration-200 group-hover:text-white">
                ToneScribe
              </span>
              <span className="hidden sm:inline"> is live</span>
              <span className="sm:hidden"> — Live</span>
              <span className="hidden sm:inline"> — Voice to Note, effortlessly</span>
            </span>

            {/* Arrow */}
            <ArrowRight
              size={14}
              className="text-white/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white/70"
            />
          </a>

          <button
            onClick={(e) => {
              e.preventDefault();
              dismiss();
            }}
            className="absolute right-3 sm:right-4 flex h-7 w-7 items-center justify-center rounded-full text-white/25 transition-colors duration-200 hover:bg-white/[0.08] hover:text-white/60"
            aria-label="Dismiss banner"
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
