"use client";

import { useEffect, useState } from "react";
import { Check, ChevronDown, RotateCcw } from "lucide-react";

// The 20 checks from Reel 60, in the reel's order, grouped by where they live in the app.
// Every rule number was checked against Apple's App Review Guidelines on Oct 17, 2026.
const groups = [
  {
    title: "Login",
    items: [
      { title: "Don't force a login", rule: "5.1.1(v)", how: "If your app has no real account-based features, people must be able to use it without signing in. Add a way in that skips the account." },
      { title: "Add Sign in with Apple", rule: "4.8", how: "If you offer Google, Facebook or another social login, you also need an equivalent private login option. Sign in with Apple is the simplest way to meet this." },
      { title: "Add a delete account button", rule: "5.1.1(v)", how: "If people can create an account, they must be able to delete it inside the app. Emailing you or visiting a website isn't enough." },
      { title: "Give Apple a demo login", rule: "2.1(a)", how: "If your app needs a login, add a working demo account in App Store Connect under App Review Information, with any notes the reviewer needs." },
    ],
  },
  {
    title: "Paywall",
    items: [
      { title: "Use in-app purchase, not Stripe", rule: "3.1.1", how: "Digital features, content and subscriptions must be sold with Apple's in-app purchase. Physical goods and real-world services can still use Stripe." },
      { title: "Add a restore purchases button", rule: "3.1.1", how: "Anyone who reinstalls or switches iPhone should be able to get back what they paid for with one tap." },
      { title: "Show your price clearly", rule: "3.1.2(c)", how: "Before people subscribe, show the price, how often it renews, what they get, and the terms of any free trial." },
      { title: "Don't lock features behind a rating", rule: "3.2.2(x)", how: "Never unlock anything in exchange for a rating or review. Ask with Apple's own review prompt, and make it optional." },
    ],
  },
  {
    title: "Permissions and privacy",
    items: [
      { title: "Explain every permission", rule: "5.1.1(ii)", how: "Each permission prompt (camera, photos, location, microphone, notifications) needs a purpose string that says exactly why you need it." },
      { title: "Ask before sending data to AI", rule: "5.1.2(i)", how: "If personal data goes to OpenAI, Anthropic or any other AI provider, say so clearly and get permission before anything is sent." },
      { title: "Ask before tracking users", rule: "5.1.2(i)", how: "If your app or any SDK tracks people across other companies' apps and websites, show Apple's App Tracking Transparency prompt first." },
      { title: "Link your privacy policy", rule: "5.1.1(i)", how: "Put a privacy policy link inside the app, for example in Settings, and in the privacy policy field in App Store Connect." },
    ],
  },
  {
    title: "The app",
    items: [
      { title: "Test it on a real iPhone", rule: "2.1(a)", how: "Apple rejects apps that crash. Run through sign-up, purchases, permission prompts and a slow connection on a real device, not only the simulator." },
      { title: "Remove placeholder text", rule: "2.1(a)", how: "Search for Lorem ipsum, TODO, test data, coming soon screens and buttons that do nothing." },
      { title: "Don't ship a website in a wrapper", rule: "4.2", how: "An app that only shows your website won't pass. Add native features people can't get in the browser, like widgets, notifications or offline use." },
      { title: "Add report and block", rule: "1.2", how: "If people can post or message each other, they need a way to report content, block other users, and reach you." },
    ],
  },
  {
    title: "Your App Store listing",
    items: [
      { title: "Use real screenshots", rule: "2.3.3", how: "Screenshots must show the app in use, not just your logo, a login screen or a splash screen." },
      { title: "Don't mention Android", rule: "2.3.10", how: "Remove any mention of Android, Google Play or other platforms from your description, screenshots and the app itself." },
      { title: "Fill in your privacy label honestly", rule: "2.3", how: "In App Store Connect, App Privacy must match what your app and every SDK in it really collect, including data sent to AI providers." },
      { title: "Keep your backend running during review", rule: "2.1(a)", how: "Review can take a day or more. Keep your server, database and API keys live the whole time, and make sure nothing points at a test server." },
    ],
  },
];

const items = groups.flatMap((group) => group.items);
const starts = groups.map((_, g) => groups.slice(0, g).reduce((sum, group) => sum + group.items.length, 0));
const storageKey = "nextalphabet-app-review-checklist-v1";

export function AppReviewChecklist() {
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
          <h2 className="text-lg font-semibold tracking-tight">All 20 checks</h2>
          <p className="mt-1 text-sm text-muted-foreground">{completed.size} of {items.length} done · tap a check to see how</p>
        </div>
        {completed.size > 0 ? (
          <button type="button" onClick={() => setCompleted(new Set())} className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground">
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        ) : null}
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted" role="progressbar" aria-label="App Review checklist progress" aria-valuemin={0} aria-valuemax={items.length} aria-valuenow={completed.size}>
        <div className="h-full rounded-full bg-foreground transition-[width] duration-300" style={{ width: `${percentage}%` }} />
      </div>

      <div className="mt-6 space-y-7">
        {groups.map((group, g) => (
          <div key={group.title}>
            <h3 className="mb-1 text-xs font-medium text-muted-foreground">{group.title}</h3>
            <div className="space-y-1">
              {group.items.map((item, j) => {
                const i = starts[g] + j;
                const checked = completed.has(i);
                const expanded = open === i;
                return (
                  <div key={item.title} className="-mx-3 rounded-lg px-3 py-2 transition-colors hover:bg-muted/40">
                    <div className="flex items-start gap-3 text-sm leading-6">
                      <button type="button" role="checkbox" aria-checked={checked} aria-label={item.title} onClick={() => toggle(i)} className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors ${checked ? "border-foreground bg-foreground text-background" : "border-border bg-background"}`}>
                        {checked ? <Check className="h-3.5 w-3.5" strokeWidth={2.4} /> : null}
                      </button>
                      <button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : i)} className="flex flex-1 items-start justify-between gap-3 text-left">
                        <span className={checked ? "text-muted-foreground line-through" : "text-foreground"}>
                          <span className="mr-2 inline-block w-5 tabular-nums text-muted-foreground">{i + 1}</span>
                          {item.title}
                        </span>
                        <ChevronDown className={`mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {expanded ? (
                      <p className="mt-2 pl-8 text-sm leading-6 text-muted-foreground">
                        {item.how} <span className="whitespace-nowrap text-xs">Guideline {item.rule}</span>
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
