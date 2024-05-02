import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import * as S from "./DropdownMenu";

interface dashDropdownProps {
  items?: any[];
  toggleDropdown?: () => void;
  isOpen?: boolean;
}

export const DropdownMenu: React.FC<dashDropdownProps> = ({
  items,
  toggleDropdown,
  isOpen,
}) => {
  return (
    <S.DropdownMenu>
      <S.DropdownList>
        {items?.map((item, index) => (
          <S.DropdownItem key={index}>
            <S.ItemGroup>
              <Link href="/">
                <Image
                  src={item.src}
                  alt="default_profile"
                  width="30"
                  height="30"
                />
                <S.ItemContent>
                  {item.group}
                  <p>{item.decr}</p>
                </S.ItemContent>
              </Link>
            </S.ItemGroup>
          </S.DropdownItem>
        ))}
        <Link href="/">
          <Image
            src="/assets/svg/insert.svg"
            width="20"
            height={20}
            alt="콜로니 만들기"
          />
          <span>콜로니 만들기</span>
        </Link>
      </S.DropdownList>
    </S.DropdownMenu>
  );
};
