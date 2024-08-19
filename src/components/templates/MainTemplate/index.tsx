"use client";
import * as S from "./MainTemplate.style";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { permissionsState } from "../../../common/states/permission";
import { Header } from "../../organisms/Header";
import useContextMenu from "@/common/hooks/useContextMenu";
import ContextMenu from "@/components/molcules/ContextMenu";
import { Sidemenu } from "@/components/organisms/Sidemenu";

interface MainTemplateProps {
  children: React.ReactNode;
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
  const [asideOpen, setAsideOpen] = useState(true);
  const [innerWidth, setInnerWidth] = useState(window?.innerWidth);
  const permissions = useRecoilValue(permissionsState);

  const {
    contextMenu,
    handleContextMenu,
    handleOpenInNewTab,
    handleOpenInNewWindow,
  } = useContextMenu();

  const resizeListener = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
      innerWidth < 960 ? setAsideOpen(false) : setAsideOpen(true);
    };
  }, [innerWidth]);

  const handleAsideOpen = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <S.MainTemplate $asideOpen={asideOpen}>
      <Header
        asideToggle={handleAsideOpen}
        asideOpen={asideOpen}
        innerWidth={innerWidth}
      />
      <Sidemenu
        asideToggle={handleAsideOpen}
        onContextMenu={handleContextMenu}
        permissions={permissions ?? []}
      />
      <S.ContentSection>{children}</S.ContentSection>
      <ContextMenu
        handleOpenInNewTab={handleOpenInNewTab}
        handleOpenInNewWindow={handleOpenInNewWindow}
        visible={contextMenu.visible}
        x={contextMenu.x}
        y={contextMenu.y}
      />
    </S.MainTemplate>
  );
};
