import React from 'react';
import styled from 'styled-components';

import CalenderImg from 'assets/todayilearn/calender.svg';

const TodayDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* 추가된 부분 */
`;

const DateContainer = styled.div`
  color: #373C6B;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  white-space: nowrap;
  margin-left: 0.5vh;
`;


const TILCalender = () => {
  return (
      <TodayDate>
        <img src={CalenderImg} alt='캘린더 이미지' />
        <DateContainer>2023.12.12(목)</DateContainer>
      </TodayDate>

  );
};

export default TILCalender;
