"use client";
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
  // const menuRef = useRef<HTMLDivElement>(null);
  // const [menuOpen, setMenuOpen] = useState(false);

  // const handleMenuOpen = (menuOpen: boolean) => {
  //   setMenuOpen(menuOpen);
  // };

  // const menuOutsideClick = (e: any) => {
  //   if (menuRef.current === e.target) {
  //     setMenuOpen(false);
  //   }
  // };
  const router = useRouter();

  const handleClick = () => {
    console.log("sda");
    router.back();
  };

  return (
    <>
      <S.MainTemplate stateTheme={operStat} loading={loading}>
        <Header
          backBtnProps={{
            color: "white",
            label: "<",
            size: "xsm",
            onClick: () => handleClick(),
          }}
          // pageTit={
          //   MenuData.filter((cur) => cur.url === f7route.path)[0]
          //     ? MenuData.filter((cur) => cur.url === f7route.path)[0].menuName
          //     : ""
          // }
          // handleMenuOpen={handleMenuOpen}
          // menuOpen={menuOpen}
        />
        <S.MainContentSection>
          {loading === true && <LoadingSpinner />}
          {children}
        </S.MainContentSection>
      </S.MainTemplate>
      {/* <Menu
        menuRef={menuRef}
        menuOpen={menuOpen}
        menuOutsideClick={menuOutsideClick}
      /> */}
    </>
  );
};
