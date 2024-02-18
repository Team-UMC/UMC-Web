import React from 'react';
import styled from 'styled-components';

import BoardTitle from 'components/BoardTitle/BoardTitle';
import BoardBox from 'components/BoardBox/BoardBox';
import BoardList from 'components/Board/BoardList';

//import BoardTable from 'components/Board/BoardTable';

// 게시글 전체 페이지 컨테이너
const BoardPageContainer = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;

  width: 70%;
`;

// 게시글 제목 레이아웃
const BoardTitleLayout = styled(BoardTitle)`
  display: flex;
  padding: 0 0 0 40px;
`;

// 게시글 좌측 메뉴바(BoardBox)와 게시글 목록(Table)을 감싸는 컴포넌트
const BoardBoxAndBoardTableWrapper = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0 40px;

  width: 100%;
`;

// 좌측 메뉴바(BoardBox) 스타일링
const StyledBoardBox = styled(BoardBox)`
  width: 20%;
`;

// 게시글 목록(Table)을 감싸는 컴포넌트
const BoardTableWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;

`;

// 게시글 목록(Table) 스타일링
const StyledBoardTable = styled(BoardList)`
  max-width: 720px;
`;

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
      <BoardPageContainer>
        <BoardTitleLayout />
        <BoardBoxAndBoardTableWrapper>
          <StyledBoardBox />
          <BoardTableWrapper>
            <StyledBoardTable />
          </BoardTableWrapper>
        </BoardBoxAndBoardTableWrapper>
      </BoardPageContainer>
    </div>
  );
};

export default BoardPage;
