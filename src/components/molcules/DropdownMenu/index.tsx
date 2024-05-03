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
              <Link href={`${item.link}`}>
                <S.ItemContent>
                  <p>{item.componentName}</p>
                </S.ItemContent>
              </Link>
            </S.ItemGroup>
          </S.DropdownItem>
        ))}
      </S.DropdownList>
    </S.DropdownMenu>
  );
};
