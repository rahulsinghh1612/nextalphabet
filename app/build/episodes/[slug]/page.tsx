import type { Metadata } from "next";
import { ChevronLeft, ChevronRight, Clapperboard, Instagram } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { buildEpisodes } from "@/lib/build";
import { BuildIntro } from "@/components/build-intro";
import { episodeContent } from "@/app/build/episodes/content";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const episode = buildEpisodes.find((item) => item.slug === slug || item.legacySlug === slug);
  return { title: episode?.title ?? "Episode" };
}

export default async function EpisodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const episode = buildEpisodes.find((item) => item.slug === slug || item.legacySlug === slug);
  if (!episode) notFound();

  const host = (await headers()).get("host") ?? "";
  const homeHref = host.startsWith("build.") ? "/" : "/build";

  if (slug !== episode.slug) {
    const basePath = host.startsWith("build.") ? "" : "/build";
    redirect(`${basePath}/episodes/${episode.slug}`);
  }

  const Content = episodeContent[episode.number];

  return (
    <main className="px-6 py-10 sm:py-14">
      <article className="mx-auto max-w-2xl">
        <BuildIntro />

        <div className="mb-9 mt-12 flex items-center justify-between sm:mt-14">
          <Link href={homeHref} className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ChevronLeft className="h-4 w-4" /> Back to episodes
          </Link>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Clapperboard className="h-4 w-4 text-foreground" strokeWidth={1.8} />
            <span>{episode.label ?? `Ep. ${String(episode.number).padStart(2, "0")}`}</span>
          </div>
        </div>

        <header className="pb-9">
          <h1 className="max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-4xl">{episode.title}</h1>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{episode.description}</p>
        </header>

        {episode.instagramUrl ? (
          <a
            href={episode.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-10 flex items-center justify-between gap-4 rounded-xl border border-border p-4 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-3">
              <Instagram className="h-5 w-5 shrink-0 text-foreground" strokeWidth={1.8} />
              <p className="flex items-baseline gap-2 whitespace-nowrap text-sm">
                <span className="font-medium text-foreground">Watch this episode</span>
                <span className="text-xs text-muted-foreground">Instagram Reel</span>
              </p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
          </a>
        ) : null}

        {Content ? <Content /> : null}
      </article>
    </main>
  );
}
