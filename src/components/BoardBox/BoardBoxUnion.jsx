import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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

  a {
    background: white;
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: #8784ff;
  }
  &:active {
    color: #000c76;
  }
`;

const BoardBoxUnion = () => {
  const navigate = useNavigate();

  const navigateToNotice = () => {
    navigate('/board/union/notice');
  };

  const navigateToFree = () => {
    navigate('/board/union/free');
  };

  const navigateToQuestion = () => {
    navigate('/board/union/question');
  };

  const navigateToWorkbook = () => {
    navigate('/board/union/workbook');
  };

  const navigateToPrev = () => {
    navigate('/board/union/prev');
  };

  return (
    <BoardBoxUnionContainer>
      <BoardBoxUnionImage>
        <img src={union} alt="union" />
      </BoardBoxUnionImage>
      <BoardBoxUnionTitle>학교</BoardBoxUnionTitle>
      <BoardBoxUnionContentWrapper>
        <BoardBoxUnionContent>
          <NavLink
            to={`/board/union/notice`}
            activeStyle={{ color: '#8784ff' }}
            onClick={navigateToNotice}
          >
            공지사항
          </NavLink>
        </BoardBoxUnionContent>
        <BoardBoxUnionContent>
          <NavLink
            to={`/board/union/free`}
            activeStyle={{ color: '#8784ff' }}
            onClick={navigateToFree}
          >
            자유 게시판
          </NavLink>
        </BoardBoxUnionContent>
        <BoardBoxUnionContent>
          <NavLink
            to={`/board/union/question`}
            activeStyle={{ color: '#8784ff' }}
            onClick={navigateToQuestion}
          >
            질문 게시판
          </NavLink>
        </BoardBoxUnionContent>
        <BoardBoxUnionContent>
          <NavLink
            to={`/board/union/workbook`}
            activeStyle={{ color: '#8784ff' }}
            onClick={navigateToWorkbook}
          >
            워크북 게시판
          </NavLink>
        </BoardBoxUnionContent>
        <BoardBoxUnionContent>
          <NavLink
            to={`/board/union/prev`}
            activeStyle={{ color: '#8784ff' }}
            onClick={navigateToPrev}
          >
            이전 기수 게시판
          </NavLink>
        </BoardBoxUnionContent>
      </BoardBoxUnionContentWrapper>
    </BoardBoxUnionContainer>
  );
};

export default BoardBoxUnion;
