import Image from "next/image";
import { MarketingHeader } from "@/components/landing/marketing-header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      {/* Login background photo, darkened so the form card stays readable */}
      <Image
        src="/icons/bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={70}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/65" />
      <MarketingHeader />
      <main className="relative flex flex-1 items-center justify-center px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
