import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Friend from 'assets/header/friend.svg';
import Setting from 'assets/header/setting.svg';
import Notification from 'assets/header/notification.svg';

const RightWrapper = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-evenly;
`;

const NewRight = ({ isLoggedIn, onLogout }) => {
  return (
    <RightWrapper>
      {isLoggedIn ? (
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

          <button onClick={onLogout}>로그아웃</button>
        </>
      ) : null}
    </RightWrapper>
  );
};

NewRight.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NewRight;
