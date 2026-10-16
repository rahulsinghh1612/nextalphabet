import { LegalSection } from "@/components/episode-ui";

export default function Episode5() {
  return (
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
  );
}
