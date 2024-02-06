import React from 'react';
import styled from 'styled-components';

import TILTitle from 'components/TodayILearn/Title';
import TILCalender from 'components/TodayILearn/Calender';
import TILComponent from 'components/TodayILearn/ComponentTIL';
import TILAdd from 'components/TodayILearn/AddTIL';

const TILContainer = styled.div`
margin: 0vh 50vh;
`;

const CalenderContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const TodayILearn = () => {
    
  
    return(
    
    <TILContainer>
      <TILTitle></TILTitle>

      <CalenderContainer>
        <TILCalender/>
        <TILAdd/>
      </CalenderContainer>
      
      <TILComponent></TILComponent>
    </TILContainer>
  
      );
    };
  
  export default TodayILearn;