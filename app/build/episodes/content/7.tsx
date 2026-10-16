import { DesignSetupChecklist } from "@/components/design-setup-checklist";
import { EpisodeResourceLink, InlineCode, SetupWarning, PromptBlock } from "@/components/episode-ui";

export default function Episode7() {
  return (
    <div className="space-y-10 text-[15px] leading-7">
      <section>
        <div className="space-y-4 text-muted-foreground">
          <p>If your vibe-coded website looks like every other AI-built site, don&apos;t redesign it yourself.</p>
          <p>Give your coding agent these three things first: a design system to follow, a tool that finds and fixes AI slop, and a way to see the real page.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Want your coding agent to guide you?</h2>
        <p className="mb-5 text-muted-foreground">Replace the details below, copy the prompt, and work through the setup one step at a time.</p>
        <PromptBlock>{`Help me make my website look designed instead of vibe-coded.

A website whose style I like:
[A SITE, FOR EXAMPLE NOTION OR APPLE]

My coding agent:
[CLAUDE CODE, CODEX, OR CURSOR]

Guide me through these three tasks:

1. Add a DESIGN.md file. Find a ready-made one for the site I like on https://getdesign.md (from https://github.com/VoltAgent/awesome-design-md), save it as DESIGN.md in the project root, and adapt the name, logo, and brand colours so it describes my product, not theirs. Then follow DESIGN.md for every design change.

2. Install Impeccable from https://impeccable.style (repository: https://github.com/pbakaus/impeccable). Run /impeccable init, then /impeccable audit to find AI slop such as purple gradients, glowing effects, and emoji decoration, and fix what it finds with /impeccable polish.

3. Connect Chrome DevTools MCP using the official setup for my agent: https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/client-configurations.md. Then open my website in a real browser, check it at desktop and mobile sizes, take screenshots, fix anything broken, and check again.

Before suggesting changes, inspect my project so you understand how it is built.

Guide me through one step at a time and wait for me to confirm before continuing.

Do not overwrite an existing DESIGN.md, configuration file, or design without explaining what it currently does and asking me first.`}</PromptBlock>
      </section>

      <section>
        <p className="mb-3 text-xs font-medium tracking-[0.04em] text-muted-foreground">Step 1 of 3</p>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Give your agent a DESIGN.md file</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>A DESIGN.md file is a Markdown file in your project that describes your design system: colours, fonts, spacing, components, and the overall feel. Your agent reads it before building, so it stops guessing and stops falling back on generic defaults.</p>
          <p>You don&apos;t have to write one from scratch. getdesign.md has ready-made DESIGN.md files for more than 80 well-known websites, including Apple, Notion, Airbnb, and Spotify.</p>
        </div>

        <h3 className="mb-3 mt-7 font-semibold text-foreground">How to set it up</h3>
        <ol className="space-y-2 pl-5 text-muted-foreground">
          <li className="list-decimal pl-1">Open getdesign.md and pick a site whose style you like.</li>
          <li className="list-decimal pl-1">Copy its DESIGN.md file.</li>
          <li className="list-decimal pl-1">Save it as <InlineCode>DESIGN.md</InlineCode> in the root of your project.</li>
          <li className="list-decimal pl-1">Ask your agent to follow it.</li>
        </ol>

        <h3 className="mb-3 mt-7 font-semibold text-foreground">Ask your agent</h3>
        <PromptBlock>{`Read DESIGN.md in the project root and follow it for every design change.

First, adapt it to my product: replace the brand name, logo, and brand colours with mine, and keep the typography, spacing, and component rules.

Then restyle the homepage to match it.`}</PromptBlock>

        <SetupWarning>Use it as a starting point, not a copy. Keep the structure and make the brand your own.</SetupWarning>

        <div className="mt-5 space-y-1">
          <EpisodeResourceLink href="https://getdesign.md/" title="getdesign.md" context="Ready-made DESIGN.md files" />
          <EpisodeResourceLink href="https://github.com/VoltAgent/awesome-design-md" title="awesome-design-md" context="The open-source collection behind it" />
        </div>
      </section>

      <section>
        <p className="mb-3 text-xs font-medium tracking-[0.04em] text-muted-foreground">Step 2 of 3</p>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Run Impeccable to remove the AI slop</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Impeccable is a design skill for AI coding agents. Its detector runs 59 checks for the defaults agents tend to produce, like purple gradients, glowing effects, and emoji decoration, and its commands fix what it finds.</p>
          <p>It works with Claude Code, Codex, Cursor, GitHub Copilot, Gemini CLI, and other agents.</p>
        </div>

        <h3 className="mb-3 mt-7 font-semibold text-foreground">Install</h3>
        <PromptBlock>{`npx impeccable install`}</PromptBlock>
        <p className="mt-4 text-muted-foreground">In Claude Code you can also install it as a plugin: run <InlineCode>/plugin marketplace add pbakaus/impeccable</InlineCode>, then open <InlineCode>/plugin</InlineCode> and install Impeccable.</p>

        <h3 className="mb-3 mt-7 font-semibold text-foreground">Set it up, find the slop, fix it</h3>
        <PromptBlock>{`/impeccable init

/impeccable audit

/impeccable polish`}</PromptBlock>
        <p className="mt-4 text-muted-foreground">Run <InlineCode>init</InlineCode> once so it learns your project. Run <InlineCode>audit</InlineCode> to see what looks generated, then <InlineCode>polish</InlineCode> for a final quality pass. For a specific problem, use the matching command, such as <InlineCode>typeset</InlineCode>, <InlineCode>layout</InlineCode>, or <InlineCode>quieter</InlineCode>, instead of asking for a general redesign.</p>

        <div className="mt-5">
          <EpisodeResourceLink href="https://impeccable.style/" title="Impeccable" context="Installation and all commands" />
        </div>
      </section>

      <section>
        <p className="mb-3 text-xs font-medium tracking-[0.04em] text-muted-foreground">Step 3 of 3</p>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Connect Chrome DevTools MCP so your agent can see</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Your agent normally only reads code. It never sees what the page actually looks like. Chrome DevTools MCP lets it open your website in a real Chrome browser, take screenshots, check the console and network, and test the page, so it can find what&apos;s broken and fix it.</p>
          <p>You need Node.js and Chrome installed.</p>
        </div>

        <h3 className="mb-3 mt-7 font-semibold text-foreground">Claude Code</h3>
        <PromptBlock>{`claude mcp add chrome-devtools --scope user npx chrome-devtools-mcp@latest`}</PromptBlock>

        <h3 className="mb-3 mt-7 font-semibold text-foreground">Codex</h3>
        <PromptBlock>{`codex mcp add chrome-devtools -- npx chrome-devtools-mcp@latest`}</PromptBlock>

        <h3 className="mb-3 mt-7 font-semibold text-foreground">Cursor</h3>
        <p className="text-muted-foreground">Open <strong className="font-medium text-foreground">Cursor Settings</strong>, go to <strong className="font-medium text-foreground">MCP</strong>, click <strong className="font-medium text-foreground">New MCP Server</strong>, and paste the standard config from the official repository.</p>

        <h3 className="mb-3 mt-7 font-semibold text-foreground">Ask your agent</h3>
        <PromptBlock>{`Open my website in Chrome.

Check the homepage at desktop and mobile sizes and take a screenshot of each.

Look for text that is cut off, layouts that break, and anything that doesn't match DESIGN.md.

Fix what's broken, then check again.`}</PromptBlock>

        <div className="mt-5">
          <EpisodeResourceLink href="https://github.com/ChromeDevTools/chrome-devtools-mcp" title="Chrome DevTools MCP" context="Official repository and setup for every agent" />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">The order I&apos;d use</h2>
        <div className="space-y-7">
          <div>
            <h3 className="font-semibold text-foreground">1. Set the direction with DESIGN.md</h3>
            <p className="mt-1 text-muted-foreground">Decide how the site should look before the agent changes anything.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">2. Clean it up with Impeccable</h3>
            <p className="mt-1 text-muted-foreground">Remove the generic AI defaults and polish what&apos;s left.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">3. Check the real page with Chrome DevTools MCP</h3>
            <p className="mt-1 text-muted-foreground">Look at it on desktop and mobile, fix what&apos;s broken, and check again.</p>
          </div>
        </div>
      </section>

      <DesignSetupChecklist />

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Two more worth adding</h2>
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="mb-2 font-semibold text-foreground">21st for better components</h3>
            <p>21st connects your agent to a large catalog of React components, so it can start from a strong hero, pricing section, or navbar instead of generating every section from scratch. Use the setup command from its MCP page for your agent.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-foreground">Vercel&apos;s Web Design Guidelines for a final review</h3>
            <p>An official Vercel agent skill that reviews your interface for accessibility, forms, typography, navigation, and usability once the design is done.</p>
            <div className="mt-3">
              <PromptBlock>{`npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines`}</PromptBlock>
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-1">
          <EpisodeResourceLink href="https://21st.dev/mcp" title="21st MCP setup" context="Instructions for your coding agent" />
          <EpisodeResourceLink href="https://github.com/vercel-labs/agent-skills" title="Vercel agent skills" context="Official repository" />
        </div>
      </section>

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">With a design system to follow, the slop removed, and the real page checked, your agent can make your website look designed instead of generated.</p>
      </section>
    </div>
  );
}
