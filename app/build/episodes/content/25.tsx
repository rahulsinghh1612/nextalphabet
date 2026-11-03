import { ChevronRight } from "lucide-react";
import { EpisodeResourceLink, PromptBlock, ReaStep } from "@/components/episode-ui";

const STEPS = [
  { id: "install", title: "Install Craft Anything" },
  { id: "claude", title: "Sign in to Claude Code" },
  { id: "rebuild", title: "Rebuild your first website" },
  { id: "check", title: "Read the check and refine" },
];

const RESOURCES = [
  {
    group: "Craft Anything",
    links: [
      { href: "https://github.com/storytold/craft-anything/releases/latest", title: "Download the latest version", context: "GitHub · releases" },
      { href: "https://github.com/storytold/craft-anything", title: "The project and its readme", context: "GitHub" },
      { href: "https://github.com/storytold/craft-anything/blob/main/docs/STATUS.md", title: "What works today, and the developer's own tests", context: "GitHub · status" },
    ],
  },
  {
    group: "Claude Code",
    links: [
      { href: "https://claude.ai/download", title: "Claude desktop app", context: "Claude · download" },
      { href: "https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan", title: "Which plans include Claude Code", context: "Claude · help" },
    ],
  },
];

export default function Episode25() {
  return (
    <div className="space-y-12 text-[15px] leading-7">
      <section>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Start here: copy this prompt</h2>
        <p className="mb-5 text-muted-foreground">Open Claude Code in any folder and paste this. It walks you through the whole setup.</p>
        <PromptBlock>{`Help me set up Craft Anything, a free open-source tool that studies a website or app and has Claude Code build my own version.

Project: https://github.com/storytold/craft-anything
Downloads: https://github.com/storytold/craft-anything/releases/latest

Go one step at a time and wait for me to say "done" after each:

1. Check my operating system and chip. Tell me the exact file to download from the latest release (macOS: the .dmg, Windows: the .msi, Linux: the AppImage). Check it against SHA256SUMS.txt if I download it from the terminal.
2. Check that Claude Code is installed and signed in by running claude --version. If it isn't, send me to https://claude.ai/download. Craft Anything uses my own Claude Code, so this has to work first.
3. If craft-anything-cli is available, run craft-anything-cli doctor and explain anything missing in plain words.
4. Walk me through my first project in the app: pick A website, type the address of a site I own or am allowed to examine, say "Recreate this website", stay in Clean room mode, and press Start.
5. When it's finished, help me read the check and ask for changes.

Don't run anything that needs my password. Tell me the command instead. At the end, list what's done and what's left.`}</PromptBlock>
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

      <ReaStep n={1} id="install" title="Install Craft Anything">
        <p className="text-muted-foreground">Download the installer for your computer from the latest release and open it. There are builds for macOS, Windows and Linux.</p>
      </ReaStep>

      <ReaStep n={2} id="claude" title="Sign in to Claude Code">
        <p className="text-muted-foreground">Craft Anything runs your own Claude Code to do the building. It uses your sign-in and never sees your account.</p>
      </ReaStep>

      <ReaStep n={3} id="rebuild" title="Rebuild your first website">
        <p className="mb-3 text-muted-foreground">Pick A website, type the address, say what you want and press Start. Use a site you own or are allowed to examine.</p>
        <p className="text-muted-foreground">Stay in Clean room mode, the default. It works only from what a visitor can see, not the site&apos;s code.</p>
      </ReaStep>

      <ReaStep n={4} id="check" title="Read the check and refine">
        <p className="mb-3 text-muted-foreground">It compares your version with the original at three screen widths, then lists what doesn&apos;t match and keeps fixing it.</p>
        <p className="text-muted-foreground">When it&apos;s ready, open the result or ask for changes in the box at the bottom. Projects are saved in Documents/Craft Anything.</p>
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
        <p className="text-sm leading-6 text-muted-foreground">Craft Anything is free and open source, but still in early alpha, so expect rough edges. Claude Code itself needs a paid Claude plan.</p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">Use it to learn from the best, not to copy them. Don&apos;t publish a copy of someone else&apos;s logos, photos or text.</p>
        <p className="mt-3 text-xs text-muted-foreground">Last checked: November 2026</p>
      </section>
    </div>
  );
}
