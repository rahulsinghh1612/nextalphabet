import { ChevronRight, CircleAlert } from "lucide-react";

export default function Episode6() {
  return (
    <div className="space-y-10 text-[15px] leading-7">
      <section>
        <div className="space-y-4 text-muted-foreground">
          <p>Anthropic now has an official certification program for people who use and build with Claude.</p>
          <p>The program includes different tracks. This guide focuses on Claude Certified Architect – Foundations, which covers Claude Code, the Claude API, agents, tool use, and Model Context Protocol.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight">Official resources</h2>
        <p className="mt-3 text-muted-foreground">Start with Anthropic Academy. The official training is free, and you can learn the material without taking the exam.</p>
        <div className="mt-5 space-y-1">
          {[
            ["Start free training", "Anthropic Academy", "https://anthropic.skilljar.com/"],
            ["Architect certification", "Overview and access request", "https://anthropic.skilljar.com/claude-certified-architect-foundations-access-request"],
            ["Pearson VUE", "Exam information and policies", "https://www.pearsonvue.com/us/en/anthropic.html"],
            ["Claude Partner Network", "Partner information", "https://claude.com/partners"],
          ].map(([title, description, href]) => (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="group -mx-3 flex items-center justify-between gap-5 rounded-xl px-3 py-3 transition-colors hover:bg-muted/60">
              <div className="flex min-w-0 items-baseline gap-2.5">
                <h3 className="shrink-0 text-sm font-medium text-foreground">{title}</h3>
                <p className="truncate text-xs text-muted-foreground">{description}</p>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Exam details</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Claude Certified Architect – Foundations uses the exam code CCAR-F and is administered by Pearson VUE. The exam contains 60 questions and gives you 120 minutes to complete them.</p>
          <p>The current price is $125 USD. It can be taken online or at an eligible test centre, and the credential remains valid for 12 months.</p>
          <p className="text-sm">Prices, access rules, and exam policies can change. Confirm the latest details on the official pages before registering.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">What the certification actually tests</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>The exam is designed for people building real systems with Claude. It is less about memorising product features and more about making sensible technical decisions.</p>
          <p>You should be able to decide how an agent completes a task, when it should use a tool, how it connects to company systems, and what should happen when something fails or needs human review.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">The five areas you should understand</h2>
        <div className="space-y-7">
          <div>
            <h3 className="mb-2 font-semibold text-foreground">1. Agentic architecture</h3>
            <p className="text-muted-foreground">How agents plan, use tools, break work into steps, pass tasks to other agents, stop when something goes wrong, and bring a person into the loop when needed.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-foreground">2. Tool use and MCP</h3>
            <p className="text-muted-foreground">How to design clear tools, limit permissions, handle failures, return useful errors, and connect Claude to external systems through Model Context Protocol.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-foreground">3. Claude Code workflows</h3>
            <p className="text-muted-foreground">How to use project instructions, permissions, hooks, reusable commands, skills, subagents, CI/CD workflows, and shared team configuration inside a real codebase.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-foreground">4. Prompting and structured output</h3>
            <p className="text-muted-foreground">How to write clear instructions, request structured data, use schemas, validate responses, and recover when Claude returns something unexpected.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-foreground">5. Context and reliability</h3>
            <p className="text-muted-foreground">How to preserve important decisions, remove irrelevant context, manage long workflows, track sources, handle uncertainty, and prevent one error from spreading through the system.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Who is it for?</h2>
        <p className="mb-4 text-muted-foreground">This certification is most useful if you already work with software products, APIs, development workflows, or system architecture.</p>
        <ul className="space-y-2 pl-5 text-muted-foreground">
          {["Solution architects", "Software developers and AI engineers", "Technical consultants", "Platform engineers", "Claude Code users", "People building agents", "Teams implementing Claude inside organizations"].map((item) => (
            <li key={item} className="list-disc">{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-muted-foreground">If you only use Claude for writing, research, or everyday productivity, this probably is not the right certification to start with.</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">What the exam looks like</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>You get 120 minutes to answer 60 questions. The full appointment may take around 135 minutes once check-in and exam instructions are included.</p>
          <p>Expect multiple-choice, multiple-answer, and scenario-based questions where you choose the most appropriate architecture or workflow.</p>
          <p>It is a proctored, closed-book exam. Do not expect to use Claude, Google, documentation, or personal notes during the test.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">A practical preparation plan</h2>
        <div className="space-y-7">
          <div>
            <h3 className="mb-2 font-semibold text-foreground">1. Learn the Claude platform</h3>
            <p className="text-muted-foreground">Understand the API, system instructions, tool use, structured output, context limits, and error handling.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-foreground">2. Use Claude Code on a real project</h3>
            <p className="text-muted-foreground">Explore an existing codebase, plan a feature, configure project instructions and permissions, review changes, and verify the result.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-foreground">3. Build a small agent</h3>
            <p className="text-muted-foreground">Give it a task, let it choose and call a tool, evaluate the result, and escalate uncertain cases to a person.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-foreground">4. Learn MCP</h3>
            <p className="text-muted-foreground">Build or connect a simple MCP server that exposes one useful tool or data source to Claude.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-foreground">5. Practise reliable outputs</h3>
            <p className="text-muted-foreground">Use schemas, validation, retries, useful errors, and human review instead of trusting every response automatically.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-foreground">6. Follow the official exam guide</h3>
            <p className="text-muted-foreground">Treat the official domains, weightings, sample questions, and preparation material as the source of truth.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Projects that will teach you more than memorising</h2>
        <div className="space-y-5 text-muted-foreground">
          <p><strong className="font-semibold text-foreground">Customer-support agent:</strong> Search a knowledge base, answer with sources, and escalate uncertain cases.</p>
          <p><strong className="font-semibold text-foreground">Research agent:</strong> Break a topic into tasks, collect sources, remove duplicates, and produce a structured report.</p>
          <p><strong className="font-semibold text-foreground">Claude Code workflow:</strong> Understand a codebase, plan a change, implement it, add tests, and document the result.</p>
          <p><strong className="font-semibold text-foreground">MCP integration:</strong> Let Claude search documents, query a database, create a task, or access a development tool.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Is it worth it?</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>It can be useful if you build Claude applications professionally, work for an Anthropic partner, help companies adopt AI, or want to demonstrate structured knowledge of Claude’s tools.</p>
          <p>But the certificate alone will not get you a job. A stronger profile combines the credential with one or two real projects, clear documentation, and evidence that you can solve practical problems.</p>
          <p>Even if you are not eligible for the exam yet, you can still learn the same underlying skills through public documentation, courses, and hands-on projects.</p>
        </div>
      </section>

      <section className="border-t border-border pt-8">
        <div className="flex items-start gap-3">
          <CircleAlert className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.8} />
          <div>
            <h2 className="font-semibold tracking-tight">About exam access</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Official exam access is currently connected to organizations in the Claude Partner Network. When you are ready to register, check the certification page for the latest access rules, pricing, and policies.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
