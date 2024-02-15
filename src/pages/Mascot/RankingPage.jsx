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
  const [myNickname, setMyNickname] = useState('');
  const [myContributionPoint, setMyContributionPoint] = useState(0);
  const [myContributionRank, setMyContributionRank] = useState(0);

  // 내 학교 관련
  const [myUniversityName, setMyUniversityName] = useState('');
  const [myUniversityPoint, setMyUniversityPoint] = useState(0);
  const [myUniversityRank, setMyUniversityRank] = useState(0);

  // 학교 내 기여도 관련
  const [inUniversityRankData, setInUniversityRankData] = useState([]);

  // 학교 별 순위 관련
  const [universityRank, setUniversityRank] = useState([]);

  // 나의 기여도
  useEffect(() => {
    const getMyContribution = async () => {
      try {
        const res = await axiosInstance.get(`/members/rank`);

        setMyNickname(res.data.result.nickname);
        setMyContributionPoint(res.data.result.contributionPoint);
        setMyContributionRank(res.data.result.contributionRank);
      } catch (error) {
        console.error();
      }
    };
    getMyContribution();
  }, []);

  // 나의 학교
  useEffect(() => {
    const getMyUniversity = async () => {
      try {
        const res = await axiosInstance.get(`/universities/details`);

        setMyUniversityName(res.data.result.universityName);
        setMyUniversityPoint(res.data.result.universityPoint);
        setMyUniversityRank(res.data.result.universityRank);
      } catch (error) {
        console.error();
      }
    };
    getMyUniversity();
  }, []);

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

  // 학교 별 순위
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
      <Page>
        <MascotRankLink />
        <Container>
          <Wrapper>
            <Title
              title="나의 기여도"
              name={myNickname}
              point={myContributionPoint}
              rank={myContributionRank}
            />
            <SchoolRanker inUniversityRankData={inUniversityRankData} />
          </Wrapper>

          <Wrapper>
            <Title
              title="학교 랭킹"
              name={myUniversityName}
              point={myUniversityPoint}
              rank={myUniversityRank}
            />
            <SchoolRanking universityRank={universityRank} />
          </Wrapper>
        </Container>
      </Page>
    </div>
  );
};

export default RankingPage;
