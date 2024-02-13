import React from 'react';
import styled from 'styled-components';
import MyCalendar from 'components/Main/Calendar/calendar';
import MainDescription from 'components/Main/MainDescription';
import Notification from 'components/Main/Notification/Notification';
import ScheduleItem from 'components/Main/Calendar/Schedule';
import TodoList from 'components/Main/TodoList/TodoList';
import TodayILearned from 'components/Main/TodayILearned/TodayILearned';
import Github from 'components/Main/Github/Github';
import Mascot from 'components/Mascot/Mascot/Mascot';

import CampusScheduleImage from 'assets/main/Calendar/CampusSchedule.svg';
import BranchScheduleImage from 'assets/main/Calendar/BranchSchedule.svg';
import CenterScheduleImage from 'assets/main/Calendar/CenterSchedule.svg';
import MyContribution from 'components/Mascot/Ranking/MyContribution';
import SchoolRanking from 'components/Mascot/Ranking/SchoolRanking';

import InhaImage from 'assets/Mascot/Example/School.svg';
import ProfileImage from 'assets/Mascot/Example/Ellipse 354.png';
import { useNavigate } from 'react-router-dom';
//import MascotBackgroundImage from "assets/Mascot/Background.svg";

const Background = styled.div`
  background-color: #f2f5fc;
`;

const MainWrapper = styled.div`
  margin-top: 30vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const RankingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`;

const SchoolWrapper = styled.div`
  width: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  border: 1px solid white;
  border-radius: 15px;
`;

const SchoolRank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150%;
`;

const Main = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/mascot');
  };

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
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
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

          <MainDescription
            title="오늘 나의 기록"
            subtitle="오늘 내가 할 일과 배운 것들을 기록해보세요!"
          />
          <Wrapper style={{ marginBottom: '100px' }}>
            <div>
              <div style={{ marginBottom: '14px' }}> 진행중이에요 🔥 </div>
              <TodoList completed={false} />
            </div>
            <div>
              <div style={{ marginBottom: '14px' }}> 🥳 완료했어요 🎉 </div>
              <TodoList completed={true} />
            </div>
          </Wrapper>

          <Wrapper>
            <div>
              <div style={{ marginBottom: '15px' }}> Today I-Learned </div>
              <TodayILearned />
            </div>
            <div>
              <div style={{ marginBottom: '15px' }}> Git-hub </div>
              <Github />
            </div>
          </Wrapper>

          <MainDescription
            title="우리 학교 마스코트"
            subtitle="말랑말랑말랑이!"
          />
          <Wrapper style={{ marginBottom: '100px' }}>
            <div
              onClick={handleNavigate}
              style={{
                backgroundColor: '#000414',
                width: '483px',
                height: '500px',
              }}
            >
              <Mascot />
            </div>
            <RankingWrapper>
              <SchoolRank>
                <SchoolWrapper>
                  <img src={InhaImage} />
                  <span>인하대학교는</span>
                  <span>1200 포인트로</span>
                  <span>현재 1등이에요! 👏🏻</span>
                </SchoolWrapper>
                <SchoolRanking />
              </SchoolRank>
              <SchoolRank>
                <SchoolWrapper>
                  <img src={ProfileImage} />
                  <span>눈꽃님은</span>
                  <span>1200 포인트로</span>
                  <span>현재 1등이에요! 👏🏻</span>
                </SchoolWrapper>
                <MyContribution />
              </SchoolRank>
            </RankingWrapper>
          </Wrapper>
        </MainWrapper>
      </Background>
    </div>
  );
};

export default Main;
