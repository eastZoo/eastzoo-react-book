import IconMenu01 from "public/assets/svg/icon_menu_01.svg";
import IconMenu02 from "public/assets/svg/icon_menu_02.svg";
import IconMenu03 from "public/assets/svg/icon_menu_03.svg";
import IconMenu05 from "public/assets/svg/icon_menu_05.svg";
import IconMenu06 from "public/assets/svg/icon_menu_06.svg";
import { MenuNames } from "./menu-names";

export const MenuPermissions = [
  { name: MenuNames.SHIP_INFO, depth: 1, order: 1 },
  { name: MenuNames.SHIP_INFO_LIST, depth: 2, order: 2 },
  { name: MenuNames.SHIP_OPERATION_STATUS, depth: 2, order: 3 },
  { name: MenuNames.EQUIPMENT_MONITORING, depth: 1, order: 4 },
  { name: MenuNames.EQUIPMENT_ALL, depth: 2, order: 5 },
  { name: MenuNames.GAS_TURBINE, depth: 2, order: 6 },
  { name: MenuNames.GENERATOR_01, depth: 2, order: 7 },
  { name: MenuNames.GENERATOR_02, depth: 2, order: 8 },
  { name: MenuNames.GENERATOR_03, depth: 2, order: 9 },
  { name: MenuNames.GENERATOR_04, depth: 2, order: 10 },
  { name: MenuNames.DATA_ANALYSIS, depth: 1, order: 11 },
  { name: MenuNames.TREND_ANALYSIS, depth: 2, order: 12 },
  { name: MenuNames.SAME_TIME_CHARTS, depth: 3, order: 13 },
  { name: MenuNames.SIMILAR_CASE_ANALYSIS, depth: 3, order: 14 },
  { name: MenuNames.DATA_MANAGEMENT, depth: 2, order: 15 },
  { name: MenuNames.DATA_FILE_VIEW, depth: 3, order: 16 },
  { name: MenuNames.SENSOR_DATA_VIEW, depth: 3, order: 17 },
  { name: MenuNames.MAINTENANCE_SUPPORT, depth: 1, order: 18 },
  { name: MenuNames.ALARM_MANAGEMENT, depth: 2, order: 19 },
  { name: MenuNames.STATUS_DIAGNOSIS_ALARM, depth: 3, order: 20 },
  { name: MenuNames.ECS_ALARM, depth: 3, order: 21 },
  { name: MenuNames.REPORT_MANAGEMENT, depth: 2, order: 22 },
  { name: MenuNames.TECH_DOC_MANAGEMENT, depth: 2, order: 23 },
  { name: MenuNames.ADMIN_SETTINGS, depth: 1, order: 24 },
  { name: MenuNames.SHIP_MANAGEMENT, depth: 2, order: 25 },
  { name: MenuNames.SHIP_INFO_MANAGEMENT, depth: 3, order: 26 },
  { name: MenuNames.EQUIPMENT_INFO_MANAGEMENT, depth: 3, order: 27 },
  { name: MenuNames.EQUIPMENT_CODE_MANAGEMENT, depth: 3, order: 28 },
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
            path: "/setting/user/permission",
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
