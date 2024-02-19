import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import PuddingImage from 'assets/Mascot/Feed/Pudding.svg';
import DoughnutImage from 'assets/Mascot/Feed/Doughnut.svg';
import IceCreamImage from 'assets/Mascot/Feed/IceCream.svg';
import RollCakeImage from 'assets/Mascot/Feed/RollCake.svg';

const FeedWrapper = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  width: 80%;
  color: white;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Number = styled.div`
  margin-left: 15px;
  text-align: center;
  color: black;
  background-color: white;
  border: 1px solid white;
  border-radius: 15px;
  padding: 3px 10px;
  text-align: center;
`;

const FeedTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PointValue = styled.div`
  display: flex;
  color: black;
  background-color: white;
  border-radius: 15px;

  text-align: center;
  padding: 5px;

  position: absolute;
  bottom: 25%;

  font-size: 14px;
`;

const Description = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 15px;

  text-align: center;
  padding: 7px;

  font-size: 12px;
`;

const Feed = ({ pointNHistory }) => {
  // eslint-disable-next-line
  const [type, setType] = useState('');

  const handleFeedImage = (key) => {
    setType(key);
    feedMascot(key);
  };

  const pointType = [
    {
      pointType: 'PUDDING',
      value: '1',
      description: '은하수를 살짝 얹은 커스터드 푸딩',
      img: PuddingImage,
    },
    {
      pointType: 'DOUGHNUT',
      value: '5',
      description: '은하스프링클 도넛',
      img: DoughnutImage,
    },
    {
      pointType: 'ICE_CREAM',
      value: '10',
      description: '태양이 물든 션샤인 샤베트 아이스크림',
      img: IceCreamImage,
    },
    {
      pointType: 'ROLL_CAKE',
      value: '30',
      description: '찬란한 별들이 쏙쏙 박힌 우주맛 롤케이크',
      img: RollCakeImage,
    },
  ];

  // 먹이(경험치) 주기
  const feedMascot = async (type) => {
    try {
      const res = await axiosInstance.post(
        `/universities/mascot?pointType=${type}`,
        {
          pointType: type,
        },
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FeedWrapper>
      <TitleWrapper>
        <div> 현재 내 보유 EXP </div>
        <Number> {pointNHistory.remainPoint} </Number>
      </TitleWrapper>
      <FeedTypeWrapper>
        {pointType.map((data, index) => (
          <Wrapper key={index}>
            <img
              src={data.img}
              alt="Point image"
              onClick={() => handleFeedImage(data.pointType)}
              style={{ cursor: 'pointer' }}
            />
            <PointValue> {data.value}EXP </PointValue>

            <Description> {data.description} </Description>
          </Wrapper>
        ))}
      </FeedTypeWrapper>
    </FeedWrapper>
  );
};

Feed.propTypes = {
  pointNHistory: PropTypes.shape({
    remainPoint: PropTypes.number.isRequired,
    usedHistories: PropTypes.arrayOf({
      pointImage: PropTypes.string.isRequired,
      point: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Feed;
