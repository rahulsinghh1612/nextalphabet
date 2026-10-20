"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyPrompt({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={copyPrompt}
      aria-label={copied ? "Copied" : "Copy prompt"}
      // A quiet label, not a boxed button (Rahul, Oct 20): pointer cursor and the yellow highlight on hover.
      className="hl-hover absolute right-4 top-3.5 inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 sm:right-5 sm:top-4"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
