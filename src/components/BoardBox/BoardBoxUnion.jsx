import React from 'react';
import styled from 'styled-components';

import union from '../../assets/boardCard/union.svg';

const BoardBoxUnionContainer = styled.div`
  height: 100%;
  background: white;
  border-color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;

const BoardBoxUnionImage = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding-bottom: 8px;
  gap: 8px;
`;

const BoardBoxUnionTitle = styled.div`
  text-align: left;
  color: #000c76;
  background: white;
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  gap: 10px;
  word-wrap: break-word;
`;

const BoardBoxUnionContentWrapper = styled.div`
  gap: 40px;
`;

const BoardBoxUnionContent = styled.div`
  text-align: left;
  color: black;
  background: white;
  font-size: 12px;
  font-weight: 400;
  padding-bottom: 8px;
  word-wrap: break-word;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #8784ff;
  }
  &:active {
    color: #000c76;
  }
`;

const BoardBoxUnion = () => {
  return (
    <BoardBoxUnionContainer>
      <BoardBoxUnionImage>
        <img src={union} alt="union" />
      </BoardBoxUnionImage>
      <BoardBoxUnionTitle>학교</BoardBoxUnionTitle>
      <BoardBoxUnionContentWrapper>
        <BoardBoxUnionContent>공지사항</BoardBoxUnionContent>
        <BoardBoxUnionContent>자유 게시판</BoardBoxUnionContent>
        <BoardBoxUnionContent>질문 게시판</BoardBoxUnionContent>
        <BoardBoxUnionContent>워크북 게시판</BoardBoxUnionContent>
        <BoardBoxUnionContent>이전 기수 게시판</BoardBoxUnionContent>
      </BoardBoxUnionContentWrapper>
    </BoardBoxUnionContainer>
  );
};

export default BoardBoxUnion;
