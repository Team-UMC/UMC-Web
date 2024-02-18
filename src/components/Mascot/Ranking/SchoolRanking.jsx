import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SilverCrownImage from 'assets/Mascot/Ranking/SilverCrown.svg';
import FirstGradeCircle from 'assets/Mascot/FirstGrade.svg';

import GoldCrownImage from 'assets/Mascot/Ranking/GoldCrown.svg';
import SecondGradeCircle from 'assets/Mascot/SecondGrade.svg';

import BronzeCrownImage from 'assets/Mascot/Ranking/BronzeCrown.svg';
import ThirdGradeCircle from 'assets/Mascot/ThirdGrade.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RankerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 80%;
`;

const TopRanker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CrownImage = styled.img`
  position: absolute;
  right: 10%;
  top: -20%;
`;

const ProfileImage = styled.img`
  position: absolute;

  top: 10%;
  left: 10%;
`;

const ETCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border: 1px solid white;
  border-radius: 15px;
  background-color: white;

  color: black;
`;

const SchoolRanking = ({ universityRank }) => {  
  return (
    <Container>
      <RankerWrapper>
        <TopRanker>
          <ImageWrapper>
            <CrownImage src={SilverCrownImage} />
            <img src={SecondGradeCircle} />
            <ProfileImage src={universityRank[1].universityLogo} />
          </ImageWrapper>
          <div> {universityRank[1].universityName} </div>
        </TopRanker>
        <TopRanker>
          <ImageWrapper>
            <CrownImage src={GoldCrownImage} />
            <img src={FirstGradeCircle} />
            <ProfileImage src={universityRank[0].universityLogo} />
          </ImageWrapper>
          <div> {universityRank[0].universityName} </div>
        </TopRanker>
        <TopRanker>
          <ImageWrapper>
            <CrownImage src={BronzeCrownImage} />
            <img src={ThirdGradeCircle} />
            <ProfileImage src={universityRank[2].universityLogo} />
            <div> {universityRank[2].universityName} </div>
          </ImageWrapper>
        </TopRanker>
      </RankerWrapper>

      <ETCWrapper>
        {universityRank.slice(3, 13).map((rank, index) => (
          <Wrapper key={index}>
            <div>{rank.universityRank}등</div>
            <div>{rank.universityName}</div>
            <div>{rank.universityPoint} point</div>
          </Wrapper>
        ))}
      </ETCWrapper>
    </Container>
  );
};

SchoolRanking.propTypes = {
  universityRank: PropTypes.arrayOf(
    PropTypes.shape({
      universityRank: PropTypes.number.isRequired,
      universityName: PropTypes.string.isRequired,
      universityPoint: PropTypes.number.isRequired,
      universityLogo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SchoolRanking;
