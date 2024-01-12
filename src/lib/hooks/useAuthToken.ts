import { accessTokenSelector } from "@/recoil/authToken";
import { useRecoilState } from "recoil";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export default function useAuthToken() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

  const login = (token: any) => {
    setAccessToken(token);
    // 인증 토큰을 로컬 스토리지 또는 기타 스토리지 메커니즘에 저장
    localStorage.setItem("accessToken", token);
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
