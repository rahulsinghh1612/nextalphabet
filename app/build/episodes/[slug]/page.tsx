import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight, CircleAlert, Clapperboard, Instagram } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { buildEpisodes } from "@/lib/build";
import { CopyPrompt } from "@/components/copy-prompt";
import { BuildIntro } from "@/components/build-intro";
import { AppStoreSubmissionChecklist } from "@/components/app-store-submission-checklist";
import { DomainSetupChecklist } from "@/components/domain-setup-checklist";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const episode = buildEpisodes.find((item) => item.slug === slug || item.legacySlug === slug);
  return { title: episode?.title ?? "Episode" };
}

export default async function EpisodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const episode = buildEpisodes.find((item) => item.slug === slug || item.legacySlug === slug);
  if (!episode) notFound();

  const host = (await headers()).get("host") ?? "";
  const homeHref = host.startsWith("build.") ? "/" : "/build";

  if (slug !== episode.slug) {
    const basePath = host.startsWith("build.") ? "" : "/build";
    redirect(`${basePath}/episodes/${episode.slug}`);
  }

  return (
    <main className="px-6 py-10 sm:py-14">
      <article className="mx-auto max-w-2xl">
        <BuildIntro />

        <div className="mb-9 mt-12 flex items-center justify-between sm:mt-14">
          <Link href={homeHref} className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ChevronLeft className="h-4 w-4" /> Back to episodes
          </Link>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Clapperboard className="h-4 w-4 text-foreground" strokeWidth={1.8} />
            <span>{episode.label ?? `Ep. ${String(episode.number).padStart(2, "0")}`}</span>
          </div>
        </div>

        <header className="pb-9">
          <h1 className="max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-4xl">{episode.title}</h1>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{episode.description}</p>
        </header>

        {episode.instagramUrl ? (
          <a
            href={episode.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-10 flex items-center justify-between gap-4 rounded-xl border border-border p-4 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-3">
              <Instagram className="h-5 w-5 shrink-0 text-foreground" strokeWidth={1.8} />
              <p className="flex items-baseline gap-2 whitespace-nowrap text-sm">
                <span className="font-medium text-foreground">Watch this episode</span>
                <span className="text-xs text-muted-foreground">Instagram Reel</span>
              </p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
          </a>
        ) : null}

        {episode.number === 0 ? <div className="space-y-10 text-[15px] leading-7">
          <section>
            <h2 className="mb-4 text-lg font-semibold tracking-tight">Why Build exists</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>While building four products, I kept running into the same problems. I spent too long on small decisions, invested in features before knowing whether people needed them, and sometimes realized halfway through that the product needed to change.</p>
              <p>The useful lessons were rarely obvious at the beginning. They became clearer after building, shipping, and seeing what people actually used.</p>
              <p>Build is where I document those lessons with the context behind them, while they&apos;re still fresh.</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold tracking-tight">What each breakdown includes</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Every episode focuses on one part of building a product. I&apos;ll explain the situation, the decision I had to make, what I chose, and what happened afterwards.</p>
              <p>When it&apos;s useful, I&apos;ll include examples from the products I&apos;ve built, along with the tools, links, and resources connected to that decision.</p>
              <p>The goal is to give you enough context to make your own decision, not hand you a generic formula.</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold tracking-tight">How to use the series</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>The short videos introduce the topic. These pages are the reference you can return to when you&apos;re working through the same part of your own product.</p>
              <p>You do not need to follow everything in order. Start with the episode that matches the problem in front of you, take what fits, and leave what does not.</p>
              <p>If something is unclear, ask in the comments on the episode. Those questions will help shape what I explain next.</p>
            </div>
          </section>
        </div> : null}

        {episode.number === 1 ? (
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
        ) : null}

        {episode.number === 2 ? (
          <div className="space-y-10 text-[15px] leading-7">
            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Getting started costs less than you think</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>One of the biggest reasons people never start building their first product is because they assume that it is going to cost a lot. I used to think the same thing.</p>
                <p>But after launching four products, I realised that you can build and launch a first version with a surprisingly small budget. You do not need an office, a large team, expensive servers, or thousands of dollars in funding.</p>
                <p>You mainly need the right tools to build the product, somewhere to publish it, and enough infrastructure to support your first few users.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">The cost of launching a web app</h2>
              <div className="space-y-7 text-muted-foreground">
                <p>For a basic web app, your initial cost can be around <strong className="font-medium text-foreground">$30</strong>.</p>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">1. An AI coding subscription</h3>
                  <p>A paid subscription to a tool such as ChatGPT or Claude normally costs around $20 per month. It can help you plan the product, write and understand code, fix errors, build features, and prepare for launch.</p>
                  <p className="mt-3">You do not need every AI tool available. Choose one, learn how to use it properly, and start building.</p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">2. A domain</h3>
                  <p>A standard domain will often cost around $10–$15 for the first year. You can launch without one, but a custom address makes the product feel more complete and credible.</p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">3. Deployment</h3>
                  <p>Vercel is one of the easiest ways to deploy a Next.js app. Its free plan can be enough for personal projects and early testing, although you should review its terms or upgrade when your product becomes commercial.</p>
                  <p className="mt-2 font-medium text-foreground">Starting cost: $0</p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">4. Database and authentication</h3>
                  <p>Supabase provides a database, authentication, file storage, and APIs. Its free plan is usually enough to build and test an early product, so you do not need to pay for a database before you have meaningful usage.</p>
                  <p className="mt-2 font-medium text-foreground">Starting cost: $0</p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">5. Product analytics</h3>
                  <p>PostHog helps you understand how people use the product: what they visit, which features they use, where they stop, and whether they return. Its free allowance is enough for many early-stage products.</p>
                  <p className="mt-2 font-medium text-foreground">Starting cost: $0</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">A simple web app stack</h2>
              <ul className="space-y-2 pl-5 text-muted-foreground">
                <li className="list-disc"><strong className="font-medium text-foreground">ChatGPT or Claude</strong> for building and debugging</li>
                <li className="list-disc"><strong className="font-medium text-foreground">GitHub</strong> for storing your code</li>
                <li className="list-disc"><strong className="font-medium text-foreground">Vercel</strong> for deployment</li>
                <li className="list-disc"><strong className="font-medium text-foreground">Supabase</strong> for the database and authentication</li>
                <li className="list-disc"><strong className="font-medium text-foreground">PostHog</strong> for product analytics</li>
                <li className="list-disc"><strong className="font-medium text-foreground">A custom domain</strong> for your website address</li>
              </ul>
              <div className="mt-5 space-y-2 border-y border-border py-4 text-muted-foreground">
                <p>AI subscription: around $20 per month</p>
                <p>Domain: around $10 per year</p>
                <p>Deployment, database, and analytics: $0 to start</p>
                <p className="pt-1 font-semibold text-foreground">Approximate starting cost: $30</p>
              </div>
              <p className="mt-4 text-muted-foreground">This does not mean the product will remain at $30 forever. Upgrade your infrastructure when real usage arrives, not before you have built the first version.</p>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">The cost of publishing a mobile app</h2>
              <div className="space-y-5 text-muted-foreground">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Apple App Store</h3>
                  <p>The Apple Developer Program costs $99 per year and gives you access to the tools required to test and distribute apps across Apple&apos;s platforms.</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Google Play</h3>
                  <p>A Google Play developer account has a one-time $25 registration fee. New personal accounts may also need to complete identity verification and testing requirements before publishing publicly.</p>
                </div>
                <div className="space-y-2 border-y border-border py-4">
                  <p><strong className="font-medium text-foreground">iOS only:</strong> approximately $119 to begin</p>
                  <p><strong className="font-medium text-foreground">Android only:</strong> approximately $45 to begin</p>
                  <p><strong className="font-medium text-foreground">Both platforms:</strong> approximately $144 to begin</p>
                </div>
                <p>Your exact cost can change depending on your location, taxes, exchange rates, chosen tools, and infrastructure needs.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">What you should not pay for too early</h2>
              <ul className="space-y-2 pl-5 text-muted-foreground">
                <li className="list-disc">Expensive cloud infrastructure</li>
                <li className="list-disc">Multiple AI subscriptions</li>
                <li className="list-disc">Large database plans</li>
                <li className="list-disc">Premium analytics</li>
                <li className="list-disc">A large marketing software stack</li>
                <li className="list-disc">A team of developers</li>
                <li className="list-disc">Every feature you have imagined</li>
              </ul>
              <p className="mt-4 text-muted-foreground">Start with the smallest setup that lets you build, launch, and learn. Upgrade only when the current setup is genuinely limiting the product.</p>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">The main lesson</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Getting started is not as expensive as it looks. For your first version, you only need the basic tools required to build and launch it.</p>
                <p>Start small. Use the free plans. Put the product in front of real people. Then spend more when the product actually needs it.</p>
                <p>The goal of the first version is not to build infrastructure for a million users. The goal is to launch something useful and find your first user.</p>
              </div>
            </section>

            <section className="border-t border-border pt-6">
              <p className="mb-3 text-sm font-semibold text-foreground">Tools mentioned</p>
              <p className="text-sm leading-7 text-muted-foreground">ChatGPT · Claude · GitHub · Vercel · Supabase · PostHog · Apple Developer Program · Google Play Console</p>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">Prices and plan conditions can change. Check each platform&apos;s latest terms before making a purchase.</p>
            </section>

            <section className="border-t border-border pt-6">
              <p className="mb-2 text-sm font-semibold text-foreground">Next episode</p>
              <p className="font-medium text-foreground">Do you need to know how to code?</p>
            </section>
          </div>
        ) : null}

        {episode.number === 3 ? (
          <div className="space-y-10 text-[15px] leading-7">
            <section>
              <div className="space-y-4 text-muted-foreground">
                <p>AI agents can now write most, and sometimes all, of the code required to build a product.</p>
                <p>That changes what beginners should focus on.</p>
                <p>You no longer need to spend months learning a programming language before you can start building. But you still need to understand how a product works.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">What you actually need to learn</h2>
              <p className="mb-4 text-muted-foreground">You should be able to:</p>
              <ul className="space-y-2 pl-5 text-muted-foreground">
                <li className="list-disc">Explain the problem clearly</li>
                <li className="list-disc">Break the product into smaller features</li>
                <li className="list-disc">Decide how the user should move through it</li>
                <li className="list-disc">Understand what information needs to be stored</li>
                <li className="list-disc">Test whether everything works properly</li>
                <li className="list-disc">Explain errors clearly when something breaks</li>
              </ul>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>You do not need to know how to write every line of code yourself.</p>
                <p>But you should understand what you are asking the AI to build.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">What the AI can do</h2>
              <p className="mb-4 text-muted-foreground">AI coding agents can help you:</p>
              <ul className="space-y-2 pl-5 text-muted-foreground">
                <li className="list-disc">Create the interface</li>
                <li className="list-disc">Build the features</li>
                <li className="list-disc">Connect databases and APIs</li>
                <li className="list-disc">Fix errors</li>
                <li className="list-disc">Test and improve the product</li>
                <li className="list-disc">Prepare it for launch</li>
              </ul>
              <p className="mt-4 text-muted-foreground">The better your instructions are, the better the result will be.</p>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">The skill has shifted</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>The most valuable skill is no longer memorising syntax.</p>
                <p>It is being able to understand a problem, make good decisions, and guide the AI towards a useful product.</p>
                <p>That is how I have built and launched products without writing the code myself.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">The takeaway</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Do not wait until you know how to code.</p>
                <p>Start with a small problem, build a simple version, and learn what you need along the way.</p>
              </div>
            </section>
          </div>
        ) : null}

        {episode.number === 4 ? (
          <div className="space-y-10 text-[15px] leading-7">
            <section>
              <div className="space-y-4 text-muted-foreground">
                <p>AI can write the code for your app.</p>
                <p>But before it starts building, it needs a clear understanding of what you want to create.</p>
                <p>These four documents give your AI coding agent the context it needs to build your app properly.</p>
              </div>
            </section>

            <DocumentSection
              number="1"
              title="Product Requirements Document"
              description="A Product Requirements Document, or PRD, explains what you are building. It defines the idea, the users, the problem, and the features your app needs."
              items={["Product overview", "Problem the app solves", "Target users", "Core features", "User stories", "MVP scope", "Features not included", "Success criteria"]}
              prompt={`Help me create a Product Requirements Document for my app.

My app idea:
[Describe your app idea]

The problem it solves:
[Describe the problem]

Target users:
[Describe the users]

Main features:
[List the main features]

Create a clear and detailed PRD that includes:

1. Product overview
2. Problem statement
3. Target users
4. Core features
5. User stories
6. MVP scope
7. Features that should not be included in the first version
8. Success criteria

Keep the document simple, practical, and focused on the first version of the product.

Ask me questions if any important information is missing.`}
            />

            <DocumentSection
              number="2"
              title="Design Document"
              description="A Design Document explains how your app should look and how users move through it. It gives the AI a clear direction for every screen before it starts designing the interface."
              items={["Design style", "Colour palette", "Typography", "UI components", "List of screens", "Navigation", "User journey", "Empty states", "Loading states", "Error states"]}
              extra={
                <div>
                  <h3 className="mb-3 font-semibold text-foreground">Example screen flow</h3>
                  <PromptBlock>{`Onboarding
↓
Sign up
↓
Dashboard
↓
Main feature
↓
Details
↓
Settings`}</PromptBlock>
                </div>
              }
              prompt={`Help me create a Design Document for my app.

App description:
[Describe your app]

Target users:
[Describe the users]

Main features:
[List the features]

Preferred design style:
[Minimal, modern, playful, professional, etc.]

Apps or websites I like:
[List examples]

Create a Design Document that includes:

1. Overall design direction
2. Colour palette
3. Typography
4. Main UI components
5. Complete list of screens
6. Purpose of each screen
7. Navigation between screens
8. Main user journey
9. Empty states
10. Loading states
11. Error states
12. Responsive behaviour

Keep the interface simple and avoid unnecessary screens or components.

Ask me questions if any important design decisions are missing.`}
            />

            <DocumentSection
              number="3"
              title="Technical Requirements Document"
              description="A Technical Requirements Document explains how the app will be built. It defines the tools, technologies, database, APIs, and technical decisions the AI should follow."
              items={["Frontend framework", "Backend", "Database", "Authentication", "APIs", "Payments", "Analytics", "File storage", "Notifications", "Hosting", "Security requirements", "Database structure"]}
              extra={
                <div>
                  <h3 className="mb-3 font-semibold text-foreground">Example stack</h3>
                  <PromptBlock>{`Frontend: Next.js
Database: Supabase
Authentication: Supabase Auth
Payments: Stripe
Analytics: PostHog
Hosting: Vercel`}</PromptBlock>
                </div>
              }
              prompt={`Help me create a Technical Requirements Document for my app.

App description:
[Describe your app]

Main features:
[List the features]

Platform:
[Web, iOS, Android, desktop, or multiple platforms]

Preferred technologies:
[List any tools you already want to use]

Create a Technical Requirements Document that includes:

1. Recommended tech stack
2. Frontend architecture
3. Backend architecture
4. Database choice
5. Database schema
6. Authentication flow
7. APIs and integrations
8. Payments
9. Analytics
10. File storage
11. Notifications
12. Hosting and deployment
13. Security requirements
14. Suggested folder structure
15. Important technical decisions

Choose simple and reliable technologies.

Prefer tools with generous free plans where possible.

Explain each major technical choice briefly.

Do not add unnecessary complexity.

Ask me questions before making assumptions about important technical decisions.`}
            />

            <DocumentSection
              number="4"
              title="Implementation Plan"
              description="An Implementation Plan breaks the app into smaller steps. It tells the AI what to build first and in what order."
              items={["Build phases", "Features inside each phase", "Dependencies", "Testing steps", "Launch preparation", "Completion criteria"]}
              extra={
                <div>
                  <h3 className="mb-3 font-semibold text-foreground">Example build order</h3>
                  <PromptBlock>{`Phase 1: Project setup and authentication

Phase 2: Database and core features

Phase 3: Main screens and navigation

Phase 4: Payments, analytics, and notifications

Phase 5: Testing and launch`}</PromptBlock>
                </div>
              }
              prompt={`Help me create a step-by-step Implementation Plan for my app.

Use the following documents as context:

Product Requirements Document:
[Paste your PRD]

Design Document:
[Paste your Design Document]

Technical Requirements Document:
[Paste your TRD]

Break the app into clear development phases.

For each phase, include:

1. Objective
2. Features to build
3. Technical tasks
4. Dependencies
5. Testing requirements
6. Completion criteria

Put the tasks in the correct build order.

Start with the foundation of the app before adding advanced features.

Keep each phase small enough for an AI coding agent to complete without changing unrelated parts of the codebase.

Do not write any code.

Only create the implementation plan.`}
            />

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Final prompt for your AI coding agent</h2>
              <p className="mb-4 text-muted-foreground">Once all four documents are ready, give them to your AI coding agent with this prompt:</p>
              <PromptBlock>{`Read all four documents completely before writing any code.

Use the Product Requirements Document as the source of truth for what the app should do.

Use the Design Document as the source of truth for the screens, interface, and navigation.

Use the Technical Requirements Document as the source of truth for the technology, database, APIs, and architecture.

Use the Implementation Plan as the source of truth for the order in which the app should be built.

Do not add features that are not included in the documents.

Do not change the selected technologies without explaining why.

Do not skip ahead in the implementation plan.

Before starting each phase, explain what you are going to build.

If anything is unclear or contradictory, ask me before writing code.`}</PromptBlock>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">The complete process</h2>
              <PromptBlock>{`App idea
↓
Product Requirements Document
↓
Design Document
↓
Technical Requirements Document
↓
Implementation Plan
↓
Start building`}</PromptBlock>
              <p className="mt-4 text-muted-foreground">The clearer these four documents are, the fewer decisions your AI coding agent has to make on its own.</p>
            </section>
          </div>
        ) : null}

        {episode.number === 5 ? (
          <div className="space-y-10 text-[15px] leading-7">
            <section>
              <div className="space-y-4 text-muted-foreground">
                <p>AI can help you build an app.</p>
                <p>But before you launch it, there are a few legal things you should check.</p>
                <p>This guide will help you prepare your Terms of Use, Privacy Policy, app name, and data declarations. You can use the prompts below to create your first drafts.</p>
              </div>
              <p className="mt-6 rounded-xl border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
                This guide is for general information only. Legal requirements depend on your app, users, and country. Review everything carefully before publishing.
              </p>
            </section>

            <LegalSection
              number="1"
              title="Terms of Use"
              description="Your Terms of Use explain the rules for using your app. They can cover who can use it, acceptable use, payments and subscriptions, account suspension or deletion, and each party’s responsibilities."
              preparation={["App name", "Your name or company name", "Contact email", "What the app does", "Whether users need an account", "Whether the app is free or paid", "Subscription and cancellation details", "Minimum user age", "Country or state where your business operates"]}
              checks={["Replace every placeholder", "Make sure the pricing details are correct", "Make sure cancellation instructions match your app", "Add a contact email", "Add the date the terms become effective"]}
              prompt={`Create a simple Terms of Use document for my app.

App name:
[App name]

Owner or company:
[Your name or company name]

Contact email:
[Email]

Country or state:
[Location]

What the app does:
[Short description]

Does the app require an account?
[Yes or no]

Pricing:
[Free, paid, or subscription]

Subscription and cancellation details:
[Details]

Minimum user age:
[Age]

Please include sections for user accounts, acceptable use, payments,
subscriptions, intellectual property, account termination, disclaimers,
limitation of liability, changes to the terms, and contact information.

Use simple language.

Do not invent missing details. Mark anything I need to review with [CHECK].`}
            />

            <LegalSection
              number="2"
              title="Privacy Policy"
              description="Your Privacy Policy explains what information your app collects and how it is used, including information provided by users, collected automatically, accessed through permissions, or received by third-party services."
              preparation={["What information users provide", "What your app collects automatically", "Why each type of information is needed", "Where the information is stored", "Which third-party services receive it", "How users can delete their account or data"]}
              checks={["Include every analytics and third-party tool", "Make sure the policy matches what the app actually does", "Explain how users can delete their data", "Add a contact email", "Add an effective date"]}
              prompt={`Create a simple Privacy Policy for my app.

App name:
[App name]

Owner or company:
[Your name or company name]

Contact email:
[Email]

Country or state:
[Location]

What the app does:
[Short description]

Information users provide:
[List it]

Information collected automatically:
[List it]

Permissions used:
[Camera, microphone, location, photos, etc.]

Third-party services:
[Supabase, Firebase, PostHog, Stripe, RevenueCat, etc.]

How users can delete their account or data:
[Explain]

Please explain what information is collected, why it is collected,
how it is used, when it is shared, how long it is kept, and how users
can request access or deletion.

Use simple language.

Do not invent missing details. Mark anything I need to confirm with [CHECK].`}
            />

            <LegalSection
              number="3"
              title="Check Your App Name"
              description="Before committing to an app name, check whether another business is already using something similar. Search exact and similar names across search engines, app stores, domains, social platforms, and official trademark databases."
              preparation={["Similar spellings", "Similar-sounding names", "Singular and plural versions", "Names in the same product category", "Countries where you plan to operate"]}
              checks={["Search the exact name", "Search similar names", "Check the app stores", "Check domains and usernames", "Check official trademark databases", "Get professional advice if you find a similar business"]}
              prompt={`Help me create a search plan for my proposed app name.

App name:
[Name]

What the app does:
[Description]

Target users:
[Audience]

Countries where I plan to launch:
[Countries]

Create a list of:

1. Exact-name searches
2. Similar spellings
3. Similar-sounding names
4. Singular and plural versions
5. Search queries combining the name with the product category
6. Trademark databases I should check

Do not tell me that the name is legally safe.

This is only for preliminary research.`}
            />

            <LegalSection
              number="4"
              title="Declare the Data Your App Collects"
              description="Apple and Google may ask what information your app collects, uses, or shares. Include data handled by your own app as well as every third-party tool and SDK."
              preparation={["Every type of data collected", "Why it is collected", "Whether it is linked to a user", "Whether it is shared with another company", "Which feature or SDK collects it", "Whether users can request deletion"]}
              checks={["Include every SDK", "Review the official documentation for each tool", "Make sure the answers match your Privacy Policy", "Update the declarations whenever your app changes"]}
              prompt={`Help me prepare my app’s data declarations.

App description:
[Description]

Platforms:
[iOS, Android, or both]

Information collected:
[List it]

Permissions used:
[List them]

Third-party tools and SDKs:
[List them]

For each type of information, create a table showing:

1. What information is collected
2. Why it is collected
3. Whether it is linked to the user
4. Whether it is shared
5. Which feature or SDK collects it
6. Whether users can request deletion

Separate the result into:

- Apple App Privacy
- Google Play Data Safety

Mark uncertain answers with [VERIFY].`}
            />

            <section className="border-t border-border pt-8">
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Final launch checklist</h2>
              <ul className="space-y-2 text-muted-foreground">
                {["Created your Terms of Use", "Created your Privacy Policy", "Checked your app name", "Listed every type of data collected", "Checked every third-party SDK", "Completed your store data declarations", "Added your legal documents to your website and app", "Reviewed every AI-generated document", "Replaced every placeholder", "Added your contact details and effective dates"].map((item) => (
                  <li key={item} className="flex gap-3"><span aria-hidden="true">□</span><span>{item}</span></li>
                ))}
              </ul>
              <div className="mt-6 space-y-2 text-muted-foreground">
                <p>AI can help you prepare the documents.</p>
                <p>But you are still responsible for making sure they match your app.</p>
              </div>
            </section>
          </div>
        ) : null}

        {episode.number === 6 ? (
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
        ) : null}

        {episode.number === 7 ? (
          <div className="space-y-10 text-[15px] leading-7">
            <section>
              <div className="space-y-4 text-muted-foreground">
                <p>AI coding agents are already very good at building websites. But without the right context and tools, the result can still feel generic.</p>
                <p>The answer is not another prompt asking the agent to “make it look better.” Give it a better workflow for design direction, components, review, and testing.</p>
                <p>These are the four tools I would add.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">The simple mental model</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="font-semibold text-foreground">Impeccable → Design.</strong> Gives the agent stronger visual direction.</p>
                <p><strong className="font-semibold text-foreground">21st → Components.</strong> Gives it better building blocks.</p>
                <p><strong className="font-semibold text-foreground">Vercel Guidelines → Review.</strong> Checks what the agent built.</p>
                <p><strong className="font-semibold text-foreground">Chrome DevTools → Eyes.</strong> Lets the agent inspect and use the real website.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-1 text-lg font-semibold tracking-tight">1. Impeccable</h2>
              <p className="mb-4 text-sm font-medium text-muted-foreground">Best for better design direction</p>
              <div className="space-y-4 text-muted-foreground">
                <p>Impeccable is a design skill and toolkit for AI coding agents. It gives the agent a more precise vocabulary for typography, colour, spacing, layout, hierarchy, motion, and overall visual direction.</p>
                <p>Install it near the beginning of a project so it can establish the design context. Use it again near the end for a final polish pass.</p>
              </div>

              <h3 className="mb-3 mt-6 font-semibold text-foreground">Install and initialise</h3>
              <PromptBlock>{`npx impeccable install

/impeccable init`}</PromptBlock>

              <h3 className="mb-3 mt-6 font-semibold text-foreground">Polish an existing interface</h3>
              <PromptBlock>{`/impeccable polish`}</PromptBlock>

              <p className="mt-4 text-muted-foreground">Impeccable also provides commands for typography, simplification, auditing, and other focused improvements. Use the specific command that matches the problem instead of asking for a general redesign.</p>

              <div className="mt-5">
                <EpisodeResourceLink href="https://impeccable.style/" title="Impeccable" context="Installation and documentation" />
              </div>
            </section>

            <section>
              <h2 className="mb-1 text-lg font-semibold tracking-tight">2. 21st</h2>
              <p className="mb-4 text-sm font-medium text-muted-foreground">Best for high-quality components</p>
              <div className="space-y-4 text-muted-foreground">
                <p>21st connects your coding agent to a large catalog of React components. Before generating another hero, pricing section, form, navbar, or animation from scratch, the agent can search for an existing component and inspect the real code.</p>
                <p>The current workflow combines the 21st CLI and MCP. Setup varies by coding agent, so use the command generated on the official MCP page instead of copying an old Magic MCP configuration.</p>
              </div>

              <h3 className="mb-3 mt-6 font-semibold text-foreground">Ask your agent</h3>
              <PromptBlock>{`Find a clean pricing section that fits the visual style of this website.

Show me the best options before installing anything.`}</PromptBlock>

              <h3 className="mb-3 mt-6 font-semibold text-foreground">Search from the CLI</h3>
              <PromptBlock>{`21st search "pricing table"

21st generate "a pricing table" --variants 3`}</PromptBlock>

              <div className="mt-5 space-y-1">
                <EpisodeResourceLink href="https://21st.dev/" title="21st" context="Component catalog" />
                <EpisodeResourceLink href="https://21st.dev/mcp" title="21st MCP setup" context="Instructions for your coding agent" />
              </div>
            </section>

            <section>
              <h2 className="mb-1 text-lg font-semibold tracking-tight">3. Vercel Web Design Guidelines</h2>
              <p className="mb-4 text-sm font-medium text-muted-foreground">Best for reviewing the finished UI</p>
              <div className="space-y-4 text-muted-foreground">
                <p>This official Vercel agent skill acts like a reviewer. It checks interface code for accessibility, forms, typography, images, navigation, dark mode, touch interactions, animation, performance, and usability.</p>
                <p>Use it after the main design is built. Ask it to fix important issues without changing the direction you already chose.</p>
              </div>

              <h3 className="mb-3 mt-6 font-semibold text-foreground">Install only the review skill</h3>
              <PromptBlock>{`npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines`}</PromptBlock>

              <h3 className="mb-3 mt-6 font-semibold text-foreground">Run a focused review</h3>
              <PromptBlock>{`Audit this landing page for design, accessibility, and UX issues.

Fix the important issues without changing the overall visual direction.`}</PromptBlock>

              <div className="mt-5 space-y-1">
                <EpisodeResourceLink href="https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines" title="Web Design Guidelines" context="Skill page" />
                <EpisodeResourceLink href="https://github.com/vercel-labs/agent-skills" title="Vercel agent skills" context="Official repository" />
              </div>
            </section>

            <section>
              <h2 className="mb-1 text-lg font-semibold tracking-tight">4. Chrome DevTools MCP</h2>
              <p className="mb-4 text-sm font-medium text-muted-foreground">Best for inspecting the real website</p>
              <div className="space-y-4 text-muted-foreground">
                <p>Source code does not show the whole experience. Chrome DevTools MCP lets the agent open the rendered website, click through it, inspect errors and network requests, test interactions, check responsiveness, and measure performance.</p>
                <p>Use it throughout testing, but especially after the visual design is mostly finished. It gives the agent something extremely useful: eyes.</p>
              </div>

              <h3 className="mb-3 mt-6 font-semibold text-foreground">Claude Code MCP setup</h3>
              <PromptBlock>{`claude mcp add chrome-devtools --scope user npx chrome-devtools-mcp@latest`}</PromptBlock>

              <h3 className="mb-3 mt-6 font-semibold text-foreground">Inspect the result</h3>
              <PromptBlock>{`Open my local website.

Inspect the landing page at desktop and mobile sizes.

Check the layout, interactions, console, and network requests for problems.

Fix the important issues and inspect it again.`}</PromptBlock>

              <div className="mt-5">
                <EpisodeResourceLink href="https://github.com/ChromeDevTools/chrome-devtools-mcp" title="Chrome DevTools MCP" context="Official repository and setup" />
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">The workflow I would use</h2>
              <div className="space-y-7">
                <div>
                  <h3 className="font-semibold text-foreground">1. Set the direction with Impeccable</h3>
                  <p className="mt-1 text-muted-foreground">Create the design context before the interface grows in five different directions.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">2. Find components with 21st</h3>
                  <p className="mt-1 text-muted-foreground">Search for strong building blocks when you need a section instead of generating every component from zero.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">3. Polish with Impeccable</h3>
                  <p className="mt-1 text-muted-foreground">Run a focused visual-quality pass once the complete page exists.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">4. Review with Vercel’s guidelines</h3>
                  <p className="mt-1 text-muted-foreground">Find accessibility and UX problems without replacing the design.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">5. Test through Chrome DevTools</h3>
                  <p className="mt-1 text-muted-foreground">Inspect the real page, fix what is broken, and inspect it again.</p>
                </div>
              </div>
            </section>

            <section className="border-t border-border pt-8">
              <h2 className="mb-4 text-lg font-semibold tracking-tight">The takeaway</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>No single tool will make every interface good. The improvement comes from giving each stage of the work a clear purpose.</p>
                <p>Set a direction, use better components, review the result, and test the actual website. That workflow is far more useful than repeatedly asking an agent to make the page look better.</p>
              </div>
            </section>
          </div>
        ) : null}

        {episode.number === 8 ? (
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
        ) : null}

        {episode.number === 9 ? (
          <div className="space-y-10 text-[15px] leading-7">
            <section>
              <div className="space-y-4 text-muted-foreground">
                <p>yt-dlp is a free tool that can save videos from YouTube and many other supported websites to your computer.</p>
                <p>You type a short instruction into Terminal on a Mac or PowerShell on Windows. The tool then finds the video and downloads it for you.</p>
                <p>The first setup takes a few minutes. After that, you only need the video link.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">What gets installed?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="font-semibold text-foreground">yt-dlp</strong> downloads the video.</p>
                <p><strong className="font-semibold text-foreground">FFmpeg</strong> joins the best video and audio together and can create MP3 files.</p>
                <p><strong className="font-semibold text-foreground">Deno</strong> helps yt-dlp work properly with YouTube.</p>
                <p>You install these once. You do not need to understand how they work internally.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Set it up on a Mac</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Press <strong className="font-semibold text-foreground">Command + Space</strong>, type <strong className="font-semibold text-foreground">Terminal</strong>, and open it.</p>
                <p>Copy the command below, paste it into Terminal, and press Return:</p>
              </div>
              <div className="mt-5">
                <PromptBlock>{`brew install yt-dlp ffmpeg deno`}</PromptBlock>
              </div>
              <p className="mt-4 text-muted-foreground">Wait until the command finishes. If your Mac says <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">brew: command not found</code>, install Homebrew from its official website first, then run the command again.</p>
              <div className="mt-5">
                <EpisodeResourceLink href="https://brew.sh/" title="Install Homebrew" context="Only needed when brew is not available" />
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Set it up on Windows</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Open the Start menu, type <strong className="font-semibold text-foreground">PowerShell</strong>, and open it.</p>
                <p>Copy and run these three commands one at a time. Press Enter after each command and wait for it to finish before running the next one.</p>
              </div>
              <div className="mt-5">
                <PromptBlock>{`winget install yt-dlp

winget install Gyan.FFmpeg

winget install DenoLand.Deno`}</PromptBlock>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Download your first video</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Open the video in your browser and copy its web address.</p>
                <p>Replace <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">VIDEO_URL</code> in the command below with that address. Keep the quotation marks.</p>
              </div>

              <h3 className="mb-3 mt-6 font-semibold text-foreground">Mac — save it in Downloads</h3>
              <PromptBlock>{`yt-dlp -P ~/Downloads "VIDEO_URL"`}</PromptBlock>

              <h3 className="mb-3 mt-6 font-semibold text-foreground">Windows — save it in Downloads</h3>
              <PromptBlock>{`yt-dlp -P "$HOME/Downloads" "VIDEO_URL"`}</PromptBlock>

              <p className="mt-4 text-muted-foreground">Press Return or Enter. yt-dlp will download the best quality it can find and place the finished file in your Downloads folder.</p>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Download a playlist</h2>
              <p className="mb-5 text-muted-foreground">Paste a playlist address instead of a single video address. yt-dlp will try to download every video in that playlist.</p>

              <h3 className="mb-3 font-semibold text-foreground">Mac</h3>
              <PromptBlock>{`yt-dlp -P ~/Downloads "PLAYLIST_URL"`}</PromptBlock>

              <h3 className="mb-3 mt-6 font-semibold text-foreground">Windows</h3>
              <PromptBlock>{`yt-dlp -P "$HOME/Downloads" "PLAYLIST_URL"`}</PromptBlock>

              <p className="mt-4 text-muted-foreground">Large playlists can take a long time and use a lot of storage, so check the playlist before starting.</p>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Download only the audio</h2>
              <p className="mb-5 text-muted-foreground">Use this when you want an MP3 file instead of a video.</p>

              <h3 className="mb-3 font-semibold text-foreground">Mac</h3>
              <PromptBlock>{`yt-dlp -P ~/Downloads -x --audio-format mp3 "VIDEO_URL"`}</PromptBlock>

              <h3 className="mb-3 mt-6 font-semibold text-foreground">Windows</h3>
              <PromptBlock>{`yt-dlp -P "$HOME/Downloads" -x --audio-format mp3 "VIDEO_URL"`}</PromptBlock>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Use it with Claude Code</h2>
              <p className="mb-5 text-muted-foreground">If Claude Code is already open on your computer, you can describe what you want in normal language. Claude can prepare the command and ask for permission before running it.</p>
              <PromptBlock>{`Download this video using yt-dlp and save it in my Downloads folder.

VIDEO_URL`}</PromptBlock>

              <div className="mt-6">
                <PromptBlock>{`Download this entire playlist using yt-dlp.

Save it in a new folder inside my Downloads folder.

PLAYLIST_URL`}</PromptBlock>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">If it stops working</h2>
              <p className="mb-5 text-muted-foreground">Websites change over time, so an older version of yt-dlp may stop working. Updating it often fixes the problem.</p>

              <h3 className="mb-3 font-semibold text-foreground">Mac</h3>
              <PromptBlock>{`brew upgrade yt-dlp`}</PromptBlock>

              <h3 className="mb-3 mt-6 font-semibold text-foreground">Windows</h3>
              <PromptBlock>{`winget upgrade yt-dlp`}</PromptBlock>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Remember these four steps</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="font-semibold text-foreground">1.</strong> Install the three tools once.</p>
                <p><strong className="font-semibold text-foreground">2.</strong> Copy the video address.</p>
                <p><strong className="font-semibold text-foreground">3.</strong> Put that address where the command says <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">VIDEO_URL</code>.</p>
                <p><strong className="font-semibold text-foreground">4.</strong> Run the command and look in your Downloads folder.</p>
              </div>
            </section>

            <section className="border-t border-border pt-8">
              <p className="text-sm leading-6 text-muted-foreground">Only download content you own, content that is licensed for download, or content you have permission to save. Follow the website&apos;s terms and the laws that apply to you.</p>
              <div className="mt-5 space-y-1">
                <EpisodeResourceLink href="https://github.com/yt-dlp/yt-dlp" title="yt-dlp" context="Official repository and documentation" />
                <EpisodeResourceLink href="https://github.com/yt-dlp/yt-dlp/wiki/EJS" title="YouTube JavaScript support" context="Official yt-dlp guide" />
              </div>
            </section>
          </div>
        ) : null}

        {episode.number === 10 ? (
          <div className="text-[15px] leading-7">
            <div className="space-y-4 text-muted-foreground">
              <p>App Review does not need to be stressful. The goal is simple: Apple should be able to install, understand, test, and review your app without running into avoidable problems.</p>
              <p>Work through this checklist before you submit. Your progress stays on this device, so you can come back whenever you need.</p>
            </div>
            <AppStoreSubmissionChecklist />
            <section className="mt-12 border-t border-border pt-8">
              <p className="text-sm leading-6 text-muted-foreground">This is a practical launch checklist, not legal advice. Apple&apos;s requirements can change, so always check the latest official guidance before submitting.</p>
              <p className="mt-3 text-xs text-muted-foreground">Last checked: August 2026</p>
              <div className="mt-5 space-y-1">
                <EpisodeResourceLink href="https://developer.apple.com/app-store/review/guidelines/" title="App Review Guidelines" context="Apple&apos;s official requirements" />
                <EpisodeResourceLink href="https://developer.apple.com/help/app-store-connect/manage-app-information/overview-of-app-privacy-details/" title="App Privacy details" context="App Store Connect Help" />
                <EpisodeResourceLink href="https://developer.apple.com/help/app-store-connect/manage-account-information/provide-app-access/" title="Provide App Review access" context="Demo accounts and review notes" />
                <EpisodeResourceLink href="https://developer.apple.com/help/app-store-connect/manage-compliance-information/overview-of-export-compliance/" title="Export compliance" context="App Store Connect Help" />
                <EpisodeResourceLink href="https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/overview-for-configuring-in-app-purchases/" title="In-App Purchases" context="App Store Connect Help" />
              </div>
            </section>
          </div>
        ) : null}

        {episode.number === 11 ? (
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
        ) : null}

        {episode.number === 12 ? (
          <div className="space-y-10 text-[15px] leading-7">
            <section>
              <p className="text-muted-foreground">If you just bought a domain for your website, there are three things I&apos;d set up next.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold tracking-tight">Want your coding agent to guide you?</h2>
              <p className="mb-5 text-muted-foreground">Replace the details below, copy the prompt, and work through the setup one step at a time.</p>
              <PromptBlock>{`Help me set up my new domain correctly.

My domain:
[YOUR DOMAIN]

My website is hosted on:
[WEBSITE HOST]

My app is hosted on:
[APP HOST]

My email provider is:
[EMAIL PROVIDER]

Guide me through these three tasks:

1. Connect my main domain to my public website and use app.[YOUR DOMAIN] for my product.

2. Set up notifications.[YOUR DOMAIN] for important app emails and updates.[YOUR DOMAIN] for marketing emails. Help me configure SPF, DKIM, and DMARC correctly.

3. Check or create my sitemap, connect the domain to Google Search Console, and submit the sitemap.

Before suggesting changes, inspect any relevant project configuration you can access.

Guide me through one step at a time and wait for me to confirm before continuing.

Never guess DNS records. Tell me exactly where to find the values supplied by my hosting or email provider.

Do not overwrite an existing DNS or DMARC record without first explaining what it currently does and asking for confirmation.

If you cannot access my domain provider or another service, tell me exactly where to click and what information to copy back to you.`}</PromptBlock>
            </section>

            <section>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Step 1 of 3</p>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Separate your main domain and subdomain</h2>
              <p className="text-muted-foreground">Use your main domain for the website and a subdomain for the actual app. This keeps your public website and product separate.</p>

              <div className="mt-5 space-y-2">
                <DomainExample domain="yourdomain.com" purpose="Website" />
                <DomainExample domain="app.yourdomain.com" purpose="App" />
              </div>

              <h3 className="mb-3 mt-7 font-semibold text-foreground">How to set it up</h3>
              <ol className="space-y-2 pl-5 text-muted-foreground">
                <li className="list-decimal pl-1">Go to wherever your app is hosted.</li>
                <li className="list-decimal pl-1">Add <InlineCode>app.yourdomain.com</InlineCode> as a custom domain.</li>
                <li className="list-decimal pl-1">Your hosting provider will give you a DNS record.</li>
                <li className="list-decimal pl-1">Go to your domain provider&apos;s DNS settings.</li>
                <li className="list-decimal pl-1">Add the record exactly as your hosting provider gives it to you.</li>
                <li className="list-decimal pl-1">Wait for it to verify.</li>
              </ol>

              <SetupWarning>Always use the DNS values provided by your hosting provider. Do not guess them.</SetupWarning>
            </section>

            <section>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Step 2 of 3</p>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Separate your app emails and marketing emails</h2>
              <p className="text-muted-foreground">Do not send every email from the same domain. Keeping product and marketing emails separate helps protect important messages if marketing emails ever have deliverability or spam issues.</p>

              <div className="mt-5 space-y-2">
                <DomainExample domain="notifications.yourdomain.com" purpose="App emails" />
                <DomainExample domain="updates.yourdomain.com" purpose="Marketing emails" />
              </div>

              <div className="mt-7 space-y-6 text-muted-foreground">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Important app emails</h3>
                  <p>Use <InlineCode>notifications.yourdomain.com</InlineCode> for sign-ups, password resets, billing, and account notifications.</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Marketing emails</h3>
                  <p>Use <InlineCode>updates.yourdomain.com</InlineCode> for newsletters, promotions, product updates, and marketing campaigns.</p>
                </div>
              </div>

              <h3 className="mb-3 mt-7 font-semibold text-foreground">How to set it up with Resend</h3>
              <ol className="space-y-2 pl-5 text-muted-foreground">
                <li className="list-decimal pl-1">Open Resend and go to <strong className="font-medium text-foreground">Domains</strong>.</li>
                <li className="list-decimal pl-1">Add <InlineCode>notifications.yourdomain.com</InlineCode>.</li>
                <li className="list-decimal pl-1">Copy the DNS records Resend provides into your domain provider&apos;s DNS settings.</li>
                <li className="list-decimal pl-1">Wait for Resend to verify the domain.</li>
                <li className="list-decimal pl-1">Repeat the same process for <InlineCode>updates.yourdomain.com</InlineCode>.</li>
              </ol>

              <p className="mt-5 text-muted-foreground">Resend will normally ask you to configure SPF and DKIM. You should also configure DMARC for your domain.</p>
              <SetupWarning>If a DMARC record already exists, do not overwrite it without checking your existing email setup first.</SetupWarning>
            </section>

            <section>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Step 3 of 3</p>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Set up your sitemap and Google Search Console</h2>
              <p className="text-muted-foreground">Your sitemap helps Google discover the public pages on your website.</p>

              <h3 className="mb-3 mt-7 font-semibold text-foreground">First, check if you already have one</h3>
              <PromptBlock>{`https://yourdomain.com/sitemap.xml`}</PromptBlock>
              <div className="mt-5 space-y-4 text-muted-foreground">
                <p>Some website builders and frameworks create this automatically. If it already exists, you can use it.</p>
                <p>If it does not exist, create one that includes important public pages such as your homepage, pricing, features, about page, blog posts, and public documentation.</p>
                <p>Do not include private pages such as dashboards, account settings, admin pages, or anything that requires a login.</p>
                <p>If your website is built with code, ask your coding agent to create and maintain the sitemap automatically.</p>
              </div>

              <h3 className="mb-3 mt-7 font-semibold text-foreground">Connect Google Search Console</h3>
              <ol className="space-y-2 pl-5 text-muted-foreground">
                <li className="list-decimal pl-1">Open Google Search Console and click <strong className="font-medium text-foreground">Add Property</strong>.</li>
                <li className="list-decimal pl-1">Choose <strong className="font-medium text-foreground">Domain</strong>.</li>
                <li className="list-decimal pl-1">Enter <InlineCode>yourdomain.com</InlineCode> without <InlineCode>https://</InlineCode>.</li>
                <li className="list-decimal pl-1">Add Google&apos;s DNS verification record to your domain&apos;s DNS settings.</li>
                <li className="list-decimal pl-1">Return to Google Search Console and verify the domain.</li>
              </ol>

              <h3 className="mb-3 mt-7 font-semibold text-foreground">Submit your sitemap</h3>
              <ol className="space-y-2 pl-5 text-muted-foreground">
                <li className="list-decimal pl-1">Open <strong className="font-medium text-foreground">Sitemaps</strong>.</li>
                <li className="list-decimal pl-1">Enter <InlineCode>sitemap.xml</InlineCode>.</li>
                <li className="list-decimal pl-1">Click <strong className="font-medium text-foreground">Submit</strong>.</li>
              </ol>
              <p className="mt-5 text-muted-foreground">Submitting a sitemap does not guarantee that every page will immediately appear on Google, but it helps Google find and crawl your public pages.</p>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Final setup</h2>
              <div className="space-y-2">
                <DomainExample domain="yourdomain.com" purpose="Main website" />
                <DomainExample domain="app.yourdomain.com" purpose="Actual app" />
                <DomainExample domain="notifications.yourdomain.com" purpose="Important app emails" />
                <DomainExample domain="updates.yourdomain.com" purpose="Marketing emails" />
                <DomainExample domain="yourdomain.com/sitemap.xml" purpose="Public pages for Google" />
              </div>
            </section>

            <DomainSetupChecklist />

            <section className="border-t border-border pt-8">
              <p className="text-sm leading-6 text-muted-foreground">Once these are set up, your website, app, email, and Google indexing are all separated properly from the start.</p>
              <div className="mt-5 space-y-1">
                <EpisodeResourceLink href="https://resend.com/domains" title="Resend Domains" context="Set up and verify sending domains" />
                <EpisodeResourceLink href="https://search.google.com/search-console/about" title="Google Search Console" context="Verify your domain and submit a sitemap" />
              </div>
            </section>
          </div>
        ) : null}

        {episode.number === 13 ? (
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
        ) : null}
      </article>
    </main>
  );
}

