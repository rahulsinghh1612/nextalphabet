"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Mic } from "lucide-react";

const APP_STORE = "https://apps.apple.com/app/id6762544241?pt=128800034&ct=nextalphabet";
const MAC_APP_STORE = "https://apps.apple.com/app/id6762544241?platform=mac&pt=128800034&ct=nextalphabet";

/** One sentence per app, so the loop shows "works in every app" instead of saying it. */
const SCENES = [
  { app: "Messages", icon: "/app-icons/messages.png", line: "Running five minutes late, grab us a table by the window?" },
  { app: "Slack", icon: "/app-icons/slack.png", line: "Shipped the new onboarding flow, can you test it before lunch?" },
  { app: "ChatGPT", icon: "/app-icons/chatgpt.png", line: "Turn these meeting notes into three clear next steps." },
];

const TICK = 90; // ms
const PER_WORD = 3; // ticks per spoken word
const HOLD = 22; // ticks the finished sentence stays
const FADE = 5; // ticks to fade out before the next app

/**
 * ToneScribe at work, drawn (Rahul, Oct 16: "the animation needs to look really good"): words fade in as they're
 * spoken, the mic pulses and the waveform moves while listening, then a tick and "Done", then the next app.
 */
function DictationDemo() {
  const reduce = useReducedMotion();
  const [{ scene, t }, setClock] = useState({ scene: 0, t: 0 });
  const words = SCENES[scene].line.split(" ");
  const speakEnd = words.length * PER_WORD;

  // One clock: tick forward, and roll over to the next app once a sentence has been spoken, held, and faded.
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setClock((c) => {
        const end = SCENES[c.scene].line.split(" ").length * PER_WORD + HOLD + FADE;
        return c.t + 1 >= end ? { scene: (c.scene + 1) % SCENES.length, t: 0 } : { scene: c.scene, t: c.t + 1 };
      });
    }, TICK);
    return () => window.clearInterval(id);
  }, [reduce]);

  const shown = reduce ? words.length : Math.min(words.length, Math.floor(t / PER_WORD) + 1);
  const listening = !reduce && t < speakEnd;
  const fading = !reduce && t >= speakEnd + HOLD;

  return (
    <div className="rounded-xl bg-muted px-4 py-4 ring-1 ring-black/[0.04]">
      <div className="mb-2.5 flex h-5 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={SCENES[scene].app}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <Image src={SCENES[scene].icon} alt="" width={18} height={18} className="rounded-[5px]" />
            {SCENES[scene].app}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Every line sits invisibly in the same cell, so the field keeps one height across all three apps. */}
      <div className="grid rounded-lg bg-background px-3.5 py-3 text-[14px] leading-6 text-foreground ring-1 ring-black/[0.06]">
        {SCENES.map((x) => (
          <span key={x.app} className="invisible col-start-1 row-start-1" aria-hidden>{x.line}</span>
        ))}
        <motion.span
          className="col-start-1 row-start-1"
          animate={{ opacity: fading ? 0 : 1 }}
          transition={{ duration: (FADE * TICK) / 1000 }}
        >
          {words.slice(0, shown).map((w, i) => (
            <span key={`${scene}-${i}`}>
              {i ? " " : null}
              <motion.span
                initial={reduce ? false : { opacity: 0, filter: "blur(4px)", y: 3 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <span className="relative grid h-8 w-8 place-items-center">
          {listening ? (
            <motion.span
              className="absolute inset-0 rounded-full bg-foreground"
              initial={{ scale: 1, opacity: 0.25 }}
              animate={{ scale: 1.7, opacity: 0 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
            />
          ) : null}
          <span className="relative grid h-8 w-8 place-items-center rounded-full bg-foreground text-background">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={listening ? "mic" : "check"}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {listening ? <Mic className="h-4 w-4" strokeWidth={2.2} /> : <Check className="h-4 w-4" strokeWidth={2.6} />}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
        <div className="flex h-6 items-center gap-[3px]" aria-hidden>
          {Array.from({ length: 16 }, (_, i) => (
            <motion.span
              key={i}
              className="w-[3px] rounded-full bg-foreground/70"
              animate={listening ? { height: [4, 7 + ((i * 7) % 15), 5, 10 + ((i * 5) % 9), 4] } : { height: 4 }}
              transition={listening ? { duration: 1.1 + (i % 5) * 0.13, repeat: Infinity, ease: "easeInOut", delay: (i % 6) * 0.05 } : { duration: 0.3 }}
            />
          ))}
        </div>
        <span className="whitespace-nowrap text-xs text-muted-foreground">{listening ? "Listening…" : "Done"}</span>
      </div>
    </div>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

/** ToneScribe up top (Rahul, Oct 16): one clear card that goes straight to the App Store. */
export function FeaturedProduct() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl p-5 ring-1 ring-black/[0.08]"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[12px] shadow-sm ring-1 ring-black/[0.06]">
          <Image src="/icons/tonescribe.png" alt="" fill sizes="48px" className="object-cover" />
        </div>
        <div>
          <h2 className="text-[16px] font-medium tracking-tight text-foreground">ToneScribe</h2>
          <p className="text-xs text-muted-foreground">iPhone · Mac</p>
        </div>
      </div>

      <p className="mt-4 text-[15px] leading-7 text-muted-foreground">100% private, on-device dictation. Works in every app.</p>

      <div className="mt-4">
        <DictationDemo />
      </div>

      {/* Simple and light (Rahul, Oct 16): "Also on Mac" gets the Mac app's grey highlight only on hover; "Download for iPhone" as on tonescribe.com. */}
      <div className="mt-5 flex flex-wrap items-center justify-end gap-2.5">
        <a
          href={MAC_APP_STORE}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-9 items-center gap-1 rounded-[10px] px-3.5 text-[13px] text-muted-foreground transition-colors hover:bg-[rgb(244,245,248)] hover:text-foreground"
        >
          Also on Mac
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
        </a>
        <a
          href={APP_STORE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-1.5 rounded-full bg-foreground px-4 text-[13px] font-medium text-background transition-opacity hover:opacity-85"
        >
          <AppleLogo className="h-3.5 w-3.5 -translate-y-px" />
          Download for iPhone
        </a>
      </div>
    </motion.div>
  );
}
