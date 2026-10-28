import { ChevronRight } from "lucide-react";
import { BigOne, SECURE_STEPS, ReaStep, EpisodeResourceLink, InlineCode, PromptBlock } from "@/components/episode-ui";

export default function Episode15() {
  return (
    <div className="space-y-12 text-[15px] leading-7">
      <section>
        <ol className="space-y-1">
          {SECURE_STEPS.map((step, i) => (
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

      <ReaStep n={1} id="copy" title="Copy the security check prompt">
        <PromptBlock>{`Check my app for security problems before real users find them.

Work through these ten checks in order. For each one: look at my code and config, tell me if it passes or fails, show me the exact file and line, and explain the risk in plain words.

1. Secret keys in the browser. Search everything that ships to the browser (front-end code, bundled env vars, public config) for secret keys: OpenAI, Anthropic, Stripe secret keys, Supabase service_role, and any other private key. Move them to server-side code or env vars that never reach the client.
2. Database security rules. If I use Supabase, check that row-level security is on for every table and that each policy only lets users see and change their own rows: https://supabase.com/docs/guides/database/postgres/row-level-security
   If I use Firebase, check my Firestore and Storage rules the same way: https://firebase.google.com/docs/rules
3. Rate limits. Find every endpoint that costs money (AI calls, emails, SMS) plus login and sign-up, and add rate limits so one person can't call them thousands of times.
4. Login checked on the server for every private page and API route, not only in the front end.
5. A second user. Check whether account B could read or change account A's data by changing an ID in a request.
6. Exposed keys. If any key was ever in the browser, in git history, a screenshot or a chat, list it so I can rotate it.
7. User input. Check that forms, uploads and URL parameters are validated and safe from injection.
8. Admin and debug. Make sure no admin, debug or test pages are live, and that errors don't show stack traces or secrets.
9. Who can call my backend. Check CORS so only my own domain can call my API, and that everything runs on HTTPS.
10. Packages. Run npm audit (https://docs.npmjs.com/cli/commands/npm-audit) and list outdated packages with known problems.

Use the OWASP Top 10 as your reference: https://owasp.org/Top10/

When you're done, give me a short pass/fail list of all ten. Then fix the failures one at a time, starting with the most dangerous, and ask me before changing anything.`}</PromptBlock>
      </ReaStep>

      <ReaStep n={2} id="paste" title="Paste it into your agent">
        <p className="text-muted-foreground">Open your project in Claude Code, Codex, or Cursor and paste the prompt.</p>
      </ReaStep>

      <ReaStep n={3} id="fix" title="Fix what it finds">
        <p className="text-muted-foreground">It gives you a pass or fail for each check, then fixes the failures one at a time.</p>
      </ReaStep>

      <section>
        <h2 className="mb-2 text-lg font-semibold tracking-tight">The three big ones</h2>
        <p className="mb-6 text-muted-foreground">Most vibe-coded app hacks come down to one of these. You can check each in a minute yourself.</p>
        <div className="space-y-8">
          <BigOne n={1} title="API keys inside your app" risk="Anything that runs in the browser can be read. If your OpenAI, Claude, or Stripe key is in there, someone copies it and you pay the bill."
            check={<>Open your live site, then DevTools → Sources and press <InlineCode>Cmd+Option+F</InlineCode>. Search for <InlineCode>sk-</InlineCode>, <InlineCode>sk_live</InlineCode> and <InlineCode>service_role</InlineCode>.</>}
            fix="Move the call to your server or a serverless function, read the key from a server-only environment variable, and rotate any key that was ever exposed." />
          <BigOne n={2} title="A database with no security rules" risk="Without rules, anyone with your public database URL can read every user's data."
            check={<>Supabase: open <strong className="font-medium text-foreground">Advisors → Security Advisor</strong>, which flags every table without row-level security. Firebase: your rules should never say <InlineCode>allow read, write: if true</InlineCode>.</>}
            fix="Turn on row-level security for every table, with policies so each user can only read and change their own rows." />
          <BigOne n={3} title="No rate limits" risk="One person can hit your app thousands of times a minute and run up your AI, email, or SMS bill."
            check="Find every route that calls a paid API or sends a message, plus login and sign-up. If nothing limits how often one person can call it, it's open."
            fix="Add a per-user or per-IP limit (Upstash Ratelimit or your host's firewall rules), and set a monthly budget alert in your OpenAI or Anthropic billing settings." />
        </div>
      </section>


      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">Run the prompt again before every big launch, and any time you add a new feature that touches user data or paid APIs.</p>
        <div className="mt-5 space-y-1">
          <EpisodeResourceLink href="https://supabase.com/docs/guides/database/postgres/row-level-security" title="Supabase row-level security" context="Turn on rules for every table" />
          <EpisodeResourceLink href="https://firebase.google.com/docs/rules" title="Firebase security rules" context="Lock down Firestore and Storage" />
          <EpisodeResourceLink href="https://owasp.org/Top10/" title="OWASP Top 10" context="The most common web app risks" />
        </div>
      </section>
    </div>
  );
}
