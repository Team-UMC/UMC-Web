import React from 'react';
import styled from 'styled-components';

const BoardTitleSchoolContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 8px;
`;

const BoardTitleSchoolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BoardTitleSchoolMain = styled.h1`
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

const BoardTitleSchoolSub = styled.p`
  color: #9d9d9d;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const BoardTitle = () => {
  return (
    <BoardTitleSchoolContainer>
      <div className="board-title-icon"></div>
      <BoardTitleSchoolWrapper>
        <BoardTitleSchoolMain>자유게시판</BoardTitleSchoolMain>
        <BoardTitleSchoolSub>
          챌린저들과 자유롭게 의견을 나눠보세요!
        </BoardTitleSchoolSub>
      </BoardTitleSchoolWrapper>
    </BoardTitleSchoolContainer>
  );
};

export default BoardTitle;
