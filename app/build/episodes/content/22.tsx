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
        <p className="mb-6 text-muted-foreground">Your app can get hacked even if you did everything right. In October 2026 alone, hackers got into Railway, Asos, LiteLLM, Burger King Japan and Zeabur. These four take about fifteen minutes and stop the most common damage: a stolen key running up your bill, or a stolen password getting into your accounts.</p>
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

      <section>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Want your coding agent to check your keys first?</h2>
        <p className="mb-5 text-muted-foreground">Paste this into Claude Code or Codex in your project. It finds keys that shouldn&apos;t be in your code or your git history and tells you which ones to cancel. It doesn&apos;t change your dashboards: you do steps 1, 2 and 4 yourself.</p>
        <PromptBlock>{`Check my project for leaked API keys and secrets.

1. Search the code and config files for API keys, tokens, passwords and database URLs written directly in the code (for example OpenAI keys starting with "sk-", Anthropic keys starting with "sk-ant-", Stripe keys starting with "sk_live_").
2. Search the whole git history too, not just the current files: a key that was committed and later removed is still in old commits.
3. Check that .env files are listed in .gitignore and were never committed.
4. Move every secret you find into environment variables and read them from there. Don't print the full secret values back to me: show only the first few characters.
5. Give me a list of every key that was ever committed or exposed, and where. For each one, tell me to cancel (revoke) it in the provider's dashboard and make a new one. Removing it from the code is not enough.

Official docs:
- Removing sensitive data from a repository: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
- OpenAI API keys and project limits: https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform
- Anthropic workspaces and keys: https://platform.claude.com/docs/en/manage-claude/workspaces

Don't change anything else in the app. Ask me if something is unclear.`}</PromptBlock>
      </section>

      <ReaStep n={1} id="limit" title="Set a spending limit on your API keys">
        <p className="text-muted-foreground">If someone steals your key, they hit your limit, not your card. Pick a monthly number you&apos;re fine losing, a bit above what your app really uses.</p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li><span className="font-medium text-foreground">OpenAI:</span> open your project&apos;s Limits page, set a monthly budget, and turn on <span className="font-medium text-foreground">Enforce a hard limit</span>. Without that switch, the budget only watches; it doesn&apos;t stop requests. Spend can go slightly over before it stops.</li>
          <li><span className="font-medium text-foreground">Anthropic:</span> in the Console, open Workspaces, pick your workspace and set a monthly spend limit. It has to be under your organisation&apos;s limit.</li>
        </ul>
        <div className="mt-5 space-y-3">
          <EpisodeResourceLink href="https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform" title="Project limits" context="OpenAI · help" />
          <EpisodeResourceLink href="https://platform.claude.com/docs/en/manage-claude/workspaces" title="Workspace spend limits" context="Anthropic · docs" />
        </div>
      </ReaStep>

      <ReaStep n={2} id="alerts" title="Turn on usage alerts">
        <p className="text-muted-foreground">You get an email the moment spending looks wrong, not when the bill comes at the end of the month. Set one alert well below your limit, around 50 to 80%, so you hear about it early.</p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li><span className="font-medium text-foreground">OpenAI:</span> on the same Limits page, add a spend alert. Alerts only email you; the hard limit from step 1 is what stops the requests.</li>
          <li><span className="font-medium text-foreground">Anthropic:</span> in the same workspace spend settings, add alerts at the thresholds you want.</li>
        </ul>
        <div className="mt-5 space-y-3">
          <EpisodeResourceLink href="https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform" title="Spend alerts" context="OpenAI · help" />
          <EpisodeResourceLink href="https://platform.claude.com/docs/en/manage-claude/workspaces" title="Spend alerts" context="Anthropic · docs" />
        </div>
      </ReaStep>

      <ReaStep n={3} id="revoke" title="If a key leaks, cancel it">
        <p className="text-muted-foreground">Deleting the key from your code or from GitHub isn&apos;t enough. It stays in old commits, forks and copies, and it keeps working until you cancel it where you made it.</p>
        <p className="mt-3 text-muted-foreground">That&apos;s what happened to LiteLLM: a master key was pushed to a public GitHub repo on May 27 and the commit was erased, but the key was never cancelled. On October 10, hackers used it anyway.</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
          <li>Open the provider&apos;s API keys page and revoke (delete) the leaked key there.</li>
          <li>Make a new key and put it in your environment variables, never in the code.</li>
          <li>Update the new key wherever your app runs (your host&apos;s settings), then redeploy.</li>
          <li>Check the usage page for requests you didn&apos;t make.</li>
        </ol>
        <div className="mt-5 space-y-3">
          <EpisodeResourceLink href="https://thehackernews.com/2026/10/leaked-litellm-master-key-let-attackers.html" title="The LiteLLM key that still worked" context="The Hacker News" />
          <EpisodeResourceLink href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository" title="Removing sensitive data from a repository" context="GitHub · docs" />
        </div>
      </ReaStep>

      <ReaStep n={4} id="two-factor" title="Turn on two-factor login">
        <p className="text-muted-foreground">Do it for your hosting, your GitHub and your payments, so a stolen password alone can&apos;t get anyone in. Use an authenticator app or a passkey rather than text messages, and save the backup codes somewhere safe.</p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li><span className="font-medium text-foreground">Hosting:</span> Railway, Vercel, Render or wherever your app runs. Look for two-factor in your account settings.</li>
          <li><span className="font-medium text-foreground">GitHub:</span> Settings, then Password and authentication.</li>
          <li><span className="font-medium text-foreground">Stripe:</span> your Dashboard, then Personal details.</li>
        </ul>
        <div className="mt-5 space-y-3">
          <EpisodeResourceLink href="https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa" title="Two-factor authentication" context="GitHub · docs" />
          <EpisodeResourceLink href="https://support.stripe.com/questions/enable-two-step-verification" title="Two-step verification" context="Stripe Support" />
        </div>
      </ReaStep>

      <SecureChecklist />

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">None of this makes an app unhackable, but it caps the damage: a leaked key costs you your limit, and a leaked password gets nobody in. Dashboards move things around, so check each provider&apos;s own page if a setting isn&apos;t where it says.</p>
        <p className="mt-3 text-xs text-muted-foreground">Last checked: October 2026</p>
      </section>
    </div>
  );
}
