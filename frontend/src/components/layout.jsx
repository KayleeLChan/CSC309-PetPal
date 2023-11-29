import React from 'react';
import Header from './header-files/header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div data-bs-theme="petpal">
        <Header></Header>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
