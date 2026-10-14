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
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://once-upon-a-katamari.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://en.bandainamcoent.eu/katamari/once-upon-a-katamari",
  heroVideoId: "JQpojKTAvPY", // Once Upon A KATAMARI - Official Announcement Trailer (Bandai Namco Entertainment America)
  social: {
    youtube: "https://www.youtube.com/@BandaiNamcoAmerica",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
