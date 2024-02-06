"use client";
import { PAYMENT_METHOD } from "@/common/enum";
import { request } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: productData, refetch: productDataRefetch } = useQuery(
    ["admin-product"],
    () =>
      request<any>({
        method: "GET",
        url: `https://httpbin.org/get`,
      }).then((res) => {
        console.log(res);
        return res;
      }),
    {
      meta: {
        errorMessage: PAYMENT_METHOD.POSTS_FETCH_SUCCESS,
      },
    }
  );
  return (
    <main>
      <div>테스트</div>
      <div>{productData}</div>
    </main>
  );
}
