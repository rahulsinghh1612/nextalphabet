"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, Check, ChevronDown, ClipboardCheck, Copy, RotateCcw } from "lucide-react";

type ChecklistSection = {
  id: string;
  number: string;
  title: string;
  description: string;
  items: string[];
};

const checklistSections: ChecklistSection[] = [
  {
    id: "test",
    number: "01",
    title: "Test your app",
    description: "Make sure the app actually works.",
    items: [
      "Test the app from a fresh installation.", "Test the complete onboarding flow.", "Test every major feature.", "Test every button, screen, link, and navigation path.", "Test loading, empty, and error states.", "Test without internet where that matters.", "Test permissions being accepted and denied.", "Force close and reopen the app.", "Test on a real iPhone or iPad.", "Make sure the app does not crash.", "Remove placeholder or unfinished content.",
    ],
  },
  {
    id: "review",
    number: "02",
    title: "Make App Review easy",
    description: "Do not make the reviewer figure out how your app works.",
    items: [
      "Make sure the app can be reviewed without unnecessary obstacles.", "Create a working demo account if login is required.", "Make sure the demo account has access to the features Apple needs to review.", "Make sure your backend and required services are running.", "Add demo credentials to App Review Information.", "Explain special setup instructions, hidden features, or anything that is not obvious.",
    ],
  },
  {
    id: "legal",
    number: "03",
    title: "Privacy Policy and Terms of Use",
    description: "Make sure your legal links match the real app.",
    items: [
      "Add your Privacy Policy URL in App Store Connect.", "Add Privacy Policy and Terms of Use links to the App Store listing.", "Make both links publicly accessible and accessible inside the app.", "Check that both links work.", "Make sure your Privacy Policy reflects the data your app actually collects and uses.", "Explain relevant third-party services and data deletion or retention where applicable.", "Make sure your Terms of Use reflects the current product.",
    ],
  },
  {
    id: "privacy",
    number: "04",
    title: "App Privacy",
    description: "Audit the services your app is actually using.",
    items: [
      "Review every SDK used in your app.", "Check analytics, crash-reporting, advertising, authentication, payment, and AI/API services.", "Identify what data each service collects.", "Check whether the data is linked to the user or used for tracking.", "Make sure App Privacy answers match your actual implementation.",
    ],
  },
  {
    id: "permissions",
    number: "05",
    title: "Permissions",
    description: "Only ask for what you actually need.",
    items: [
      "Check camera, microphone, photos, location, contacts, notifications, and any other sensitive permissions.", "Make sure every permission has a clear usage description.", "Explain why each permission is needed in the app.", "Test what happens when a user denies a permission.", "Remove permissions the app does not need.",
    ],
  },
  {
    id: "accounts",
    number: "06",
    title: "Accounts and login",
    description: "Make account functionality easy to use and easy to leave.",
    items: [
      "Test account creation, login, logout, password reset, and email verification if required.", "Test social login if you support it.", "Make sure users can initiate account deletion inside the app.", "Make account deletion easy to find.", "Make sure deletion handles user data correctly.", "Do not require login if the app does not actually need an account.",
    ],
  },
  {
    id: "listing",
    number: "07",
    title: "App Store listing",
    description: "Your listing should accurately represent the app.",
    items: [
      "Check the app name, subtitle, description, keywords, promotional text, category, and age rating.", "Make sure support, marketing, Privacy Policy, and Terms of Use links work.", "Remove placeholder text and outdated information.", "Make sure every claim is accurate.",
    ],
  },
  {
    id: "screenshots",
    number: "08",
    title: "Screenshots and App Preview",
    description: "Show the app as it is today.",
    items: [
      "Make sure screenshots show the current version of the app.", "Show real functionality, not unfinished features or misleading claims.", "Use the correct device sizes and required localizations.", "Check that app previews work if you use them.", "Remove outdated screenshots.",
    ],
  },
  {
    id: "payments",
    number: "09",
    title: "Payments and subscriptions",
    description: "Test the whole payment journey, not just the purchase button.",
    items: [
      "Check In-App Purchase product IDs, prices, durations, groups, trials, and introductory offers.", "Test the purchase flow.", "Test restoring purchases where applicable.", "Make subscription information clear.", "Make products available for Apple to review.", "Use a payment approach that follows Apple’s current rules for digital features.",
    ],
  },
  {
    id: "compliance",
    number: "10",
    title: "Legal and compliance",
    description: "Check the boring things before they become a problem.",
    items: [
      "Complete the age rating questionnaire accurately.", "Complete export compliance questions and check encryption requirements.", "Check copyright information.", "Make sure you have rights to all images, music, fonts, assets, and trademarks you use.",
    ],
  },
  {
    id: "production",
    number: "11",
    title: "Production build",
    description: "Make sure you are submitting the real version.",
    items: [
      "Use the production API and production database.", "Remove localhost, staging URLs, test API keys, test accounts, and test data.", "Test push notifications, email/SMS, and third-party integrations if used.", "Check environment variables.", "Check the app version number and build number.",
    ],
  },
  {
    id: "submit",
    number: "12",
    title: "Final submission",
    description: "One last pass before clicking Submit for Review.",
    items: [
      "Select the correct app, version, uploaded build, and attached build.", "Complete all metadata, screenshots, App Privacy, age rating, and export compliance.", "Add Privacy Policy, Terms of Use, review notes, and demo credentials when needed.", "Check In-App Purchases, pricing, availability, and release settings if applicable.", "Test the final production build one more time.",
    ],
  },
];

