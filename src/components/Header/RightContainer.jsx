import React, { useState } from 'react';
//import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//import RightModal from './RightModal';

import Profile from 'components/Profile/Profile';

import MyProfileImage from 'assets/header/ProfileImage.png';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.62);
  z-index: 999;
`;

const Container = styled.div`
  display: flex;
  width: 15%;
  height: 50%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
`;

const ProfileNickname = styled.div`
  display: flex;
  align-items: center;
  color: white;
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

  return (
    <Container>
      <Wrapper onClick={() => setIsModalOpen(true)}>
        <ProfileImage src={MyProfileImage} isScrolled={isScrolled} />

        <ProfileNickname> 눈꽃님 안녕하세요! </ProfileNickname>
        {/*서버와 연결 시 아래 코드로 변경 */}
        {/*<Profile> {`${nickname}님 안녕하세요!`} </Profile>*/}
      </Wrapper>
      {isModalOpen && (
        <>
          <Overlay />
          <Profile isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
      )}
    </Container>
  );
};

RightContainer.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default RightContainer;
