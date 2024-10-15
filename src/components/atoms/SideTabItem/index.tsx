import * as S from "./SideTabItem.style";
import { ReactComponent as IconArrow } from "../../../styles/assets/svg/icon_sidemenu_arrow.svg";
import { useState } from "react";
import { SideTabList } from "../../molecules/SideTabList";

interface SidetTabItemProps {
  data: any;
  activeValue?: any;
  onClickSub?: (lowMcyName: string) => void;
}

export const SideTabItem = ({
  data,
  activeValue,
  onClickSub,
}: SidetTabItemProps) => {
  const [subTab, setSubTab] = useState(false);

  const subTabToggle = () => {
    setSubTab(!subTab);
    if (subTab === false) {
  
      onClickSub && onClickSub(data.title);
    }
  };

  // const handleClick = () => {};

  return (
    <>
      {data.submenu ? (
        <S.SideTabItem $submenuToggle={subTab}>
          <S.SideTabItemTit
            $depth={data.depth}
            onClick={data.submenu && subTabToggle}
          >
            {data.title}{" "}
            <IconArrow transform={subTab ? `rotate(180)` : `rotate(0)`} />
          </S.SideTabItemTit>
          <SideTabList depth={data.depth + 1} tabList={data.submenu} />
        </S.SideTabItem>
      ) : (
        <S.SideTabItem $depth={data.depth}>
          <S.SideTabItemTit
            $depth={data.depth}
            // onClick={handleClick}
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
