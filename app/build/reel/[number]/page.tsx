import type { Metadata } from "next";
import EpisodePage, { generateMetadata as generateEpisodeMetadata } from "../../episodes/[slug]/page";

const reelToEpisode: Record<string, string> = {
  "15": "4",
};

function episodeParams(params: Promise<{ number: string }>) {
  return params.then(({ number }) => ({ slug: reelToEpisode[number] ?? "not-found" }));
}

export function generateMetadata({ params }: { params: Promise<{ number: string }> }): Promise<Metadata> {
  return generateEpisodeMetadata({ params: episodeParams(params) });
}

export default function ReelPage({ params }: { params: Promise<{ number: string }> }) {
  return <EpisodePage params={episodeParams(params)} />;
}
