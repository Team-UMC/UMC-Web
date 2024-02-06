import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import LeftContainer from 'components/Header/LeftContainer';
import RightContainer from 'components/Header/RightContainer';

import LargeHeaderImage from 'assets/header/LargeHeader.svg';
import SmallHeaderImage from 'assets/header/SmallHeader.png';

const HeaderWrapper = styled.div`
  // Header 배경 이미지 설정
  background: url(${LargeHeaderImage}) no-repeat center center;
  background-size: cover;

  display: flex;

  // 왼쪽 요소와 오른쪽 요소의 각 좌우 여백 생성
  justify-content: space-around;

  // 왼쪽 요소와 오른쪽 요소 가운데 정렬 (수직)
  align-items: flex-start;

  // 왼쪽 요소와 오른쪽 요소 가로로 정렬
  flex-direction: row;

  // 화면 width 전체
  width: 100%;

  // header.svg와 smallHeader.svg 높이만큼으로 설정
  height: ${(props) => (props.isScrolled ? 'auto' : '100vh')};

  // 스크롤 시에도 위치 최상단 고정
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
  const [canScrolled, setScrolled] = useState(false);

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
          <LeftContainer />
          <RightContainer isScrolled={canScrolled}/>
        </Wrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
