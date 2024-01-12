import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  shadows: {
    main: "0 2px 10px -5px rgba(0,0,0,0.2)",
    primary: "0 2px 6px -3px rgba(0,0,0,0.1)",
    img: "0px 2px 10px -4px rgba(0,0,0,0.25)",
    formTemplate: "0 -2px 10px -4px rgba(0,0,0,0.25)",
    navigation: "0 2px 10px 0 rgba(0,0,0,0.07)",
    btn: "0 2px 10px -5px rgba(0,0,0,0.15)",
  },
  colors: {
    //메인컬러
    primary: "#E7525B",
    primaryHover: "#D73E47",
    primaryShade: "rgba(231, 82, 91, 0.06)",
    gray: "#F3F3F3",
    btnprimary: "#E7525B0F",

    //아이콘
    iconDefault: "#727272",

    //Border
    borderDefault: "#F3F3F3",

    //Background
    shadeDefault: "#FCFCFC",

    //Chart
    chartBorder: "#DADADA",
    chartBorderInner: "#F3F3F3",
    chartLabel: "#737373",
    chartBar01: "#FFA99F",
    chartBar02: "#FFDC9F",
    chartBar03: "#9FA4FF",

    //Scrollbar
    scrollThumb: "#C6C6C6",

    //기본음영
    white: "#fff",
    whiteShade: "#F9F9F9",
    whiteHover: "#FEF5F5",
    black: "#000",
    shadowBlack: "#000000a6",
  },
  text_colors: {
    //텍스트
    black: "#000",
    gray: "#838383",
    dark: "#404040",
    red: "#E7525B",
    money_red: "#FB5A49",
    money_blue: "#9FA4FF",
  },
  radius_colors: {
    dark: "#404040",
    red: "#FB5A49",
    blue: "#9FA4FF",
  },
};
