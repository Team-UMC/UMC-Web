import React from 'react';
import styled from 'styled-components';

import BlackLeftContainer from 'components/Header/BlackLeftContainer';
import BlackRightContainer from 'components/Header/BlackRightContainer';

const Container = styled.div`
  background-color: #ffffff;
  top: 0;
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: space-evenly;
  align-items: center;
`;

const HamburgerMenu = () => {
  return (
    <Container>
      <BlackLeftContainer />
      <BlackRightContainer />
    </Container>
  );
};

export default HamburgerMenu;
