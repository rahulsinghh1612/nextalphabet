import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:gap-0">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <span className="text-sm font-semibold text-foreground">
            {siteConfig.name}
          </span>
          <span className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </span>
        </div>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            𝕏
          </a>
        </div>
      </div>
    </footer>
  );
}
