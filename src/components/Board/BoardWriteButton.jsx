import React from 'react';
import styled from 'styled-components';
import pencil from 'assets/board/pencil-fill.svg';

// 글쓰기 버튼을 감싸는 컴포넌트
const BoardButtonWrapper = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* 글쓰기 버튼 색상/테두리 스타일링 */
  background: white;
  border: none;
  border-radius: 12px;
  padding: 8px 16px;
  cursor: pointer;

  /* 애니메이션 효과 */
  transition: all 0.1s ease-in-out;

  /* 글쓰기 버튼 호버 시 효과 */
  &:hover {
    background-color: #f5f5f5;
  }

  /* 글쓰기 버튼 활성화(클릭) 시 효과 */
  &:active {
    background-color: #ebebeb;
  }
`;

// 글쓰기 버튼 내용을 감싸는 컴포넌트
const BoardButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 4px;
`;

// 글쓰기 버튼의 텍스트 스타일링
const BoardWriteFont = styled.div`
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  color: #8784ff;
  line-height: 22.4px;
  word-wrap: break-word;
`;

// BoardWriteButton: 글쓰기 버튼
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
