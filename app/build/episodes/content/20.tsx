import { ChevronRight } from "lucide-react";
import { EpisodeResourceLink, PromptBlock, ReaStep } from "@/components/episode-ui";

// "How it was built" Ep. 01 (Reel 64): the full Cursor breakdown people get when they comment "cursor".
// Every number carries its source and date; where sources disagree or rest on unnamed people, the copy says so.
// Facts file: Video Editor/in/reel64-cursor.md.

const STEPS = [
  { id: "start", title: "The start: four MIT students, 2022" },
  { id: "shortcut", title: "The shortcut: VS Code, with AI built in" },
  { id: "growth", title: "The growth: $100M to $2B a year" },
  { id: "catch", title: "The catch: it didn’t own the AI" },
  { id: "rival", title: "The rival: Anthropic launches Claude Code" },
  { id: "fix", title: "The fix: its own model, Composer" },
  { id: "offers", title: "The offers: OpenAI tried to buy it" },
  { id: "exit", title: "The exit: SpaceX, $60 billion" },
];

export default function Episode20() {
  return (
    <div className="space-y-12 text-[15px] leading-7">
      <section>
        <p className="mb-6 text-muted-foreground">
          The whole story in eight steps, from four students at MIT in 2022 to a $60 billion sale in 2026.
        </p>
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
          <li>
            <a href="#lesson" className="group -mx-3 flex items-center gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-muted/50">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-foreground text-sm font-semibold text-background">→</span>
              <span className="flex-1 font-medium text-foreground">The lesson for builders, and a prompt to check your own app</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          </li>
        </ol>
      </section>

      <ReaStep n={1} id="start" title="The start: four MIT students, 2022">
        <p className="text-muted-foreground">
          Michael Truell, Sualeh Asif, Arvid Lunnemark and Aman Sanger started the company, Anysphere, in 2022 while they were at MIT.
          According to Contrary Research, their first idea was AI for mechanical engineers (CAD software); by mid-2022 they had
          switched to the thing they used every day themselves: a code editor.
        </p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://en.wikipedia.org/wiki/Anysphere" title="Anysphere" context="Wikipedia · founders, founding" />
          <EpisodeResourceLink href="https://research.contrary.com/company/anysphere" title="Anysphere company profile" context="Contrary Research · the CAD idea" />
        </div>
      </ReaStep>

      <ReaStep n={2} id="shortcut" title="The shortcut: VS Code, with AI built in">
        <p className="text-muted-foreground">
          They didn&apos;t write an editor from scratch. VS Code, Microsoft&apos;s free editor, is open source, so they took its code
          and built AI right into it. That&apos;s Cursor. It came out in March 2023, and in October 2023 they raised an $8 million
          seed round led by the OpenAI Startup Fund.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          The takeaway: starting from something people already know let them spend all their time on the part that was new.
        </p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://en.wikipedia.org/wiki/Anysphere" title="Launch and seed round" context="Wikipedia · March 2023, $8M seed" />
          <EpisodeResourceLink href="https://github.com/microsoft/vscode" title="VS Code source code" context="GitHub · MIT licence" />
        </div>
      </ReaStep>

      <ReaStep n={3} id="growth" title="The growth: $100M to $2B a year">
        <p className="text-muted-foreground">
          About 20 months after launch, in January 2025, Cursor hit $100 million in yearly revenue. Sacra called it the fastest climb to
          $100M of any software company it had tracked. It passed $1 billion in late 2025 (Fortune says October, CNBC says November),
          $2 billion in February 2026, and about $3 billion by late April 2026, just before the SpaceX deal.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          These are annualised run rates (this month&apos;s revenue times twelve), the number startups usually report.
        </p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://sacra.com/research/cursor-at-100m-arr/" title="Cursor at $100M a year" context="Sacra · January 2025" />
          <EpisodeResourceLink href="https://fortune.com/2025/12/11/cursor-ipo-1-billion-revenue-brainstorm-ai/" title="Cursor passes $1 billion" context="Fortune · December 2025" />
          <EpisodeResourceLink href="https://techcrunch.com/2026/03/02/cursor-has-reportedly-surpassed-2b-in-annualized-revenue/" title="Cursor passes $2 billion" context="TechCrunch · March 2026" />
          <EpisodeResourceLink href="https://www.bloomberg.com/news/articles/2026-05-21/cursor-hits-3-billion-annual-sales-rate-ahead-of-spacex-deal" title="Cursor hits $3 billion" context="Bloomberg · May 2026" />
        </div>
      </ReaStep>

      <ReaStep n={4} id="catch" title="The catch: it didn’t own the AI">
        <p className="text-muted-foreground">
          The smart part of Cursor, the AI model, came from other companies. Every time you asked it something, Cursor paid Anthropic or
          OpenAI, at prices those companies set. One of Cursor&apos;s own investors told Fortune it was burning a dollar to make ninety
          cents.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          That line is one investor&apos;s words, not a reported figure, but it shows the problem: the more people used Cursor, the more
          it paid its suppliers.
        </p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://fortune.com/2026/03/21/cursor-ceo-michael-truell-ai-coding-claude-anthropic-venture-capital/" title="“Burning a dollar to make 90 cents”" context="Fortune · March 2026" />
        </div>
      </ReaStep>

      <ReaStep n={5} id="rival" title="The rival: Anthropic launches Claude Code">
        <p className="text-muted-foreground">
          In February 2025, Anthropic launched Claude Code, its own coding tool. Cursor&apos;s biggest supplier was now one of its
          biggest competitors, and it could sell its own model at its own cost. By early 2026 Claude Code was at about $2.5 billion a
          year. Ramp&apos;s spending data shows Cursor&apos;s share of what companies spend on AI coding tools falling from 41% in June
          2025 to about 26% in May 2026.
        </p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://fortune.com/2026/03/21/cursor-ceo-michael-truell-ai-coding-claude-anthropic-venture-capital/" title="Claude Code’s growth" context="Fortune · March 2026" />
          <EpisodeResourceLink href="https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html" title="Cursor’s share, 41% to 26%" context="CNBC, Ramp data · June 2026" />
        </div>
      </ReaStep>

      <ReaStep n={6} id="fix" title="The fix: its own model, Composer">
        <p className="text-muted-foreground">
          In October 2025 Cursor released Composer, an AI model of its own, so not every request had to go to a rival. By April 2026,
          Sacra estimates, Cursor was making a small gross profit.
        </p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://sacra.com/c/cursor/" title="Composer and Cursor’s margins" context="Sacra" />
        </div>
      </ReaStep>

      <ReaStep n={7} id="offers" title="The offers: OpenAI tried to buy it">
        <p className="text-muted-foreground">
          OpenAI approached Cursor about buying it twice, in 2024 and early 2025, according to people familiar with the talks. Both
          times Cursor said no; it wanted to stay independent. OpenAI then looked at Windsurf, a rival editor, instead.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">These talks were reported from unnamed sources; neither company confirmed them.</p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://www.cnbc.com/2025/04/17/openai-looked-at-cursor-before-considering-deal-with-rival-windsurf.html" title="OpenAI looked at Cursor first" context="CNBC · April 2025" />
          <EpisodeResourceLink href="https://techcrunch.com/2025/04/22/why-openai-wanted-to-buy-cursor-but-opted-for-the-fast-growing-windsurf/" title="Why OpenAI went for Windsurf" context="TechCrunch · April 2025" />
        </div>
      </ReaStep>

      <ReaStep n={8} id="exit" title="The exit: SpaceX, $60 billion">
        <p className="text-muted-foreground">
          In April 2026 SpaceX agreed an option to buy Cursor. The full deal was signed in June and closed on August 14, 2026: $60
          billion, paid in SpaceX stock.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          And it isn&apos;t over: OpenAI has said it will stop offering its models inside Cursor on November 12, 2026.
        </p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html" title="SpaceX signs the deal" context="CNBC · June 2026" />
          <EpisodeResourceLink href="https://techcrunch.com/2026/08/15/spacex-officially-closes-its-cursor-acquisition/" title="SpaceX closes the deal" context="TechCrunch · August 2026" />
          <EpisodeResourceLink href="https://www.cnbc.com/2026/08/29/openai-cursor-spacex-model-access.html" title="OpenAI ends model access in Cursor" context="CNBC · August 2026" />
        </div>
      </ReaStep>

      <section id="lesson" className="scroll-mt-8">
        <h2 className="mb-3 text-lg font-semibold tracking-tight">The lesson: if your app runs on someone else&apos;s AI, remember Cursor</h2>
        <p className="text-muted-foreground">
          Building on top of OpenAI, Anthropic or Google is the fastest way to ship, and Cursor proves you can win big doing it. But your
          supplier sets your costs, can change them any day, and can launch the same product you sell. Three things to know about your own
          app:
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
          <li>What every request costs you, and whether a heavy user makes you money or loses it.</li>
          <li>What happens if your model provider raises prices, changes limits, or switches off access.</li>
          <li>What your users would lose if they went straight to the provider: that&apos;s the part you actually own.</li>
        </ol>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Check your own app</h2>
        <p className="mb-5 text-muted-foreground">
          Open your project in Claude Code or Codex and paste this. It reads your code, finds every place you call an AI model, and tells
          you how exposed you are.
        </p>
        <PromptBlock>{`Check how much my app depends on other companies' AI models.

1. Find every place in this codebase that calls an AI model or AI API (OpenAI, Anthropic, Google, or any other). List each one: file, which model, and what the feature does for the user.

2. For each call, estimate the cost per request using the provider's current official pricing:
   - OpenAI: https://openai.com/api/pricing/
   - Anthropic: https://www.anthropic.com/pricing
   - Google Gemini: https://ai.google.dev/pricing
   Show your working (rough tokens in and out), and say which calls are the most expensive.

3. Tell me what happens if each provider:
   - doubles its prices,
   - rate-limits me,
   - or switches off the model I use.
   Which features break, and which ones can fall back to another model?

4. Tell me which of my features a user could get straight from ChatGPT or Claude, and which ones they can only get from my app (my data, my workflow, my integrations). Be honest.

5. Give me the three most useful changes to lower the risk, smallest first. Examples: caching repeated answers, sending simple requests to a cheaper model, adding a second provider as a fallback, or putting usage limits on free users.

Don't change any code yet. Just give me the report.`}</PromptBlock>
      </section>

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">
          Revenue figures are annualised run rates reported by the outlets linked above. Where two sources give different dates, both are
          shown.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">Last checked: October 2026</p>
      </section>
    </div>
  );
}
