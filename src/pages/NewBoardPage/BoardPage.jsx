import React from 'react';
import styled from 'styled-components';

import BoardTitle from '../../components/BoardTitle/BoardTitle';
import BoardBox from '../../components/BoardBox/BoardBox';
import BoardTable from '../../components/NewBoard/BoardTable';
import BoardWriteButton from '../../components/NewBoard/BoardWriteButton';

const BoardPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoardTitleLayout = styled(BoardTitle)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
`;

const BoardBoxAndBoardTableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 55px;
`;

const StyledBoardBox = styled(BoardBox)`
  width: 100%;
`;

const BoardTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;

const StyledBoardTable = styled(BoardTable)`
  max-width: 720px;
`;

const BoardPage = () => {
  return (
    <BoardPageContainer>
      <BoardTitleLayout />
      <BoardBoxAndBoardTableWrapper>
        <StyledBoardBox />
        <BoardTableWrapper>
          <StyledBoardTable />
          <BoardWriteButton />
        </BoardTableWrapper>
      </BoardBoxAndBoardTableWrapper>
    </BoardPageContainer>
  );
};

export default BoardPage;
