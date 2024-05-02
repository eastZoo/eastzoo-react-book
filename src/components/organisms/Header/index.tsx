"use client";

import React, { useEffect, useRef, useState } from "react";
import * as S from "./headerBar.styles";
import { Button } from "@/components/atoms/Button";
import { usePathname } from "next/navigation";

interface LayoutProps {
  pageTit?: string;
  backBtnProps?: {
    color?: string;
    label?: string;
    size?: any;
    onClick?: Function;
  };
}

export const Header = ({ pageTit, backBtnProps }: LayoutProps) => {
  const pathName = usePathname();

  console.log(pathName);
  return (
    <>
      <S.Header>
        {backBtnProps && (
          <Button
            size={backBtnProps.size}
            label={backBtnProps.label}
            color={backBtnProps.color}
            onClick={backBtnProps?.onClick && backBtnProps?.onClick}
          ></Button>
        )}
      </S.Header>
    </>
  );
};
