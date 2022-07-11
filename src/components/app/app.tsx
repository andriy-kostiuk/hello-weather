import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import HomePage from '../pages/home-page/home-page';
import StatisticPage from '../pages/statistic-page/statistic-page';
import PageWrapper from '../layouts/page-wrapper/page-wrapper';
import { GlobalStyle } from './styles';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { defaultTheme } from '../../themes/default';
import { AppRouts } from '../../const';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
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
    </BrowserRouter>
  );
}

export default App;
