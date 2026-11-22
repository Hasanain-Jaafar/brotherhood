"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("marketing.hero");
  const tHeader = useTranslations("marketing.header");

  return (
    <section
      className="relative min-h-[calc(100dvh-4rem)] w-full overflow-hidden font-[family-name:var(--font-zain)]"
    >
      {/* Background image (the site is mobile-first, so there's no desktop variant) */}
      <Image
        src="/icons/bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={70}
        className="object-cover object-center"
      />

      {/* Dark gradient so the white text and buttons stay legible on the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-md flex-col items-center px-6 pt-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] text-center sm:max-w-lg sm:pt-12 md:max-w-xl">
        {/* Logo */}
        <div className="mx-auto size-28 animate-[scaleIn_0.5s_ease-out_both] overflow-hidden rounded-full shadow-xl shadow-black/40 ring-2 ring-white/30 sm:size-32">
          <Image
            src="/icons/brotherhood.jpg"
            alt=""
            width={256}
            height={256}
            priority
            className="size-full scale-[1.38] object-cover"
          />
        </div>

        {/* Headline + subheading */}
        <div className="mt-6 flex flex-col items-center sm:mt-auto">
          <h1
            className="animate-[slide-up_0.5s_ease-out_0.15s_both] text-5xl font-extrabold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-6xl md:text-7xl"
          >
            {t("title")}
          </h1>
          <p
            className="animate-[slide-up_0.5s_ease-out_0.25s_both] mt-4 max-w-xs text-lg leading-relaxed text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:max-w-sm sm:text-xl"
          >
            {t("subtitle")}
          </p>
        </div>

        {/* CTAs */}
        <div
          className="animate-[slide-up_0.5s_ease-out_0.35s_both] absolute inset-x-6 bottom-[max(15%,env(safe-area-inset-bottom))] flex w-auto flex-col items-stretch gap-3 sm:inset-x-12"
        >
          <Button
            asChild
            size="lg"
            className="h-12 w-full rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
          >
            <Link href="/sign-in">{tHeader("signIn")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
