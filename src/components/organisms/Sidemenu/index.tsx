import * as S from "./Sidemenu.style";
import { menuList } from "../../../data/menu";
import { MenuItem } from "../../../common/types/menu";
import { Permission } from "../../../common/types/permission";
import { SidemenuTop } from "../../atoms/SidemenuTop";
import { SidemenuList } from "../../molecules/SidemenuList";

interface SidemenuProps {
  asideToggle?: any;
  permissions: Permission[];
  onContextMenu: (event: React.MouseEvent, target: any) => void;
}

export const Sidemenu = ({ asideToggle, onContextMenu }: SidemenuProps) => {
  return (
    <S.SidemenuSection>
      <SidemenuTop asideToggle={asideToggle} />
      <SidemenuList
        menuList={menuList as MenuItem[]}
        onContextMenu={onContextMenu}
      />
    </S.SidemenuSection>
  );
};
