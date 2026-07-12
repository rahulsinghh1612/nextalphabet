import Link from "next/link";

// Relative hrefs (no leading slash) so these resolve correctly whether the
// page is reached at /traction/support (local/direct) or /support (the
// production subdomain, where the /traction prefix is invisible).
const links = [
  { label: "Privacy Policy", href: "privacy" },
  { label: "Terms of Use", href: "terms" },
  { label: "Support", href: "support" },
];

export function TractionFooter() {
  return (
    <footer className="border-t border-border bg-muted/40 px-6 py-8">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Traction, by Rahul Singh
        </span>
      </div>
    </footer>
  );
}
