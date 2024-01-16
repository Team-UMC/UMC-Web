import React from "react";
import styled from "styled-components";
import BoardBoxSchool from "./BoardBoxSchool";
import BoardBoxBranch from "./BoardBoxBranch";
import BoardBoxUnion from "./BoardBoxUnion";

const BoardBoxWrapperLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const BoardBoxWrapper = () => {
    return (
      <BoardBoxWrapperLayout>
        <BoardBoxSchool />
        <BoardBoxBranch />
        <BoardBoxUnion />
      </BoardBoxWrapperLayout>
    );
};

export default BoardBoxWrapper;