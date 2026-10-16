import { EpisodeResourceLink, PromptBlock } from "@/components/episode-ui";

export default function Episode13() {
  return (
    <div className="space-y-10 text-[15px] leading-7">
      <section>
        <p className="text-muted-foreground">Paste this into Codex or Claude Code. Your agent will install Scrapling, connect its MCP server, and test the setup for you.</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Set it up</h2>
        <PromptBlock>{`Set up Scrapling on my computer and connect it to this coding agent through its MCP server.

1. Check whether Python 3.10+ is installed.
2. Install Scrapling with its AI/MCP dependencies.
3. Install any required browser dependencies.
4. Find the Scrapling MCP executable.
5. Configure and verify the MCP server.
6. Test it by fetching https://example.com with Scrapling.

Use Scrapling's official documentation to verify the latest commands.

Official repository:
https://github.com/D4Vinci/Scrapling

MCP documentation:
https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html

Run the commands and complete the setup yourself. Ask me only when permission is required.`}</PromptBlock>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Use it</h2>
        <PromptBlock>{`Use Scrapling to research this website and give me a summary of what it does:

[PASTE WEBSITE]`}</PromptBlock>
      </section>

      <section className="border-t border-border pt-8">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Official resources</h2>
        <div className="space-y-1">
          <EpisodeResourceLink href="https://github.com/D4Vinci/Scrapling" title="Scrapling" context="Official repository" />
          <EpisodeResourceLink href="https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html" title="Scrapling MCP guide" context="Installation, setup, and examples" />
        </div>
      </section>
    </div>
  );
}
