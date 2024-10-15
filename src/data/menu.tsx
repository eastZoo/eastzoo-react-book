import { MenuNames } from "./menu-names";
import { ReactComponent as IconMenu01 } from "../styles/assets/svg/icon_menu_01.svg";
import { ReactComponent as IconMenu02 } from "../styles/assets/svg/icon_menu_02.svg";
import { ReactComponent as IconMenu03 } from "../styles/assets/svg/icon_menu_03.svg";
import { ReactComponent as IconMenu05 } from "../styles/assets/svg/icon_menu_05.svg";
import { ReactComponent as IconMenu06 } from "../styles/assets/svg/icon_menu_06.svg";

export const MenuPermissions = [
  { name: MenuNames.ADMIN_SETTINGS, depth: 1, order: 24 },
  { name: MenuNames.USER_MANAGEMENT, depth: 2, order: 29 },
  { name: MenuNames.ACCOUNT_MANAGEMENT, depth: 3, order: 30 },
  { name: MenuNames.AUTH_MANAGEMENT, depth: 3, order: 31 },
  { name: MenuNames.ACCESS_LOG_MANAGEMENT, depth: 3, order: 32 },
];

export const menuList = [
  {
    id: 1,
    title: MenuNames.ADMIN_SETTINGS,
    icon: <IconMenu06 />,
    depth: 1,
    submenu: [
      {
        id: 1,
        title: MenuNames.USER_MANAGEMENT,
        depth: 2,
        submenu: [
          {
            id: 1,
            title: MenuNames.ACCOUNT_MANAGEMENT,
            depth: 3,
            path: "/setting/user/account",
          },
          {
            id: 2,
            title: MenuNames.AUTH_MANAGEMENT,
            depth: 3,
            path: "/setting/user/auth",
          },
          {
            id: 3,
            title: MenuNames.ACCESS_LOG_MANAGEMENT,
            depth: 3,
            path: "/setting/user/access-log",
          },
        ],
      },
    ],
  },
];
