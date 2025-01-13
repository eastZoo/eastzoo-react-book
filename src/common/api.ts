import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { ApiError } from "./types/apiError";
import {
  logout,
  readAccessToken,
  writeAccessToken,
} from "./functions/authFunctions";
import { showAlert } from "../components/containers/Alert";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 쿠키를 포함
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = readAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 리프레시 토큰 요청 자체가 실패한 경우는 바로 로그아웃 처리
    if (
      error.response?.status === 401 &&
      originalRequest.url === "/auth/refresh"
    ) {
      showAlert("로그인이 만료되었습니다. 다시 로그인해주세요.");
      return logout();
    }

    // 일반 요청이 401이고 아직 재시도하지 않은 경우에만 리프레시 시도
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_HOST}/auth/refresh`,
          {},
          {
            withCredentials: true,
          }
        );

        const newAccessToken = response?.data?.accessToken;
        writeAccessToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (e) {
        showAlert("로그인이 만료되었습니다. 다시 로그인해주세요.");
        // return logout();
      }
    }

    if (error.response?.status === 500) {
      return showAlert("서버 요청 에러!!");
    }

    return Promise.reject(error);
  }
);

/**
 * @param config - axios request config
 * @param isShowError - 에러 발생시 alert 띄울지 여부
 * @returns
 */
const request = async <T>(
  config: AxiosRequestConfig,
  isShowError: boolean = true
): Promise<T> => {
  const { method } = config;
  const isGetRequest = method?.toUpperCase() === "GET";

  try {
    const { data } = await api.request<T>({ ...config });

    if (!isGetRequest && (data as any)?.success === false) {
      throw new ApiError({
        message: (data as any)?.message ?? "서버 요청 에러!",
      });
    }

    return data;
  } catch (error) {
    let message = "서버 요청 에러!";

    if (error instanceof AxiosError) {
      const { response }: any = error;
      if (response?.data?.message) {
        message = response.data.message;
      }

      if (isGetRequest) {
        if (error?.response?.status === 403) {
          showAlert("조회 권한이 없습니다.");
        }
        return [] as any;
      }
    } else if (error instanceof ApiError) {
      message = error.message;
    }

    if (isShowError && !isGetRequest) {
      showAlert(message);
    }

    throw error;
  }
};

export { request };
