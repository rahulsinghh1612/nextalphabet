import type { ReactNode } from "react";
import { ChevronRight, CircleAlert } from "lucide-react";
import { CopyPrompt } from "@/components/copy-prompt";

export function DocumentSection({
  number,
  title,
  description,
  items,
  prompt,
  extra,
}: {
  number: string;
  title: string;
  description: string;
  items: string[];
  prompt: string;
  extra?: ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold tracking-tight">{number}. {title}</h2>
      <p className="mb-5 text-muted-foreground">{description}</p>
      <h3 className="mb-3 font-semibold text-foreground">What it should include</h3>
      <ul className="mb-6 space-y-2 pl-5 text-muted-foreground">
        {items.map((item) => <li key={item} className="list-disc">{item}</li>)}
      </ul>
      {extra ? <div className="mb-6">{extra}</div> : null}
      <h3 className="mb-3 font-semibold text-foreground">Prompt to create your {title}</h3>
      <PromptBlock>{prompt}</PromptBlock>
    </section>
  );
}

export function LegalSection({ number, title, description, preparation, checks, prompt }: {
  number: string;
  title: string;
  description: string;
  preparation: string[];
  checks: string[];
  prompt: string;
}) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold tracking-tight">{number}. {title}</h2>
      <p className="mb-5 text-muted-foreground">{description}</p>
      <h3 className="mb-3 font-semibold text-foreground">Before you create it</h3>
      <ul className="mb-6 space-y-2 pl-5 text-muted-foreground">
        {preparation.map((item) => <li key={item} className="list-disc">{item}</li>)}
      </ul>
      <h3 className="mb-3 font-semibold text-foreground">Copy this prompt</h3>
      <PromptBlock>{prompt}</PromptBlock>
      <h3 className="mb-3 mt-6 font-semibold text-foreground">Check before publishing</h3>
      <ul className="space-y-2 pl-5 text-muted-foreground">
        {checks.map((item) => <li key={item} className="list-disc">{item}</li>)}
      </ul>
    </section>
  );
}

export function BigOne({ n, title, risk, check, fix }: { n: number; title: string; risk: string; check: ReactNode; fix: string }) {
  return (
    <div>
      <h3 className="mb-2 flex items-baseline gap-3 font-semibold text-foreground"><span className="text-sm text-muted-foreground">{n}</span>{title}</h3>
      <p className="text-muted-foreground">{risk}</p>
      <dl className="mt-3 space-y-2 text-muted-foreground">
        <div className="flex gap-3"><dt className="w-12 shrink-0 font-medium text-foreground">Check</dt><dd>{check}</dd></div>
        <div className="flex gap-3"><dt className="w-12 shrink-0 font-medium text-foreground">Fix</dt><dd>{fix}</dd></div>
      </dl>
    </div>
  );
}

export const SECURE_STEPS = [
  { id: "copy", title: "Copy the security check prompt" },
  { id: "paste", title: "Paste it into your agent" },
  { id: "fix", title: "Fix what it finds" },
];

export const APP_REVIEW_STEPS = [
  { id: "copy", title: "Copy the App Review prompt" },
  { id: "paste", title: "Paste it into your agent" },
  { id: "fix", title: "Fix what it finds" },
];

export const REA_STEPS = [
  { id: "copy", title: "Copy the setup prompt" },
  { id: "paste", title: "Paste it into your agent" },
  { id: "restart", title: "Restart your agent" },
  { id: "ask", title: "Try it" },
];

export function ReaStep({ n, id, title, children }: { n: number; id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8">
      <div className="mb-4 flex items-center gap-4">
        <span className="step-dot grid h-8 w-8 shrink-0 place-items-center rounded-full bg-foreground text-sm font-semibold text-background">{n}</span>
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="sm:pl-12">{children}</div>
    </section>
  );
}

export function EpisodeResourceLink({ href, title, context }: { href: string; title: string; context: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group -mx-3 flex items-center justify-between gap-5 rounded-xl px-3 py-3 transition-colors hover:bg-muted/60">
      <div className="flex min-w-0 items-baseline gap-2.5">
        <span className="shrink-0 text-sm font-medium text-foreground">{title}</span>
        <span className="truncate text-xs text-muted-foreground">{context}</span>
      </div>
      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}

export function DomainExample({ domain, purpose }: { domain: string; purpose: string }) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-xl bg-muted px-4 py-3">
      <code className="min-w-0 break-all font-mono text-[13px] text-foreground">{domain}</code>
      <span className="shrink-0 text-xs text-muted-foreground">{purpose}</span>
    </div>
  );
}

export function InlineCode({ children }: { children: ReactNode }) {
  return <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">{children}</code>;
}

export function SetupWarning({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 flex items-start gap-3 rounded-xl bg-muted px-4 py-3.5 text-sm leading-6 text-muted-foreground">
      <CircleAlert className="mt-1 h-4 w-4 shrink-0 text-foreground" strokeWidth={1.8} />
      <p>{children}</p>
    </div>
  );
}

export function PromptBlock({ children }: { children: ReactNode }) {
  const text = typeof children === "string" ? children : String(children);
  return (
    <div className="relative">
      <pre className="prompt-card overflow-x-auto whitespace-pre-wrap rounded-xl bg-muted p-4 pr-20 font-mono text-[13px] leading-6 text-foreground sm:p-5 sm:pr-24">
        {children}
      </pre>
      <CopyPrompt text={text} />
    </div>
  );
}
