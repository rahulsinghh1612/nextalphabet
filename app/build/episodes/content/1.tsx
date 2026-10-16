export default function Episode1() {
  return (
    <div className="space-y-10 text-[15px] leading-7">
      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Start before you compare everything</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>When people decide to start building with AI, one of the first things they do is compare every tool available: ChatGPT, Claude, Cursor, Lovable, and ten other options.</p>
          <p>I did the same. I spent too much time trying to understand which tool was best before I had even started building properly.</p>
          <p>After building four products, I realised that the choice does not matter that much in the beginning. What matters is choosing one capable tool and using it to build something real.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">What should you start with?</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>My simple recommendation is to choose one of these:</p>
          <ul className="space-y-2 pl-5 text-foreground">
            <li className="list-disc">ChatGPT with Codex</li>
            <li className="list-disc">Claude with Claude Code</li>
            <li className="list-disc">Cursor</li>
          </ul>
          <p>You do not need all three. Each can understand your project, write code, fix errors, and help you build a working product.</p>
          <p>They work differently, and you may eventually prefer one. Those differences are not important enough to delay starting.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">What about Lovable and similar tools?</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Tools like Lovable can be useful when you want to create something quickly. But I would not depend on them completely while learning to build.</p>
          <p>Codex, Claude Code, and Cursor let you work more directly with your project and codebase. That gives you more control and makes it easier to understand what is happening when something goes wrong.</p>
          <p>App-building platforms add another layer to the process. They can feel easier at first, but their limitations become clearer as the product grows or you need more specific changes.</p>
          <p>Start with Codex, Claude Code, or Cursor. You can always use other tools later when they make sense for a particular project.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">The real mistake</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>The biggest mistake is spending too much time preparing to build instead of actually building. Comparing tools can feel productive, but most of the learning begins when you work on a real product.</p>
          <p>You will run into problems, make mistakes, and probably change parts of your process along the way. That is completely normal.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">My advice</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Pick Codex, Claude Code, or Cursor. Start with a small product and build one part at a time.</p>
          <p>You will learn much more by building something this week than by spending another week comparing tools. Do not overcomplicate the beginning. Pick one, start building, and figure things out as you go.</p>
        </div>
      </section>

      <section className="border-t border-border pt-6">
        <p className="mb-2 text-sm font-semibold text-foreground">Next episode</p>
        <p className="font-medium text-foreground">What it actually costs to build and launch your first product.</p>
      </section>
    </div>
  );
}
