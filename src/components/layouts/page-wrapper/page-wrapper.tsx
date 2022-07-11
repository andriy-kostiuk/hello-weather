import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';

function PageWrapper() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default PageWrapper;
