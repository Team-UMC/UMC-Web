import React, { useEffect, useState } from 'react';
import MascotRankLink from 'components/Mascot/MascotRankLink';
import MyContribution from 'components/Mascot/Ranking/MyContribution';
import SchoolRanking from 'components/Mascot/Ranking/SchoolRanking';

import styled from 'styled-components';

import BackgroundImage from 'assets/Mascot/Background.svg';
import Title from 'components/Mascot/Ranking/Title';
import Ranker from 'components/Mascot/Ranking/Ranker';
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
  const [nickname, setNickname] = useState('');
  const [contributionPoint, setContributionPoint] = useState(0);
  const [contributionRank, setContributionRank] = useState(0);

  // 학교 관련
  const [universityName, setUniversityName] = useState('');
  const [universityPoint, setUniversityPoint] = useState(0);
  const [universityRank, setUniversityRank] = useState(0);

  useEffect(() => {
    const getMyContribution = async () => {
      try {
        const res = await axiosInstance.get(`/members/rank`);

        setNickname(res.data.result.nickname);
        setContributionPoint(res.data.result.contributionPoint);
        setContributionRank(res.data.result.contributionRank);
      } catch (error) {
        console.error();
      }
    };
    getMyContribution();
  }, []);

  useEffect(() => {
    const getMyUniversity = async () => {
      try {
        const res = await axiosInstance.get(`/universities/details`);

        setUniversityName(res.data.result.universityName);
        setUniversityPoint(res.data.result.universityPoint);
        setUniversityRank(res.data.result.universityRank);
      } catch (error) {
        console.error();
      }
    };
    getMyUniversity();
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
              name={nickname}
              point={contributionPoint}
              rank={contributionRank}
            />
            <Ranker />
            <MyContribution />
          </Wrapper>
          <Wrapper>
            <Title
              title="학교 랭킹"
              name={universityName}
              point={universityPoint}
              rank={universityRank}
            />
            <Ranker />
            <SchoolRanking />
          </Wrapper>
        </Container>
      </Page>
    </div>
  );
};

export default RankingPage;
