import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import SchoolIcon from 'assets/titleIcon/schoolIcon.svg';
import BranchIcon from 'assets/titleIcon/branchIcon.svg';
import UnionIcon from 'assets/titleIcon/unionIcon.svg';

const BoardTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 8px;
`;

const BoardTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BoardTitleMain = styled.h1`
  color: #7682f6;
  font-size: 34px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;

  ::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background-size: contain;
    margin-right: 5px;
  }
`;

const BoardTitleSub = styled.p`
  color: #9d9d9d;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const TITLE_LISTS = [
  { path: 'notice', title: '공지사항', subtitle: '중요한 공지들을 알려드려요!' },
  { path: 'free', title: '자유 게시판', subtitle: '챌린저들과 자유롭게 의견을 나눠보세요!' },
  { path: 'question', title: '질문 게시판', subtitle: '궁금한 점을 질문하고 답해보세요!' },
  { path: 'workbook', title: '워크북 게시판', subtitle: '워크북으로 공부 의지를 활활 불태워 봐요!' },
  { path: 'prev', title: '이전 기수 게시판', subtitle: '이전 챌린저들과 함께 소통해봐요!' },
];

const SchoolTitle = () => {
  let { boardPath } = useParams();
  const board = TITLE_LISTS.find((board) => board.path === boardPath);

  return (
    <BoardTitleContainer>
      <div className="board-title-icon">
        <img src={SchoolIcon} alt='school-icon' />
      </div>
      <BoardTitleWrapper>
        <BoardTitleMain>{board?.title}</BoardTitleMain>
        <BoardTitleSub>{board?.subtitle}</BoardTitleSub>
      </BoardTitleWrapper>
    </BoardTitleContainer>
  );
};

const BranchTitle = () => {
  const { boardPath } = useParams();
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
  const { boardPath } = useParams();
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
