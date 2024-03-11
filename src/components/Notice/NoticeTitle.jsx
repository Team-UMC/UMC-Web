import React from 'react';
import styled from 'styled-components';

// 게시판 제목 컴포넌트 스타일링
const NoticeTitleContainer = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 8px;
  padding-bottom: 72px;
`;

// 게시판 제목 아이콘 스타일링
const NoticeTitleWrapper = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// 게시판 제목 컴포넌트
const NoticeTitle = () => {
  return (
    <NoticeTitleContainer>
      <NoticeTitleWrapper>
        <div> 공지사항 </div>
        <div> 중요한 공지들을 알려드려요!</div>
      </NoticeTitleWrapper>
    </NoticeTitleContainer>
  );
};

export default NoticeTitle;
