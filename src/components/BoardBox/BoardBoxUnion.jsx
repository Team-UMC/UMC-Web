import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import union from '../../assets/boardCard/union.svg';

const BoardBoxUnionContainer = styled.div`
  height: 100%;
  padding-bottom: 30px;
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
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const BoardBoxUnionLink = styled(NavLink).attrs({
  activeStyle: { color: '#8784ff !important' },
})`
  text-align: left;
  color: black;
  background: white;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
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
      <BoardBoxUnionTitle>연합</BoardBoxUnionTitle>
      <BoardBoxUnionContentWrapper>
        <BoardBoxUnionLink
          to="/board/union/notice"
          activestyle={{ color: '#8784ff' }}
        >
          공지사항
        </BoardBoxUnionLink>
        <BoardBoxUnionLink
          to="/board/union/free"
          activestyle={{ color: '#8784ff' }}
        >
          자유 게시판
        </BoardBoxUnionLink>
        <BoardBoxUnionLink
          to="/board/union/question"
          activestyle={{ color: '#8784ff' }}
        >
          질문 게시판
        </BoardBoxUnionLink>
        <BoardBoxUnionLink
          to="/board/union/prev"
          activestyle={{ color: '#8784ff' }}
        >
          이전 기수 게시판
        </BoardBoxUnionLink>
      </BoardBoxUnionContentWrapper>
    </BoardBoxUnionContainer>
  );
};

export default BoardBoxUnion;
