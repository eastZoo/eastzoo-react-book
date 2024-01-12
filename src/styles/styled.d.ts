import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    shadows: {
      main: string;
      primary: string;
      formTemplate: string;
      img: string;
      navigation: string;
      btn: string;
    };
    colors: {
      primary: string;
      primaryHover: string;
      primaryShade: string;
      gray: string;
      btnprimary: string;

      iconDefault: string;

      borderDefault: string;

      shadeDefault: string;

      chartBorder: string;
      chartBorderInner: string;
      chartLabel: string;
      chartBar01: string;
      chartBar02: string;
      chartBar03: string;

      scrollThumb: string;

      white: string;
      whiteShade: string;
      whiteHover: string;
      black: string;
      shadowBlack: string;
    };
    text_colors: {
      black: string;
      gray: string;
      dark: string;
      red: string;
      money_red: string;
      money_blue: string;
    };
    radius_colors: {
      dark: string;
      red: string;
      blue: string;
    };
  }
}
