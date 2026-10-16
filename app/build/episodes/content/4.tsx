import { DocumentSection, PromptBlock } from "@/components/episode-ui";

export default function Episode4() {
  return (
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
  );
}
