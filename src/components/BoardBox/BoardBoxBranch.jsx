import React from 'react';
import styled from 'styled-components';

import branch from '../../assets/boardCard/branch.svg';

const BoardBoxBranchContainer = styled.div`
  height: 100%;
  padding-bottom: 30px;
  background: white;
  border-color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;

const BoardBoxBranchImage = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding-bottom: 8px;
  gap: 8px;
`;

const BoardBoxBranchTitle = styled.h3`
  text-align: left;
  color: #000c76;
  background: white;
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  gap: 10px;
  word-wrap: break-word;
`;

const BoardBoxBranchContentWrapper = styled.div`
  gap: 40px;
`;

const BoardBoxBranchContent = styled.div`
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

const BoardBoxBranch = () => {
  return (
    <BoardBoxBranchContainer>
      <BoardBoxBranchImage>
        <img src={branch} alt="branch" />
      </BoardBoxBranchImage>
      <BoardBoxBranchTitle>학교</BoardBoxBranchTitle>
      <BoardBoxBranchContentWrapper>
        <BoardBoxBranchContent>공지사항</BoardBoxBranchContent>
        <BoardBoxBranchContent>자유 게시판</BoardBoxBranchContent>
        <BoardBoxBranchContent>질문 게시판</BoardBoxBranchContent>
        <BoardBoxBranchContent>워크북 게시판</BoardBoxBranchContent>
        <BoardBoxBranchContent>이전 기수 게시판</BoardBoxBranchContent>
      </BoardBoxBranchContentWrapper>
    </BoardBoxBranchContainer>
  );
};

export default BoardBoxBranch;
