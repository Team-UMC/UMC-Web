import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import Profile from 'components/Profile/Profile';
import BasicProfileImage from 'assets/Profile/ProfileImage.svg';
import { useNavigate } from 'react-router-dom';

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
  width: 20%;
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
  color: black;
`;

const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  color: black;

  border: 1px solid black;
  border-radius: 5px;
`;

const BlackRightContainer = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axiosInstance.get(`/members`);

        setNickname(res.data.result.nickname);
        setProfileImage(res.data.result.profileImage);
      } catch (error) {
        console.error('Error get nickname', error);
      }
    };

    getProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('server Token');
    navigate('/');
  };

  return (
    <Container>
      <Wrapper onClick={() => setIsModalOpen(true)}>
        {profileImage ? (
          <ProfileImage src={profileImage} />
        ) : (
          <ProfileImage src={BasicProfileImage} />
        )}
        <ProfileNickname> {`${nickname}님 반가워요!`} </ProfileNickname>

        <LogoutButton onClick={handleLogout}> 로그아웃 </LogoutButton>
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

export default BlackRightContainer;
