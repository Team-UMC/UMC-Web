import React from 'react';
import styled from 'styled-components';

import BoardBoxSchool from './BoardBoxSchool';
import BoardBoxBranch from './BoardBoxBranch';
import BoardBoxUnion from './BoardBoxUnion';
import suggestion from 'assets/boardCard/suggestion.svg';

const BoardBoxWrapperLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const BoardBoxSuggestionContainer = styled.div`
  height: 100%;
  background: white;
  border-color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;

const BoardBoxSuggestionImage = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding-bottom: 8px;
  gap: 8px;
`;

const BoardBoxSuggestionTitle = styled.div`
  text-align: left;
  color: #000c76;
  background: white;
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  gap: 10px;
  word-wrap: break-word;
`;

const BoardBoxSuggestion = () => {
  return (
    <BoardBoxSuggestionContainer>
      <BoardBoxSuggestionImage>
        <img src={suggestion} alt="suggestion" />
      </BoardBoxSuggestionImage>
      <BoardBoxSuggestionTitle>건의함</BoardBoxSuggestionTitle>
    </BoardBoxSuggestionContainer>
  );
};

const BoardBoxWrapper = () => {
  return (
    <BoardBoxWrapperLayout>
      <BoardBoxSchool />
      <BoardBoxBranch />
      <BoardBoxUnion />
      <BoardBoxSuggestion />
    </BoardBoxWrapperLayout>
  );
};

export default BoardBoxWrapper;
