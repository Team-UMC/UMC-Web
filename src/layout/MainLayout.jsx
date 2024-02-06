import React from 'react';
import Header from 'layout/Header/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';


const Div = styled.div`
  background-color: #f2f5fc;
`;

const MainLayout = () => {
  return (
    <>
      <Header />
      <Div>
        <Outlet />
      </Div>
    </>
  );
};

export default MainLayout;
