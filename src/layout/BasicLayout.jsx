import React from 'react';
import SmallHeader from 'layout/Header/SmallHeader';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #f2f5fc;
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
