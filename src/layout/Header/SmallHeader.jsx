import React, { useState } from 'react';
import styled from 'styled-components';

import LeftContainer from 'components/Header/LeftContainer';
import RightContainer from 'components/Header/RightContainer';

import SmallHeaderImage from 'assets/Header/SmallHeader.png';

import HamburgerMenuBtnImage from 'assets/Header/HamburgerOpenButton.svg';

import HamburgerMenu from './Hamburgermenu';

const HeaderWrapper = styled.div`
  display: flex;

  // 왼쪽 요소와 오른쪽 요소의 각 좌우 여백 생성
  justify-content: space-around;

  // 왼쪽 요소와 오른쪽 요소 가운데 정렬 (수직)
  align-items: flex-start;

  // 왼쪽 요소와 오른쪽 요소 가로로 정렬
  flex-direction: row;

  // Header 배경 이미지 설정
  background: url(${SmallHeaderImage});

  // 화면 width 전체
  width: 100%;

  // SmallHeader.png 높이만큼으로 설정
  height: auto;

  // 스크롤 시에도 위치 최상단 고정
  position: fixed;
  top: 0;

  transition: background 0.3s ease;

  background-size: cover;

  z-index: 999;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const SmallHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <img
            src={HamburgerMenuBtnImage}
            onClick={toggleSide}
            style={{ cursor: 'pointer', color: 'white' }}
          />
          <LeftContainer />
          <RightContainer />
        </Wrapper>
      </HeaderWrapper>

      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default SmallHeader;
