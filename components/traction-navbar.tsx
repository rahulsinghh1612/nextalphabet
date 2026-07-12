import Image from "next/image";
import Link from "next/link";

export function TractionNavbar() {
  return (
    <header className="bg-white px-6 py-4">
      <nav className="mx-auto flex max-w-2xl items-center justify-between">
        <div className="flex items-center gap-1.5 text-foreground">
          <Image
            src="/icons/traction.png"
            alt="Traction"
            width={34}
            height={34}
            className="rounded-[8px]"
          />
          <span className="text-base font-semibold tracking-tight">
            Traction
          </span>
        </div>

        <Link
          href="support"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Support
        </Link>
      </nav>
    </header>
  );
}
