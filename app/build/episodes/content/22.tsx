import { ChevronRight } from "lucide-react";
import { SecureChecklist } from "@/components/secure-checklist";
import { EpisodeResourceLink, PromptBlock, ReaStep } from "@/components/episode-ui";

const STEPS = [
  { id: "limit", title: "Set a spending limit on your API keys" },
  { id: "alerts", title: "Turn on usage alerts" },
  { id: "revoke", title: "If a key leaks, cancel it" },
  { id: "two-factor", title: "Turn on two-factor login" },
];

export default function Episode22() {
  return (
    <div className="space-y-12 text-[15px] leading-7">
      <section>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Start here: copy this prompt</h2>
        <p className="mb-5 text-muted-foreground">Paste it into Claude Code or Codex. It finds leaked keys in your code and git history.</p>
        <PromptBlock>{`Check my project for leaked API keys and secrets.

1. Find any keys, tokens or passwords written in the code (e.g. "sk-", "sk-ant-", "sk_live_").
2. Search the whole git history too. Removed keys stay in old commits.
3. Make sure .env files are in .gitignore and were never committed.
4. Move every secret into environment variables. Only show me the first few characters of each.
5. List every key that was ever exposed, so I can revoke it in the provider's dashboard and make a new one.

Docs:
- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
- https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform
- https://platform.claude.com/docs/en/manage-claude/workspaces

Don't change anything else.`}</PromptBlock>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">The four steps</h2>
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
        <div className="mt-5 space-y-3">
          <EpisodeResourceLink href="https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform" title="Project limits" context="OpenAI · help" />
          <EpisodeResourceLink href="https://platform.claude.com/docs/en/manage-claude/workspaces" title="Workspace spend limits" context="Anthropic · docs" />
        </div>
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
        <div className="mt-5 space-y-3">
          <EpisodeResourceLink href="https://thehackernews.com/2026/10/leaked-litellm-master-key-let-attackers.html" title="The LiteLLM key that still worked" context="The Hacker News" />
          <EpisodeResourceLink href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository" title="Removing sensitive data from a repository" context="GitHub · docs" />
        </div>
      </ReaStep>

      <ReaStep n={4} id="two-factor" title="Turn on two-factor login">
        <p className="text-muted-foreground">A stolen password alone can&apos;t get in. Use an authenticator app or passkey, and save the backup codes.</p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li><span className="font-medium text-foreground">Hosting:</span> Railway, Vercel or Render, in account settings.</li>
          <li><span className="font-medium text-foreground">GitHub:</span> Settings, Password and authentication.</li>
          <li><span className="font-medium text-foreground">Stripe:</span> Dashboard, Personal details.</li>
        </ul>
        <div className="mt-5 space-y-3">
          <EpisodeResourceLink href="https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa" title="Two-factor authentication" context="GitHub · docs" />
          <EpisodeResourceLink href="https://support.stripe.com/questions/enable-two-step-verification" title="Two-step verification" context="Stripe Support" />
        </div>
      </ReaStep>

      <SecureChecklist />

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">Settings move around. If one isn&apos;t where it says, check the provider&apos;s own page.</p>
        <p className="mt-3 text-xs text-muted-foreground">Last checked: October 2026</p>
      </section>
    </div>
  );
}
