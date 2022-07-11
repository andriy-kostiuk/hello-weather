import { ITheme } from '../interfaces/styled';

export const defaultTheme: ITheme = {
  colors: {
    baseBlack: '#000000',
    baseWhite: '#ffffff',
  },
  viewports: {
    mobileWidth: '360px',
    tabletWidth: '768px',
    laptopWidth: '1024px',
    desktopWidth: '1170px',
  },
};
