import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BlackLeftContainer from 'components/Header/BlackLeftContainer';
import BlackRightContainer from 'components/Header/BlackRightContainer';
import DetailLink from './DetailLink';

const SideBarWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;

  z-index: 9999;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: #ffffff;
  height: 50%;
  width: 100%;
  top: -60%;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    top: 0;
    transition: 0.5s ease;
  }
`;

const CenterWrapper = styled.div`
display: flex;
flex-direction: column;
  height: 90%;
`

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
    <SideBarWrap className={isOpen ? 'open' : ''}>
      <div
        onClick={toggleSide}
        onKeyDown={toggleSide}
        style={{ cursor: 'pointer' }}
      >
        닫기
      </div>
      <CenterWrapper>
        <BlackLeftContainer />
        <DetailLink />
      </CenterWrapper>
      
      <BlackRightContainer />
    </SideBarWrap>
  );
};

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default HamburgerMenu;
