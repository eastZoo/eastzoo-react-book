import { request } from "@/common/api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

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

  console.log(testData);

  return (
    <div>
      <div>홈 페이지 입니다.</div>
      <button onClick={() => navigate("/auth/login")}>로그인하기</button>
    </div>
  );
};

export default HomePage;
