import { DefaultTheme } from 'styled-components';
import { ThemeEnum } from '../interfaces/styled';
import { defaultTheme } from './default';

export const darkTheme: DefaultTheme = {
  type: ThemeEnum.dark,
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primaryBg: '#142235',
    secondaryBg: '#4F4F4F',
    cardBg: '#2E3035',
    mainText: '#ffffff',
  },
};
