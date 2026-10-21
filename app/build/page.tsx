import Image from "next/image";
import { ChevronRight, Clapperboard, Globe2, Monitor, Smartphone } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { buildEpisodes } from "@/lib/build";
import { products, type Product } from "@/lib/constants";
import { BuildIntro } from "@/components/build-intro";
import { BuildCharacter } from "@/components/build-character";

async function buildBasePath() {
  const host = (await headers()).get("host") ?? "";
  return host.startsWith("build.") ? "" : "/build";
}

export default async function BuildHome() {
  const basePath = await buildBasePath();

  return (
    <main className="px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end gap-4 pt-8 sm:gap-6 sm:pt-10">
          <BuildCharacter pose="wave" className="w-[72px] shrink-0 sm:w-[96px]" />
          <div className="min-w-0 pb-1">
            <h1 className="ep-title"><span className="ep-mark">Build</span></h1>
            <div className="mt-4"><BuildIntro /></div>
          </div>
        </div>

        <section className="pt-14 sm:pt-16">
          <div className="mb-4">
            <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight">
              <Clapperboard className="h-5 w-5" strokeWidth={1.8} />
              Episodes
            </h2>
          </div>
          {/* Newest episode first (Rahul, Oct 22). */}
          {[...buildEpisodes].sort((a, b) => b.number - a.number).map((episode) => (
            <Link
              key={episode.slug}
              href={episode.reelNumber ? `${basePath}/reel/${episode.reelNumber}` : `${basePath}/episodes/${episode.slug}`}
              className="group -mx-4 grid grid-cols-[84px_minmax(0,1fr)_auto] items-start gap-3 rounded-xl px-4 py-4 transition-colors hover:bg-muted sm:grid-cols-[104px_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:py-5"
            >
              <span className="flex items-center gap-2.5 text-[15px] font-medium leading-7 text-muted-foreground">
                <Clapperboard className="h-[18px] w-[18px] shrink-0 text-foreground" strokeWidth={1.8} />
                {episode.label ?? `Ep. ${String(episode.number).padStart(2, "0")}`}
              </span>
              <div className="min-w-0">
                <h3 className="text-[17px] font-medium leading-7 tracking-tight sm:text-lg">{episode.title}</h3>
              </div>
              <div className="flex self-center items-center justify-end text-xs text-muted-foreground">
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </section>

        <section className="pb-14 pt-16 sm:pb-16 sm:pt-20">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Products I&apos;ve built</h2>
            <a href="https://www.nextalphabet.com" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              <span className="inline-flex items-center gap-1.5">View all <ChevronRight className="h-3.5 w-3.5" /></span>
            </a>
          </div>

          <div>
            {products.map((product) => (
              <ProductRow key={product.name} product={product} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

function ProductRow({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group -mx-4 grid grid-cols-[48px_minmax(0,1fr)_auto] items-center gap-x-4 rounded-xl px-4 py-4 transition-colors hover:bg-muted sm:grid-cols-[48px_130px_minmax(0,1fr)_160px_auto] sm:gap-x-5 sm:py-5"
    >
      <span className="relative h-12 w-12 overflow-hidden rounded-xl border border-border bg-white">
        <Image
          src={product.icon}
          alt={`${product.name} icon`}
          fill
          sizes="48px"
          className="object-cover"
        />
      </span>

      <div className="min-w-0 sm:contents">
        <div className="min-w-0">
          <h3 className="text-lg font-medium tracking-tight text-foreground">{product.name}</h3>
          <p className="mt-0.5 text-[15px] text-muted-foreground sm:hidden">{product.tagline}</p>
        </div>
        <p className="hidden min-w-0 text-base text-muted-foreground sm:block">{product.description}</p>
        <div className="mt-2 flex flex-nowrap items-center gap-3 sm:mt-0 sm:justify-end">
          {product.platforms.map((platform) => (
            <ProductPlatform key={platform} platform={platform} />
          ))}
        </div>
      </div>

      <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}

function ProductPlatform({ platform }: { platform: Product["platforms"][number] }) {
  const config = {
    web: { label: "Web", Icon: Globe2 },
    macos: { label: "macOS", Icon: Monitor },
    iphone: { label: "iPhone", Icon: Smartphone },
  }[platform];

  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[13px] text-muted-foreground">
      <config.Icon className="h-4 w-4" strokeWidth={1.8} />
      {config.label}
    </span>
  );
}
