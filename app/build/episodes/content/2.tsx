export default function Episode2() {
  return (
    <div className="space-y-10 text-[15px] leading-7">
      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Getting started costs less than you think</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>One of the biggest reasons people never start building their first product is because they assume that it is going to cost a lot. I used to think the same thing.</p>
          <p>But after launching four products, I realised that you can build and launch a first version with a surprisingly small budget. You do not need an office, a large team, expensive servers, or thousands of dollars in funding.</p>
          <p>You mainly need the right tools to build the product, somewhere to publish it, and enough infrastructure to support your first few users.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">The cost of launching a web app</h2>
        <div className="space-y-7 text-muted-foreground">
          <p>For a basic web app, your initial cost can be around <strong className="font-medium text-foreground">$30</strong>.</p>

          <div>
            <h3 className="mb-2 font-semibold text-foreground">1. An AI coding subscription</h3>
            <p>A paid subscription to a tool such as ChatGPT or Claude normally costs around $20 per month. It can help you plan the product, write and understand code, fix errors, build features, and prepare for launch.</p>
            <p className="mt-3">You do not need every AI tool available. Choose one, learn how to use it properly, and start building.</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-foreground">2. A domain</h3>
            <p>A standard domain will often cost around $10–$15 for the first year. You can launch without one, but a custom address makes the product feel more complete and credible.</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-foreground">3. Deployment</h3>
            <p>Vercel is one of the easiest ways to deploy a Next.js app. Its free plan can be enough for personal projects and early testing, although you should review its terms or upgrade when your product becomes commercial.</p>
            <p className="mt-2 font-medium text-foreground">Starting cost: $0</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-foreground">4. Database and authentication</h3>
            <p>Supabase provides a database, authentication, file storage, and APIs. Its free plan is usually enough to build and test an early product, so you do not need to pay for a database before you have meaningful usage.</p>
            <p className="mt-2 font-medium text-foreground">Starting cost: $0</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-foreground">5. Product analytics</h3>
            <p>PostHog helps you understand how people use the product: what they visit, which features they use, where they stop, and whether they return. Its free allowance is enough for many early-stage products.</p>
            <p className="mt-2 font-medium text-foreground">Starting cost: $0</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">A simple web app stack</h2>
        <ul className="space-y-2 pl-5 text-muted-foreground">
          <li className="list-disc"><strong className="font-medium text-foreground">ChatGPT or Claude</strong> for building and debugging</li>
          <li className="list-disc"><strong className="font-medium text-foreground">GitHub</strong> for storing your code</li>
          <li className="list-disc"><strong className="font-medium text-foreground">Vercel</strong> for deployment</li>
          <li className="list-disc"><strong className="font-medium text-foreground">Supabase</strong> for the database and authentication</li>
          <li className="list-disc"><strong className="font-medium text-foreground">PostHog</strong> for product analytics</li>
          <li className="list-disc"><strong className="font-medium text-foreground">A custom domain</strong> for your website address</li>
        </ul>
        <div className="mt-5 space-y-2 border-y border-border py-4 text-muted-foreground">
          <p>AI subscription: around $20 per month</p>
          <p>Domain: around $10 per year</p>
          <p>Deployment, database, and analytics: $0 to start</p>
          <p className="pt-1 font-semibold text-foreground">Approximate starting cost: $30</p>
        </div>
        <p className="mt-4 text-muted-foreground">This does not mean the product will remain at $30 forever. Upgrade your infrastructure when real usage arrives, not before you have built the first version.</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">The cost of publishing a mobile app</h2>
        <div className="space-y-5 text-muted-foreground">
          <div>
            <h3 className="mb-2 font-semibold text-foreground">Apple App Store</h3>
            <p>The Apple Developer Program costs $99 per year and gives you access to the tools required to test and distribute apps across Apple&apos;s platforms.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-foreground">Google Play</h3>
            <p>A Google Play developer account has a one-time $25 registration fee. New personal accounts may also need to complete identity verification and testing requirements before publishing publicly.</p>
          </div>
          <div className="space-y-2 border-y border-border py-4">
            <p><strong className="font-medium text-foreground">iOS only:</strong> approximately $119 to begin</p>
            <p><strong className="font-medium text-foreground">Android only:</strong> approximately $45 to begin</p>
            <p><strong className="font-medium text-foreground">Both platforms:</strong> approximately $144 to begin</p>
          </div>
          <p>Your exact cost can change depending on your location, taxes, exchange rates, chosen tools, and infrastructure needs.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">What you should not pay for too early</h2>
        <ul className="space-y-2 pl-5 text-muted-foreground">
          <li className="list-disc">Expensive cloud infrastructure</li>
          <li className="list-disc">Multiple AI subscriptions</li>
          <li className="list-disc">Large database plans</li>
          <li className="list-disc">Premium analytics</li>
          <li className="list-disc">A large marketing software stack</li>
          <li className="list-disc">A team of developers</li>
          <li className="list-disc">Every feature you have imagined</li>
        </ul>
        <p className="mt-4 text-muted-foreground">Start with the smallest setup that lets you build, launch, and learn. Upgrade only when the current setup is genuinely limiting the product.</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">The main lesson</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Getting started is not as expensive as it looks. For your first version, you only need the basic tools required to build and launch it.</p>
          <p>Start small. Use the free plans. Put the product in front of real people. Then spend more when the product actually needs it.</p>
          <p>The goal of the first version is not to build infrastructure for a million users. The goal is to launch something useful and find your first user.</p>
        </div>
      </section>

      <section className="border-t border-border pt-6">
        <p className="mb-3 text-sm font-semibold text-foreground">Tools mentioned</p>
        <p className="text-sm leading-7 text-muted-foreground">ChatGPT · Claude · GitHub · Vercel · Supabase · PostHog · Apple Developer Program · Google Play Console</p>
        <p className="mt-4 text-xs leading-5 text-muted-foreground">Prices and plan conditions can change. Check each platform&apos;s latest terms before making a purchase.</p>
      </section>

      <section className="border-t border-border pt-6">
        <p className="mb-2 text-sm font-semibold text-foreground">Next episode</p>
        <p className="font-medium text-foreground">Do you need to know how to code?</p>
      </section>
    </div>
  );
}
