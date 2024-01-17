import React from 'react';
import MyCalendar from 'components/OldBoard/calendar';
import styled from 'styled-components';

const MainWrapper = styled.div`
  margin-top: 30vh;
`;

const CalendarWrapper = styled.div`

`;

const NotificationWrapper = styled.div`

`;

const RecordWrapper = styled.div`

`;

const Main = () => {
  return (
    <MainWrapper>
      <CalendarWrapper>
        <h2> 이번달 일정 한눈에 보기 </h2>
        <h3> UMC 일정을 확인해보세요! </h3>
        <MyCalendar />
      </CalendarWrapper>

      <NotificationWrapper>
        <h2> 공지사항 </h2>
        <h3> 새롭게 업데이트된 공지사항을 확인하세요 </h3>
        <MyCalendar />
      </NotificationWrapper>

      <RecordWrapper>
        <h2> 오늘 나의 기록 </h2>
        <h3> 오늘 내가 할 일과 배운 것들을 기록해보세요 </h3>
        <MyCalendar />
      </RecordWrapper>
    </MainWrapper>
  );
};

export default Main;
