import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { LoadingSpinner } from "@/components/atoms/LoadingSpinner";
import { userInfoSelector } from "@/recoil/adminInfo";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useRecoilState(userInfoSelector);
  const [isLoading, setIsLoading] = useState(false);

  // 인증 체크 로직
  useEffect(() => {}, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};
