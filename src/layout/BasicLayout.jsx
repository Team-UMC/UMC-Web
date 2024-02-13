import React from 'react';
import SmallHeader from 'layout/Header/SmallHeader';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #f2f5fc;
  height: 100%;
`;

const BasicLayout = () => {
  return (
    <>
      <SmallHeader />
      <Div>
        <Outlet />
      </Div>
    </>
  );
};

export default BasicLayout;
