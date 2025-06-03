import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { permissionsState } from "@/common/states/permission";
import { userInfoState } from "@/recoil/adminInfo";
import { request } from "@/common/api";
import { Permission } from "@/common/types/permission";
import { GET_GROUP_PERMISSIONS } from "@/common/querykeys";
import { getUserInfo, readAccessToken } from "@/common/functions/authFunctions";
import { useNavigate } from "react-router-dom";
const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const setUserInfo = useSetRecoilState(userInfoState);
  const setMenuPermissions = useSetRecoilState(permissionsState);

  // 로그인된 사용자 정보 가져오기
  const { data: userInfo, isLoading: userLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
    refetchOnWindowFocus: false, // 브라우저 탭이 활성화될 때 자동 새로고침 방지
  });

  // 사용자 메뉴 권한 가져오기
  const { data: menuPermissions, isLoading: menuLoading } = useQuery({
    queryKey: [GET_GROUP_PERMISSIONS],
    queryFn: async () => {
      const accessToken = readAccessToken();
      if (!accessToken) {
        console.log("accessToken 없음");

        setMenuPermissions(null);
        navigate("/auth/login", { replace: true });
        return [];
      }
      const resPermissions = await request<Permission[]>({
        method: "GET",
        url: "/permission/group",
      });

      setMenuPermissions(resPermissions);

      return resPermissions;
    },
    staleTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (userInfo) setUserInfo(userInfo);
    if (menuPermissions) setMenuPermissions(menuPermissions);
  }, [menuPermissions, setUserInfo, setMenuPermissions]);

  if (menuLoading) return <div>Loading...</div>;

  return <>{children}</>;
};

export default AuthGuard;
