import React from 'react';
import NewHeader from './Header/NewHeader';
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