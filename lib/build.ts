export type BuildEpisode = {
  number: number;
  slug: string;
  legacySlug?: string;
  reelNumber?: number;
  title: string;
  description: string;
  date: string;
  published: boolean;
  instagramUrl?: string;
};

export const buildEpisodes: BuildEpisode[] = [
  {
    number: 0,
    slug: "0",
    legacySlug: "episode-0",
    title: "Why I’m sharing what I’ve learned",
    description: "Four products, plenty of mistakes, and the reason this series exists.",
    date: "Reel 11",
    published: true,
    instagramUrl: "https://www.instagram.com/reel/DbV7eaktGir/?igsh=a3pyajVmc3FnaWM=",
  },
  {
    number: 1,
    slug: "1",
    legacySlug: "stop-overthinking-ai-tools",
    title: "Stop overthinking which AI tool to use",
    description: "Pick one capable tool, start building, and learn what you need along the way.",
    date: "Episode 1",
    published: true,
    instagramUrl: "https://www.instagram.com/reel/DbXzC-2Njdi/?igsh=MW85bTNtOWxub3Brag==",
  },
  {
    number: 2,
    slug: "2",
    legacySlug: "how-much-does-it-cost-to-build-an-app",
    title: "How Much Does It Cost to Build an App?",
    description: "A practical breakdown of the basic costs of building and launching your first product.",
    date: "Episode 2",
    published: true,
    instagramUrl: "https://www.instagram.com/reel/Dbaou_GMRFP/?igsh=MTJjNzFmZTByMnN0cA==",
  },
  {
    number: 3,
    slug: "3",
    title: "Do you still need to learn how to code?",
    description: "What beginners should learn now that AI agents can write most of the code.",
    date: "Episode 3",
    published: true,
  },
  {
    number: 4,
    slug: "4",
    reelNumber: 15,
    title: "Before you build with AI",
    description: "The four documents you should create before asking an AI coding agent to build your product.",
    date: "Episode 4",
    published: true,
  },
  {
    number: 5,
    slug: "5",
    title: "The Legal Checklist for Launching Your App",
    description: "The essential legal checks to make before publishing your app.",
    date: "Episode 5",
    published: true,
  },
  {
    number: 6,
    slug: "6",
    title: "Claude Certifications: What You Need to Know",
    description: "A practical guide to Anthropic’s certification program, what you can learn for free, and how the Architect exam works.",
    date: "Episode 6",
    published: true,
    instagramUrl: "https://www.instagram.com/reel/DbnA1tkMrNq/?igsh=ZjU4ZDIyNXk1YmFi",
  },
];