function DocumentSection({
  number,
  title,
  description,
  items,
  prompt,
  extra,
}: {
  number: string;
  title: string;
  description: string;
  items: string[];
  prompt: string;
  extra?: ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold tracking-tight">{number}. {title}</h2>
      <p className="mb-5 text-muted-foreground">{description}</p>
      <h3 className="mb-3 font-semibold text-foreground">What it should include</h3>
      <ul className="mb-6 space-y-2 pl-5 text-muted-foreground">
        {items.map((item) => <li key={item} className="list-disc">{item}</li>)}
      </ul>
      {extra ? <div className="mb-6">{extra}</div> : null}
      <h3 className="mb-3 font-semibold text-foreground">Prompt to create your {title}</h3>
      <PromptBlock>{prompt}</PromptBlock>
    </section>
  );
}

function LegalSection({ number, title, description, preparation, checks, prompt }: {
  number: string;
  title: string;
  description: string;
  preparation: string[];
  checks: string[];
  prompt: string;
}) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold tracking-tight">{number}. {title}</h2>
      <p className="mb-5 text-muted-foreground">{description}</p>
      <h3 className="mb-3 font-semibold text-foreground">Before you create it</h3>
      <ul className="mb-6 space-y-2 pl-5 text-muted-foreground">
        {preparation.map((item) => <li key={item} className="list-disc">{item}</li>)}
      </ul>
      <h3 className="mb-3 font-semibold text-foreground">Copy this prompt</h3>
      <PromptBlock>{prompt}</PromptBlock>
      <h3 className="mb-3 mt-6 font-semibold text-foreground">Check before publishing</h3>
      <ul className="space-y-2 pl-5 text-muted-foreground">
        {checks.map((item) => <li key={item} className="list-disc">{item}</li>)}
      </ul>
    </section>
  );
}

