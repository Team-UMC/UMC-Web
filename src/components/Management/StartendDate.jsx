import React from 'react';
import styled from 'styled-components';

const DateContainer = styled.div`
display:flex;
width: 120vh;
flex-direction: column;
border-radius: 12px;
padding: 1vh;
margin-top: 1.6vh;

border: 1px solid #232A6D;

`;

const Start = styled.div`
border-bottom: 1px solid #D9D9D9;
color: #000000;
font-size: 18px;
padding-bottom: 0.5vh;
// font-weight: bold;

`;

const End = styled.div`
color: #000000;
font-size: 18px;
padding-top: 0.5vh;

// font-weight: bold;
`;

const StartendDate = () => {

    return (
      <DateContainer>
        <Start>시작일</Start>
        <End>종료일</End>
      </DateContainer>
  
    );
  };
  
  
  export default StartendDate;