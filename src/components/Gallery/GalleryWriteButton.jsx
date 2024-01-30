import React from 'react';
import styled from 'styled-components';
import pencil from 'assets/photo/pencil-fill.svg';

const GalleryButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: none;
  border-radius: 12px;
  padding: 6px 10px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: #ebebeb;
  }
`;

const GalleryButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 4px;
`;

const GalleryWriteFont = styled.div`
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  color: #000c76;
  line-height: 22.4px;
  word-wrap: break-word;
`;

// BoardWriteButton: 글쓰기 버튼
const GalleryWriteButton = () => {
  return (
    <GalleryButtonWrapper>
      <GalleryButtonContent>
        <img src={pencil} alt="pencil" />
        <GalleryWriteFont>글쓰기</GalleryWriteFont>
      </GalleryButtonContent>
    </GalleryButtonWrapper>
  );
};

export default GalleryWriteButton;
