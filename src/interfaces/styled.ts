export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

interface Font {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
};

interface Colors {
  baseBlack: string;
  baseWhite: string;
  baseBlue: string;
  baseGrey: string;
  blue100: string;
  primaryBg: string;
  secondaryBg: string;
  cardBg: string;
  mainText: string;
};

interface Viewports {
  mobileWidth: string;
  tabletWidth: string;
  laptopWidth: string;
  desktopWidth: string;
};

interface PageIndents {
  mobilePadding: string;
  tabletPadding: string;
  laptopPadding: string;
  desktopPadding: string;
};

export interface ITheme {
  colors: Colors;
  viewports: Viewports;
  pageIndents: PageIndents;
  headerHeight: string;
  font: Font;
}
