import React from 'react';
import { useLocation } from 'react-router-dom';
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
  color: #00095C;
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

const BoardTitleMain = ({ children }) => {
  const parts = children.split(/(게시판)/);

  return (
    <BoardTitleMainStyle>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part === '게시판' ? <HighlightedText>{part}</HighlightedText> : part}
          {(part === '공지' || part === '자유' || part === '질문' || part === '워크북' || part === '이전 기수') && <TitleWithDot>{part}</TitleWithDot>}
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

const SchoolTitle = () => {
  const location = useLocation();
  const boardPath = location.pathname.split('/').pop();
  const board = TITLE_LISTS.find((board) => board.path === boardPath);

  return (
    <BoardTitleContainer>
      <div className="board-title-icon">
        <img src={SchoolIcon} alt="school-icon" />
      </div>
      <BoardTitleWrapper>
        <BoardTitleMain>{board?.title}</BoardTitleMain>
        <BoardTitleSub>{board?.subtitle}</BoardTitleSub>
      </BoardTitleWrapper>
    </BoardTitleContainer>
  );
};

const BranchTitle = () => {
  const location = useLocation();
  const boardPath = location.pathname.split('/').pop();
  const board = TITLE_LISTS.find((board) => board.path === boardPath);

  return (
    <BoardTitleContainer>
      <div className="board-title-icon">
        <img src={BranchIcon} alt="branch-icon" />
      </div>
      <BoardTitleWrapper>
        <BoardTitleMain>{board?.title}</BoardTitleMain>
        <BoardTitleSub>{board?.subtitle}</BoardTitleSub>
      </BoardTitleWrapper>
    </BoardTitleContainer>
  );
};

const UnionTitle = () => {
  const location = useLocation();
  const boardPath = location.pathname.split('/').pop();
  const board = TITLE_LISTS.find((board) => board.path === boardPath);

  return (
    <BoardTitleContainer>
      <div className="board-title-icon">
        <img src={UnionIcon} alt="union-icon" />
      </div>
      <BoardTitleWrapper>
        <BoardTitleMain>{board?.title}</BoardTitleMain>
        <BoardTitleSub>{board?.subtitle}</BoardTitleSub>
      </BoardTitleWrapper>
    </BoardTitleContainer>
  );
};

const BoardTitle = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  if (path === 'school') {
    return <SchoolTitle />;
  } else if (path === 'branch') {
    return <BranchTitle />;
  } else if (path === 'union') {
    return <UnionTitle />;
  } else {
    return null;
  }
};

export default BoardTitle;
