import React from 'react';
import { Routes, Route, BrowserRouter, Navigate, HashRouter } from 'react-router-dom';
import HomePage from '../pages/home-page/home-page';
import StatisticPage from '../pages/statistic-page/statistic-page';
import PageWrapper from '../layouts/page-wrapper/page-wrapper';
import { GlobalStyle } from './styles';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { AppRouts } from '../../const';
import { useCustomSelector } from '../../hooks/store';

function App() {
  const theme = useCustomSelector(state => state.theme.currentTheme);
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Normalize />
        <Routes>
          <Route path={AppRouts.HOME} element={<PageWrapper />}>
            <Route index element={<HomePage />} />
            <Route path={AppRouts.STATISTIC} element={<StatisticPage />} />
            <Route path="*" element={<Navigate to={AppRouts.HOME} />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
