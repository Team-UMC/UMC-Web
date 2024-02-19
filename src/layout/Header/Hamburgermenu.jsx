import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BlackLeftContainer from 'components/Header/BlackLeftContainer';
import BlackRightContainer from 'components/Header/BlackRightContainer';
import HamburgerMenuBackgroundImage from 'assets/header/HamburgerMenuBackground.svg';

import HamburgerMenuCloseBtnImage from 'assets/header/HamburgerCloseButton.svg';

import DetailLink from './DetailLink';

const SideBarWrap = styled.div`
  background: url(${HamburgerMenuBackgroundImage}) no-repeat center center;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;

  padding-top: 20px;
  z-index: 9999;
  background-color: #ffffff;
  height: 40%;
  width: 100%;
  top: -60%;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    top: 0;
    transition: 0.5s ease;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 50%;
  justify-content: space-between;
`;

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const outside = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);
    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });
  const handlerOutsie = (e) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SideBarWrap className={isOpen ? 'open' : ''} ref={outside}>
        <Container>
          <img
            src={HamburgerMenuCloseBtnImage}
            onClick={toggleSide}
            style={{ cursor: 'pointer', color: 'white' }}
          />

          <CenterWrapper>
            <BlackLeftContainer />
            <hr />
            <br />
            <DetailLink toggleSide={toggleSide} />
          </CenterWrapper>

          <BlackRightContainer />
        </Container>
      </SideBarWrap>
    </>
  );
};

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default HamburgerMenu;
