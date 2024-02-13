import React from 'react';
import MascotRankLink from 'components/Mascot/MascotRankLink';
import MyContribution from 'components/Mascot/Ranking/MyContribution';
import SchoolRanking from 'components/Mascot/Ranking/SchoolRanking';

import styled from 'styled-components';

import BackgroundImage from 'assets/Mascot/Background.svg';
import Title from 'components/Mascot/Ranking/Title';
import Ranker from 'components/Mascot/Ranking/Ranker';

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
            <Title name="나의 기여도" point={1200} grade="4등" />
            <Ranker />
            <MyContribution />
          </Wrapper>
          <Wrapper>
            <Title name="학교 랭킹" point={1200} grade="1등" />
            <Ranker />
            <SchoolRanking />
          </Wrapper>
        </Container>
      </Page>
    </div>
  );
};

export default RankingPage;
