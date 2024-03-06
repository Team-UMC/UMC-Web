import React from 'react';
import styles from './styles';

// 게시글 전체 페이지 컴포넌트
const BoardPage = () => {
  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <styles.BoardPageContainer>
        <styles.BoardTitleLayout />
        <styles.BoardBoxAndBoardTableWrapper>
          <styles.StyledBoardBox />
          <styles.BoardTableWrapper>
            <styles.StyledBoardTable />
          </styles.BoardTableWrapper>
        </styles.BoardBoxAndBoardTableWrapper>
      </styles.BoardPageContainer>
    </div>
  );
};

export default BoardPage;
