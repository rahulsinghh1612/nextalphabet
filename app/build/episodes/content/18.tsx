import { ChevronRight } from "lucide-react";
import { EpisodeResourceLink, InlineCode, PromptBlock, ReaStep } from "@/components/episode-ui";

const STEPS = [
  { id: "install", title: "Install all four in one go" },
  { id: "replica", title: "Replica: clone an app, then beat it" },
  { id: "oil-ui", title: "Oil UI: pick your design" },
  { id: "sepia", title: "Sepia: copy that sounds human" },
  { id: "open-seo", title: "Open SEO: get your app found" },
];

export default function Episode18() {
  return (
    <div className="space-y-12 text-[15px] leading-7">
      <section>
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

      <ReaStep n={1} id="install" title="Install all four in one go">
        <p className="mb-5 text-muted-foreground">Paste this into Claude Code. It installs each skill from its official repo, for every project, and stops when it needs you.</p>
        <PromptBlock>{`Install these four free skills for me in Claude Code, at user scope so they work in every project. Follow each repo's own install steps, and stop to tell me if a step needs me.

1. Replica: clones an app's features, then fixes what its users complain about.
   Repo: https://github.com/Jakeschincariol/replica-skill
   claude plugin marketplace add Jakeschincariol/replica-skill
   claude plugin install replica-skill@replica-skill --scope user

2. Oil UI: designs a few genuinely different directions side by side so I can pick one.
   Repo: https://github.com/oil-oil/oil-ui
   npx skills add oil-oil/oil-ui -g
   (If it asks which agents to install for, choose Claude Code.)

3. Sepia: rewrites text so it doesn't read as AI-written.
   Repo: https://github.com/Nanako0129/sepia
   claude plugin marketplace add Nanako0129/sepia
   claude plugin install sepia@sepia --scope user

4. Open SEO: SEO skills that run on my real Google Search Console data.
   Repo: https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills
   claude plugin marketplace add Ryze-AI-Adgent/open-seo-mcp-skills
   claude plugin install open-seo-mcp-skills@ryze --scope user
   It uses the free Ryze connector (https://connector.get-ryze.ai/mcp). Don't sign in for me: tell me when I need to connect my Google account.

When you're done, list the commands each skill added, and tell me if I need to restart Claude Code for them to show up.`}</PromptBlock>
        <p className="mt-5 text-muted-foreground">Restart Claude Code afterwards so the new skills load. Type <InlineCode>/</InlineCode> to see them.</p>
      </ReaStep>

      <ReaStep n={2} id="replica" title="Replica: clone an app, then beat it">
        <p className="text-muted-foreground">
          Eleven skills that take an app you like from first look to live. Point it at the app and it maps the screens and flows, rebuilds them, tests
          them, then reads what real users complain about in reviews and fixes that in yours. It rebuilds what an app does, never its code, logo or copy.
        </p>
        <p className="mt-4 text-muted-foreground">Start with the map, then run the rest in order. Only thinking about it? The review step on its own tells you if the app is worth cloning.</p>
        <div className="mt-5">
          <PromptBlock>{`/replica-skill:replica-recon https://the-app-you-like.com`}</PromptBlock>
        </div>
        <div className="mt-3">
          <PromptBlock>{`/replica-skill:replica-entrepreneur What do users hate about the-app-you-like.com, and what should my version fix?`}</PromptBlock>
        </div>
        <div className="mt-3">
          <EpisodeResourceLink href="https://github.com/Jakeschincariol/replica-skill" title="Open Replica" context="GitHub · free, MIT" />
        </div>
      </ReaStep>

      <ReaStep n={3} id="oil-ui" title="Oil UI: pick your design">
        <p className="text-muted-foreground">
          Instead of one generic design, it builds a few genuinely different directions, puts them side by side on one page, and lets you pick. Then it
          refines the one you chose and checks it on desktop and phone sizes. Works for websites, apps, dashboards and single components.
        </p>
        <div className="mt-5">
          <PromptBlock>{`Use oil-ui to explore three different design directions for my app's landing page, and put them on a comparison page so I can pick one.`}</PromptBlock>
        </div>
        <div className="mt-3">
          <EpisodeResourceLink href="https://github.com/oil-oil/oil-ui" title="Open Oil UI" context="GitHub · free, MIT" />
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">There's a paid Pro version. You don't need it for this.</p>
      </ReaStep>

      <ReaStep n={4} id="sepia" title="Sepia: copy that sounds human">
        <p className="text-muted-foreground">
          Your landing page, emails and release notes, without the tells that make readers think a bot wrote them. Review shows you what sounds like AI
          without changing anything. Refactor fixes it with small edits.
        </p>
        <div className="mt-5">
          <PromptBlock>{`/sepia-review my landing page copy`}</PromptBlock>
        </div>
        <div className="mt-3">
          <PromptBlock>{`/sepia-refactor my landing page copy`}</PromptBlock>
        </div>
        <div className="mt-3">
          <EpisodeResourceLink href="https://github.com/Nanako0129/sepia" title="Open Sepia" context="GitHub · free, MIT" />
        </div>
      </ReaStep>

      <ReaStep n={5} id="open-seo" title="Open SEO: get your app found">
        <p className="text-muted-foreground">
          SEO skills that work from your real Google Search Console and Analytics data, not estimates: a full site audit, keyword research, rank
          tracking and what competitors rank for that you don't. The first time, it asks you to sign in to Ryze&apos;s free connector with Google and link
          your Search Console.
        </p>
        <div className="mt-5">
          <PromptBlock>{`Run an SEO audit on yourapp.com and tell me the three fixes that will help most.`}</PromptBlock>
        </div>
        <div className="mt-3">
          <EpisodeResourceLink href="https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills" title="Open Open SEO" context="GitHub · skills free, MIT" />
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">Your site needs to be in Google Search Console first. If it isn&apos;t, add it there and give it a few days to collect data.</p>
      </ReaStep>

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">
          All four are free and open source. Install commands can change, so if one fails, the prompt above points Claude Code to each repo&apos;s own
          instructions.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">Last checked: October 2026</p>
      </section>
    </div>
  );
}
