import type { Metadata } from "next";
import { ChevronLeft, Clapperboard } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { buildEpisodes } from "@/lib/build";
import { BuildIntro } from "@/components/build-intro";
import { BuildCharacter, poseFor } from "@/components/build-character";
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
        <header className="flex items-start gap-4 pb-9 sm:gap-8">
          <div className="min-w-0 flex-1">
          <h1 className="ep-title max-w-2xl">
            {episode.mark && episode.title.includes(episode.mark) ? (
              <>{episode.title.split(episode.mark)[0]}<span className="ep-mark">{episode.mark}</span>{episode.title.split(episode.mark)[1]}</>
            ) : episode.title}
          </h1>
          <p className="mt-5 hidden max-w-2xl leading-7 text-muted-foreground sm:block">{episode.description}</p>
          </div>
          <BuildCharacter pose={poseFor(episode.number)} className="-mt-1 w-[64px] shrink-0 sm:-mr-4 sm:w-[104px]" />
        </header>
        {/* On phones the character sits beside the title only; the description gets the full width. */}
        <p className="-mt-4 pb-9 leading-7 text-muted-foreground sm:hidden">{episode.description}</p>

        {Content ? <Content /> : null}

        <nav className="mt-14 flex items-center justify-between">
          <Link href={homeHref} className="hl-hover inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ChevronLeft className="h-4 w-4" /> Back to episodes
          </Link>
          <Link href={homeHref} className="hl-hover flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
            <Clapperboard className="h-4 w-4 text-foreground" strokeWidth={1.8} />
            <span>{episode.label ?? `Ep. ${String(episode.number).padStart(2, "0")}`}</span>
          </Link>
        </nav>
        <div className="mt-8">
          <BuildIntro />
        </div>
      </article>
    </main>
  );
}
