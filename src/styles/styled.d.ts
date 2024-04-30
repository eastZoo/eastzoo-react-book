import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    gradient: {
      border: string;
      skeleton: string;
      gradientGauge: string;
    };
    shadow: {
      primary: string;
      headerPopup: string;
      mainMenu: string;

      card: string;

      toggleDot: string;
      tile: string;
      floatingBtn: string;
      statusBtn: string;

      formTemplate: string;
      modal: string;
      btn: string;
      navigation: string;
    };
    colors: {
      // COLOR
      white: string;
      whiteActive: string;
      black: string;

      // THEME
      [primaryBright: string]: string;
      [primary: string]: string;
      [primaryHover: string]: string;
      [primaryActive: string]: string;
      [secondaryBright: strgin]: string;
      [secondary: string]: string;
      [secondaryHover: string]: string;
      [secondaryActive: string]: string;
      [accentBright: string]: string;
      [accent: string]: string;
      [accentHover: string]: string;
      [accentActive: string]: string;
      [tertiaryBright: string]: string;
      [tertiary: string]: string;
      [tertiaryHover: string]: string;
      [tertiaryActive: string]: string;

      // MAIN MENU
      [icon: string]: string;
      [iconActive: string]: string;
      headerNavbar: string;

      // old
      [highlight: string]: string;
      [highlightActive: string]: string;
      function: string;
      [functionActive: string]: string;

      [stop: string]: string;
      [stopActive: string]: string;

      [cancel: string]: string;
      [cancelActive: string]: string;
      [terms: string]: string;
      [termsActive: string]: string;
      disabled: string;

      arrow: string;

      // TEXT
      labelTxt: string;
      subTxt: string;

      // BORDER
      border: string;
      linkBtnBorder: string;
      divideBorder: string;
      itemExpborder: string;
      dashedBorder: string;
      searchBlockBorder: string;

      // BACKGROUND
      mainBg: string;
      menuBg: string;
      searchBlockBg: string;

      //old
      tooltipBg: string;
      tooltipBgW: string;
      stopBg: string;
      startBg: string;

      listCheckedBg: string;
      shadeBg: string;
      skeleton: string;
      avatarBox: string;
      formBg: string;

      // LAYOUT
      startStatusTxt: string;
      startStatusReady: string;
      startStatusBg: string;
      startBtnBg: string;
      contiStatusTxt: string;
      contiStatusReady: string;
      contiStatusBg: string;
      contiBtnBg: string;
      doneBtnBg: string;
      pauseStatusTxt: string;
      pauseStatusReady: string;
      pauseStatusBg: string;
      pauseBtnBg: string;
      prev: string;
      between: string;
      end: string;
      diabledBg: string;

      // INPUT
      labelTxt: string;
      inputBorder: string;
      inputBg: string;
      inputDisabledBg: string;

      //GRID
      grid: string;
      gridReady: string;
      gridInnerBorder: string;
    };
  }
}
