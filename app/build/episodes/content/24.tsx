import { ChevronRight } from "lucide-react";
import { EpisodeResourceLink, PromptBlock, ReaStep } from "@/components/episode-ui";

const STEPS = [
  { id: "setup", title: "The setup prompt" },
  { id: "install", title: "The install prompt" },
  { id: "style", title: "The style prompt" },
  { id: "captions", title: "The captions prompt" },
  { id: "rules", title: "The rules prompt" },
];

const RESOURCES = [
  {
    group: "The app",
    links: [
      { href: "https://claude.ai/download", title: "Claude desktop app", context: "Claude · download" },
      { href: "https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan", title: "Which plans include Claude Code", context: "Claude · help" },
    ],
  },
  {
    group: "The tools",
    links: [
      { href: "https://www.remotion.dev", title: "Remotion, for the animations", context: "remotion.dev" },
      { href: "https://www.remotion.dev/docs/license", title: "Remotion license", context: "if you're a company" },
      { href: "https://ffmpeg.org", title: "FFmpeg, for the cutting", context: "ffmpeg.org" },
      { href: "https://github.com/openai/whisper", title: "Whisper, for the captions", context: "OpenAI · GitHub" },
    ],
  },
];

export default function Episode24() {
  return (
    <div className="space-y-12 text-[15px] leading-7">
      <section>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Start here: copy this prompt</h2>
        <p className="mb-5 text-muted-foreground">Get the Claude desktop app, not the website. Make one folder for your videos, open it in Claude Code, and paste this.</p>
        <PromptBlock>{`This folder is my video editor. Set it up:

1. Make these folders: raw (my footage), references (reels I like), out (finished videos).
2. Make a file called rules.md. It starts empty and holds every rule I give you about how my videos should look.
3. Make a file called CLAUDE.md that says:
   - Read rules.md before every edit.
   - Show me still frames and wait for my OK before rendering a full video.
   - Change one thing at a time, and tell me which.
   - Check every caption against what I actually said.

Then tell me in one short list what you made, and wait for my next prompt.`}</PromptBlock>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">The five prompts</h2>
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

      <ReaStep n={1} id="setup" title="The setup prompt">
        <p className="text-muted-foreground">It&apos;s the one at the top of this page. It turns one empty folder into your editor.</p>
      </ReaStep>

      <ReaStep n={2} id="install" title="The install prompt">
        <p className="mb-5 text-muted-foreground">One paste installs all three tools: Remotion for the animations, FFmpeg for the cutting, Whisper for the captions.</p>
        <PromptBlock>{`Install what you need to edit videos in this folder:

- Remotion, for animations and rendering
- FFmpeg, for cutting and exporting
- Whisper, for word-by-word captions (use whichever version runs best on my computer)

First check what's already installed, and tell me before you install anything system-wide. If something needs my password, tell me the exact command to run.

When it's done, prove it works: make a 5-second test video with a moving title and one caption, save it in out, and tell me where it is.`}</PromptBlock>
      </ReaStep>

      <ReaStep n={3} id="style" title="The style prompt">
        <p className="mb-5 text-muted-foreground">Put three reels you like in the references folder first. Claude studies them, then makes yours inspired by them, not a copy.</p>
        <PromptBlock>{`I put three reels I like in the references folder. Study them:

1. Pull out a frame every half second with FFmpeg and look at them.
2. Transcribe them with Whisper.
3. Write style.md with what they have in common: how the hook works in the first 3 seconds, how often something changes on screen, the layout, the fonts and colours, the captions, the sounds.

Use these as inspiration, never a copy: no copying their words, characters or graphics. Make the look my own.

Then show me three still frames of how my videos could look, and wait for me to pick one.`}</PromptBlock>
      </ReaStep>

      <ReaStep n={4} id="captions" title="The captions prompt">
        <p className="mb-5 text-muted-foreground">Run this for each video. Captions stay on one line, because two lines crowd the screen.</p>
        <PromptBlock>{`My video is in the raw folder. Edit it in my style:

1. Transcribe it with Whisper and show me the words so I can fix any mistakes.
2. Cut the long pauses and mistakes with FFmpeg.
3. Add captions with Remotion: always one line, never two, with each word lighting up as I say it.
4. Show me 4 still frames from across the video and wait for my OK.
5. Then render it to the out folder.`}</PromptBlock>
      </ReaStep>

      <ReaStep n={5} id="rules" title="The rules prompt">
        <p className="mb-5 text-muted-foreground">This is the part that makes it actually good. Paste it once, and every note you give becomes permanent. I have almost ninety rules now.</p>
        <PromptBlock>{`From now on, every time I say I don't like something:

1. Fix it.
2. Add a short rule to rules.md: what to do, and why I said it.
3. Tell me the rule in one line so I can correct it.

Before you start any new video, read rules.md and follow all of it. If two rules disagree, the newer one wins.`}</PromptBlock>
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

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">The setup and these prompts are free. Claude Code itself needs a paid Claude plan.</p>
        <p className="mt-3 text-xs text-muted-foreground">Last checked: November 2026</p>
      </section>
    </div>
  );
}
