import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { tractionSupportEmail } from "@/lib/traction";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function TractionPrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="12 July 2026">
      <p>
        This Privacy Policy explains how Traction, made by Rahul Singh
        (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), handles
        information in connection with the Traction mobile application (the
        &quot;App&quot;). It applies only to the App. By downloading,
        installing, or using the App, you agree to the practices described
        in this Privacy Policy.
      </p>

      <h2>Scope of this policy</h2>
      <p>
        Traction is built to work entirely on your device. There is no
        account and no login, and the App does not send your habit or goal
        data to us or to any server. This section by section explanation
        describes exactly what information exists, where it lives, and who
        can see it.
      </p>

      <h2>Information we do not collect</h2>
      <p>
        The App does not use analytics, advertising, or tracking software
        development kits of any kind. We do not know how many habits or
        goals you have, what you named them, or how often you open the
        App. The App does not include a crash reporting service, does not
        access your contacts, camera, microphone, or location, and does not
        request access to any of these.
      </p>

      <h2>Information stored on your device</h2>
      <p>
        Your habits, goals, milestones, completion history, streaks, and
        app settings such as theme and reminder times are stored in a
        local database on your device using Apple&apos;s standard on device
        storage. This information stays on your device. We never receive a
        copy of it, and no version of it is transmitted to us or to any
        analytics or advertising service.
      </p>

      <h2>Notifications</h2>
      <p>
        Habit reminders are scheduled locally on your device using
        Apple&apos;s notification framework. No reminder content or
        schedule is sent to any external server to make this feature work.
      </p>

      <h2>Home screen widget</h2>
      <p>
        If you add the Traction home screen widget, it uses Apple&apos;s
        App Group capability to share your habit and goal data only
        between the App and its widget extension, both running on your own
        device. This data never leaves your device and is not accessible to
        us.
      </p>

      <h2>Backup and data export</h2>
      <p>
        The App includes an Export Data feature that creates a file
        containing your habit and goal data, and an Import Data feature to
        restore it. That file is created on your device and only goes
        wherever you choose to send it, for example Files, AirDrop,
        Messages, or email, using Apple&apos;s standard share sheet. We do
        not receive, store, or have access to this file unless you
        separately choose to send it to us, for example while reporting a
        support issue.
      </p>

      <h2>Purchases, subscriptions, and payment information</h2>
      <p>
        Traction Pro is sold as an in app purchase through Apple&apos;s App
        Store, available as a monthly subscription, an annual subscription,
        or a one time lifetime purchase. Purchases are processed entirely
        by Apple. We use RevenueCat, a subscription management service, to
        confirm your purchase and keep your Pro status in sync across your
        devices. RevenueCat receives a randomly generated anonymous
        identifier, the product you purchased, purchase and expiration
        dates, and basic device platform information. RevenueCat and Apple
        do not share your name, email address, billing details, or Apple ID
        with us, and we never receive your payment information. You can
        review Apple&apos;s privacy practices at{" "}
        <a
          href="https://www.apple.com/legal/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          apple.com/legal/privacy
        </a>{" "}
        and RevenueCat&apos;s privacy practices at{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          revenuecat.com/privacy
        </a>
        .
      </p>

      <h2>How we use information</h2>
      <p>
        The very limited information described above, your anonymous
        purchase and entitlement status, is used solely to unlock Traction
        Pro features on your devices and to provide customer support if you
        contact us. We do not use it for advertising, profiling, or any
        other purpose.
      </p>

      <h2>Data sharing and disclosure</h2>
      <p>
        We do not sell personal information and we do not share
        information with advertisers. We may disclose information if
        required to do so by law, to protect our rights or the safety of
        others, or in connection with a merger, acquisition, or sale of
        assets involving Traction, in which case this Privacy Policy
        would continue to apply to your information under the new owner.
      </p>

      <h2>Data retention</h2>
      <p>
        Data stored on your device remains there until you delete the App
        or delete the data within it. Apple and RevenueCat retain purchase
        and transaction records independently of us, for as long as
        required for accounting, tax, and legal compliance purposes.
      </p>

      <h2>Your rights and choices</h2>
      <p>
        Because the App does not collect personal information beyond the
        anonymous purchase details described above, most privacy rights,
        including access, correction, deletion, and portability of your
        habit and goal data, are exercised directly on your device using
        the App&apos;s own Export Data, Import Data, and delete features.
        For any request relating to purchase records held by Apple or
        RevenueCat, you can contact those providers directly, or contact us
        using the details below and we will assist you.
      </p>

      <h2>International data transfers</h2>
      <p>
        Apple and RevenueCat may process information in countries other
        than your own, including the United States. By using the App, you
        acknowledge that your anonymous purchase information may be
        processed in this way.
      </p>

      <h2>Security</h2>
      <p>
        The App relies on the security features built into your device and
        Apple&apos;s platform, including device encryption and app
        sandboxing. We recommend keeping a passcode or biometric lock
        enabled on your device. No method of electronic storage is
        completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        The App is not directed at children under the age of 13, and we do
        not knowingly collect personal information from anyone, of any age.
        Since the App collects no personal information at all, this risk is
        minimal. If you believe a child has provided information to us in a
        way that is not consistent with this policy, please contact us and
        we will address it promptly.
      </p>

      <h2>Third party links</h2>
      <p>
        The App and these pages may link to third party services, such as
        Apple&apos;s subscription management page. We are not responsible
        for the privacy practices of any third party site or service.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will
        revise the date at the top of this page whenever we do, and any
        material changes may also be highlighted within the App. Continued
        use of the App after a change means you accept the updated policy.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${tractionSupportEmail}`}>{tractionSupportEmail}</a>.
      </p>
    </LegalPage>
  );
}
