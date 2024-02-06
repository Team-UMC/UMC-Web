import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MascotImage from 'assets/Mascot/Mascot.svg';
import EarthImage from 'assets/Mascot/Earth.svg';
import FeedbackgroundImage from 'assets/Mascot/FeedBackground.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 10vh auto;
  width: 70%;
  height: 110vh;
  color: white;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const EXPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const EXPBar = styled.div`
  display: flex;
  width: 80%;
  height: 36px;
  border: 1px solid white;
  justify-content: flex-start;
`;

const CurrentEXP = styled.div`
  width: ${({ width }) => `${width}%`}; // 값을 받아서 %로 바꾸어 설정해준다.
  height: 36px;
  background: linear-gradient(to right, #86ffc5, #49e9ff);
`;

const MascotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 5vh;
`;

const MascotImg = styled.img`
  position: absolute;
  top: -60px;

  z-index: 5;
`;

const EarthImg = styled.img`
  position: relative;
`;

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Number = styled.div`
  color: black;
  background-color: white;
  border: 1px solid white;
  border-radius: 15px;
`;

const MyFeed = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Mascot = () => {
  const exp = 246;
  const ratio = parseInt(exp % 100);

  return (
    <Container>
      <LinkWrapper>
        <StyledLink to="/mascot"> 마스코트 </StyledLink>
        <StyledLink to="/ranking"> 랭크 </StyledLink>
      </LinkWrapper>

      <EXPWrapper>
        <div>레벨</div>
        <EXPBar>
          <CurrentEXP width={ratio} />
        </EXPBar>
        <div> 현재 내 순위 </div>
      </EXPWrapper>

      <MascotWrapper>
        <MascotImg src={MascotImage} />
        <EarthImg src={EarthImage} />
      </MascotWrapper>

      <FeedWrapper>
        <TitleWrapper>
          <div> 현재 내 보유 EXP </div>
          <Number> 개수 (API)로 받기 </Number>
        </TitleWrapper>
        <MyFeed>
          <img src={FeedbackgroundImage} />
          <img src={FeedbackgroundImage} />
          <img src={FeedbackgroundImage} />
          <img src={FeedbackgroundImage} />
        </MyFeed>
      </FeedWrapper>
    </Container>
  );
};

export default Mascot;
