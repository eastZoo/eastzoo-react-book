import React, { FunctionComponent, SVGProps } from "react";

export interface MenuListType {
  menuName: string;
  url?: string;
  onClick?: () => void;
  icon?: any;
  subMenu?: any;
}

export interface SubMenuListType {
  menuName: string;
  url?: string;
  onClick?: () => void;
  subMenu?: any;
}
