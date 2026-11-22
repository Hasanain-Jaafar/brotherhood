"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";

export function MarketingHeader() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-20 border-b bg-background/95 pt-[env(safe-area-inset-top)] backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="block size-9 shrink-0 overflow-hidden rounded-full">
          <Image
            src="/icons/brotherhood.jpg"
            alt=""
            width={36}
            height={36}
            className="size-9 scale-[1.38] object-cover"
          />
          </span>
          <span>ملتقى الإخوة</span>
        </Link>
      </div>
    </header>
  );
}
