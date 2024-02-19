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
  align-items: center;
  width: 100%;
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

  margin-bottom: 10px;
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
  height: 600px;
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

const SchoolRanking = ({
  universityRank,
  firstSchoolRank,
  secondSchoolRank,
  thirdSchoolRank,
}) => {
  return (
    <Container>
      <RankerWrapper>
        <TopRanker>
          <ImageWrapper>
            <CrownImage src={SilverCrownImage} />
            <img src={SecondGradeCircle} />
            {secondSchoolRank.universityLogo ? (
              <ProfileImage src={secondSchoolRank.universityLogo} />
            ) : null}
          </ImageWrapper>
          <div> {secondSchoolRank.universityName} </div>
        </TopRanker>
        <TopRanker>
          <ImageWrapper>
            <CrownImage src={GoldCrownImage} />
            <img src={FirstGradeCircle} />
            {firstSchoolRank.universityLogo ? (
              <ProfileImage src={firstSchoolRank.universityLogo} />
            ) : null}
          </ImageWrapper>
          <div> {firstSchoolRank.universityName} </div>
        </TopRanker>
        <TopRanker>
          <ImageWrapper>
            <CrownImage src={BronzeCrownImage} />
            <img src={ThirdGradeCircle} />
            {thirdSchoolRank.universityLogo ? (
              <ProfileImage src={thirdSchoolRank.universityLogo} />
            ) : null}
            <div> {thirdSchoolRank.universityName} </div>
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
    }),
  ).isRequired,
  firstSchoolRank: PropTypes.object.isRequired,
  secondSchoolRank: PropTypes.object.isRequired,
  thirdSchoolRank: PropTypes.object.isRequired,
};

export default SchoolRanking;
