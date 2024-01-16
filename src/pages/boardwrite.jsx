import React from 'react';
import styled from 'styled-components';

import BoardFile from '../components/BoardFile';
import BoardLabel from '../components/BoardLabel';
import BoardTitle from '../components/BoardTitle';
import BoardText from '../components/BoardText';
import BoardButton from '../components/BoardButton';

const BoardWriteContainer = styled.div`
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
  return(
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
