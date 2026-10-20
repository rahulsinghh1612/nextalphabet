export type BuildEpisode = {
  number: number;
  label?: string;
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
  {
    number: 7,
    slug: "7",
    title: "Make Your Vibe-Coded Website Look Better",
    description: "Give your coding agent a DESIGN.md file, Impeccable, and Chrome DevTools MCP before you redesign anything.",
    date: "Episode 7",
    published: true,
  },
  {
    number: 8,
    slug: "8",
    title: "How to Use Codex Inside Claude Code",
    description: "Use OpenAI’s official Claude Code plugin to review work, investigate bugs, delegate tasks, and hand sessions over to Codex.",
    date: "Episode 8",
    published: true,
  },
  {
    number: 9,
    slug: "9",
    title: "How to Download Videos With yt-dlp",
    description: "A beginner-friendly guide to saving videos, playlists, or audio on a Mac or Windows computer.",
    date: "Episode 9",
    published: true,
  },
  {
    number: 10,
    slug: "10",
    title: "iOS App Store Submission Checklist",
    description: "An interactive checklist to make App Review easier before you submit your iOS app.",
    date: "Episode 10",
    published: true,
  },
  {
    number: 11,
    slug: "11",
    title: "How to Set Up the Claude Watermark Remover",
    description: "Set up Watermarks Remover locally, connect its Claude skill, and understand the limits of statistical text-watermark rewriting.",
    date: "Episode 11",
    published: true,
  },
  {
    number: 12,
    slug: "12",
    title: "3 Things to Set Up After Buying a Domain",
    description: "Separate your website, app, email, and search setup properly from the start.",
    date: "Episode 12",
    published: true,
  },
  {
    number: 13,
    label: "Scrapling",
    slug: "scrapling",
    title: "Set Up Scrapling With Your AI Agent",
    description: "Connect Scrapling to Codex or Claude Code through MCP.",
    date: "Scrapling",
    published: true,
  },
  {
    number: 14,
    slug: "14",
    title: "Reverse Engineer Any App With REA",
    description: "Set up REA with Claude Code, Codex, or Cursor, then use it to learn how features work, recover lost code, and connect to tools without an API.",
    date: "Episode 14",
    published: true,
  },
  {
    number: 15,
    slug: "15",
    title: "Lock Down Your Vibe-Coded App",
    description: "Fix the three mistakes behind most vibe-coded app hacks, then let your coding agent check your app for all ten.",
    date: "Episode 15",
    published: true,
  },
  {
    number: 16,
    slug: "16",
    title: "20 Things to Fix Before You Submit to the App Store",
    description: "Let your coding agent check your iOS app against 20 App Review rules, then fix what it finds before Apple does.",
    date: "Episode 16",
    published: true,
  },
  {
    number: 17,
    slug: "17",
    title: "Find Your Next App Idea",
    description: "Five places that show what people already pay for, and a prompt that turns what you find into an app idea you can build.",
    date: "Episode 17",
    published: true,
  },
];
