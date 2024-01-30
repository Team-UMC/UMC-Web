import React from 'react';
import SmallHeader from './Header/SmallHeader';
import { Outlet } from 'react-router-dom';

const BasicLayout = () => {
  return (
    <>
      <SmallHeader />
      <Outlet />
    </>
  );
};

export default BasicLayout;