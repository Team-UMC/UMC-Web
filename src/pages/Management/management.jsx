import React from 'react';
import styled from 'styled-components';

import BoardTitle from '../../components/boardwrite/BoardTitle';
import BoardText from '../../components/boardwrite/BoardText';
import ManagementButton from 'components/Management/Button';

import StartendDate from '../../components/Management/StartendDate';
//import StartendTime from '../../components/Management/StartendTime';
import Local from '../../components/Management/SelectLocal';
import Classify from '../../components/Management/Classify';

import ManagementTitle from 'components/Management/Title';
import ManagementType from 'components/Management/ManagementType';

const ManagmentContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0vh 50vh;
`;


const Management = () => {
    

    return(
      <ManagmentContainer>
  
        <ManagementTitle />
        
        <ManagementType /> 

        <BoardTitle />

        <BoardText />

        <StartendDate/>

        <Local/>

        <Classify />
        <ManagementButton />

      </ManagmentContainer>
      );
    };
  
  export default Management;