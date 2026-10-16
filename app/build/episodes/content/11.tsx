import { EpisodeResourceLink, PromptBlock } from "@/components/episode-ui";

export default function Episode11() {
  return (
    <div className="space-y-10 text-[15px] leading-7">
      <section>
        <div className="space-y-4 text-muted-foreground">
          <p>Anthropic has begun adding machine-readable watermarks to text from supported Claude models. They are not visible tags or hidden characters: they are carried in subtle word-choice patterns in the text itself.</p>
          <p>Watermarks Remover is an open-source project by Guillaume Meyer. Its Claude skill connects to a local service on your computer and can inspect or rewrite content that you own or are authorised to process.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">What you need</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>This is more than a single <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">SKILL.md</code> file. The skill is a client for Watermarks Remover&apos;s local service.</p>
          <p>You need the Watermarks Remover repository, the <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">remove-ai-marks</code> skill, and the service running locally. Python 3.10 or newer is the simplest setup.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">1. Download the project</h2>
        <p className="mb-5 text-muted-foreground">Clone the repository in Terminal, or download it as a ZIP from GitHub and open the extracted folder.</p>
        <PromptBlock>{`git clone https://github.com/guillaumemeyer/watermarks-remover.git
cd watermarks-remover`}</PromptBlock>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">2. Find the Claude skill</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Inside the project, open <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">skills/remove-ai-marks/</code>. It contains the skill instructions and its supporting references.</p>
          <p>The skill is called <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">remove-ai-marks</code>. The project also documents the older <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">remove-claude-marks</code> alias.</p>
        </div>
        <PromptBlock>{`skills/
└── remove-ai-marks/
    ├── SKILL.md
    └── references/`}</PromptBlock>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">3. Start the local service</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>From the repository folder, start the service. It listens on your own computer at <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">http://127.0.0.1:8765</code> by default.</p>
        </div>
        <div className="mt-5"><PromptBlock>{`make serve`}</PromptBlock></div>
        <p className="mb-5 mt-5 text-muted-foreground">Or run the server directly:</p>
        <PromptBlock>{`python3 service/scripts/server.py --host 127.0.0.1 --port 8765`}</PromptBlock>
        <p className="mb-5 mt-5 text-muted-foreground">Leave that Terminal window open. In a second window, check that it is healthy:</p>
        <PromptBlock>{`curl http://127.0.0.1:8765/health`}</PromptBlock>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">4. Package and upload the skill</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Claude expects a ZIP that contains the skill folder. Do not place <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">SKILL.md</code> directly at the root of the ZIP.</p>
        </div>
        <div className="mt-5"><PromptBlock>{`remove-ai-marks.zip
└── remove-ai-marks/
    ├── SKILL.md
    └── references/`}</PromptBlock></div>
        <p className="mt-5 text-muted-foreground">In Claude, go to <strong className="font-semibold text-foreground">Customize → Skills</strong>, choose <strong className="font-semibold text-foreground">Create skill → Upload a skill</strong>, upload the ZIP, and make sure it is enabled.</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">5. Use it</h2>
        <p className="mb-5 text-muted-foreground">Open a Claude conversation, invoke the skill, then provide the text or file you want to inspect or process.</p>
        <PromptBlock>{`/remove-ai-marks`}</PromptBlock>
        <p className="mt-5 text-muted-foreground">The project can work with invisible Unicode characters, statistical text patterns, C2PA provenance, EXIF/XMP metadata, and provenance data in supported documents and media. For statistical text watermarks, it uses rewriting to change the word-choice patterns that may carry the mark.</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">What this can and cannot confirm</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Copying and pasting Claude text preserves its wording, so a statistical watermark may travel with it. Light edits may leave enough of the pattern detectable; a substantial rewrite can disrupt that pattern.</p>
          <p>That does not guarantee removal. Claude&apos;s official detector and detection key are not public, so a third-party tool cannot certify that text will not be detected by a future official detector. Treat rewriting as a best-effort process and review the result carefully.</p>
        </div>
      </section>

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">Only process content you own or are authorised to process. Do not use provenance-removal tools to misrepresent AI-assisted work where disclosure is required.</p>
        <div className="mt-5 space-y-1">
          <EpisodeResourceLink href="https://github.com/guillaumemeyer/watermarks-remover" title="Watermarks Remover" context="Project repository and setup files" />
        </div>
      </section>
    </div>
  );
}
