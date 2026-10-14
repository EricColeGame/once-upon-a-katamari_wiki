import type { LucideIcon } from "lucide-react";
import { BookOpen, Cog, Gamepad2, Gem, Lightbulb, Monitor, Users } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

// 分类 slug 必须与 content/<locale>/ 下的文章子目录名一一对应
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "items", path: "/items", icon: Gem, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "modes", path: "/modes", icon: Gamepad2, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Monitor, isContentType: true },
  { key: "tips", path: "/tips", icon: Lightbulb, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
