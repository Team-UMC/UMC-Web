import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import NewRight from 'components/Header/NewRight';
import NewLeft from 'components/Header/NewLeft';

import Header from 'assets/header/header.svg';
import SmallHeader from 'assets/header/smallheader.svg';

const HeaderWrapper = styled.div`
  display: flex;

  // 왼쪽 요소와 오른쪽 요소의 각 좌우 여백 생성
  justify-content: space-around;

  // 왼쪽 요소와 오른쪽 요소 가운데 정렬 (수직)
  align-items: center;

  // 왼쪽 요소와 오른쪽 요소 가로로 정렬
  flex-direction: row;

  // Header 배경 이미지 설정
  background: url(${Header}) no-repeat center center;

  // 화면 width 전체
  width: 100%;

  // header.svg와 smallHeader.svg 높이만큼으로 설정
  height: ${(props) => (props.isScrolled ? 'auto' : '100vh')};

  // 스크롤 시에도 위치 최상단 고정
  position: fixed;
  top: 0;

  transition: background 0.3s ease;

  background-size: cover;
`;

const NewHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderWrapper
        isScrolled={isScrolled}
        style={{
          background: `url(${
            isScrolled ? SmallHeader : Header
          }) no-repeat center center`,
        }}
      >
        <NewLeft isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <NewRight isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        ) : (
          <button onClick={handleLogin}> 로그인 </button>
        )}
      </HeaderWrapper>
    </>
  );
};

export default NewHeader;
