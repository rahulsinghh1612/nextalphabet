import { ChevronRight } from "lucide-react";
import { SecureChecklist } from "@/components/secure-checklist";
import { EpisodeResourceLink, PromptBlock, ReaStep } from "@/components/episode-ui";

const STEPS = [
  { id: "limit", title: "Set a spending limit on your API keys" },
  { id: "alerts", title: "Turn on usage alerts" },
  { id: "revoke", title: "If a key leaks, cancel it" },
  { id: "two-factor", title: "Turn on two-factor login" },
];

const RESOURCES = [
  {
    group: "Spending limits and alerts",
    links: [
      { href: "https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform", title: "Project limits and alerts", context: "OpenAI · help" },
      { href: "https://platform.claude.com/docs/en/manage-claude/workspaces", title: "Workspace spend limits", context: "Anthropic · docs" },
    ],
  },
  {
    group: "Leaked keys",
    links: [
      { href: "https://thehackernews.com/2026/10/leaked-litellm-master-key-let-attackers.html", title: "The LiteLLM key that still worked", context: "The Hacker News" },
      { href: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository", title: "Removing sensitive data from a repository", context: "GitHub · docs" },
    ],
  },
  {
    group: "Two-factor login",
    links: [
      { href: "https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa", title: "Two-factor authentication", context: "GitHub · docs" },
      { href: "https://support.stripe.com/questions/enable-two-step-verification", title: "Two-step verification", context: "Stripe Support" },
    ],
  },
];

export default function Episode22() {
  return (
    <div className="space-y-12 text-[15px] leading-7">
      <section>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Start here: copy this prompt</h2>
        <p className="mb-5 text-muted-foreground">Paste it into Claude Code or Codex. It walks you through all four steps: it fixes what it can in your code and tells you exactly where to click for the rest.</p>
        <PromptBlock>{`Help me protect my app from hackers. Go through these four steps one at a time. After each step, tell me what you found or changed, and wait for me to say "done" before the next one.

First, look at my code and list which services I use: AI providers (OpenAI, Anthropic or others), payments (Stripe or others), and where the app is hosted (Railway, Vercel, Render or others). Use that list in every step.

Step 1: Spending limits
For each AI provider I use, give me the exact place to set a monthly spending limit, and suggest an amount from what my app really uses.
- OpenAI: project Limits page. Tell me to turn on "Enforce a hard limit", or the budget only watches and doesn't stop requests.
- Anthropic: Console, Workspaces, Spend limits.

Step 2: Usage alerts
For each AI provider, tell me where to add an email alert at 50 to 80% of the limit.

Step 3: Leaked keys
1. Find any keys, tokens or passwords written in the code (e.g. "sk-", "sk-ant-", "sk_live_").
2. Search the whole git history too. Removed keys stay in old commits.
3. Make sure .env files are in .gitignore and were never committed.
4. Move every secret into environment variables. Only show me the first few characters of each.
5. List every key that was ever exposed. For each one, tell me to revoke it on the provider's API keys page, make a new one, update it on my host and redeploy. Deleting it from the code is not enough.

Step 4: Two-factor login
For my host, GitHub and my payments provider, tell me where to turn on two-factor login. Tell me to use an authenticator app or passkey instead of text messages, and to save the backup codes.

At the end, give me a short checklist of what's done and what's left.

Docs:
- OpenAI limits and alerts: https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform
- Anthropic spend limits: https://platform.claude.com/docs/en/manage-claude/workspaces
- Removing keys from git history: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
- GitHub two-factor: https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa
- Stripe two-step verification: https://support.stripe.com/questions/enable-two-step-verification

Don't change anything in the app except moving secrets into environment variables.`}</PromptBlock>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Or do it by hand</h2>
        <ol className="space-y-1">
          {STEPS.map((step, i) => (
            <li key={step.id}>
              <a href={`#${step.id}`} className="group -mx-3 flex items-center gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-muted/50">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-sm font-semibold text-foreground">{i + 1}</span>
                <span className="flex-1 font-medium text-foreground">{step.title}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            </li>
          ))}
        </ol>
      </section>

      <ReaStep n={1} id="limit" title="Set a spending limit on your API keys">
        <p className="text-muted-foreground">A stolen key hits your limit, not your card.</p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li><span className="font-medium text-foreground">OpenAI:</span> project Limits, set a budget, turn on <span className="font-medium text-foreground">Enforce a hard limit</span>. Without it, nothing stops.</li>
          <li><span className="font-medium text-foreground">Anthropic:</span> Console, Workspaces, Spend limits.</li>
        </ul>
      </ReaStep>

      <ReaStep n={2} id="alerts" title="Turn on usage alerts">
        <p className="text-muted-foreground">Get an email when spend looks wrong, not when the bill comes. Set it at 50 to 80% of your limit.</p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li><span className="font-medium text-foreground">OpenAI:</span> same Limits page, add a spend alert.</li>
          <li><span className="font-medium text-foreground">Anthropic:</span> same spend settings, add alerts.</li>
        </ul>
      </ReaStep>

      <ReaStep n={3} id="revoke" title="If a key leaks, cancel it">
        <p className="text-muted-foreground">Deleting it from your code isn&apos;t enough: it keeps working until you cancel it. LiteLLM erased a leaked key from GitHub in May; hackers used it in October.</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
          <li>Revoke the key on the provider&apos;s API keys page.</li>
          <li>Make a new one and keep it in environment variables.</li>
          <li>Update it on your host and redeploy.</li>
          <li>Check usage for requests you didn&apos;t make.</li>
        </ol>
      </ReaStep>

      <ReaStep n={4} id="two-factor" title="Turn on two-factor login">
        <p className="text-muted-foreground">A stolen password alone can&apos;t get in. Use an authenticator app or passkey, and save the backup codes.</p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li><span className="font-medium text-foreground">Hosting:</span> Railway, Vercel or Render, in account settings.</li>
          <li><span className="font-medium text-foreground">GitHub:</span> Settings, Password and authentication.</li>
          <li><span className="font-medium text-foreground">Stripe:</span> Dashboard, Personal details.</li>
        </ul>
      </ReaStep>

      <section>
        <h2 className="mb-5 text-lg font-semibold tracking-tight">Resources</h2>
        <div className="space-y-6">
          {RESOURCES.map((r) => (
            <div key={r.group}>
              <h3 className="mb-1 text-sm font-semibold text-muted-foreground">{r.group}</h3>
              <div className="space-y-1">
                {r.links.map((l) => <EpisodeResourceLink key={l.href} href={l.href} title={l.title} context={l.context} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SecureChecklist />

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">Settings move around. If one isn&apos;t where it says, check the provider&apos;s own page.</p>
        <p className="mt-3 text-xs text-muted-foreground">Last checked: October 2026</p>
      </section>
    </div>
  );
}
