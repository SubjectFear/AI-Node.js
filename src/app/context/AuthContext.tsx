"use client";
import { useEffect, useState, type ReactNode } from "react";

export default function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [SessionProvider, setSessionProvider] = useState<
    ((props: { children: ReactNode }) => React.ReactElement) | null
  >(null);

  const isAuthConfigured = Boolean(
    process.env.NEXTAUTH_URL ||
      process.env.NEXTAUTH_SECRET ||
      process.env.SECRET,
  );

  useEffect(() => {
    if (!isAuthConfigured) return;

    let active = true;
    import("next-auth/react")
      .then((mod) => {
        if (active) setSessionProvider(() => mod.SessionProvider);
      })
      .catch(() => {
        if (active) setSessionProvider(null);
      });

    return () => {
      active = false;
    };
  }, [isAuthConfigured]);

  if (!isAuthConfigured || !SessionProvider) {
    return <>{children}</>;
  }

  return <SessionProvider>{children}</SessionProvider>;
}
