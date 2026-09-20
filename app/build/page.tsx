import Image from "next/image";
import { ChevronRight, Clapperboard, Globe2, Monitor, Smartphone } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { buildEpisodes } from "@/lib/build";
import { products, type Product } from "@/lib/constants";
import { BuildIntro } from "@/components/build-intro";

async function buildBasePath() {
  const host = (await headers()).get("host") ?? "";
  return host.startsWith("build.") ? "" : "/build";
}

export default async function BuildHome() {
  const basePath = await buildBasePath();

  return (
    <main className="px-6">
      <div className="mx-auto max-w-5xl">
        <div className="pt-8 sm:pt-10">
          <BuildIntro />
        </div>

        <section className="pt-12 sm:pt-14">
          <div className="mb-6">
            <h1 className="flex items-center gap-2.5 text-[15px] font-semibold">
              <Clapperboard className="h-[18px] w-[18px]" strokeWidth={1.8} />
              Episodes
            </h1>
          </div>
          {buildEpisodes.map((episode) => (
            <Link
              key={episode.slug}
              href={episode.reelNumber ? `${basePath}/reel/${episode.reelNumber}` : `${basePath}/episodes/${episode.slug}`}
              className="group -mx-4 grid grid-cols-[82px_minmax(0,1fr)_auto] items-start gap-3 rounded-xl px-4 py-5 transition-colors hover:bg-muted sm:grid-cols-[92px_minmax(0,1fr)_auto] sm:items-center sm:gap-5"
            >
              <span className="flex items-center gap-2.5 text-sm font-medium leading-6 text-muted-foreground">
                <Clapperboard className="h-[18px] w-[18px] text-foreground" strokeWidth={1.8} />
                {episode.label ?? `Ep. ${String(episode.number).padStart(2, "0")}`}
              </span>
              <div className="min-w-0">
                <h2 className="text-[15px] font-medium leading-6 tracking-tight">{episode.title}</h2>
              </div>
              <div className="flex self-center items-center justify-end text-xs text-muted-foreground">
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </section>

        <section className="pb-12 pt-16 sm:pb-14 sm:pt-20">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-sm font-semibold">Products I&apos;ve built</h2>
            <a href="https://www.nextalphabet.com" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
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
      className="group -mx-4 grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-x-3 rounded-xl px-4 py-4 transition-colors hover:bg-muted sm:grid-cols-[44px_120px_minmax(0,1fr)_150px_auto] sm:gap-x-4"
    >
      <span className="relative h-10 w-10 overflow-hidden rounded-xl border border-border bg-white">
        <Image
          src={product.icon}
          alt={`${product.name} icon`}
          fill
          sizes="40px"
          className="object-cover"
        />
      </span>

      <div className="min-w-0 sm:contents">
        <div className="min-w-0">
          <h3 className="text-[17px] font-medium tracking-tight text-foreground">{product.name}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground sm:hidden">{product.tagline}</p>
        </div>
        <p className="hidden min-w-0 text-[15px] text-muted-foreground sm:block">{product.description}</p>
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
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs text-muted-foreground">
      <config.Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
      {config.label}
    </span>
  );
}
