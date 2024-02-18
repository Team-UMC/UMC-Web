import React, { useState, useEffect } from 'react';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import MyCalendar from 'components/Main/Calendar/calendar';
import MainDescription from 'components/Main/MainDescription';
import Notification from 'components/Main/Notification/Notification';
import ScheduleItem from 'components/Main/Calendar/Schedule';
import TodoList from 'components/Main/TodoList/TodoList';
import TodayILearned from 'components/Main/TodayILearned/TodayILearned';
import Github from 'components/Main/Github/Github';
import Mascot from 'components/Mascot/Mascot/Mascot';
import SchoolRanking from 'components/Main/Rank/SchoolRanking';
import SchoolRanker from 'components/Main/Rank/SchoolRanker';

import InhaLogoImage from 'assets/SchoolLogo/인하대학교.svg';

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

// const TodoListWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 45%;
//   justify-content: flex-start;
// `;

const TILGithubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const Main = () => {
  // 오늘 날짜
  const today = new Date().toISOString().slice(0, 10);

  // 캘린더 관련
  const [calendarData, setCalendarData] = useState([{}]);

  useEffect(() => {
    const getCalendarData = async () => {
      try {
        const res = await axiosInstance.post(`/schedules/calendar`, {});

        setCalendarData(res.data.result.schedules);
      } catch (error) {
        console.error();
      }
    };
    getCalendarData();
  }, []);

  // 학교/지부/연합 일정 관련
  const [campusSchedules, setCampusSchedules] = useState([{}]);
  const [branchSchedules, setBranchSchedules] = useState([{}]);
  const [centerSchedules, setCenterSchedules] = useState([{}]);

  useEffect(() => {
    const getSchedules = async () => {
      try {
        const res = await axiosInstance.get(`/schedules`);

        setCampusSchedules(res.data.result.campusSchedules);
        setBranchSchedules(res.data.result.branchSchedules);
        setCenterSchedules(res.data.result.centerSchedules);
      } catch (error) {
        console.error();
      }
    };
    getSchedules();
  }, []);

  // TodoList 관련
  const [todoListsData, setTodoListsData] = useState([{}]);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const res = await axiosInstance.get(`/to-do-lists?date=${today}`);

        setTodoListsData(res.data.result.todoLists);
      } catch (error) {
        console.error();
      }
    };
    getTodoList();
  });

  // Today-I-Learned 관련
  const [tilData, setTilData] = useState([{}]);

  useEffect(() => {
    const getTil = async () => {
      try {
        const res = await axiosInstance.get(`/today-i-learned`);

        setTilData(res.data.result.todayILearnedInfos);
      } catch (error) {
        console.error();
      }
    };
    getTil;
  }, []);

  // GitHub 관련
  const [githubImage, setGithubImage] = useState('');

  useEffect(() => {
    const getGithubImage = async () => {
      try {
        const res = await axiosInstance.get(`/members/github`);

        setGithubImage(res.data.result.githubImage);
      } catch (error) {
        console.error();
      }
    };
    getGithubImage();
  }, []);

  // 마스코트 관련
  const [mascotData, setMascotData] = useState({});

  useEffect(() => {
    const getMascot = async () => {
      try {
        const res = await axiosInstance.get(`/universities/mascot`);

        setMascotData(res.data.result);
      } catch (error) {
        console.error();
      }
    };
    getMascot();
  }, []);

  // 나의 기여도 관련
  const [myContribution, setMyContribution] = useState({});

  useEffect(() => {
    const getMyContribution = async () => {
      try {
        const res = await axiosInstance.get(`/members/rank`);

        setMyContribution(res.data.result);
      } catch (error) {
        console.error();
      }
    };
    getMyContribution();
  }, []);

  // 내 학교 관련
  const [myUniversityData, setMyUniversityData] = useState({});

  useEffect(() => {
    const getMyUniversity = async () => {
      try {
        const res = await axiosInstance.get(`/universities/details`);

        setMyUniversityData(res.data.result);
      } catch (error) {
        console.error();
      }
    };
    getMyUniversity();
  }, []);

  // 학교 내 기여도 관련
  const [inUniversityRankData, setInUniversityRankData] = useState([{}]);

  // 학교 내 순위
  useEffect(() => {
    const getInSchoolRank = async () => {
      try {
        const res = await axiosInstance.get(`/universities/members`);

        setInUniversityRankData(res.data.result.joinContributionRanks);
      } catch (error) {
        console.error();
      }
    };
    getInSchoolRank();
  }, []);

  // 학교 별 순위 관련
  const [universityRank, setUniversityRank] = useState([{}]);

  useEffect(() => {
    const getSchoolRank = async () => {
      try {
        const res = await axiosInstance.get(`/universities/ranks`);

        setUniversityRank(res.data.result.joinUniversityRanks);
      } catch (error) {
        console.error();
      }
    };
    getSchoolRank();
  }, []);

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
              <MyCalendar calendarData={calendarData} />
            </LeftWrapper>

            <ScheduleContainer>
              <ScheduleItem
                campusSchedules={campusSchedules}
                branchSchedules={branchSchedules}
                centerSchedules={centerSchedules}
              />
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
            <TodoList todoListsData={todoListsData} />
          </Wrapper>

          <Wrapper>
            <TILGithubWrapper>
              <div style={{ marginBottom: '15px' }}> Today I-Learned </div>
              <TodayILearned tilData={tilData}/>
            </TILGithubWrapper>
            <TILGithubWrapper>
              <div style={{ marginBottom: '15px' }}> Git-hub </div>
              <Github githubImage={githubImage} />
            </TILGithubWrapper>
          </Wrapper>

          <MainDescription
            title="우리 학교 마스코트"
            subtitle="말랑말랑말랑이!"
          />
          <Wrapper style={{ marginBottom: '100px' }}>
            <div
              style={{
                backgroundColor: '#000414',
                width: '45%',
              }}
            >
              <Mascot mascotData={mascotData} />
            </div>
            <RankingWrapper>
              <SchoolRank>
                <SchoolWrapper>
                  <img
                    src={InhaLogoImage}
                    style={{ width: '100px', height: '100px' }}
                  />
                  <span>{myUniversityData.universityName}는</span>
                  <span>{myUniversityData.universityPoint} 포인트로</span>
                  <span>
                    현재 {myUniversityData.universityRank}등이에요! 👏🏻
                  </span>
                </SchoolWrapper>

                <SchoolRanking universityRank={universityRank} />
              </SchoolRank>
              <SchoolRank>
                <SchoolWrapper>
                  <img
                    src={myContribution.profileImage}
                    style={{ width: '100px', height: '100px' }}
                  />
                  <span>{myContribution.nickname}님은</span>
                  <span>{myContribution.contributionPoint} 포인트로</span>
                  <span>
                    현재 {myContribution.contributionRank}등이에요! 👏🏻
                  </span>
                </SchoolWrapper>
                <SchoolRanker inUniversityRankData={inUniversityRankData} />
              </SchoolRank>
            </RankingWrapper>
          </Wrapper>
        </MainWrapper>
      </Background>
    </div>
  );
};

export default Main;
