import { createSlice } from '@reduxjs/toolkit';
import { DefaultTheme } from 'styled-components';
import { lightTheme } from '../../themes/light';
import { ThemeEnum } from '../../interfaces/styled';
import { darkTheme } from '../../themes/dark';
import { storage } from '../../utils';

export interface ThemeStateInterface {
  currentTheme: DefaultTheme;
}

const initialState: ThemeStateInterface = {
  currentTheme: storage.getItem('theme') || lightTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state): void {
      const theme = state.currentTheme.type === ThemeEnum.light ? darkTheme : lightTheme;
      state.currentTheme = theme;
      storage.setItem('theme', theme);
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
