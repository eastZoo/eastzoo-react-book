import { accessTokenState } from "@/states/authToken";
import React, { Suspense, useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AuthGuard: React.FC<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  const setAccessToken = useSetRecoilState(accessTokenState);

  useEffect(() => {
    // 렌더링시 초기에 로컬 스토리지에서 authToken 가져오기
    const accessToken: any = localStorage.getItem("accessToken");
    setAccessToken(accessToken);
  }, []);

  return <>{children}</>;
};

export default AuthGuard;
