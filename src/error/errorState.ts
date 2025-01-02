import { Query } from "@tanstack/react-query";
import { toast } from "react-toastify";

// react-query의 전역 에러 처리를 위한 함수
export const queryCacheOnError = (err: unknown, query: Query) => {
  // query.meta에 설정된 errorMessage에 따라 다른 토스트 메시지 표시
  switch (query.meta?.errorMessage) {
    case 500:
      return toast.error("Could not fetch posts");
    default:
      return toast.error("Something went wrong");
  }
};
