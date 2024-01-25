import React from 'react';
import styled from 'styled-components';
import pencil from '../../assets/board/pencil-fill.svg';

const BoardButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: none;
  border-radius: 12px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: #ebebeb;
  }
`;

const BoardButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 4px;
`;

const BoardWriteFont = styled.div`
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  color: #8784ff;
  line-height: 22.4px;
  word-wrap: break-word;
`;

const BoardWriteButton = () => {
  return (
    <BoardButtonWrapper>
      <BoardButtonContent>
        <img src={pencil} alt="pencil" />
        <BoardWriteFont>글쓰기</BoardWriteFont>
      </BoardButtonContent>
    </BoardButtonWrapper>
  );
};

export default BoardWriteButton;
