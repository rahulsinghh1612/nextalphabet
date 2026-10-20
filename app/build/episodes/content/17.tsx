import { ChevronRight } from "lucide-react";
import { EpisodeResourceLink, PromptBlock, ReaStep } from "@/components/episode-ui";

const STEPS = [
  { id: "places", title: "Check the five places" },
  { id: "copy", title: "Copy the idea prompt" },
  { id: "paste", title: "Paste it into ChatGPT or Claude" },
];

const PLACES = [
  {
    name: "TrustMRR",
    href: "https://trustmrr.com",
    context: "Verified startup revenue",
    body: "Founders connect their payment provider, so the revenue you see is real. Sort by category and look for small, simple apps making steady money.",
  },
  {
    name: "Starter Story",
    href: "https://www.starterstory.com",
    context: "Real businesses and what they make",
    body: "Interviews with founders about what they built, how they found customers and what it earns. Good for spotting ideas a solo builder can copy and improve.",
  },
  {
    name: "IdeaBrowser",
    href: "https://www.ideabrowser.com",
    context: "A free idea every day",
    body: "One startup idea a day, with the search trends and market data behind it. Check today's idea and the problem it's built on.",
  },
  {
    name: "Y Combinator's Requests for Startups",
    link: "Requests for Startups",
    href: "https://www.ycombinator.com/rfs",
    context: "What YC wants to fund",
    body: "The ideas the biggest startup accelerator is asking founders to build. Look for the ones a small app could start on.",
  },
  {
    name: "Product Hunt",
    href: "https://www.producthunt.com",
    context: "What launched this week",
    body: "The top launches every day and week. Read the comments: what people ask for and complain about is where the next idea is.",
  },
];

export default function Episode17() {
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

      <ReaStep n={1} id="places" title="Check the five places">
        <p className="text-muted-foreground">Each one shows what people already pay for or ask for, so you start from demand instead of a guess.</p>
        <div className="mt-8 space-y-8">
          {PLACES.map((place, i) => (
            <div key={place.name}>
              <h3 className="mb-2 flex items-baseline gap-3 font-semibold text-foreground">
                <span className="text-sm text-muted-foreground">{i + 1}</span>
                {place.name}
              </h3>
              <p className="text-muted-foreground">{place.body}</p>
              <div className="mt-2">
                <EpisodeResourceLink href={place.href} title={`Open ${"link" in place ? place.link : place.name}`} context={place.context} />
              </div>
            </div>
          ))}
        </div>
      </ReaStep>

      <ReaStep n={2} id="copy" title="Copy the idea prompt">
        <p className="mb-5 text-muted-foreground">It turns what you find into app ideas with real proof of demand, then picks the one that fits you.</p>
        <PromptBlock>{`Help me find an app idea that people already pay for. Use these five sources:

1. TrustMRR (https://trustmrr.com): startups with verified revenue. Find small apps making real money. Note what they do, who pays and how much.
2. Starter Story (https://www.starterstory.com): founder interviews with real revenue. Find businesses a solo builder or small team could build.
3. IdeaBrowser (https://www.ideabrowser.com): a free startup idea every day, with search data. Check today's idea and the trend behind it.
4. Y Combinator's Requests for Startups (https://www.ycombinator.com/rfs): the ideas YC wants to fund. Note which ones a small app could start on.
5. Product Hunt (https://www.producthunt.com): what launched this week. Read the top launches and their comments for what people ask for and complain about.

Before you start, ask me three things: what I'm good at, how many hours a week I have, and who I'd like to build for.

Then give me five app ideas. For each one:
- The problem in one sentence, and who has it
- The proof: which source shows people pay for this or want it, with the link
- What already exists, and the gap I could fill
- The smallest version I could build in two weeks
- How I'd find my first 10 users

If you can't open a site, tell me, and work from what I paste in. Don't guess or make up revenue numbers.

Finish by picking the one idea that best fits my skills and time, and tell me why in a few sentences.`}</PromptBlock>
      </ReaStep>

      <ReaStep n={3} id="paste" title="Paste it into ChatGPT or Claude">
        <p className="text-muted-foreground">Turn on web search so it can open the sites. Answer its three questions, then pick an idea and take the two-week version to your coding agent.</p>
      </ReaStep>

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">
          The prompt works best with web search on. If a site needs a login to see more, paste what you see into the chat instead.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">Last checked: October 2026</p>
      </section>
    </div>
  );
}
