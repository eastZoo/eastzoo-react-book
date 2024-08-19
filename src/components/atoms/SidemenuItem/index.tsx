import { useEffect, useState } from "react";
import Image from "next/image";
import * as S from "./SidemenuItem.style";
import { SidemenuList } from "@/components/molcules/SidemenuList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideMenuArrowIcon from "public/assets/svg/icon_sidemenu_arrow.svg";
interface SidemenuItemProps {
  data: any;
  onContextMenu: (event: React.MouseEvent, target: any) => void;
}

export const SidemenuItem = ({ data, onContextMenu }: SidemenuItemProps) => {
  const pathname: any = usePathname();

  const [submenu, setSubmenu] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const isMatch = pathname === data?.path;

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

      if (openMenu(data, pathname)) {
        setSubmenu(true);
      }

      setInitialized(true);
    }
  }, [pathname, data]);

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
            {data.submenu && (
              <Image
                src={SideMenuArrowIcon}
                alt="Arrow Icon"
                width={10}
                height={10}
              />
            )}
          </S.SidemenuListItem>
          <SidemenuList
            depth={data.depth + 1}
            menuList={data.submenu}
            onContextMenu={onContextMenu}
          />
        </>
      ) : (
        <Link href={data.path}>
          <S.SidemenuListItem $depth={data.depth}>
            <S.SidemenuItemTit>
              {data.depth === 1 && data.icon}
              {data.depth !== 1 && "- "}
              <S.TitBox>{data.title}</S.TitBox>
            </S.SidemenuItemTit>
            {data.submenu && (
              <Image
                src={SideMenuArrowIcon}
                alt="Arrow Icon"
                width={10}
                height={10}
              />
            )}
          </S.SidemenuListItem>
        </Link>
      )}
    </S.SidemenuItemBox>
  );
};
