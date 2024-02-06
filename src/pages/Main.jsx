import React from 'react';
import styled from 'styled-components';
import MyCalendar from 'components/Main/Calendar/calendar';
import MainDescription from 'components/Main/MainDescription';
import Notification from 'components/Main/Notification/Notification';
import ScheduleItem from 'components/Main/Calendar/Schedule';
import DateSelectCalendar from 'components/DateSelectCalendar';

import CampusScheduleImage from 'assets/main/Calendar/CampusSchedule.svg';
import BranchScheduleImage from 'assets/main/Calendar/BranchSchedule.svg';
import CenterScheduleImage from 'assets/main/Calendar/CenterSchedule.svg';

const Background = styled.div`
  background-color: #f2f5fc;
`;

const MainWrapper = styled.div`
  margin-top: 30vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 70%;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
`;

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  width: 50%;
`;

const Main = () => {
  const scheduleData = [
    {
      title: '인하대학교 일정',
      scheduleImage: CampusScheduleImage,
      altText: '인하대학교 일정',
    },
    {
      title: 'GACI 지부 일정',
      scheduleImage: BranchScheduleImage,
      altText: 'GACI 지부 일정',
    },
    {
      title: 'UMC 연합 일정',
      scheduleImage: CenterScheduleImage,
      altText: 'UMC 연합 일정',
    },
  ];

  return (
    <div>
      <Background>
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

            <ScheduleContainer>
              {scheduleData.map((item, index) => (
                <ScheduleItem key={index} {...item} data={scheduleData} />
              ))}
            </ScheduleContainer>
          </Wrapper>

          {/* 홈화면 공지사항 */}
          <MainDescription
            title="공지사항"
            subtitle="새롭게 업데이트된 공지사항을 확인하세요!"
          />
          <Wrapper>
            <Notification />
          </Wrapper>

          <Wrapper>
            <DateSelectCalendar />
          </Wrapper>
        </MainWrapper>
      </Background>
    </div>
  );
};

export default Main;
