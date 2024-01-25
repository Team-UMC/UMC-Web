import React from 'react';
import styled from 'styled-components';

import BoardTitle from '../../components/BoardTitle/BoardTitle';
import BoardBox from '../../components/BoardBox/BoardBox';
import BoardTable from '../../components/NewBoard/BoardTable';

const BoardPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 72px;
  padding-bottom: 72px;
`;

const BoardTitleLayout = styled(BoardTitle)`
  display: flex;
  padding: 0 0 0 40px;
`;

const BoardBoxAndBoardTableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0 55px;
`;

const StyledBoardBox = styled(BoardBox)`
  width: 100%;
`;

const BoardTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBoardTable = styled(BoardTable)`
  max-width: 720px;
`;

const BoardPage = () => {
  return (
    <div
      className='board-page' 
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
