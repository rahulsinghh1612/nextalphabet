import { ChevronRight } from "lucide-react";
import { REA_STEPS, ReaStep, EpisodeResourceLink, PromptBlock } from "@/components/episode-ui";

export default function Episode14() {
  return (
    <div className="space-y-12 text-[15px] leading-7">
      {/* Ultra simple (Rahul, Oct 15): the steps first, tap one to jump to it, as little text as possible. */}
      <section>
        <p className="mb-5 text-muted-foreground">Copy one prompt and your coding agent sets everything up for you.</p>
        <ol className="space-y-1">
          {REA_STEPS.map((step, i) => (
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

      <ReaStep n={1} id="copy" title="Copy the setup prompt">
        <PromptBlock>{`Set up REA (Reverse Engineer Anything) for me from start to finish.

Official sources only:
- https://github.com/morluto/rea
- https://rea.tools
- https://www.npmjs.com/package/rea-agents

1. Check that I have a supported Node.js version (22.19+, 24.11+, or 26+) and npm. If not, install the current LTS from https://nodejs.org, or tell me exactly what to click.
2. Run: npx rea-agents setup
   Choose the agent I'm using right now, explain each change it proposes, and approve it only after I confirm.
3. When setup is done, tell me to restart you, and what to do after restarting.

Do one step at a time and ask me before installing or changing anything.`}</PromptBlock>
      </ReaStep>

      <ReaStep n={2} id="paste" title="Paste it into your agent">
        <p className="text-muted-foreground">Open Claude Code, Codex, or Cursor, paste the prompt, and answer its questions.</p>
      </ReaStep>

      <ReaStep n={3} id="restart" title="Restart your agent">
        <p className="text-muted-foreground">When it says setup is done, close it and open it again.</p>
      </ReaStep>

      <ReaStep n={4} id="ask" title="Try it">
        <p className="mb-5 text-muted-foreground">Paste one of these and fill in the brackets.</p>
        <h3 className="mb-3 font-semibold text-foreground">Learn</h3>
        <PromptBlock>{`Use REA to understand how [FEATURE] works in [APP], show me the evidence, then build a similar feature for my project.`}</PromptBlock>
        <h3 className="mb-3 mt-6 font-semibold text-foreground">Recover</h3>
        <PromptBlock>{`I lost the code for my old project. Use REA on the finished app at [PATH] to work out how it was built, then help me rebuild it.`}</PromptBlock>
        <h3 className="mb-3 mt-6 font-semibold text-foreground">Connect</h3>
        <PromptBlock>{`[TOOL] has no API. Use REA to watch how its web app talks to its server, then help me connect my project to it.`}</PromptBlock>
      </ReaStep>

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">Only analyze apps you own or are allowed to inspect, and build your own version rather than copying.</p>
        <div className="mt-5 space-y-1">
          <EpisodeResourceLink href="https://github.com/morluto/rea" title="REA on GitHub" context="Official repository" />
          <EpisodeResourceLink href="https://rea.tools/guides/" title="REA guides" context="Walkthroughs and examples" />
        </div>
      </section>
    </div>
  );
}
