import React from 'react';
import NewHeader from './Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <NewHeader />
      <Outlet />
    </>
  );
};

export default MainLayout;