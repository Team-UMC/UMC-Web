import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  z-index: 5;
  border-radius: 15px;
  background-color: #FFFFFF;
  height: 50%;
  width: 100vw;
  top:20%;
  position: absolute;
  transition: 0.5s ease;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const DetailList = styled.section`
  display: flex;
  width: 20%;
  align-items: center;
  flex-direction: column;
`;

const HamburgerMenu = () => {
  return (
    <MenuContainer>
      <MenuList>
        <DetailList>
          <li>1</li>
          <li>2</li>
        </DetailList>

        <DetailList>
          <li>1</li>
          <li>2</li>
        </DetailList>

        <DetailList>
          <li>1</li>
          <li>2</li>
        </DetailList>

        <DetailList>
          <li>1</li>
          <li>2</li>
        </DetailList>
      </MenuList>
    </MenuContainer>
  );
};

export default HamburgerMenu;
