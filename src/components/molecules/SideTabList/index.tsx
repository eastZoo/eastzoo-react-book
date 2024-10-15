import * as S from "./SideTabList.style";
import { SideTabItem } from "../../atoms/SideTabItem";

interface SideTabListProps {
  tabList: any;
  activeValue?: any;
  depth?: number;
  onClickSub?: (lowMcyName: string) => void;
}

export const SideTabList = ({
  tabList,
  activeValue,
  depth,
  onClickSub,
}: SideTabListProps) => {
  return (
    <S.SideTabList $depth={depth ? depth : 1}>
      {tabList.map((item: any) => {
        return (
          <SideTabItem
            data={item}
            key={item.id}
            activeValue={activeValue}
            onClickSub={item.onClick ? item.onClick : onClickSub}
          />
        );
      })}
    </S.SideTabList>
  );
};
