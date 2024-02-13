import React from 'react';
import styled from 'styled-components';

import SilverCrownImage from 'assets/Mascot/Ranking/SilverCrown.svg';
import FirstGradeCircle from 'assets/Mascot/FirstGrade.svg';
import FirstImage from 'assets/Mascot/Example/Ellipse 100.png';

import GoldCrownImage from 'assets/Mascot/Ranking/GoldCrown.svg';
import SecondGradeCircle from 'assets/Mascot/SecondGrade.svg';
import SecondImage from 'assets/Mascot/Example/Ellipse 356.png';

import BronzeCrownImage from 'assets/Mascot/Ranking/BronzeCrown.svg';
import ThirdGradeCircle from 'assets/Mascot/ThirdGrade.svg';
import ThirdImage from 'assets/Mascot/Example/Ellipse 354.png';

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

const Ranker = () => {
  return (
    <RankerWrapper>
      <TopRanker>
        <ImageWrapper>
          <CrownImage src={SilverCrownImage} />
          <img src={SecondGradeCircle} />
          <ProfileImage src={SecondImage} />
        </ImageWrapper>
        <div> 리버/이경수 </div>
      </TopRanker>
      <TopRanker>
        <ImageWrapper>
          <CrownImage src={GoldCrownImage} />
          <img src={FirstGradeCircle} />
          <ProfileImage src={FirstImage} />
        </ImageWrapper>
        <div> 벡스/김준석 </div>
      </TopRanker>
      <TopRanker>
        <ImageWrapper>
          <CrownImage src={BronzeCrownImage} />
          <img src={ThirdGradeCircle} />
          <ProfileImage src={ThirdImage} />
          <div> 눈꽃/정진혁 </div>
        </ImageWrapper>
      </TopRanker>
    </RankerWrapper>
  );
};

export default Ranker;
