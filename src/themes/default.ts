import { ITheme } from '../interfaces/styled';

export const defaultTheme: ITheme = {
  colors: {
    baseBlack: '#000000',
    baseWhite: '#ffffff',
    baseBlue: '#4793FF',
    blue100: 'rgba(71, 147, 255, 0.2)',
    baseGrey: '#939CB0',
  },
  viewports: {
    mobileWidth: '360px',
    tabletWidth: '768px',
    laptopWidth: '1024px',
    desktopWidth: '1200px',
  },
  pageIndents: {
    mobilePadding: '20px',
    tabletPadding: '30px',
    laptopPadding: '60px',
    desktopPadding: '0',
  },
  headerHeight: '65px',

  font: {
    fontFamily: 'Space Grotesk',
    fontSize: '14px',
    lineHeight: '1.2',
    fontWeight: '400',
  },
};
