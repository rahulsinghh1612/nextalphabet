import { ChevronRight } from "lucide-react";
import { LaunchChecklist } from "@/components/launch-checklist";
import { EpisodeResourceLink, PromptBlock, ReaStep } from "@/components/episode-ui";

const STEPS = [
  { id: "reddit", title: "Reddit r/SideProject" },
  { id: "hacker-news", title: "Hacker News, as a Show HN" },
  { id: "product-hunt", title: "Product Hunt" },
  { id: "indie-hackers", title: "Indie Hackers" },
  { id: "uneed", title: "Uneed" },
];

export default function Episode19() {
  return (
    <div className="space-y-12 text-[15px] leading-7">
      <section>
        <p className="mb-6 text-muted-foreground">Just launched and nobody&apos;s using it yet? Post it in these five places first.</p>
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
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Want your coding agent to write the posts?</h2>
        <p className="mb-5 text-muted-foreground">Replace the details below and paste this into Claude Code or ChatGPT. You get one draft for each place, written the way that place likes it.</p>
        <PromptBlock>{`Write a launch post for my app for each of these five places.

My app:
[APP NAME AND LINK]

What it does, in one sentence:
[ONE SENTENCE]

Who it's for:
[WHO IT'S FOR]

Why I built it:
[YOUR STORY, A FEW LINES]

1. Reddit r/SideProject (https://www.reddit.com/r/SideProject/)
   A title and a short post. Say what I built, why, and ask for honest feedback.

2. Hacker News, as a Show HN (https://news.ycombinator.com/showhn.html)
   A title that starts with "Show HN:", plus a first comment explaining how it works and what I'd like feedback on. Plain and factual, no marketing words.

3. Product Hunt (https://www.producthunt.com)
   A name, a tagline under 60 characters, a short description, and a maker's first comment. Suggest a Tuesday, Wednesday or Thursday to launch.

4. Indie Hackers (https://www.indiehackers.com)
   A post that tells the story of building it, what I learned, and asks other founders what they'd change.

5. Uneed (https://www.uneed.best)
   A tagline and a short description for the listing.

Check each place's current rules before you write, and follow them. Write like a person, not an ad: no hype words, no emojis, no hashtags. Don't make up numbers, users or features I didn't give you.`}</PromptBlock>
      </section>

      <ReaStep n={1} id="reddit" title="Reddit r/SideProject">
        <p className="text-muted-foreground">Builders there actually click on new apps and tell you what&apos;s wrong with yours.</p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://www.reddit.com/r/SideProject/" title="Open r/SideProject" context="Reddit · free" />
        </div>
      </ReaStep>

      <ReaStep n={2} id="hacker-news" title="Hacker News, as a Show HN">
        <p className="text-muted-foreground">If it hits the front page, thousands of people can see it in a day.</p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://news.ycombinator.com/show" title="Open Show HN" context="Hacker News · free" />
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">Start your title with &ldquo;Show HN:&rdquo; and make sure people can try it right away.</p>
      </ReaStep>

      <ReaStep n={3} id="product-hunt" title="Product Hunt">
        <p className="text-muted-foreground">Launch on a Tuesday, Wednesday or Thursday, when the most people are voting.</p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://www.producthunt.com" title="Open Product Hunt" context="Free to launch" />
        </div>
      </ReaStep>

      <ReaStep n={4} id="indie-hackers" title="Indie Hackers">
        <p className="text-muted-foreground">Full of founders building apps like yours, always trying new ones.</p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://www.indiehackers.com" title="Open Indie Hackers" context="Free" />
        </div>
      </ReaStep>

      <ReaStep n={5} id="uneed" title="Uneed">
        <p className="text-muted-foreground">Smaller, so your app doesn&apos;t get buried on day one, and it links back to your site.</p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://www.uneed.best" title="Open Uneed" context="Free listing" />
        </div>
      </ReaStep>

      <LaunchChecklist />

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">Each place has its own rules for self-promotion. Read them before you post, and stick around to answer every comment.</p>
        <p className="mt-3 text-xs text-muted-foreground">Last checked: October 2026</p>
      </section>
    </div>
  );
}
