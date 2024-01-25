import React from 'react';
import styled from 'styled-components';

import BoardFile from '../../components/boardwrite/BoardFile';
import BoardLabel from '../../components/boardwrite/BoardLabel';
import BoardTitle from '../../components/boardwrite/BoardTitle';
import BoardText from '../../components/boardwrite/BoardText';
import BoardButton from '../../components/boardwrite/BoardButton';

const BoardWriteContainer = styled.div`
  margin-top: 100%;   
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeftContainer = styled.div`
  max-width: 120vh;
  width: 100%;

  margin-right: 32px;
`;

const Title = styled.div`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  margin-top: 50px;
  margin-bottom: 32px;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 126vh;
  width: 100%;
`;

const BoardWrite = () => {
  return (
    <BoardWriteContainer>
      <LeftContainer>
        <Title>게시글 작성</Title>
        <BoardLabel />
      </LeftContainer>

      <BoardFile />
      <BoardTitle />
      <BoardText />

      <RightContainer>
        <BoardButton />
      </RightContainer>
    </BoardWriteContainer>
  );
};

export default BoardWrite;
