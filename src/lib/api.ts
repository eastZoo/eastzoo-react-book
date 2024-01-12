import axios, { AxiosError, AxiosRequestConfig } from "axios";
import {
  getAccessToken,
  getRefreshToken,
  logout,
  setAccessToken,
} from "./tokenFunction";

// console.log("process.env.REACT_APP_API_URL", process.env.NEXT_PUBLIC_API_URL);

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = await getRefreshToken("refreshToken");
      // 리프레쉬 토큰이 없다면 로그아웃
      if (!refreshToken) {
        return logout();
      }
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );
        const accessToken = response?.data?.accessToken;

        setAccessToken(accessToken);
        return api(originalRequest);
      } catch (e) {
        // 리프레쉬 토큰가지고 서버로 통신보낸뒤 리프레쉬토큰 기간 만료시 오류 에러
        return logout();
      }
    }

    return Promise.reject(error);
  }
);

const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const { data } = await api.request<T>({ ...config });
    // console.log("[data]", data);
    return data;
  } catch (error) {
    const { response }: any = error as unknown as AxiosError;
    console.log("[response]", error);

    if (response) {
      throw response.data;
    }

    throw error;
  }
};

const setUserId = (userId: any) => {
  api.defaults.headers.common["userId"] = userId;
};

const setToken = (token: any) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const setIp = (ip: string) => {
  api.defaults.headers.common["ip"] = ip;
};

export { request, setUserId, setToken, setIp };
