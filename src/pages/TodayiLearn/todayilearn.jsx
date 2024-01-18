import React from 'react';
import styled from 'styled-components';


import BoardFile from '../../components/boardwrite/BoardFile';
import BoardTitle from '../../components/boardwrite/BoardTitle';
import BoardText from '../../components/boardwrite/BoardText';
import BoardButton from '../../components/boardwrite/BoardButton';

import StartendDate from '../../components/TodayiLearn/StartendDate';
import StartendTime from '../../components/TodayiLearn/StartendTime';
import Local from '../../components/TodayiLearn/SelectLocal';
import Classify from '../../components/TodayiLearn/Classify';

const TodayiLearnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  margin-top: 50px;
  margin-bottom: 32px;
`;



const TodayiLearn = () => {
    

    return(
      <TodayiLearnContainer>
  
        <Title>제목</Title>
        
        
        <BoardFile />

        <BoardTitle />

        <BoardText />

        <StartendDate/>
        <StartendTime/>
        <Local/>


        <BoardButton />
        <Classify />
        
      </TodayiLearnContainer>
      );
    };
  
  export default TodayiLearn;