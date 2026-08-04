import { Hammer } from "lucide-react";
import { founder } from "@/lib/constants";

export function BuildIntro() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex shrink-0 items-center justify-center">
        <Hammer className="h-[18px] w-[18px]" strokeWidth={1.8} />
      </span>
      <p className="text-sm leading-6">
        <span className="font-semibold tracking-tight">
          Hi, I&apos;m{" "}
          <a href={founder.twitter} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">
            Rahul
          </a>
          .
        </span>{" "}
        <span className="text-muted-foreground">
          I&apos;m documenting what I learn while building products.
        </span>
      </p>
    </div>
  );
}
