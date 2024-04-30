import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  gradient: {
    border:
      "linear-gradient(to right, #fff, #0000001F 40%, #0000001F 60%, #fff) 1 1 1 1",
    skeleton:
      "linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%)",
    gradientGauge:
      "linear-gradient(90deg, #54DC9D 0%, #FFCD2E 36.98%, #FF9726 63.02%, #EE2A59 100%)",
  },
  shadow: {
    primary: "0 2px 6px -3px rgba(0,0,0,0.1)",
    headerPopup: "0 2px 10px 0 rgba(0,0,0,0.1)",
    mainMenu: "0px 2px 10px -4px rgba(0,0,0,0.2)",

    card: "0px 2px 8px 0 rgba(0,0,0,.04)",

    toggleDot: "0px 2px 6px 0px rgba(0,0,0,.14)",
    tile: "0 2px 10px -4px rgba(0,0,0,0.07)",
    floatingBtn: "0 2px 10px 0px rgba(0,0,0,0.1)",
    statusBtn: "0px 2px 20px -4px rgba(0,0,0,.15)",
    formTemplate: "0 2px 10px -4px rgba(0,0,0,0.15)",

    // old

    modal: "0 2px 10px -2px rgba(0,0,0,.25)",
    btn: "0 2px 10px -5px rgba(0,0,0,0.15)",
    navigation: "0 2px 10px 0 rgba(0,0,0,0.07)",
  },
  colors: {
    // COLOR
    white: "#ffffff",
    whiteActive: "#165EF30a",
    black: "#000000",

    // THEME
    primaryBright: "#3774F1",
    primary: "#165EF3",
    primaryHover: "#0B50F2",
    primaryActive: "#0146D5",
    secondaryBright: "#929AA1",
    secondary: "#7C848C",
    secondaryHover: "#5E6873",
    secondaryActive: "#475462",
    accentBright: "#FFC814",
    accent: "#FFB100",
    accentHover: "#FFA800",
    accentActive: "#FF9900",
    tertiaryBright: "#7DD478",
    tertiary: "#61C95B",
    tertiaryHover: "#48BF41",
    tertiaryActive: "#26B11E",

    // HEADER
    icon: "#223957",
    iconActive: "#152D4B",
    headerNavbar: "#475462",

    //old
    highlight: "#FAB416",
    highlightActive: "#FD9D00",
    function: "#7C848C",
    functionActive: "#646F79",
    stop: "#DA0728",
    stopActive: "#DA0728",
    search: "#223957",
    searchActive: "#152D4B",

    cancel: "#7C848C",
    cancelActive: "#9295A8",
    dotted: "#DF6464",
    dottedActive: "#CD4545",
    terms: "#676B85",
    termsActive: "#4B5070",
    disabled: "#EAECF3",

    gray: "#8E8E93",
    yellow: "#FF9D00",
    green: "#2DB400",
    orange: "#FF4926",
    arrow: "#6E6E6E",

    // TEXT
    titleTxt: "#223243",
    subTxt: "#3F3F3F",

    darkTxt: "#2B2F45",
    headerTxt: "#676B85",
    iconNavTxt: "#484848",
    iconNavActiveTxt: "#2E397C",
    placeHolderTxt: "#C3C3C3",
    tabTxt: "#A5A8BA",
    listTitTxt: "#2B2F45",
    unitTxt: "#797979",
    expTxt: "#565656",
    noitemTxt: "#535353",
    dottedTxt: "#DF6464",
    avatarTxt: "#020F1A",

    // BORDER
    border: "#0000001F",
    linkBtnBorder: "#F2F3FC",
    divideBorder: "#EDEEF3",
    itemExpborder: "#F2F3FC",
    dashedBorder: "#AFC7F7",
    searchBlockBorder: "#E8EAF3",

    // BACKGROUND
    mainBg: "#00000005",
    menuBg: "#FAFAFA",
    searchBlockBg: "#E8EAF333",

    //old
    tooltipBg: "#F3F8FF",
    tooltipBgW: "#F3F8FFcc",
    startBg: "#FFF6E0",
    continueBg: "#E4ECFD",
    stopBg: "#FBECEE",
    listCheckedBg: "#F2F3FC",
    shadeBg: "#F3F3F3",
    handleBg: "#d0d0d0",
    skeleton: "#e5e5e5",
    avatarBox: "#323A4C",
    goodBg: "#54DC9D",
    fineBg: "#FFCD2E",
    warnBg: "#FF9726",
    dangerBg: "#EE2A59",
    formBg: "#FFFFFFcc",

    // LAYOUT
    startStatusTxt: "#FF9D00",
    startStatusReady: "#FFC66B",
    startStatusBg: "#FFF6E0",
    startBtnBg: "#FF9D00",
    contiStatusTxt: "#165EF3",
    contiStatusReady: "#3774F1",
    contiStatusBg: "#E4ECFD",
    contiBtnBg: "#165EF3",
    doneBtnBg: "#5E6873",
    pauseStatusTxt: "#FF4926",
    pauseStatusReady: "#FF775D",
    pauseStatusBg: "#FBECEE",
    pauseBtnBg: "#FF4926",
    prev: "#B8BBCF",
    between: "#F6F7FB",
    end: "#E8EAF3",
    diabledBg: "#EBEBEB",

    // INPUT
    labelTxt: "#7C848C",
    inputBorder: "#DFDFDF",
    inputBg: "#F9F9F9",
    inputDisabledBg: "#DFDFDF",

    //GRID
    grid: "#364964",
    gridReady: "#70839D",
    gridInnerBorder: "#DDE2EB",
  },
};
