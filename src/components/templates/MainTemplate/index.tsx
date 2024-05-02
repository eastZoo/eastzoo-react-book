"use client";
import { useState } from "react";
import { MenuList } from "../../../data/menuList";
import { LoadingSpinner } from "../../atoms/LoadingSpinner";
import { Header } from "../../organisms/Header";
import * as S from "./mainTemplate.styles";
import { useRouter } from "next/navigation";

interface LayoutProps {
  children?: React.ReactElement;
  operStat?: "ORDER" | "START" | "CONTINUE" | "PAUSE" | "COMPLETE";
  pageTit?: string;
  loading?: boolean | undefined;
}

// 페이지 레이아웃
export const MainTemplate = ({
  children,
  operStat,
  pageTit,
  loading,
}: LayoutProps) => {
  // 헤더
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  const items = [
    {
      componentName: "Button",
      link: "/button",
    },
    { componentName: "Input", link: "/input" },
    { componentName: "Select", link: "/select" },
  ];

  return (
    <>
      <S.MainTemplate stateTheme={operStat} loading={loading}>
        <Header isOpen={isOpen} toggleDropdown={toggleDropdown} items={items} />
        <S.MainContentSection>
          {loading === true && <LoadingSpinner />}
          {children}
        </S.MainContentSection>
      </S.MainTemplate>
      {/* 사이드메뉴
      <Menu
        menuRef={menuRef}
        menuOpen={menuOpen}
        menuOutsideClick={menuOutsideClick}
      /> */}
    </>
  );
};
