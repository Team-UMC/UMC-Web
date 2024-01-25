import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Friend from 'assets/header/friend.svg';
import Setting from 'assets/header/setting.svg';
import Notification from 'assets/header/notification.svg';

const RightWrapper = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-evenly;
  height: 10%;
`;

const NewRight = () => {
  return (
    <RightWrapper>
      <>
        <Link to="/setting">
          <img src={Setting} alt="설정" />
        </Link>

        <Link to="/notification">
          <img src={Notification} alt="알림" />
        </Link>

        <Link to="/friend">
          <img src={Friend} alt="친구" />
        </Link>
      </>
    </RightWrapper>
  );
};

export default NewRight;
