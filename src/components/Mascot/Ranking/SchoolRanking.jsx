import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SilverCrownImage from 'assets/Mascot/Ranking/SilverCrown.svg';
import FirstGradeCircle from 'assets/Mascot/FirstGrade.svg';

import GoldCrownImage from 'assets/Mascot/Ranking/GoldCrown.svg';
import SecondGradeCircle from 'assets/Mascot/SecondGrade.svg';

import BronzeCrownImage from 'assets/Mascot/Ranking/BronzeCrown.svg';
import ThirdGradeCircle from 'assets/Mascot/ThirdGrade.svg';

import Gachon from 'assets/SchoolLogo/Gachon.svg';
import Catholic from 'assets/SchoolLogo/Catholic.svg';
import Kyounggi from 'assets/SchoolLogo/Kyounggi.svg';
import KyungHee from 'assets/SchoolLogo/KyungHee.svg';
import KwangWoon from 'assets/SchoolLogo/KwangWoon.svg';
import Duksung from 'assets/SchoolLogo/Duksung.svg';
import Dongguk from 'assets/SchoolLogo/Dongguk.svg';
import DongDuk from 'assets/SchoolLogo/DongDuk.svg';
import Myongji from 'assets/SchoolLogo/Myongji.svg';
import Pukyong from 'assets/SchoolLogo/Pukyong.svg';
import SangMyeong from 'assets/SchoolLogo/SangMyeong.svg';
import SeoGyeong from 'assets/SchoolLogo/SeoGyeong.svg';
import SeoulWoman from 'assets/SchoolLogo/SeoulWoman.svg';
import SeongShin from 'assets/SchoolLogo/SeongShin.svg';
import SukMyeong from 'assets/SchoolLogo/SukMyeong.svg';
import SongSil from 'assets/SchoolLogo/SongSil.svg';
import Aju from 'assets/SchoolLogo/Aju.svg';
import WoolSan from 'assets/SchoolLogo/WoolSan.svg';
import IHwa from 'assets/SchoolLogo/IHwa.svg';
import Inha from 'assets/SchoolLogo/Inha.svg';
import JoogAng from 'assets/SchoolLogo/JoogAng.svg';
import KoreaEngineering from 'assets/SchoolLogo/KoreaEngineering.svg';
import KoreaUniversityLanguage from 'assets/SchoolLogo/KoreaUniversityLanguage.svg';
import KoreaAerospace from 'assets/SchoolLogo/KoreaAerospace.svg';
import Hansung from 'assets/SchoolLogo/Hansung.svg';
import Hanyang from 'assets/SchoolLogo/Hanyang.svg';
import Hongik from 'assets/SchoolLogo/Hongik.svg';

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

  background-color: white;
`;

const SecondProfileImage = styled.img`
  position: absolute;

  width: 80px;
  height: 80px;

  top: 17%;
  left: 17%;

  border-radius: 50%;

  background-color: white;
`;

const ThirdProfileImage = styled.img`
  position: absolute;

  width: 75px;
  height: 75px;

  top: 14%;
  left: 17%;

  border-radius: 50%;

  background-color: white;
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
  const schoolImages = {
    가천대학교: Gachon,
    가톨릭대학교: Catholic,
    경기대학교: Kyounggi,
    경희대학교: KyungHee,
    광운대학교: KwangWoon,
    덕성여자대학교: Duksung,
    동국대학교: Dongguk,
    동덕여자대학교: DongDuk,
    명지대학교: Myongji,
    부경대학교: Pukyong,
    상명대학교: SangMyeong,
    서경대학교: SeoGyeong,
    서울여자대학교: SeoulWoman,
    성신여자대학교: SeongShin,
    숙명여자대학교: SukMyeong,
    숭실대학교: SongSil,
    아주대학교: Aju,
    울산대학교: WoolSan,
    이화여자대학교: IHwa,
    인하대학교: Inha,
    중앙대학교: JoogAng,
    한국공학대학교: KoreaEngineering,
    한국외국어대학교: KoreaUniversityLanguage,
    한국항공대학교: KoreaAerospace,
    한성대학교: Hansung,
    한양대학교: Hanyang,
    한양대학교에리카: Hanyang,
    홍익대학교: Hongik,
  };

  const FindSchoolImage = (schoolName) => {
    const imageName = schoolImages[schoolName];
    return imageName || null; // 해당 학교 이미지가 없을 경우 null 반환
  };

  return (
    <Container>
      <RankerWrapper>
        <TopRanker>
          <ImageWrapper>
            <CrownImage src={SilverCrownImage} />
            <img src={SecondGradeCircle} />
            {secondSchoolRank.universityName ? (
              <SecondProfileImage
                src={FindSchoolImage(secondSchoolRank.universityName)}
              />
            ) : null}
          </ImageWrapper>
          <div> {secondSchoolRank.universityName} </div>
        </TopRanker>
        <TopRanker>
          <ImageWrapper>
            <CrownImage src={GoldCrownImage} />
            <img src={FirstGradeCircle} />
            {firstSchoolRank.universityName ? (
              <FirstProfileImage
                src={FindSchoolImage(firstSchoolRank.universityName)}
              />
            ) : null}
          </ImageWrapper>
          <div> {firstSchoolRank.universityName} </div>
        </TopRanker>
        <TopRanker>
          <ImageWrapper>
            <CrownImage src={BronzeCrownImage} />
            <img src={ThirdGradeCircle} />
            {thirdSchoolRank.universityName ? (
              <ThirdProfileImage
                src={FindSchoolImage(thirdSchoolRank.universityName)}
              />
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
      universityLogo: PropTypes.string,
    }),
  ).isRequired,
  firstSchoolRank: PropTypes.object.isRequired,
  secondSchoolRank: PropTypes.object.isRequired,
  thirdSchoolRank: PropTypes.object.isRequired,
};

export default SchoolRanking;
