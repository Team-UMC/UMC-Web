import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import LeftContainer from 'components/Header/LeftContainer';
import RightContainer from 'components/Header/RightContainer';

import LargeHeaderImage from 'assets/header/LargeHeader.svg';
import SmallHeaderImage from 'assets/header/SmallHeader.png';
import HamburgerMenuBtnImage from 'assets/header/HamburgerOpenButton.svg';

import HamburgerMenu from './Hamburgermenu';

const HeaderWrapper = styled.div`
  background: url(${LargeHeaderImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  height: ${(props) => (props.isScrolled ? 'auto' : '100vh')};
  position: fixed;
  top: 0;
  transition: background 0.3s ease;

  z-index: 999;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: space-evenly;
  align-items: center;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [canScrolled, setScrolled] = useState(false);

  const toggleSide = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderWrapper
        style={{
          background: `url(${
            canScrolled ? SmallHeaderImage : LargeHeaderImage
          }) no-repeat center center`,
        }}
        isScrolled={canScrolled}
      >
        <Wrapper>
          <img
            src={HamburgerMenuBtnImage}
            onClick={toggleSide}
            style={{ cursor: 'pointer', color: 'white' }}
          />
          <LeftContainer />
          <RightContainer isScrolled={canScrolled} />
        </Wrapper>
      </HeaderWrapper>

      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
