"use client";

import { useRecoilState } from "recoil";
import { Cookies, useCookies } from "react-cookie";
import { accessTokenSelector } from "@/common/states/authToken";

const cookies = new Cookies();

export default function useAuthToken() {
  const [accessToken, setAccessToken] = useRecoilState<string | null>(
    accessTokenSelector
  );
  const [cookie, setCookie] = useCookies(["refreshToken"]);

  /** 로그인 POST 동작후 res 응답 토큰 담는 함수로 사용
   * @param accessToken 서버로부터의 엑세스토큰 저장
   * @param refreshToken 서버로 부터의 리프레쉬 토큰 저장
   * @param maxAge 만료기간
   */
  const login = (
    accessToken: string,
    refreshToken: string,
    maxAge: any = 60 * 60
  ) => {
    // atom에 저장
    setAccessToken(accessToken);
    // 인증 토큰을 로컬 스토리지 또는 기타 스토리지 메커니즘에 저장
    localStorage.setItem("accessToken", accessToken);
    // 쿠키에 리프레쉬 토큰 저장 60 * 60 = 1시간
    setCookie("refreshToken", refreshToken, {
      maxAge: maxAge,
      httpOnly: true,
    });
    return window.location.replace("/");
  };

  /** 로그아웃 함수, state(accessToken), localstorage(accessToken), cookies(refreshToken) 삭제 */
  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("accessToken");
    cookies.remove("refreshToken");
    return window.location.replace("/");
  };

  return { accessToken, login, logout };
}