const highRiskChecks = [
  "Does the app open without crashing?", "Can Apple log in with the review account?", "Is the production backend working?", "Are Privacy Policy and Terms of Use accessible in the listing and app?", "Does App Privacy match every SDK and service?", "Can users delete their account if they can create one?", "Do screenshots match the current app?", "Do payments and restore purchases work?", "Are all permissions necessary and clearly explained?", "Can the reviewer understand anything that is not obvious?",
];

const finalChecks = [
  "Does the app open?", "Does everything important work?", "Can Apple log in?", "Is the backend working?", "Are Privacy Policy and Terms of Use linked?", "Does App Privacy match reality?", "Does account deletion work?", "Do screenshots match the app?", "Do payments work?", "Are all URLs working?", "Are there any test or placeholder elements?", "Did I test the final production build?",
];

const storageKey = "nextalphabet-app-store-submission-checklist-v1";

function itemId(group: string, index: number) {
  return `${group}-${index}`;
}

export function AppStoreSubmissionChecklist() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const allItems = useMemo(
    () => [
      ...checklistSections.flatMap((section) => section.items.map((item, index) => ({ id: itemId(section.id, index), item }))),
      ...highRiskChecks.map((item, index) => ({ id: itemId("risk", index), item })),
      ...finalChecks.map((item, index) => ({ id: itemId("final", index), item })),
    ],
    [],
  );

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    window.setTimeout(() => {
      if (saved) {
        try {
          const values = JSON.parse(saved);
          if (Array.isArray(values)) setCompleted(new Set(values.filter((value): value is string => typeof value === "string")));
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

  function toggle(id: string) {
    setCompleted((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function reset() {
    if (!window.confirm("Reset every completed item?")) return;
    setCompleted(new Set());
  }

  async function copyChecklist() {
    const text = [
      "iOS App Store Submission Checklist",
      "",
      ...checklistSections.flatMap((section) => [section.title, ...section.items.map((item, index) => `${completed.has(itemId(section.id, index)) ? "[x]" : "[ ]"} ${item}`), ""]),
      "High-Risk Checks",
      ...highRiskChecks.map((item, index) => `${completed.has(itemId("risk", index)) ? "[x]" : "[ ]"} ${item}`),
      "",
      "5-Minute Final Check",
      ...finalChecks.map((item, index) => `${completed.has(itemId("final", index)) ? "[x]" : "[ ]"} ${item}`),
    ].join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="mt-10">
      <div className="mb-8">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-foreground">Your progress</p>
            <p className="mt-1 text-sm text-muted-foreground">{completed.size} / {allItems.length} completed</p>
          </div>
          <ClipboardCheck className="h-5 w-5 text-muted-foreground" strokeWidth={1.8} />
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuemin={0} aria-valuemax={allItems.length} aria-valuenow={completed.size} aria-label="Checklist progress">
          <div className="h-full rounded-full bg-foreground transition-[width] duration-300" style={{ width: `${(completed.size / allItems.length) * 100}%` }} />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <button type="button" onClick={copyChecklist} className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />} {copied ? "Copied" : "Copy checklist"}
          </button>
          <button type="button" onClick={reset} className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <RotateCcw className="h-4 w-4" /> Reset checklist
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {checklistSections.map((section) => {
          const sectionCompleted = section.items.filter((_, index) => completed.has(itemId(section.id, index))).length;
          return (
            <details key={section.id} className="group rounded-xl transition-colors hover:bg-muted/50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-4 py-4 [&::-webkit-details-marker]:hidden">
                <div className="flex min-w-0 items-baseline gap-3">
                  <span className="text-xs font-medium text-muted-foreground">{section.number}</span>
                  <span className="truncate text-sm font-medium text-foreground">{section.title}</span>
                </div>
                <div className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
                  <span>{sectionCompleted} / {section.items.length}</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </div>
              </summary>
              <div className="px-4 pb-5">
                <p className="mb-4 text-sm text-muted-foreground">{section.description}</p>
                <div className="space-y-3">
                  {section.items.map((item, index) => <ChecklistItem key={item} id={itemId(section.id, index)} label={item} completed={completed.has(itemId(section.id, index))} onToggle={toggle} />)}
                </div>
              </div>
            </details>
          );
        })}
      </div>

      <section className="mt-10 rounded-xl bg-muted p-5 sm:p-6">
        <div className="flex items-center gap-2.5">
          <AlertTriangle className="h-5 w-5" strokeWidth={1.8} />
          <h2 className="text-lg font-semibold tracking-tight">High-risk checks</h2>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">Before you submit, check these one more time.</p>
        <div className="mt-5 space-y-3">
          {highRiskChecks.map((item, index) => <ChecklistItem key={item} id={itemId("risk", index)} label={item} completed={completed.has(itemId("risk", index))} onToggle={toggle} />)}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight">The 5-minute final check</h2>
        <p className="mt-2 text-sm text-muted-foreground">Run through this immediately before you press Submit for Review.</p>
        <div className="mt-5 space-y-3">
          {finalChecks.map((item, index) => <ChecklistItem key={item} id={itemId("final", index)} label={item} completed={completed.has(itemId("final", index))} onToggle={toggle} />)}
        </div>
      </section>
    </section>
  );
}

function ChecklistItem({ id, label, completed, onToggle }: { id: string; label: string; completed: boolean; onToggle: (id: string) => void }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted-foreground">
      <input type="checkbox" checked={completed} onChange={() => onToggle(id)} className="mt-1 h-4 w-4 shrink-0 accent-foreground" />
      <span className={completed ? "text-muted-foreground line-through" : ""}>{label}</span>
    </label>
  );
}
