import type { Metadata, Viewport } from "next";
import { Tajawal, Zain } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { NavigationProgress } from "@/components/navigation-progress";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  // Only the weights the UI uses; font-semibold (600) falls back to 700.
  weight: ["400", "500", "700"],
});

const zain = Zain({
  variable: "--font-zain",
  subsets: ["arabic", "latin"],
  // Used only by the post category chip and the landing hero, so don't preload
  // it on every page. 400 = chip/subtitle, 700 = button (semibold), 800 = headline.
  weight: ["400", "700", "800"],
  preload: false,
});

export const metadata: Metadata = {
  title: "ملتقى الإخوة",
  description: "مكان دافئ يجمع الأصدقاء لمشاركة الأغاني واليوميات والصور والبقاء على تواصل.",
  applicationName: "ملتقى الإخوة",
  icons: {
    icon: [
      { url: "/pwa/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/pwa/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/pwa/icon-192.png",
    apple: { url: "/pwa/apple-touch-icon.png", sizes: "180x180" },
  },
  appleWebApp: {
    capable: true,
    title: "ملتقى الإخوة",
    statusBarStyle: "default",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1446aa",
  // Light only: keep native controls light even when the phone is in dark mode.
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${tajawal.variable} ${zain.variable} antialiased font-arabic`}
      >
        <NavigationProgress />
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
