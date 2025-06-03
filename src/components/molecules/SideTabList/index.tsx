import * as S from "./SideTabList.style";
import { SideTabItem } from "../../atoms/SideTabItem";

interface SideTabListProps {
  tabList: any;
  activeValue?: any;
  depth?: number;
  onClickSub?: (lowMcyName: string) => void;
  openTabId: string | number | null; // 열려 있는 탭 ID
  setOpenTabId: (id: string | null) => void; // 탭 상태 변경 함수
  hoverUse?: boolean;
}

export const SideTabList = ({
  tabList,
  activeValue,
  depth,
  onClickSub,
  openTabId,
  setOpenTabId,
  hoverUse = true,
}: SideTabListProps) => {
  return (
    <S.SideTabList $depth={depth ? depth : 1}>
      {tabList.map((item: any) => (
        <SideTabItem
          data={item}
          key={item.id}
          activeValue={activeValue}
          onClickSub={item.onClick ? item.onClick : onClickSub}
          isOpen={openTabId === item.id} // 열린 상태 확인
          setOpenTabId={setOpenTabId} // 상태 변경 함수 전달
          hoverUse={hoverUse}
        />
      ))}
    </S.SideTabList>
  );
};
