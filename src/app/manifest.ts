import type { MetadataRoute } from "next";
import { PWA_BACKGROUND_COLOR, PWA_THEME_COLOR } from "@/lib/pwa-icon";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "ملتقى الإخوة",
    short_name: "الإخوة",
    description:
      "مكان دافئ يجمع الأصدقاء لمشاركة الأغاني واليوميات والصور والبقاء على تواصل.",
    lang: "ar",
    dir: "rtl",
    start_url: "/dashboard",
    scope: "/",
    display: "standalone",
    // "any" lets fullscreen videos rotate to landscape; "portrait" locks the installed app.
    orientation: "any",
    theme_color: PWA_THEME_COLOR,
    background_color: PWA_BACKGROUND_COLOR,
    categories: ["social", "lifestyle"],
    icons: [
      { src: "/pwa/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/pwa/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/pwa/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },    ],
  };
}
