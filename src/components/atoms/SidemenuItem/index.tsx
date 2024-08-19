import { useEffect, useState } from "react";
import { Link, useLocation, useMatch } from "react-router-dom";
import IconArrow from "public/assets/svg/icon_sidemenu_arrow.svg";

import * as S from "./SidemenuItem.style";
import { SidemenuList } from "@/components/molcules/SidemenuList";

interface SidemenuItemProps {
  data: any;
  onContextMenu: (event: React.MouseEvent, target: any) => void;
}

export const SidemenuItem = ({ data, onContextMenu }: SidemenuItemProps) => {
  const location = useLocation();
  const [submenu, setSubmenu] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const isMatch = useMatch({ path: data?.path ?? "", end: true });

  useEffect(() => {
    if (!initialized) {
      const openMenu = (menu: any, path: string) => {
        if (!menu.submenu) return false;
        for (const subItem of menu.submenu) {
          if (path.startsWith(subItem.path)) {
            return true;
          }
          if (subItem.submenu && openMenu(subItem, path)) {
            return true;
          }
        }
        return false;
      };

      if (openMenu(data, location.pathname)) {
        setSubmenu(true);
      }

      setInitialized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, data]);

  const submenuToggle = () => {
    setSubmenu(!submenu);
  };

  return (
    <S.SidemenuItemBox
      $submenuToggle={submenu}
      $menuActive={!!isMatch}
      onContextMenu={(e) => onContextMenu(e, data.path)}
    >
      {data.submenu ? (
        <>
          <S.SidemenuListItem
            $depth={data.depth}
            onClick={data.submenu && submenuToggle}
          >
            <S.SidemenuItemTit>
              {data.depth === 1 && data.icon}
              {data.depth !== 1 && "- "}
              <S.TitBox>{data.title}</S.TitBox>
            </S.SidemenuItemTit>
            {data.submenu && <IconArrow />}
          </S.SidemenuListItem>
          <SidemenuList
            depth={data.depth + 1}
            menuList={data.submenu}
            onContextMenu={onContextMenu}
          />
        </>
      ) : (
        <Link to={`${data.path}`}>
          <S.SidemenuListItem $depth={data.depth}>
            <S.SidemenuItemTit>
              {data.depth === 1 && data.icon}
              {data.depth !== 1 && "- "}
              <S.TitBox>{data.title}</S.TitBox>
            </S.SidemenuItemTit>
            {data.submenu && <IconArrow />}
          </S.SidemenuListItem>
        </Link>
      )}
    </S.SidemenuItemBox>
  );
};
