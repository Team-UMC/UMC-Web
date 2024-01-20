import React from 'react';
import styled from 'styled-components';

import BoardTitle from '../../components/BoardTitle/BoardTitle';
import BoardBox from '../../components/BoardBox/BoardBox';
import BoardTable from '../../components/NewBoard/BoardTable';

const BoardPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

const BoardTitleLayout = styled(BoardTitle)`
  display: flex;
  align-items: flex-start;
  padding: 0;
`;

const BoardBoxAndBoardTableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
    <>
      <BoardPageContainer>
        <BoardTitleLayout />
        <BoardBoxAndBoardTableWrapper>
          <StyledBoardBox />
          <BoardTableWrapper>
            <StyledBoardTable />
          </BoardTableWrapper>
        </BoardBoxAndBoardTableWrapper>
      </BoardPageContainer>
    </>
  );
};

export default BoardPage;
