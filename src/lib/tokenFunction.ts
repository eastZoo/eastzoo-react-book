import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getRefreshToken = (name: string) => {
  return cookies.get(name);
};

export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    const authToken = localStorage.getItem("accessToken") || "";
    return authToken;
  }
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  cookies.remove("refreshToken");
};
