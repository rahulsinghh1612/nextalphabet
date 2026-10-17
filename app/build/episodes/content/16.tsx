import { ChevronRight } from "lucide-react";
import { AppReviewChecklist } from "@/components/app-review-checklist";
import { APP_REVIEW_STEPS, EpisodeResourceLink, PromptBlock, ReaStep } from "@/components/episode-ui";

export default function Episode16() {
  return (
    <div className="space-y-12 text-[15px] leading-7">
      <section>
        <ol className="space-y-1">
          {APP_REVIEW_STEPS.map((step, i) => (
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

      <ReaStep n={1} id="copy" title="Copy the App Review prompt">
        <PromptBlock>{`Check my iOS app against Apple's App Review Guidelines before I submit it: https://developer.apple.com/app-store/review/guidelines/

Work through these 20 checks in order. For each one, look at my code, config and App Store listing text, tell me pass, fail or not relevant, show me the exact file and line, and explain the problem in plain words.

Login
1. No forced login (5.1.1(v)). If my app has no real account-based features, people must be able to use it without signing in.
2. Sign in with Apple (4.8). If I offer Google, Facebook or another social login, I also need an equivalent private login option. Sign in with Apple meets this: https://developer.apple.com/sign-in-with-apple/
3. Delete account (5.1.1(v)). If people can create an account, they must be able to delete it inside the app: https://developer.apple.com/support/offering-account-deletion-in-your-app/
4. Demo login (2.1(a)). If my app needs a login, write a working demo account and review notes for App Store Connect: https://developer.apple.com/help/app-store-connect/manage-account-information/provide-app-access/

Paywall
5. In-app purchase (3.1.1). Digital features, content and subscriptions must use Apple's in-app purchase, not Stripe or another checkout: https://developer.apple.com/in-app-purchase/
6. Restore purchases (3.1.1). There's a visible Restore Purchases button, and it works.
7. Clear pricing (3.1.2(c)). Before people subscribe, the paywall shows the price, how often it renews, what they get, and any free trial terms.
8. No rating lock (3.2.2(x)). Nothing is unlocked in exchange for a rating or review. Only Apple's own review prompt is used: https://developer.apple.com/documentation/storekit/requestreviewaction

Permissions and privacy
9. Permission reasons (5.1.1(ii)). Every permission (camera, photos, location, microphone, contacts, notifications) has a purpose string in Info.plist that says exactly why.
10. Ask before AI (5.1.2(i)). If any personal data goes to an AI provider like OpenAI, Anthropic or Google, the app says so clearly and gets permission first.
11. Tracking consent (5.1.2(i)). If the app or any SDK tracks people across other companies' apps or websites, it shows the App Tracking Transparency prompt first: https://developer.apple.com/documentation/apptrackingtransparency
12. Privacy policy (5.1.1(i)). There's a privacy policy link inside the app, for example in Settings.

The app
13. Real iPhone test (2.1(a)). List what I should test on a real device (launch, sign-up, purchases, permission prompts, slow or no internet) and flag anything likely to crash.
14. No placeholders (2.1(a)). Search for Lorem ipsum, TODO, test data, coming soon screens and buttons that do nothing.
15. No web wrapper (4.2). If the app mostly shows my website in a web view, suggest native features that make it worth installing.
16. Report and block (1.2). If people can post or message each other, there's a way to report content, block users, and contact me.

App Store listing
17. Real screenshots (2.3.3). Screenshots show the app in use, not just a logo, login or splash screen.
18. No Android (2.3.10). No mention of Android, Google Play or other platforms in the app or the listing.
19. Honest privacy label (2.3). From my code and every SDK, list what data the app collects, whether it's linked to the person, and whether it's used for tracking, so I can fill in App Privacy correctly: https://developer.apple.com/app-store/app-privacy-details/
20. Backend online (2.1(a)). The review build points at my live server, database and API keys, not localhost or a test server.

When you're done, give me a short pass/fail list of all 20. Then fix the failures one at a time, starting with the ones most likely to get me rejected, and ask me before changing anything. For anything that lives in App Store Connect (demo login, privacy label, screenshots), write out exactly what I should enter.`}</PromptBlock>
      </ReaStep>

      <ReaStep n={2} id="paste" title="Paste it into your agent">
        <p className="text-muted-foreground">Open your project in Claude Code, Codex, Cursor or Lovable and paste the prompt.</p>
      </ReaStep>

      <ReaStep n={3} id="fix" title="Fix what it finds">
        <p className="text-muted-foreground">It gives you a pass or fail for each check, then fixes the failures one at a time. Tick them off below as you go.</p>
      </ReaStep>

      <AppReviewChecklist />

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">
          Every check comes from Apple&apos;s App Review Guidelines, and the guideline number is listed under each one. Ready to submit? Run through the full{" "}
          <a href="https://build.nextalphabet.com/episodes/10" className="text-foreground underline underline-offset-4">App Store submission checklist</a> too.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">Last checked: October 2026</p>
        <div className="mt-5 space-y-1">
          <EpisodeResourceLink href="https://developer.apple.com/app-store/review/guidelines/" title="App Review Guidelines" context="Apple&apos;s official rules" />
          <EpisodeResourceLink href="https://developer.apple.com/help/app-store-connect/manage-account-information/provide-app-access/" title="Provide App Review access" context="Demo accounts and review notes" />
          <EpisodeResourceLink href="https://developer.apple.com/support/offering-account-deletion-in-your-app/" title="Offering account deletion" context="What Apple expects" />
          <EpisodeResourceLink href="https://developer.apple.com/app-store/app-privacy-details/" title="App privacy details" context="Filling in your privacy label" />
        </div>
      </section>
    </div>
  );
}
