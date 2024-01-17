import React from 'react';
import MyCalendar from 'components/Main/calendar';
import Notification from 'components/Main/Notification';
import styled from 'styled-components';
import TodayILearned from 'components/Main/TodayILearned';
import TodoList from 'components/Main/TodoList';

const MainWrapper = styled.div`
  margin-top: 30vh;
`;

const Wrapper = styled.div`
  margin-bottom: 120px;

  h3 {
    margin-bottom: 60px;
  }
`;


const Main = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <h2> 이번달 일정 한눈에 보기 </h2>
        <h3> UMC 일정을 확인해보세요! </h3>
        <MyCalendar />
      </Wrapper>

      <Wrapper>
        <h2> 공지사항 </h2>
        <h3> 새롭게 업데이트된 공지사항을 확인하세요 </h3>
        <Notification />
      </Wrapper>

      <Wrapper>
        <h2> 오늘 나의 기록 </h2>
        <h3> 오늘 내가 할 일과 배운 것들을 기록해보세요 </h3>
        <TodoList />

        <TodayILearned />
      </Wrapper>
    </MainWrapper>
  );
};

export default Main;
