import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { ApiError } from "./types/apiError";
import {
  logout,
  readAccessToken,
  writeAccessToken,
} from "./functions/authFunctions";
import { showAlert } from "../components/containers/Alert";

// axios 인스턴스를 생성하여 기본 설정을 적용합니다.
const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 요청 시 쿠키 포함
});

// ── [요청 인터셉터] ──
// 모든 요청에 대해 저장된 access token이 있을 경우 Authorization 헤더에 추가합니다.
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

// ── [응답 인터셉터] ──
// 모든 응답 에러를 중앙에서 처리하여, 화면에 브라우저 기본 Uncaught Error가 나타나지 않고
// showAlert로만 에러 메시지를 표시하도록 합니다.
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 1. 로그인(/auth/login) 또는 토큰 재발급(/auth/refresh) 요청에서 401 에러가 발생한 경우
    //    -> 잘못된 자격증명이나 로그인 만료이므로 토큰 재발급 로직을 적용하지 않고 바로 로그아웃 처리
    if (
      error.response?.status === 401 &&
      (originalRequest.url === "/auth/refresh" ||
        originalRequest.url === "/auth/login")
    ) {
      showAlert(error.response.data.message);
      // reject 대신 resolved promise로 반환하여 unhandled rejection이 발생하지 않도록 함.
      return Promise.resolve({ data: null });
    }

    // 2. 그 외의 401 에러의 경우(예: access token 만료)
    //    -> 아직 재시도하지 않은 요청이면 refresh 토큰을 이용해 재시도
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_HOST}/auth/refresh`,
          {},
          { withCredentials: true }
        );
        const newAccessToken = response?.data?.accessToken;
        writeAccessToken(newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (e) {
        showAlert("로그인이 만료되었습니다. 다시 로그인해주세요.");
        await logout();
        return Promise.resolve({ data: null });
      }
    }

    // 3. 서버 내부 에러(500 에러) 처리
    if (error.response?.status === 500) {
      showAlert("서버 요청 에러!!");
      return Promise.resolve({ data: null });
    }

    // 4. 기타 에러 처리
    let message = "서버 요청 에러!";
    if (error.response?.data?.message) {
      message = error.response.data.message;
    } else if (error.message) {
      message = error.message;
    }
    showAlert(message);
    return Promise.resolve({ data: null });
  }
);

/**
 * 커스텀 request 함수
 * @param config - axios 요청 설정
 * @param isShowError - 에러 발생 시 alert으로 메시지를 띄울지 여부 (기본값: true)
 * @returns Promise<T> - 요청 성공 시 데이터 반환, 에러 발생 시 catch로 전달
 */
const request = async <T>(
  config: AxiosRequestConfig,
  isShowError: boolean = true
): Promise<T> => {
  const { method } = config;
  const isGetRequest = method?.toUpperCase() === "GET";

  try {
    // axios 인스턴스를 사용하여 요청 실행
    const { data } = await api.request<T>({ ...config });

    // 로그인 실패(혹은 refresh 실패)로 인해 data가 null이면 바로 null 반환
    if (data === null) {
      return null as any;
    }

    // GET 요청이 아닌 경우, API가 success: false를 반환하면 에러 처리
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
      // GET 요청일 경우, 403 에러 시 권한 없음 alert 후 빈 배열 반환
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
