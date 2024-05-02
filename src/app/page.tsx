"use client";
import { PAYMENT_METHOD } from "@/common/enum";
import { request } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Home() {
  // const { data: productData, refetch: productDataRefetch } = useQuery(
  //   ["admin-product"],
  //   () =>
  //     request<any>({
  //       method: "GET",
  //       url: `https://httpbin.org/get`,
  //     }).then((res) => {
  //       console.log(res);
  //       return res;
  //     }),
  //   {
  //     // 에러메세지 meta 사용
  //     meta: {
  //       errorMessage: PAYMENT_METHOD.POSTS_FETCH_SUCCESS,
  //     },
  //   }
  // );
  return (
    <main>
      <div>메인 페이지입니다.</div>
    </main>
  );
}
