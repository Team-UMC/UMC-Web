import React, { useEffect, useState } from 'react';
import MascotRankLink from 'components/Mascot/MascotRankLink';

import styled from 'styled-components';

import BackgroundImage from 'assets/Mascot/Background.svg';
import Title from 'components/Mascot/Ranking/Title';

import SchoolRanker from 'components/Mascot/Ranking/SchoolRanker';
import SchoolRanking from 'components/Mascot/Ranking/SchoolRanking';

import axiosInstance from 'apis/setting';

const Page = styled.div`
  width: 100%;
  background-image: url(${BackgroundImage});
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 5vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Wrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RankingPage = () => {
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
  const [firstRank, setFirstRank] = useState({});
  const [secondRank, setSecondRank] = useState({});
  const [thirdRank, setThirdRank] = useState({});

  // 학교 내 순위
  useEffect(() => {
    const getInSchoolRank = async () => {
      try {
        const res = await axiosInstance.get(`/universities/members`);

        setInUniversityRankData(res.data.result.joinContributionRanks);
        setFirstRank(res.data.result.joinContributionRanks[0]);
        setSecondRank(res.data.result.joinContributionRanks[1]);
        setThirdRank(res.data.result.joinContributionRanks[2]);
        console.log(res.data.result.joinContributionRanks);
      } catch (error) {
        console.error();
      }
    };
    getInSchoolRank();
  }, []);

  // 학교 별 순위 관련
  const [universityRank, setUniversityRank] = useState([{}]);
  const [firstSchoolRank, setFirstSchoolRank] = useState({});
  const [secondSchoolRank, setSecondSchoolRank] = useState({});
  const [thirdSchoolRank, setThirdSchoolRank] = useState({});

  useEffect(() => {
    const getSchoolRank = async () => {
      try {
        const res = await axiosInstance.get(`/universities/ranks`);

        setUniversityRank(res.data.result.joinUniversityRanks);
        setFirstSchoolRank(res.data.result.joinUniversityRanks[0]);
        setSecondSchoolRank(res.data.result.joinUniversityRanks[1]);
        setThirdSchoolRank(res.data.result.joinUniversityRanks[2]);
        console.log(res.data.result.joinUniversityRanks);

        console.log(res.data.result.joinUniversityRanks[0]);
        console.log(res.data.result.joinUniversityRanks[1]);
        console.log(res.data.result.joinUniversityRanks[2]);
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
      <Page>
        <MascotRankLink />
        <Container>
          <Wrapper>
            <Title
              title="나의 기여도"
              data={myContribution}
              keyNames={{
                nameKey: 'nickname',
                pointKey: 'contributionPoint',
                rankKey: 'contributionRank',
              }}
            />
            <SchoolRanker
              inUniversityRankData={inUniversityRankData}
              firstRank={firstRank}
              secondRank={secondRank}
              thirdRank={thirdRank}
            />
          </Wrapper>

          <Wrapper>
            <Title
              title="학교 랭킹"
              data={myUniversityData}
              keyNames={{
                nameKey: 'universityName',
                pointKey: 'universityPoint',
                rankKey: 'universityRank',
              }}
            />
            <SchoolRanking
              universityRank={universityRank}
              firstSchoolRank={firstSchoolRank}
              secondSchoolRank={secondSchoolRank}
              thirdSchoolRank={thirdSchoolRank}
            />
          </Wrapper>
        </Container>
      </Page>
    </div>
  );
};

export default RankingPage;
