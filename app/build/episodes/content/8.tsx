import { EpisodeResourceLink, PromptBlock } from "@/components/episode-ui";

export default function Episode8() {
  return (
    <div className="space-y-10 text-[15px] leading-7">
      <section>
        <div className="space-y-4 text-muted-foreground">
          <p>You do not have to choose between Claude Code and Codex.</p>
          <p>OpenAI has an official Claude Code plugin that lets you use Codex inside the workflow you already have. Codex can review the current code, investigate a bug, try a fix, or continue the whole task in its own thread.</p>
          <p>Here is the simplest way to set it up and use it.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">What you need</h2>
        <ul className="space-y-2 pl-5 text-muted-foreground">
          <li className="list-disc">Claude Code installed</li>
          <li className="list-disc">Node.js 18.18 or newer</li>
          <li className="list-disc">A ChatGPT account with Codex access, or an OpenAI API key</li>
        </ul>
        <p className="mt-4 text-muted-foreground">The plugin uses your local Codex installation, authentication, repository, and configuration. If Codex already works on this computer, you normally do not need a separate setup.</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">1. Install the official plugin</h2>
        <p className="mb-5 text-muted-foreground">Open Claude Code inside the project where you want to use Codex. Add OpenAI’s marketplace, install the plugin, and reload the available plugins.</p>
        <PromptBlock>{`/plugin marketplace add openai/codex-plugin-cc

/plugin install codex@openai-codex

/reload-plugins`}</PromptBlock>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">2. Check the Codex setup</h2>
        <p className="mb-5 text-muted-foreground">Run the setup command inside Claude Code. It checks whether Codex is installed and authenticated. When Codex is missing and npm is available, the plugin can offer to install it.</p>
        <PromptBlock>{`/codex:setup`}</PromptBlock>

        <p className="mb-3 mt-6 text-muted-foreground">You can also install the Codex CLI yourself:</p>
        <PromptBlock>{`npm install -g @openai/codex`}</PromptBlock>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">3. Sign in when needed</h2>
        <p className="mb-5 text-muted-foreground">If you have not used Codex on this computer, start the login flow from Claude Code and sign in with your ChatGPT account or API key.</p>
        <PromptBlock>{`!codex login`}</PromptBlock>
        <p className="mt-4 text-muted-foreground">When you already use Codex locally, the plugin normally reuses that authentication.</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Use Codex as a second reviewer</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Let Claude Code complete the work, then ask Codex to review the current changes. A normal review is read-only and will not edit the code.</p>
          <p>For larger changes, run it in the background so you can continue working.</p>
        </div>
        <div className="mt-5">
          <PromptBlock>{`/codex:review

/codex:review --background

/codex:status

/codex:result`}</PromptBlock>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Challenge the implementation</h2>
        <p className="mb-5 text-muted-foreground">Use an adversarial review when you want Codex to question the direction itself: assumptions, tradeoffs, failure cases, and whether a safer or simpler approach exists.</p>
        <PromptBlock>{`/codex:adversarial-review

/codex:adversarial-review --base main challenge the caching and retry design

/codex:adversarial-review --background look for race conditions`}</PromptBlock>
        <p className="mt-4 text-muted-foreground">This review is also read-only. It challenges the implementation but does not fix it.</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Give a problem to Codex</h2>
        <p className="mb-5 text-muted-foreground">The rescue command delegates a task to Codex. Use it to investigate a failure, try a small fix, or continue a previous Codex task.</p>
        <PromptBlock>{`/codex:rescue investigate why the tests are failing

/codex:rescue fix the failing test with the smallest safe patch

/codex:rescue --background investigate the regression`}</PromptBlock>
        <p className="mt-4 text-muted-foreground">You can also ask Claude directly: “Ask Codex to investigate this bug.” The plugin can delegate the work for you.</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Hand the conversation over to Codex</h2>
        <p className="mb-5 text-muted-foreground">When you want to stop delegating individual tasks and continue the full conversation in Codex, transfer the current Claude Code session.</p>
        <PromptBlock>{`/codex:transfer`}</PromptBlock>
        <p className="mt-4 text-muted-foreground">The plugin creates a persistent Codex thread and prints a <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">codex resume</code> command. You can then continue the imported work in Codex.</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Manage background work</h2>
        <p className="mb-5 text-muted-foreground">Reviews and delegated tasks can take time. These commands let you check progress, read the result, or stop an active job.</p>
        <PromptBlock>{`/codex:status

/codex:result

/codex:cancel`}</PromptBlock>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">The simple workflow</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Use Claude Code normally.</p>
          <p>When you want another model to check the work, run a Codex review.</p>
          <p>When Claude gets stuck, hand the problem to Codex with rescue.</p>
          <p>When you want Codex to continue the work completely, transfer the session.</p>
        </div>
      </section>

      <section className="border-t border-border pt-8">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Official plugin</h2>
        <EpisodeResourceLink href="https://github.com/openai/codex-plugin-cc" title="Codex plugin for Claude Code" context="OpenAI’s official repository" />
      </section>
    </div>
  );
}
