import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import Profile from 'components/Profile/Profile';
import BasicProfileImage from 'assets/Profile/ProfileImage.svg';
import { useNavigate } from 'react-router-dom';
import LogoutButtonImage from 'assets/Logout.svg';

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
  height: 90%;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
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

const LogoutButton = styled.img`
  display: flex;
  align-items: center;
  cursor: pointer;
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

  const logoutMember = async () => {
    try {
      const res = await axiosInstance.delete(`/members/logout`);

      console.log(res);

      localStorage.removeItem('server Token');

      navigate(`/`);
    } catch (error) {
      console.error();
    }
  };

  return (
    <Container>
      <Wrapper onClick={() => setIsModalOpen(true)}>
        {profileImage ? (
          <ProfileImage src={profileImage} />
        ) : (
          <ProfileImage src={BasicProfileImage} />
        )}
        <ProfileNickname>
          <div>
            <span style={{ fontWeight: 'bold' }}>{nickname}</span>
            <span> 반가워요!</span>
          </div>
        </ProfileNickname>

        <LogoutButton src={LogoutButtonImage} onClick={logoutMember} />
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
