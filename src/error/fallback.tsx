import Link from "next/link";
import React from "react";

// 쿼리 페칭 에러시 나타나는 페이지
export const Fallback: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex flex-col">
        <p className="text-2xl font-bold ml-4">
          {"Oooops...에러가 발생했습니다."}
        </p>
        <p className="text-2xl font-bold ml-4">{"곧 고치겠습니다...😅"}</p>
        <a href="/">
          <button>메인화면으로 돌아가기</button>
        </a>
      </div>
    </div>
  );
};
