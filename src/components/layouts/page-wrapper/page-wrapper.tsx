import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import { Main } from './styled';

function PageWrapper() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default PageWrapper;
