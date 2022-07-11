export enum ThemeEnum {
  light = 'light',
  dark = 'dark'
}

export interface ITheme {
  colors: {
    baseBlack: string
    baseWhite: string
  };
  viewports: {
    mobileWidth: string
    tabletWidth: string
    laptopWidth: string
    desktopWidth: string
  };
}
