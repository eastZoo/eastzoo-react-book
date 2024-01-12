import { accessTokenSelector } from "@/recoil/authToken";
import { useRecoilState } from "recoil";
import { Cookies, useCookies } from "react-cookie";

const cookies = new Cookies();

export default function useAuthToken() {
  const [accessToken, setAccessToken] = useRecoilState<string | null>(
    accessTokenSelector
  );
  const [cookie, setCookie] = useCookies(["refreshToken"]);

  /** 로그인 POST 동작후 res 응답 토큰 담는 함수로 사용 */
  const login = (accessToken: string, refreshToken: string) => {
    // atom에 저장
    setAccessToken(accessToken);
    // 인증 토큰을 로컬 스토리지 또는 기타 스토리지 메커니즘에 저장
    localStorage.setItem("accessToken", accessToken);
    // 쿠키에 리프레쉬 토큰 저장 60 * 60 = 1시간
    setCookie("refreshToken", refreshToken, { maxAge: 60 * 60 });
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
