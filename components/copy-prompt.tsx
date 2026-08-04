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
      className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground shadow-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}
