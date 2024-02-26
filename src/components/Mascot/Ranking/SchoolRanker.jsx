import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SilverCrownImage from 'assets/Mascot/Ranking/SilverCrown.svg';
import FirstGradeCircle from 'assets/Mascot/FirstGrade.svg';

import GoldCrownImage from 'assets/Mascot/Ranking/GoldCrown.svg';
import SecondGradeCircle from 'assets/Mascot/SecondGrade.svg';

import BronzeCrownImage from 'assets/Mascot/Ranking/BronzeCrown.svg';
import ThirdGradeCircle from 'assets/Mascot/ThirdGrade.svg';

import ProfileImage from 'assets/Profile/ProfileImage.svg';

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

const FirstProfileImage = styled.img`
  position: absolute;

  width: 95px;
  height: 95px;

  top: 16%;
  left: 16%;

  border-radius: 50%;
`;

const SecondProfileImage = styled.img`
  position: absolute;

  width: 80px;
  height: 80px;

  top: 17%;
  left: 17%;

  border-radius: 50%;
`;

const ThirdProfileImage = styled.img`
  position: absolute;

  width: 60px;
  height: 60px;

  top: 17%;
  left: 18%;

  border-radius: 50%;
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

const SchoolRanker = ({
  inUniversityRankData,
  firstRank,
  secondRank,
  thirdRank,
}) => {
  return (
    <Container>
      <RankerWrapper>
        <TopRanker>
          <ImageWrapper>
            <CrownImage src={SilverCrownImage} />
            <img src={SecondGradeCircle} />
            {secondRank.profileImage ? (
              <SecondProfileImage src={secondRank.profileImage} />
            ) : (
              <SecondProfileImage src={ProfileImage} />
            )}
          </ImageWrapper>
          <div> {secondRank.nickname} </div>
        </TopRanker>

        <TopRanker>
          <ImageWrapper>
            <CrownImage src={GoldCrownImage} />
            <img src={FirstGradeCircle} />
            {firstRank.profileImage ? (
              <FirstProfileImage src={firstRank.profileImage} />
            ) : (
              <FirstProfileImage src={ProfileImage} />
            )}
          </ImageWrapper>
          <div> {firstRank.nickname} </div>
        </TopRanker>

        <TopRanker>
          <ImageWrapper>
            <CrownImage src={BronzeCrownImage} />
            <img src={ThirdGradeCircle} />
            {thirdRank.profileImage ? (
              <ThirdProfileImage src={thirdRank.profileImage} />
            ) : (
              <ThirdProfileImage src={ProfileImage} />
            )}
          </ImageWrapper>
          <div> {thirdRank.nickname} </div>
        </TopRanker>
      </RankerWrapper>

      <ETCWrapper>
        {inUniversityRankData.slice(3, 13).map((rank, index) => (
          <Wrapper key={index}>
            <div>{rank.rank}등</div>
            <div>
              {rank.nickname}/{rank.name}
            </div>
            <div>{rank.usedPoint} point</div>
          </Wrapper>
        ))}
      </ETCWrapper>
    </Container>
  );
};

SchoolRanker.propTypes = {
  inUniversityRankData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired,
      usedPoint: PropTypes.number.isRequired,
      profileImage: PropTypes.string.isRequired,
    }),
  ).isRequired,
  firstRank: PropTypes.object.isRequired,
  secondRank: PropTypes.object.isRequired,
  thirdRank: PropTypes.object.isRequired,
};

export default SchoolRanker;
