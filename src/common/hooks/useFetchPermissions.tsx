"use client";
import { useQuery } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { readAccessToken } from "../functions/authFunctions";
import { GET_USER_PERMISSIONS } from "../query-keys";
import { request } from "../lib/api";
import { permissionsState } from "../states/permission";

const useFetchPermissions = () => {
  const setPermissions = useSetRecoilState(permissionsState);

  const accessToken = readAccessToken();
  const { data: permissions } = useQuery({
    queryKey: [GET_USER_PERMISSIONS],
    queryFn: async () => {
      if (!accessToken) {
        setPermissions(null);
        return [];
      }

      const resPermissions = await request<any[]>({
        method: "GET",
        url: "/permission/group",
      });

      setPermissions(resPermissions);

      return resPermissions;
    },
  });

  return permissions;
};

export default useFetchPermissions;
