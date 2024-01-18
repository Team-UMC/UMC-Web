import React from 'react';
import styled from 'styled-components';

const DateContainer = styled.div`
display:flex;
width: 120vh;
flex-direction: column;
border-radius: 12px;
padding: 1vh;

border: 1px solid #232A6D;

`;

const Start = styled.div`
border-bottom: 1px solid #D9D9D9;
color: #000000;
`;

const End = styled.div`
color: #000000;
`;

const StartendTime = () => {

    return (
      <DateContainer>
        <Start>시작시간</Start>
        <End>종료시간</End>
      </DateContainer>
  
    );
  };
  
  
  export default StartendTime;