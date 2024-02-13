import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card as MuiCard, CardContent as MuiCardContent } from '@mui/material';
import styled from 'styled-components';

import suggestion from 'assets/boardCard/suggestion.svg';
import campus from 'assets/boardCard/school.svg';
import branch from 'assets/boardCard/branch.svg';
import center from 'assets/boardCard/union.svg';

// 게시판 박스를 감싸는 컴포넌트
const Card = styled(MuiCard)`
  /* 박스 크기 & 외형 스타일링 */
  height: 100%;
  border-radius: 12px;
  padding: 40px 16px;
  font-family: 'Pretendard';
  background: white;

  /* 레이아웃 정렬 */
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

// MuiCardContent 스타일링 컴포넌트
const CardContent = styled(MuiCardContent)`
  padding: 0px;
  background: white;
`;

// 게시판 박스의 내용을 감싸는 컴포넌트
const BoardBoxContainer = styled.div`
  height: 100%;
  padding-bottom: 30px;
  border-color: white;
  background: white;

  /* 레이아웃 정렬 */
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;

// 게시판 박스의 이미지 스타일링 컴포넌트
const BoardBoxImage = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding-bottom: 8px;
  gap: 8px;
`;

// 게시판 박스의 제목 스타일링 컴포넌트
const BoardBoxTitle = styled.h3`
  /* 제목 레이아웃 & 색상 스타일링 */
  padding-bottom: 10px;
  text-align: left;
  color: #000c76;
  background: white;

  /* 폰트 스타일링 */
  font-size: 14px;
  font-weight: 600;
  gap: 10px;
  word-wrap: break-word;
`;

// 게시판 박스의 내용(학교/지부/연합)을 감싸는 컴포넌트
const BoardBoxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// 게시판 박스의 링크 스타일링 컴포넌트
const BoardBoxLink = styled(NavLink)`
  color: black;
  background: white;

  /* 링크 폰트 스타일링 */
  text-align: left;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  word-wrap: break-word;

  /* 애니메이션 효과 */
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* 링크 호버 시 효과 */
  &:hover {
    color: #8784ff;
  }

  /* 링크 활성화(클릭) 시 효과 */
  &:active {
    color: #000c76;
  }
`;

// 게시판 박스 묶음의 레이아웃 스타일링 컴포넌트
const BoardBoxWrapperLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

// 게시판 박스의 각 항목
const BoardBoxItem = ({ image, title, links }) => {
  // 현재 페이지의 링크에 적용할 스타일
  const activeStyle = {
    color: '#8784ff',
  };

  return (
    <BoardBoxContainer>
      <BoardBoxImage>
        <img src={image} alt={title[0]} />
      </BoardBoxImage>
      <BoardBoxTitle>{title[0]}</BoardBoxTitle>
      <BoardBoxContentWrapper>
        {
          // 링크 목록을 순회하며 각 링크를 렌더링
          links.map((link, index) => (
            // 링크 렌더링
            <BoardBoxLink
              key={index}
              to={`/board/${title[1]}/${link.path}` /* 링크 경로 */}
              style={
                ({ isActive }) =>
                  isActive
                    ? activeStyle
                    : undefined /* 현재 페이지의 링크에 적용할 스타일 */
              }
            >
              {link.name}
            </BoardBoxLink>
          ))
        }
      </BoardBoxContentWrapper>
    </BoardBoxContainer>
  );
};

// props 검사
BoardBoxItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// 게시판 박스의 묶음
const BoardBoxWrapper = () => {
  // 게시판 박스의 정보
  const boardBoxes = [
    {
      image: campus,
      title: ['학교', 'campus'],
      links: [
        { name: '공지사항', path: 'notice' },
        { name: '자유 게시판', path: 'free' },
        { name: '질문 게시판', path: 'question' },
        { name: '워크북 게시판', path: 'workbook' },
        { name: '이전 기수 게시판', path: 'ob' },
      ],
    },
    {
      image: branch,
      title: ['지부', 'branch'],
      links: [
        { name: '공지사항', path: 'notice' },
        { name: '자유 게시판', path: 'free' },
        { name: '질문 게시판', path: 'question' },
        { name: '이전 기수 게시판', path: 'ob' },
      ],
    },
    {
      image: center,
      title: ['연합', 'center'],
      links: [
        { name: '공지사항', path: 'notice' },
        { name: '자유 게시판', path: 'free' },
        { name: '질문 게시판', path: 'question' },
        { name: '이전 기수 게시판', path: 'ob' },
      ],
    },
    {
      image: suggestion,
      title: ['건의함', 'suggestion'],
      links: [],
    },
  ];

  return (
    <BoardBoxWrapperLayout>
      {
        // 게시판 박스 목록을 순회하며 각 박스를 렌더링
        boardBoxes.map((box, index) => (
          <BoardBoxItem
            key={index}
            image={box.image}
            title={box.title}
            links={box.links}
          />
        ))
      }
    </BoardBoxWrapperLayout>
  );
};

// 게시판 박스 (좌측 메뉴바)
const BoardBox = () => {
  return (
    <Card>
      <CardContent>
        <BoardBoxWrapper />
      </CardContent>
    </Card>
  );
};

export default BoardBox;
