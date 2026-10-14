import { defineRouting } from "next-intl/routing";

// 唯一真相源：站点支持的语言集合（与 src/locales/*.json 保持一致）
export const locales = ["en", "ja", "es", "fr"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
