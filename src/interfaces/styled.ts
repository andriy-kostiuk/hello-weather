export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export interface ITheme {
  colors: {
    baseBlack: string
    baseWhite: string
    baseBlue: string
    baseGrey: string
    blue100: string
    primaryBg: string
    secondaryBg: string
    cardBg: string
    mainText: string
  };
  viewports: {
    mobileWidth: string
    tabletWidth: string
    laptopWidth: string
    desktopWidth: string
  };
  pageIndents: {
    mobilePadding: string
    tabletPadding: string
    laptopPadding: string
    desktopPadding: string
  };
  headerHeight: string;

  font: {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
  };
}
