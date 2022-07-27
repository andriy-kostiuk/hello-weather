import { DefaultTheme } from 'styled-components';
import { ThemeEnum } from '../interfaces/styled';
import { defaultTheme } from './default';

export const lightTheme: DefaultTheme = {
  type: ThemeEnum.light,
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primaryBg: '#ffffff',
    secondaryBg: '#ffffff',
    cardBg: 'rgba(71, 147, 255, 0.2)',
    mainText: '#000000',
  },
};
