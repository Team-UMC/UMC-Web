import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NavStyleStar from 'assets/Header/NavStyleStar.svg';
import NavTextStyle from 'assets/Header/NavTextStyle.svg';

const NavWrapper = styled.nav`
  display: flex;

  // 각 Nav 사이 여백 생성
  justify-content: space-between;

  // 전체 화면 width(100%)의 60% 사용
  width: 50%;

  position: relative;
`;

const StyledLink = styled(Link)`
  // Link 밑줄 제거
  text-decoration: none;
  display: flex;

  // 스타일링 요소와 Link 수직 정렬
  flex-direction: column;

  // 스타일링 요소와 Link 가운데 정렬
  align-items: center;
  color: white;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 130px;
  height: 39px;
  transition: background 0.3s ease;

  &:hover {
    background: url(${NavTextStyle}) no-repeat center center;
  }
`;

const LeftContainer = () => {
  return (
    <NavWrapper>
      <>
        <StyledLink to="/main">
          <img src={NavStyleStar} alt="별" />
          <TextWrapper>홈</TextWrapper>
        </StyledLink>

        <StyledLink to="/notice/campus">
          <img src={NavStyleStar} alt="별" />
          <TextWrapper>공지사항</TextWrapper>
        </StyledLink>

        <StyledLink to="/board/campus/free">
          <img src={NavStyleStar} alt="별" />
          <TextWrapper>게시판</TextWrapper>
        </StyledLink>

        <StyledLink to="/history">
          <img src={NavStyleStar} alt="별" />
          <TextWrapper>히스토리</TextWrapper>
        </StyledLink>

        <StyledLink to="/album">
          <img src={NavStyleStar} alt="별" />
          <TextWrapper>사진첩</TextWrapper>
        </StyledLink>
      </>
    </NavWrapper>
  );
};

export default LeftContainer;
