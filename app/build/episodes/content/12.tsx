import { DomainSetupChecklist } from "@/components/domain-setup-checklist";
import { EpisodeResourceLink, DomainExample, InlineCode, SetupWarning, PromptBlock } from "@/components/episode-ui";

export default function Episode12() {
  return (
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
        <p className="mb-3 text-xs font-medium tracking-[0.04em] text-muted-foreground">Step 1 of 3</p>
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
        <p className="mb-3 text-xs font-medium tracking-[0.04em] text-muted-foreground">Step 2 of 3</p>
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
        <p className="mb-3 text-xs font-medium tracking-[0.04em] text-muted-foreground">Step 3 of 3</p>
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
  );
}
