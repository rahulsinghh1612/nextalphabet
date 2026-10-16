import { AppStoreSubmissionChecklist } from "@/components/app-store-submission-checklist";
import { EpisodeResourceLink } from "@/components/episode-ui";

export default function Episode10() {
  return (
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
  );
}
