import React from 'react';
import styled from 'styled-components';
import MyCalendar from 'components/Main/Calendar/calendar';
import RowContents from 'components/Main/Calendar/RowContents';
import MainDescription from 'components/Main/MainDescription';
import Notification from 'components/Main/Notification/Notification';

import CalendarData from 'components/Main/Calendar/CalendarData';

const MainWrapper = styled.div`
  margin-top: 35vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 150px;
`;

const LeftWrapper = styled.div`

`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Main = () => {
  return (
    <MainWrapper>
      {/* 홈화면 캘린더 */}
      <MainDescription title='이번달 일정 한눈에 보기' subtitle='UMC 일정을 확인해보세요!'/>
      <Wrapper>
        <LeftWrapper>
          <MyCalendar />
        </LeftWrapper>

        <RightWrapper>
          <RowContents data={CalendarData.CalendarSchoolData} itemsToShow={3} displayProperties={['date', 'title']}/>
          <RowContents data={CalendarData.CalendarBranchData} itemsToShow={3} displayProperties={['date', 'title']}/>
          <RowContents data={CalendarData.CalendarUnionData} itemsToShow={3} displayProperties={['date', 'title']}/>
        </RightWrapper>
      </Wrapper>

      {/* 홈화면 공지사항 */}
      <MainDescription title='공지사항' subtitle='새롭게 업데이트된 공지사항을 확인하세요!'/>
      <Wrapper>
        <Notification />
      </Wrapper>

    </MainWrapper>
  );
};

export default Main;
