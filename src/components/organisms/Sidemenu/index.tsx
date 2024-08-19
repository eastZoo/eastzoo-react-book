import * as S from "./Sidemenu.style";

import { SidemenuTop } from "../../atoms/SidemenuTop";
import { menuList } from "@/data/menu";
import { MenuItem } from "@/types/menu";
import { Permission } from "@/types/permission";
import { SidemenuList } from "@/components/molcules/SidemenuList";

interface SidemenuProps {
  asideToggle?: any;
  permissions: Permission[];
  onContextMenu: (event: React.MouseEvent, target: any) => void;
}

export const Sidemenu = ({
  asideToggle,
  permissions,
  onContextMenu,
}: SidemenuProps) => {
  const filterMenuByPermission = (
    menuList: any[],
    permissions: Permission[]
  ): MenuItem[] => {
    const hasPermission = (title: string) => {
      const permission = permissions.find((p) => p.pmsMenuName === title);
      return permission ? permission.pmsMenuActive === 1 : 0;
    };

    const filterSubmenu = (submenu: MenuItem[]): MenuItem[] => {
      return submenu
        .map((item) => ({
          ...item,
          submenu: item.submenu ? filterSubmenu(item.submenu) : undefined,
        }))
        .filter((item) => hasPermission(item.title));
    };

    return filterSubmenu(menuList);
  };

  return (
    <S.SidemenuSection>
      <SidemenuTop asideToggle={asideToggle} />
      <SidemenuList
        menuList={filterMenuByPermission(menuList, permissions)}
        onContextMenu={onContextMenu}
      />
    </S.SidemenuSection>
  );
};
