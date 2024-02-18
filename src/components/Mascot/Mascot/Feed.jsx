import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FeedbackgroundImage from 'assets/Mascot/FeedBackground.svg';

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
  width: 30px;
  text-align: center;
  margin-left: 10px;
  color: black;
  background-color: white;
  border: 1px solid white;
  border-radius: 15px;
  padding: 1px;
`;

const MyFeed = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Feed = ({ remainPoint, usedHistories }) => {
  return (
    <FeedWrapper>
      <TitleWrapper>
        <div> 현재 내 보유 EXP </div>
        <Number> {remainPoint} </Number>
      </TitleWrapper>
      <MyFeed>
        {usedHistories.length > 0
          ? usedHistories.map((data, index) => (
              <div key={index}>
                <div>
                  <img src={FeedbackgroundImage} alt="Feed background" />
                  <img src={data.pointImage} alt="Point image" />
                  <div> {data.point} </div>
                </div>
                <div> {data.description} </div>
              </div>
            ))
          : Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <div>
                  <img src={FeedbackgroundImage} alt="Feed background" />
                </div>
              </div>
            ))}
      </MyFeed>
    </FeedWrapper>
  );
};

Feed.propTypes = {
  remainPoint: PropTypes.number.isRequired,
  usedHistories: PropTypes.arrayOf(
    PropTypes.shape({
      pointImage: PropTypes.string.isRequired,
      point: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Feed;
