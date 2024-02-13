import React from 'react';
import styled from 'styled-components';

import FeedbackgroundImage from 'assets/Mascot/FeedBackground.svg';

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  color: white;
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

const Feed = () => {
    return (
        <FeedWrapper>
        <TitleWrapper>
          <div> 현재 내 보유 EXP </div>
          <Number> 개수 </Number>
        </TitleWrapper>
        <MyFeed>
          <img src={FeedbackgroundImage} />
          <img src={FeedbackgroundImage} />
          <img src={FeedbackgroundImage} />
          <img src={FeedbackgroundImage} />
        </MyFeed>
      </FeedWrapper>
    );
};

export default Feed;