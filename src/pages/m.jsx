import React from 'react';
import styled from 'styled-components';
import MyCalendar from 'components/Main/Calendar/calendar';
import MainDescription from 'components/Main/MainDescription';
import Notification from 'components/Main/Notification/Notification';
import Schedule from 'components/Main/Calendar/Schedule';

const MainWrapper = styled.div`
  margin-top: 30vh;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 4% auto;
  width: 70%;
  height: 80%;
  justify-content: space-between;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
`;

const Main = () => {
  return (
    <div>
      <MainWrapper>
        {/* 홈화면 캘린더 */}
        <MainDescription
          title="이번 달 일정 한눈에 보기"
          subtitle="UMC 일정을 확인해보세요!"
        />
        <Wrapper>
          <LeftWrapper>
            <MyCalendar />
          </LeftWrapper>

          <RightWrapper>
            <Schedule />
          </RightWrapper>
        </Wrapper>

        {/* 홈화면 공지사항 */}
        <MainDescription
          title="공지사항"
          subtitle="새롭게 업데이트된 공지사항을 확인하세요!"
        />
        <Wrapper>
          <Notification />
        </Wrapper>
      </MainWrapper>
    </div>
  );
};

export default Main;
