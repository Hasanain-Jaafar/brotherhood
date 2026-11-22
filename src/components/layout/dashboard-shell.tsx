import { Header } from "@/components/layout/header";

type DashboardShellProps = {
  children: React.ReactNode;
  user: {
    id: string;
    email?: string;
    user_metadata?: { name?: string; full_name?: string };
  } | null;
  profile?: { name?: string | null; avatar_url?: string | null } | null;
};

export function DashboardShell({
  children,
  user,
  profile,
}: DashboardShellProps) {
  return (
    <div className="flex h-dvh flex-col pt-[env(safe-area-inset-top)]">
      <Header user={user} profile={profile} />
      <main
        id="dashboard-scroll-container"
        className="flex-1 overflow-auto overscroll-contain p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:p-6"
      >
        <div className="mx-auto w-full max-w-4xl lg:max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  );
}
