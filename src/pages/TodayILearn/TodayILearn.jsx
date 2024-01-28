import React from 'react';
import styled from 'styled-components';

import TILTitle from 'components/TodayILearn/Title';
import TILCalender from 'components/TodayILearn/Calender';
import TILComponent from 'components/TodayILearn/ComponentTIL';

const TILContainer = styled.div`
margin: 0vh 50vh;
`;

const TodayILearn = () => {
    
  
    return(
    
    <TILContainer>
      <TILTitle></TILTitle>
      <TILCalender></TILCalender>
      <TILComponent></TILComponent>
    </TILContainer>
  
      );
    };
  
  export default TodayILearn;