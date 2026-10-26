import { ChevronRight } from "lucide-react";
import { PaidChecklist } from "@/components/paid-checklist";
import { EpisodeResourceLink, PromptBlock, ReaStep } from "@/components/episode-ui";

const STEPS = [
  { id: "stores", title: "iPhone or Android app: the App Store and Google Play" },
  { id: "stripe", title: "Web app: Stripe, if you can get in" },
  { id: "polar", title: "Can't get Stripe? Polar" },
  { id: "dodo", title: "Or Dodo Payments" },
];

export default function Episode21() {
  return (
    <div className="space-y-12 text-[15px] leading-7">
      <section>
        <p className="mb-6 text-muted-foreground">How you get paid depends on what you built. Find yours below, pick one, and start charging.</p>
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

      <section>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Want your coding agent to set it up?</h2>
        <p className="mb-5 text-muted-foreground">Fill in the details and paste this into Claude Code or Codex in your project. It sets up payments with the provider you pick, in test mode first.</p>
        <PromptBlock>{`Add payments to my app.

Provider: [Stripe / Polar / Dodo Payments]
What people pay for: [e.g. "Pro" plan]
Price: [e.g. $12 a month, or $99 a year]

Read the provider's official docs before you write code, and follow them:
- Stripe Checkout: https://docs.stripe.com/payments/checkout
- Polar: https://docs.polar.sh
- Dodo Payments: https://docs.dodopayments.com

Then:
1. Use test mode and test keys only. Put every key in environment variables, never in the code or in git.
2. Add a checkout page or button for the plan.
3. Unlock the paid features only after the provider's webhook confirms the payment. Verify the webhook signature.
4. Handle cancellations (access ends at the end of the period), failed payments and refunds.
5. Show me how to run a test payment end to end, and list what I need to switch to go live.

Don't change anything else in the app. Ask me if something is unclear.`}</PromptBlock>
      </section>

      <ReaStep n={1} id="stores" title="iPhone or Android app: the App Store and Google Play">
        <p className="text-muted-foreground">That part&apos;s easy. Digital purchases inside your app go through Apple and Google: they take the payment, handle refunds and sales tax, and pay you out. They keep 15 to 30%.</p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li><span className="font-medium text-foreground">Apple:</span> 15% if you made under $1M last year and you join the Small Business Program (you have to apply). Otherwise 30%, dropping to 15% on subscriptions after the first year.</li>
          <li><span className="font-medium text-foreground">Google Play:</span> 15% on your first $1M each year, then 30%; subscriptions are 15%. Google is changing fees in some regions, so check the current page.</li>
        </ul>
        <div className="mt-5 space-y-3">
          <EpisodeResourceLink href="https://developer.apple.com/app-store/small-business-program/" title="Apple Small Business Program" context="Apple · apply in App Store Connect" />
          <EpisodeResourceLink href="https://developer.apple.com/in-app-purchase/" title="In-App Purchase" context="Apple · docs" />
          <EpisodeResourceLink href="https://support.google.com/googleplay/android-developer/answer/112622" title="Google Play service fees" context="Google · current rates" />
          <EpisodeResourceLink href="https://developer.android.com/google/play/billing" title="Google Play Billing" context="Google · docs" />
        </div>
      </ReaStep>

      <ReaStep n={2} id="stripe" title="Web app: Stripe, if you can get in">
        <p className="text-muted-foreground">If you built a SaaS, a web app, you set up payments yourself. Stripe is the best option and most apps run on it. Cards, Apple Pay, Google Pay, subscriptions and invoices, from 2.9% + 30¢ per card payment in the US.</p>
        <p className="mt-3 text-muted-foreground">The catch: Stripe isn&apos;t open in every country. In India, new accounts are invite-only, and individuals don&apos;t qualify. Check your country first.</p>
        <div className="mt-5 space-y-3">
          <EpisodeResourceLink href="https://stripe.com/global" title="Is Stripe available in your country?" context="Stripe · country list" />
          <EpisodeResourceLink href="https://support.stripe.com/questions/stripe-accounts-are-invite-only-in-india" title="Stripe accounts are invite-only in India" context="Stripe Support" />
          <EpisodeResourceLink href="https://stripe.com" title="Open Stripe" context="Stripe · pricing per country" />
        </div>
      </ReaStep>

      <ReaStep n={3} id="polar" title="Can't get Stripe? Polar">
        <p className="text-muted-foreground">Polar is a merchant of record: it sells on your behalf, collects VAT and sales tax worldwide, and pays you out. It pays out in countries where Stripe won&apos;t sign you up, India included.</p>
        <p className="mt-3 text-muted-foreground">Fee on the free plan: 5% + 50¢ per payment, plus 1.5% on non-US cards.</p>
        <div className="mt-5 space-y-3">
          <EpisodeResourceLink href="https://polar.sh" title="Open Polar" context="Free to start" />
          <EpisodeResourceLink href="https://polar.sh/docs/merchant-of-record/supported-countries" title="Countries Polar pays out to" context="Polar · docs" />
          <EpisodeResourceLink href="https://polar.sh/docs/merchant-of-record/fees" title="Polar fees" context="Polar · docs" />
        </div>
      </ReaStep>

      <ReaStep n={4} id="dodo" title="Or Dodo Payments">
        <p className="text-muted-foreground">Same idea as Polar: a merchant of record that handles the tax for you and pays out to your bank, including Indian bank accounts. Fees start from 4% + 40¢; compare both and pick the cheaper one for your prices.</p>
        <div className="mt-5 space-y-3">
          <EpisodeResourceLink href="https://dodopayments.com" title="Open Dodo Payments" context="Free to start" />
          <EpisodeResourceLink href="https://docs.dodopayments.com/miscellaneous/pricing-and-fee-structure" title="Dodo Payments fees" context="Dodo · docs" />
        </div>
      </ReaStep>

      <PaidChecklist />

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">Don&apos;t overcomplicate it. Pick one and start charging. Fees and country rules change, so check each provider&apos;s own page before you sign up.</p>
        <p className="mt-3 text-xs text-muted-foreground">Last checked: October 2026</p>
      </section>
    </div>
  );
}
