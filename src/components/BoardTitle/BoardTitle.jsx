import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SchoolIcon from 'assets/titleIcon/schoolIcon.svg';
import BranchIcon from 'assets/titleIcon/branchIcon.svg';
import UnionIcon from 'assets/titleIcon/unionIcon.svg';
import TitleDot from 'assets/titleIcon/titledot.svg';

const BoardTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 8px;
  padding-bottom: 72px;
`;

const BoardTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BoardTitleMainStyle = styled.h1`
  color: #7682f6;
  font-size: 34px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
`;

const HighlightedText = styled.span`
  color: #00095c;
`;

const TitleWithDot = styled.div`
  position: relative;
  padding-top: 24px;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${TitleDot});
    background-size: cover;
  }
`;

// BoardTitleMain: children을 받아서 게시판 이름 출력
const BoardTitleMain = ({ children }) => {
  // 게시판 이름에 '게시판'이 포함되어 있으면 '게시판'을 하이라이트
  const parts = children.split(/(게시판)/);

  return (
    <BoardTitleMainStyle>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part === '게시판' ? <HighlightedText>{part}</HighlightedText> : part}
          {(part === '공지' ||
            part === '자유' ||
            part === '질문' ||
            part === '워크북' ||
            part === '이전 기수') && <TitleWithDot>{part}</TitleWithDot>}
        </React.Fragment>
      ))}
    </BoardTitleMainStyle>
  );
};

BoardTitleMain.propTypes = {
  children: PropTypes.node,
};

const BoardTitleSub = styled.p`
  color: #9d9d9d;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const CATEGORY_LISTS = [
  {
    path: 'school',
    title: '학교',
    image: SchoolIcon,
  },
  {
    path: 'branch',
    title: '지부',
    image: BranchIcon,
  },
  {
    path: 'union',
    title: '연합',
    image: UnionIcon,
  },
];

// 게시판 이름과 설명을 담은 배열
const TITLE_LISTS = [
  {
    path: 'notice',
    title: '공지사항',
    subtitle: '중요한 공지들을 알려드려요!',
  },
  {
    path: 'free',
    title: '자유 게시판',
    subtitle: '챌린저들과 자유롭게 의견을 나눠보세요!',
  },
  {
    path: 'question',
    title: '질문 게시판',
    subtitle: '궁금한 점을 질문하고 답해보세요!',
  },
  {
    path: 'workbook',
    title: '워크북 게시판',
    subtitle: '워크북으로 공부 의지를 활활 불태워 봐요!',
  },
  {
    path: 'prev',
    title: '이전 기수 게시판',
    subtitle: '이전 챌린저들과 함께 소통해봐요!',
  },
];

// BoardTitle: 게시판 제목 컴포넌트
const BoardTitle = () => {
  const { category, boardPath } = useParams();
  const categoryInfo = CATEGORY_LISTS.find(
    (categoryInfo) => categoryInfo.path === category,
  );
  const board = TITLE_LISTS.find((link) => link.path === boardPath);

  if (!categoryInfo || !board) {
    return null;
  }

  return (
    <BoardTitleContainer>
      <div className="board-title-icon">
        <img src={categoryInfo.image} alt={`${category}-icon`} />
      </div>
      <BoardTitleWrapper>
        <BoardTitleMain>{board.title}</BoardTitleMain>
        <BoardTitleSub>{board.subtitle}</BoardTitleSub>
      </BoardTitleWrapper>
    </BoardTitleContainer>
  );
};

export default BoardTitle;
