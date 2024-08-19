import * as S from "./SidemenuList.style";
import { SidemenuItem } from "../../atoms/SidemenuItem";

interface SidemenuListProps {
  menuList: any;
  depth?: number;
  onContextMenu: (event: React.MouseEvent, target: any) => void;
}

export const SidemenuList = ({
  menuList,
  depth,
  onContextMenu,
}: SidemenuListProps) => {
  return (
    <S.SidemenuListBox $depth={depth ? depth : 1}>
      {menuList.map((item: any) => {
        return (
          <SidemenuItem
            data={item}
            key={item.id}
            onContextMenu={onContextMenu}
          />
        );
      })}
    </S.SidemenuListBox>
  );
};
