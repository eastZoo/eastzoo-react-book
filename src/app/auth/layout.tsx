// app/protected/layout.tsx
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const isAuthenticated = true; // your logic to check authentication
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
