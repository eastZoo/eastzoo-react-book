import { MenuPermissions } from "../../../data/menu";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from "../../../common/api";
import { Permission } from "../../../common/types/permission";
import { BaseResponse } from "../../../common/types/baseRespones";

import { Buttons } from "../../../components/atoms/Buttons";
import { showAlert } from "../../../components/containers/Alert";
import { PageContent } from "../../../components/organisms/Contents/PageContent";
import { GET_PERMISSIONS } from "@/common/querykeys";
import { UserAuthContent } from "@/components/organisms/Contents/UserAuthContent";
import { Table } from "@/components/atoms/Table";

export const AuthPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<string>("Admin");
  const [groupPermissions, setGroupPermissions] = useState<Permission[]>([]);

  const { data: permissions, refetch } = useQuery<Permission[]>({
    queryKey: [GET_PERMISSIONS],
    queryFn: async () => {
      const result = await request<Permission[]>({
        method: "GET",
        url: "/permission",
      });

      // 결과 값에 depth와 order를 추가
      const resultWithDepthAndOrder = result.map((permission) => {
        const menuPermission = MenuPermissions.find(
          (menu) => menu.name === permission.pmsMenuName
        );
        return {
          ...permission,
          depth: menuPermission?.depth || 0,
          order: menuPermission?.order || 0,
        };
      });

      console.log("resultWithDepthAndOrder", resultWithDepthAndOrder);

      return resultWithDepthAndOrder;
    },
  });

  const { mutateAsync: updatePermissions } = useMutation({
    mutationFn: (inputs: Permission[]) => {
      return request<BaseResponse>({
        method: "PUT",
        url: "/permission/list",
        data: inputs,
      });
    },
    onSuccess: (res: BaseResponse) => {
      showAlert("권한정보가 변경되었습니다.");
      refetch();
    },
  });

  useEffect(() => {
    if (permissions) {
      // 선택된 사용자 그룹에 해당하는 권한만 필터링
      const groupData = permissions.filter(
        (permission) => permission.pmsGroup === selectedGroup
      );

      setGroupPermissions(groupData);
    }
  }, [permissions, selectedGroup]);

  const handlePermissionChange = (
    menuName: string,
    permissionType: string,
    value: number
  ) => {
    setGroupPermissions((prev: Permission[]) =>
      prev.map((perm: Permission) =>
        perm.pmsMenuName === menuName
          ? { ...perm, [permissionType]: value }
          : perm
      )
    );
  };

  const handleModalShow = () => {
    setModalShow(!modalShow);
  };

  const handlePermissionSave = () => {
    updatePermissions(groupPermissions);
  };

  return (
    <>
      <PageContent
        depth01Title="관리자 설정"
        depth02Title="사용자 관리"
        depth03Title="권한 관리"
      >
        {/* <select
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select> */}
        <UserAuthContent
          activeValue={selectedGroup}
          tabList={[
            {
              id: 1,
              title: "Admin",
              value: "Admin",
              depth: 1,
              onClick: () => setSelectedGroup("Admin"),
            },
            {
              id: 2,
              title: "User",
              value: "User",
              depth: 1,
              onClick: () => setSelectedGroup("User"),
            },
          ]}
          contentTitle={
            <>
              <div>
                메뉴 목록
                <Buttons
                  type="button"
                  size="sm"
                  layout="secondary"
                  label="메뉴별 설명"
                  onClick={handleModalShow}
                />
              </div>
              <Buttons
                type="button"
                size="md"
                layout="primary"
                onClick={handlePermissionSave}
                label="저장"
              />
            </>
          }
        >
          <Table
            thead={[
              { id: 1, name: "메뉴" },
              { id: 2, name: "사용" },
              { id: 3, name: "작성/등록" },
              { id: 4, name: "편집" },
              { id: 5, name: "삭제" },
              { id: 6, name: "읽기" },
            ]}
          >
            <>
              {groupPermissions
                .sort((a, b) => a.order! - b.order!)
                .map((permission) => (
                  <tr key={permission.pmsMenuName}>
                    <td>
                      <div
                        style={{
                          paddingLeft: `${(permission.depth ?? 0) * 10}px`,
                        }}
                        key={permission.pmsMenuName}
                      >
                        {(permission.depth ?? 0) > 1 && "- "}
                        {permission.pmsMenuName}
                      </div>
                    </td>
                    <td>
                      <div className="td_center">
                        <input
                          type="checkbox"
                          checked={permission.pmsMenuActive === 1}
                          onChange={(e) =>
                            handlePermissionChange(
                              permission.pmsMenuName,
                              "pmsMenuActive",
                              e.target.checked ? 1 : 0
                            )
                          }
                        />
                      </div>
                    </td>
                    <td>
                      <div className="td_center">
                        <input
                          type="checkbox"
                          checked={permission.pmsMenuInsert === 1}
                          onChange={(e) =>
                            handlePermissionChange(
                              permission.pmsMenuName,
                              "pmsMenuInsert",
                              e.target.checked ? 1 : 0
                            )
                          }
                        />
                      </div>
                    </td>
                    <td>
                      <div className="td_center">
                        <input
                          type="checkbox"
                          checked={permission.pmsMenuUpdate === 1}
                          onChange={(e) =>
                            handlePermissionChange(
                              permission.pmsMenuName,
                              "pmsMenuUpdate",
                              e.target.checked ? 1 : 0
                            )
                          }
                        />
                      </div>
                    </td>
                    <td>
                      <div className="td_center">
                        <input
                          type="checkbox"
                          checked={permission.pmsMenuDelete === 1}
                          onChange={(e) =>
                            handlePermissionChange(
                              permission.pmsMenuName,
                              "pmsMenuDelete",
                              e.target.checked ? 1 : 0
                            )
                          }
                        />
                      </div>
                    </td>
                    <td>
                      <div className="td_center">
                        <input
                          type="checkbox"
                          checked={permission.pmsMenuRead === 1}
                          onChange={(e) =>
                            handlePermissionChange(
                              permission.pmsMenuName,
                              "pmsMenuRead",
                              e.target.checked ? 1 : 0
                            )
                          }
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </>
          </Table>
        </UserAuthContent>
      </PageContent>
    </>
  );
};
