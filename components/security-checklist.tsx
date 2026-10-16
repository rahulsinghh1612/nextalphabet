"use client";

import { useEffect, useState } from "react";
import { Check, ChevronDown, RotateCcw } from "lucide-react";

// Each check opens to show how to check it (Rahul, Oct 16: tidy, but genuinely useful).
const items = [
  { title: "No secret keys in the browser", how: "Open your live site, then DevTools → Sources and press Cmd+Option+F (Ctrl+Shift+F on Windows). Search for sk-, sk_live and service_role. Anything you find belongs on your server." },
  { title: "Security rules on every table", how: "Supabase: Advisors → Security Advisor flags any table without row-level security. Firebase: your rules should never say allow read, write: if true." },
  { title: "Rate limits on anything that costs money", how: "AI calls, emails, SMS, login and sign-up. Upstash Ratelimit or your host's firewall rules work, and a monthly budget alert in your OpenAI or Anthropic billing settings caps the damage." },
  { title: "Login checked on the server", how: "Hiding a button isn't protection. Every private page and API route should check who's logged in on the server before returning data." },
  { title: "Tested as a second user", how: "Sign up a second account and try to open the first account's pages or data by changing an ID in the URL or request. You should get nothing." },
  { title: "Exposed keys rotated", how: "If a key was ever in your front end, git history, a screenshot or a chat, create a new one and delete the old one. Deleting the file isn't enough." },
  { title: "User input validated", how: "Forms, uploads and URL parameters should be checked on the server for type, size and format before you use them." },
  { title: "No admin or debug pages live", how: "Remove test routes and admin pages without login, and make sure errors show a simple message, not a stack trace." },
  { title: "Only your domain can call your backend", how: "Set CORS to your own domain instead of *, and serve everything over HTTPS." },
  { title: "Packages updated and audited", how: "Run npm audit and update anything with a known high or critical issue." },
];

const storageKey = "nextalphabet-security-checklist-v1";

export function SecurityChecklist() {
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [open, setOpen] = useState<number | null>(null);
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

  const percentage = (completed.size / items.length) * 100;

  return (
    <section>
      <div className="flex items-end justify-between gap-5">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">All ten checks</h2>
          <p className="mt-1 text-sm text-muted-foreground">{completed.size} of {items.length} done · tap a check to see how</p>
        </div>
        {completed.size > 0 ? (
          <button type="button" onClick={() => setCompleted(new Set())} className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground">
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        ) : null}
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted" role="progressbar" aria-label="Security checklist progress" aria-valuemin={0} aria-valuemax={items.length} aria-valuenow={completed.size}>
        <div className="h-full rounded-full bg-foreground transition-[width] duration-300" style={{ width: `${percentage}%` }} />
      </div>

      <div className="mt-5 space-y-1">
        {items.map((item, index) => {
          const checked = completed.has(index);
          const expanded = open === index;
          return (
            <div key={item.title} className="-mx-3 rounded-lg px-3 py-2 transition-colors hover:bg-muted/40">
              <div className="flex items-start gap-3 text-sm leading-6">
                <button type="button" role="checkbox" aria-checked={checked} aria-label={item.title} onClick={() => toggle(index)} className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors ${checked ? "border-foreground bg-foreground text-background" : "border-border bg-background"}`}>
                  {checked ? <Check className="h-3.5 w-3.5" strokeWidth={2.4} /> : null}
                </button>
                <button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : index)} className="flex flex-1 items-start justify-between gap-3 text-left">
                  <span className={checked ? "text-muted-foreground line-through" : "text-foreground"}>{item.title}</span>
                  <ChevronDown className={`mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`} />
                </button>
              </div>
              {expanded ? <p className="mt-2 pl-8 text-sm leading-6 text-muted-foreground">{item.how}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
