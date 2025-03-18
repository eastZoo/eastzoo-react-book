import { request } from "@/common/api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { data: testData } = useQuery({
    queryKey: ["USER_TEST"],
    queryFn: async () => {
      return await request<any>({
        method: "GET",
        url: `/user/test`,
      }).then((res: any) => {
        return res.data;
      });
    },
  });

  return (
    <div>
      <div>홈 페이지 입니다.</div>
    </div>
  );
};

export default HomePage;
