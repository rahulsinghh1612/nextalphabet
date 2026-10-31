import { ChevronRight } from "lucide-react";
import { EpisodeResourceLink, PromptBlock, ReaStep } from "@/components/episode-ui";

const STEPS = [
  { id: "look-real", title: "Look like a real product" },
  { id: "legal", title: "Cover the legal basics" },
  { id: "safety", title: "Protect your keys and data" },
  { id: "track", title: "Track it and go live" },
];

const RESOURCES = [
  {
    group: "Look like a real product",
    links: [
      { href: "https://ogp.me/", title: "Link previews (Open Graph)", context: "ogp.me" },
      { href: "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image", title: "Preview images in Next.js", context: "Next.js · docs" },
    ],
  },
  {
    group: "Legal basics",
    links: [
      { href: "https://developer.apple.com/support/offering-account-deletion-in-your-app/", title: "Offering account deletion in your app", context: "Apple · developer" },
    ],
  },
  {
    group: "Keys and data",
    links: [
      { href: "https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform", title: "Project limits and alerts", context: "OpenAI · help" },
      { href: "https://supabase.com/docs/guides/platform/backups", title: "Database backups", context: "Supabase · docs" },
    ],
  },
  {
    group: "Track it and go live",
    links: [
      { href: "https://search.google.com/search-console", title: "Google Search Console", context: "Google" },
      { href: "https://docs.stripe.com/get-started/checklist/go-live", title: "Go-live checklist", context: "Stripe · docs" },
    ],
  },
];

const Item = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <li><span className="font-medium text-foreground">{name}:</span> {children}</li>
);

export default function Episode23() {
  return (
    <div className="space-y-12 text-[15px] leading-7">
      <section>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Start here: copy this prompt</h2>
        <p className="mb-5 text-muted-foreground">Paste it into Claude Code or Codex. It checks your app for all 20, fixes what it can in your code, and tells you where to click for the rest.</p>
        <PromptBlock>{`Check my app for these 20 launch must-haves. First look at my code and tell me what the app is, where it's hosted, which database, AI providers and payments it uses. Then go through the four groups one at a time. For each item, say "done", "missing" or "not needed", fix what you can in the code, and tell me exactly where to click for anything in a dashboard. Wait for me to say "done" before the next group.

Group 1: Look like a real product
1. Custom domain: is the app on its own domain, not a default subdomain?
2. Favicon: is there an icon for the browser tab?
3. Link preview: does sharing a link show a title, description and image?
4. 404 page: is there a friendly "page not found" page with a way back?
5. Support email: is there a visible way to contact me?
6. Domain email: do emails send from my own domain, with SPF and DKIM set up so they don't land in spam?

Group 2: Legal basics
7. Privacy policy page, linked in the footer and at sign-up.
8. Terms of service page, linked the same way.
9. Account deletion: can people delete their account inside the app? (Apple requires it if the app has sign-up.)

Group 3: Keys and data
10. Spending limit on every AI API key (on OpenAI, turn on "Enforce a hard limit").
11. No keys in the code or git history; secrets live in environment variables.
12. Database backups are on, and I know how to restore one.
13. Rate limits on sign-up, login and any route that calls an AI API.
14. Password reset works end to end, and the email arrives.

Group 4: Track it and go live
15. Analytics, so I can see visits and sign-ups.
16. Error tracking, so I hear about crashes.
17. It works on a phone screen.
18. Images are compressed (e.g. WebP, sensible sizes).
19. The site is added to Google Search Console with a sitemap.
20. Payments are switched from test mode to live mode, with live keys on my host.

At the end, give me a short list of what's done and what's left.

Docs:
- Account deletion (Apple): https://developer.apple.com/support/offering-account-deletion-in-your-app/
- OpenAI limits: https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform
- Supabase backups: https://supabase.com/docs/guides/platform/backups
- Google Search Console: https://search.google.com/search-console
- Stripe go-live checklist: https://docs.stripe.com/get-started/checklist/go-live

Don't change how the app works. Only add what's missing.`}</PromptBlock>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Or do it by hand</h2>
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

      <ReaStep n={1} id="look-real" title="Look like a real product">
        <p className="text-muted-foreground">People decide in seconds if your app is real.</p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <Item name="Custom domain">yourapp.com, not a default subdomain.</Item>
          <Item name="Favicon">the icon in the browser tab.</Item>
          <Item name="Link preview">the image and title people see when your link is shared.</Item>
          <Item name="404 page">a friendly page with a link back home.</Item>
          <Item name="Support email">somewhere people can reach you.</Item>
          <Item name="Domain email">send from hi@yourapp.com, with SPF and DKIM, so you skip spam.</Item>
        </ul>
      </ReaStep>

      <ReaStep n={2} id="legal" title="Cover the legal basics">
        <ul className="space-y-2 text-muted-foreground">
          <Item name="Privacy policy">what you collect and why. Link it in the footer.</Item>
          <Item name="Terms of service">the rules for using your app.</Item>
          <Item name="Delete account">a button in settings. Apple requires it if people can sign up.</Item>
        </ul>
      </ReaStep>

      <ReaStep n={3} id="safety" title="Protect your keys and data">
        <ul className="space-y-2 text-muted-foreground">
          <Item name="Spending limit">on every AI key. On OpenAI, turn on Enforce a hard limit.</Item>
          <Item name="Keys out of code">in environment variables, never in git.</Item>
          <Item name="Backups">turned on, and try one restore.</Item>
          <Item name="Rate limits">on sign-up, login and AI routes.</Item>
          <Item name="Password reset">test it yourself, end to end.</Item>
        </ul>
      </ReaStep>

      <ReaStep n={4} id="track" title="Track it and go live">
        <ul className="space-y-2 text-muted-foreground">
          <Item name="Analytics">see visits and sign-ups.</Item>
          <Item name="Error tracking">hear about crashes before users tell you.</Item>
          <Item name="Phone check">open every page on your phone.</Item>
          <Item name="Small images">compress them so pages load fast.</Item>
          <Item name="Search Console">add your site and sitemap so Google finds it.</Item>
          <Item name="Payments live">switch from test mode to live keys.</Item>
        </ul>
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
        <p className="text-sm leading-6 text-muted-foreground">Settings move around. If one isn&apos;t where it says, check the provider&apos;s own page.</p>
        <p className="mt-3 text-xs text-muted-foreground">Last checked: October 2026</p>
      </section>
    </div>
  );
}
