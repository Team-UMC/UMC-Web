import React from 'react';
import styled from 'styled-components';

//import BoardFile from 'components/BoardWrite/BoardFile';
import NotionLink from './Notion';
import BoardTitle from 'components/BoardWrite/BoardTitle';
import SubTitle from './SubTitle';
import BoardText from 'components/BoardWrite/BoardText';
import OptionTIL from './OptionTIL';
import ButtonTIL from './ButtonTIL';
import TILCalender from './Calender';

const NewTILContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0vh 50vh;
`;

const Title = styled.div`
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  margin-top: 15vh;
  margin-bottom: 5vh;
  color: #00095c;
`;

const NewTIL = () => {
  return (
    <NewTILContainer>
      <Title>Today I Learned</Title>
      <TILCalender />
      <OptionTIL />
      {/*<BoardFile />*/}
      <NotionLink />
      <BoardTitle />
      <SubTitle />
      <BoardText />
      <ButtonTIL />
    </NewTILContainer>
  );
};

export default NewTIL;
