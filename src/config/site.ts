export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
    reddit?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Once Upon A Katamari Wiki",
  shortName: "OUAK Wiki",
  logoText: "O",
  tagline: "Walkthroughs, Cousins, Collectibles & KatamariBall Tips",
  description: "Fan-made Once Upon A Katamari wiki with stage walkthroughs, cousin unlocks, collectible guides, KatamariBall strategies, and beginner tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://once-upon-a-katamari.wiki",
  supportEmail: "support@once-upon-a-katamari.wiki",
  gameUrl: "https://store.steampowered.com/app/2797610/Once_Upon_A_KATAMARI/",
  heroVideoId: "JQpojKTAvPY", // Once Upon A KATAMARI - Official Announcement Trailer (Bandai Namco Entertainment America)
  social: {
    youtube: "https://www.youtube.com/@BandaiNamcoAmerica",
    reddit: "https://www.reddit.com/r/katamari/",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
