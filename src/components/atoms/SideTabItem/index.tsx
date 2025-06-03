// SideTabItem.tsx
import * as S from "./SideTabItem.style";
import { ReactComponent as IconArrow } from "../../../styles/assets/svg/icon_sidemenu_arrow.svg";
import { SideTabList } from "../../molecules/SideTabList";

interface SideTabItemProps {
  data: any;
  activeValue?: any;
  onClickSub?: (lowMcyName: string) => void;
  isOpen: boolean; // 현재 열려 있는지 여부
  setOpenTabId: (id: string | null) => void; // 열린 탭의 ID를 설정하는 함수
  hoverUse?: boolean;
}

export const SideTabItem = ({
  data,
  activeValue,
  onClickSub,
  isOpen,
  setOpenTabId,
  hoverUse,
}: SideTabItemProps) => {
  const subTabToggle = () => {
    setOpenTabId(isOpen ? null : data.id); // 열려 있으면 닫고, 닫혀 있으면 열기
    if (!isOpen && onClickSub) {
      onClickSub(data.title);
    }
  };

  return (
    <>
      {data.submenu ? (
        <S.SideTabItem $submenuToggle={isOpen}>
          <S.SideTabItemTit
            $depth={data.depth}
            $submenuToggle={true} // submenu가 있을 경우 true 전달
            onClick={subTabToggle}
          >
            {data.title}
            <IconArrow transform={isOpen ? `rotate(180)` : `rotate(0)`} />
          </S.SideTabItemTit>
          {isOpen && (
            <SideTabList
              hoverUse={hoverUse}
              depth={data.depth + 1}
              tabList={data.submenu}
              openTabId={isOpen ? data.id : null} // 하위 목록에 openTabId 전달
              setOpenTabId={setOpenTabId} // 하위 목록에 setOpenTabId 전달
            />
          )}
        </S.SideTabItem>
      ) : (
        <S.SideTabItem $depth={data.depth} $hoverUse={hoverUse}>
          <S.SideTabItemTit
            $depth={data.depth}
            $submenuToggle={false} // submenu가 없을 경우 false 전달
            data-title={data.title} // data-title 속성으로 툴팁 텍스트 전달
            onClick={data.onClick ? data.onClick : onClickSub}
            style={
              activeValue === data.value
                ? { background: "#4B45E70d", fontWeight: "600" }
                : { background: "none" }
            }
          >
            {data.title}
            {activeValue === data.value && (
              <IconArrow transform={`rotate(-90)`} />
            )}
          </S.SideTabItemTit>
        </S.SideTabItem>
      )}
    </>
  );
};
