"use client";

import { useEffect, useState } from "react";
import { Check, RotateCcw } from "lucide-react";

const items = [
  "Main domain connected",
  "App subdomain connected",
  "App email subdomain verified",
  "Marketing email subdomain verified",
  "SPF configured",
  "DKIM configured",
  "DMARC configured",
  "Sitemap created",
  "Google Search Console connected",
  "Sitemap submitted",
];

const storageKey = "nextalphabet-domain-setup-checklist-v1";

export function DomainSetupChecklist() {
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    window.setTimeout(() => {
      if (saved) {
        try {
          const values = JSON.parse(saved);
          if (Array.isArray(values)) {
            setCompleted(new Set(values.filter((value): value is number => Number.isInteger(value) && value >= 0 && value < items.length)));
          }
        } catch {
          window.localStorage.removeItem(storageKey);
        }
      }
      setHydrated(true);
    }, 0);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(storageKey, JSON.stringify([...completed]));
  }, [completed, hydrated]);

  function toggle(index: number) {
    setCompleted((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  function reset() {
    setCompleted(new Set());
  }

  const percentage = (completed.size / items.length) * 100;

  return (
    <section className="mt-10">
      <div className="flex items-end justify-between gap-5">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Final checklist</h2>
          <p className="mt-1 text-sm text-muted-foreground">{completed.size} of {items.length} completed</p>
        </div>
        {completed.size > 0 ? (
          <button type="button" onClick={reset} className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground">
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        ) : null}
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted" role="progressbar" aria-label="Domain setup progress" aria-valuemin={0} aria-valuemax={items.length} aria-valuenow={completed.size}>
        <div className="h-full rounded-full bg-foreground transition-[width] duration-300" style={{ width: `${percentage}%` }} />
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item, index) => {
          const checked = completed.has(index);
          return (
            <label key={item} className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted-foreground">
              <input type="checkbox" checked={checked} onChange={() => toggle(index)} className="sr-only" />
              <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors ${checked ? "border-foreground bg-foreground text-background" : "border-border bg-background"}`}>
                {checked ? <Check className="h-3.5 w-3.5" strokeWidth={2.4} /> : null}
              </span>
              <span className={checked ? "line-through" : ""}>{item}</span>
            </label>
          );
        })}
      </div>
    </section>
  );
}
