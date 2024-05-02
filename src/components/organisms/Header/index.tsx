import Link from "next/link";
import * as S from "./headerBar.styles";
import Image from "next/image";
import { DropdownMenu } from "@/components/molcules/DropdownMenu";

export const Header = ({ items, toggleDropdown, isOpen, isLogin }: any) => {
  return (
    <S.Header>
      <S.HeaderBox>
        <Link href="/">
          <Image
            src="/assets/img/logo-main.png"
            alt="components"
            width="200"
            height={60}
          />
        </Link>
        {/* <InputSearchBar
            placeholder="키워드를 입력해주세요."
            src="/assets/svg/search.svg"
            alt="검색"
          /> */}
        <S.LinkGroup>
          <div onClick={toggleDropdown}>
            <Link href="/">컴포넌트</Link>
            {isOpen && <DropdownMenu />}
          </div>
          <Link href="/">시작 가이드</Link>
          <Link href="/">제작자</Link>
        </S.LinkGroup>
      </S.HeaderBox>
    </S.Header>
  );
};