function EpisodeResourceLink({ href, title, context }: { href: string; title: string; context: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group -mx-3 flex items-center justify-between gap-5 rounded-xl px-3 py-3 transition-colors hover:bg-muted/60">
      <div className="flex min-w-0 items-baseline gap-2.5">
        <span className="shrink-0 text-sm font-medium text-foreground">{title}</span>
        <span className="truncate text-xs text-muted-foreground">{context}</span>
      </div>
      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}

function DomainExample({ domain, purpose }: { domain: string; purpose: string }) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-xl bg-muted px-4 py-3">
      <code className="min-w-0 break-all font-mono text-[13px] text-foreground">{domain}</code>
      <span className="shrink-0 text-xs text-muted-foreground">{purpose}</span>
    </div>
  );
}

function InlineCode({ children }: { children: ReactNode }) {
  return <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">{children}</code>;
}

function SetupWarning({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 flex items-start gap-3 rounded-xl bg-muted px-4 py-3.5 text-sm leading-6 text-muted-foreground">
      <CircleAlert className="mt-1 h-4 w-4 shrink-0 text-foreground" strokeWidth={1.8} />
      <p>{children}</p>
    </div>
  );
}

function PromptBlock({ children }: { children: ReactNode }) {
  const text = typeof children === "string" ? children : String(children);
  return (
    <div className="relative">
      <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl bg-muted p-4 pr-14 font-mono text-[13px] leading-6 text-foreground sm:p-5 sm:pr-16">
        {children}
      </pre>
      <CopyPrompt text={text} />
    </div>
  );
}
