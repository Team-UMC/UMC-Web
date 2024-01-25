import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// eslint-disable-next-line
import { setScrolled, selectCanScrolled } from 'app/headerSlice';
import { useLocation } from 'react-router-dom';

import NewRight from 'components/Header/NewRight';
import NewLeft from 'components/Header/NewLeft';

import Header from 'assets/header/header.svg';
import SmallHeader from 'assets/header/smallheader.svg';

const HeaderWrapper = styled.div`
  display: flex;

  // 왼쪽 요소와 오른쪽 요소의 각 좌우 여백 생성
  justify-content: space-around;

  // 왼쪽 요소와 오른쪽 요소 가운데 정렬 (수직)
  align-items: flex-start;

  // 왼쪽 요소와 오른쪽 요소 가로로 정렬
  flex-direction: row;

  // Header 배경 이미지 설정
  background: url(${Header});

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

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const NewHeader = () => {
  const dispatch = useDispatch();
  const canScrolled = useSelector(selectCanScrolled);
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      dispatch(setScrolled(scrollY > 0));
    };

    const currentRoute = location.pathname;

    // 현재 경로가 홈 페이지("/")인지 확인
    if (currentRoute === '/') {
      window.addEventListener('scroll', handleScroll);
    } else {
      // 홈 페이지가 아닌 경우 isScrolled를 true로 설정
      dispatch(setScrolled(true));
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, location]);

  return (
    <>
      <HeaderWrapper
        isScrolled={canScrolled}
        style={{
          background: `url(${
            canScrolled ? SmallHeader : Header
          }) no-repeat center center`,
        }}
      >
        <Wrapper>
          <NewLeft isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <NewRight isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          ) : (
            <button onClick={handleLogin}> 로그인 </button>
          )}
        </Wrapper>
      </HeaderWrapper>
    </>
  );
};

export default NewHeader;
