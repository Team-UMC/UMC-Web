import React from "react";

import BoardBox from "../../components/BoardBox/BoardBox";
import BoardTable from "../../components/NewBoard/BoardTable";
import styled from "styled-components";
import BoardWriteBottom from "../../components/NewBoard/BoardWriteButtom";

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
      <BoardBoxAndBoardTableWrapper>
        <StyledBoardBox />
        <BoardTableWrapper>
          <StyledBoardTable />
          <BoardWriteBottom />
        </BoardTableWrapper>
      </BoardBoxAndBoardTableWrapper>
    );
};

export default BoardPage;