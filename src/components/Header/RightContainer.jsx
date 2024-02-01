import React, { useState } from 'react';
//import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import RightModal from './RightModal';

import Friend from 'assets/header/friend.svg';
import Setting from 'assets/header/setting.svg';
import Notification from 'assets/header/notification.svg';

import MyProfileImage from 'assets/header/ProfileImage.png';

const RightWrapper = styled.div`
  display: flex;
  width: 15%;
  height: 50%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const UpWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-right: 10%;
  margin-left: auto;
  width: 50%;
`;

const DownWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const ProfileImage = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
`;

const RightContainer = ({ isScrolled }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  {
    /* 서버와 연결 후에 사용
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const getNickname = async () => {
      try {
        const res = await axios.get();

        setNickname(res.data.nickname);
      } catch (error) {
        console.error('Error get nickname', error);
      }
    };

    getNickname();
  }, []);
*/
  }

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <RightWrapper onClick={handleModalToggle}>
      <UpWrapper isScrolled={isScrolled}>
        <Link to="/setting">
          <img src={Setting} alt="설정" />
        </Link>

        <Link to="/notification">
          <img src={Notification} alt="알림" />
        </Link>

        <Link to="/friend">
          <img src={Friend} alt="친구" />
        </Link>
      </UpWrapper>
      <DownWrapper>
        <ProfileImage src={MyProfileImage} isScrolled={isScrolled} />

        <Profile> 눈꽃님 안녕하세요! </Profile>
        {/*서버와 연결 시 아래 코드로 변경 */}
        {/*<Profile> {`${nickname}님 안녕하세요!`} </Profile>*/}
      </DownWrapper>
      {isModalOpen && (
        <RightModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </RightWrapper>
  );
};

RightContainer.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default RightContainer;
