import React from 'react';
import styled from 'styled-components';

import GalleryTitle from 'components/Gallery/GalleryTitle';
import GalleryWriteButton from 'components/Gallery/GalleryWriteButton';
import GalleryList from 'components/Gallery/GalleryList';


// 갤러리 전체 페이지 컨테이너
const GalleryPageContainer = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: column;
  width: 75%;
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;

  /* 주로 겹치는 요소들 사이의 순서를 제어하기 위한 z-index -> 헤더 컴포넌트와 같이 조정할 것! */
  z-index: 1;
`;

// 갤러리 전체 페이지 제목 & 글쓰기 버튼을 감싸는 컴포넌트
const GalleryTitleButtonWrapper = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;
`;

// 갤러리 전체 페이지 제목 스타일링
const GalleryTitleLayout = styled(GalleryTitle)`
  display: flex;
`;

// 갤러리 전체 페이지 글쓰기 버튼 스타일링
const GalleryWriteButtonLayout = styled(GalleryWriteButton)`
  display: flex;
  flex-direction: column;
`;

// 갤러리 전체 페이지 리스트 스타일링
const GalleryListLayout = styled(GalleryList)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


// 갤러리 전체 페이지
const GalleryPage = () => {
  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <GalleryPageContainer>
        <GalleryTitleButtonWrapper>
          <GalleryTitleLayout />
          <GalleryWriteButtonLayout />
        </GalleryTitleButtonWrapper>
        <GalleryListLayout />

      </GalleryPageContainer>
    </div>
  );
};

export default GalleryPage;
