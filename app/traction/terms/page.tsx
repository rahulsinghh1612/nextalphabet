import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { tractionSupportEmail } from "@/lib/traction";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TractionTermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="12 July 2026">
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your use of Traction
        (the &quot;App&quot;), provided by Next Alphabet and operated by
        Rahul Singh (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By
        downloading, installing, or using the App, you agree to be bound by
        these Terms. If you do not agree, please do not use the App.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be capable of forming a legally binding contract to use
        the App. If you are under the age of majority in your jurisdiction,
        you may only use the App with the involvement of a parent or legal
        guardian who agrees to these Terms on your behalf.
      </p>

      <h2>License to use the App</h2>
      <p>
        Subject to your compliance with these Terms, we grant you a
        limited, personal, nonexclusive, nontransferable, and revocable
        license to download and use the App on Apple devices that you own
        or control, solely for your own personal, noncommercial use. This
        license is granted in addition to, and does not replace, the
        Licensed Application End User License Agreement that Apple makes
        available for apps distributed through the App Store, which also
        applies to your use of the App.
      </p>

      <h2>Your content and local data</h2>
      <p>
        All habits, goals, milestones, and related information you create
        in the App (&quot;Your Content&quot;) are stored locally on your
        device. You are solely responsible for keeping backups of Your
        Content using the App&apos;s Export Data feature. We are not
        responsible for any loss of Your Content resulting from loss of
        your device, device damage, deletion of the App, operating system
        changes, or any other cause.
      </p>

      <h2>Subscriptions and purchases</h2>
      <p>
        Traction Pro is offered through in app purchases processed by
        Apple through the App Store, currently available as a monthly
        automatically renewing subscription, an annual automatically
        renewing subscription, or a one time lifetime purchase. Prices are
        as shown in the App at the time of purchase and may vary by region.
      </p>
      <ul>
        <li>Payment will be charged to your Apple ID account at confirmation of purchase.</li>
        <li>
          Monthly and annual subscriptions renew automatically for the
          same duration and at the same price, unless automatic renewal
          is turned off at least 24 hours before the end of the current
          period.
        </li>
        <li>
          Your account will be charged for renewal within 24 hours prior
          to the end of the current period, and the renewal price will be
          the same as the original purchase unless we have notified you of
          a price change in advance.
        </li>
        <li>
          You can manage your subscription or turn off automatic renewal
          at any time from your Apple ID account settings, or by using the
          Manage Subscription option inside the App.
        </li>
        <li>
          Any unused portion of a free trial period, if one is offered,
          will be forfeited once you purchase a subscription.
        </li>
        <li>
          The lifetime purchase is a single, nonrecurring payment and does
          not renew.
        </li>
        <li>
          All billing, refunds, and payment disputes are handled by Apple
          under Apple&apos;s own terms and policies. We do not process
          payments and do not hold your payment information ourselves.
        </li>
      </ul>

      <h2>Free features and limits</h2>
      <p>
        The App currently offers a free tier limited to one active goal
        and three active habits. Traction Pro removes these limits and
        unlocks additional features described within the App. We may
        change the features included in the free tier or in Traction Pro
        at our discretion, and will make reasonable efforts to communicate
        material changes within the App.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          reverse engineer, decompile, or disassemble the App, except to
          the extent such a restriction is prohibited by applicable law;
        </li>
        <li>use the App for any unlawful purpose;</li>
        <li>interfere with or disrupt the operation of the App;</li>
        <li>
          attempt to bypass, circumvent, or manipulate the App&apos;s
          purchase or entitlement mechanisms; or
        </li>
        <li>resell, sublicense, rent, or redistribute the App.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The App, including its design, graphics, logos, and underlying
        software, is owned by Next Alphabet or its licensors and is
        protected by applicable intellectual property laws. These Terms do
        not grant you any rights to our trademarks or branding beyond what
        is needed to use the App as intended.
      </p>

      <h2>Third party services</h2>
      <p>
        The App relies on services provided by Apple and RevenueCat to
        operate, including purchase processing and subscription
        management. Your use of those services is also governed by their
        own terms, which we encourage you to review. We are not
        responsible for any outage, error, or change made by these third
        parties that affects the App.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot;,
        without warranties of any kind, whether express or implied,
        including implied warranties of merchantability, fitness for a
        particular purpose, and noninfringement. We do not warrant that the
        App will be uninterrupted, error free, or free of harmful
        components.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Next Alphabet
        and Rahul Singh shall not be liable for any indirect, incidental,
        special, consequential, or punitive damages, or for any loss of
        data, arising out of or related to your use of, or inability to
        use, the App, even if advised of the possibility of such damages.
        Our total liability for any claim arising from these Terms or the
        App shall not exceed the amount you paid us, if any, in the twelve
        months preceding the claim.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Next Alphabet and Rahul
        Singh from any claims, damages, losses, or expenses arising from
        your violation of these Terms or your misuse of the App.
      </p>

      <h2>Termination</h2>
      <p>
        We may stop providing the App, or suspend or terminate your access
        to it, at any time, for example if you violate these Terms. You may
        stop using the App and delete it at any time. Provisions of these
        Terms that by their nature should survive termination will
        survive, including intellectual property, disclaimers, limitation
        of liability, and governing law.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these Terms from time to time. We will revise the
        date at the top of this page whenever we do. Continued use of the
        App after a change means you accept the updated Terms.
      </p>

      <h2>Governing law and dispute resolution</h2>
      <p>
        These Terms are governed by the laws of India, without regard to
        its conflict of law principles. Subject to any mandatory consumer
        protection law that applies in your jurisdiction and cannot be
        excluded, the courts located in India shall have exclusive
        jurisdiction over any dispute arising out of or relating to these
        Terms or your use of the App.
      </p>

      <h2>Severability</h2>
      <p>
        If any provision of these Terms is found to be unenforceable, the
        remaining provisions will remain in full force and effect.
      </p>

      <h2>Entire agreement</h2>
      <p>
        These Terms, together with our Privacy Policy and Apple&apos;s
        standard Licensed Application End User License Agreement,
        constitute the entire agreement between you and us regarding the
        App.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href={`mailto:${tractionSupportEmail}`}>{tractionSupportEmail}</a>.
      </p>
    </LegalPage>
  );
}
