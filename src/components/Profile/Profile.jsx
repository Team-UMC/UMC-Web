import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ExitButtonImage from 'assets/Profile/ExitButton.svg';
import ProfileImageImage from 'assets/Profile/ProfileImage.svg';
import ProfileSettingImageImage from 'assets/Profile/ProfileSetting.svg';

import SettingIconImage from 'assets/Profile/SettingIcon.svg';
import NotificationIconImage from 'assets/Profile/NotificationIcon.svg';
import FriendIconImage from 'assets/Profile/FriendIcon.svg';
import { useNavigate } from 'react-router-dom';

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid gray;
  border-radius: 12px;
  background-color: #aca8a8;
  z-index: 1000;
`;

const ExitButton = styled.img`
  margin-left: auto;

  cursor: pointer;
`;

const ProfileImageWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const ProfileImage = styled.img`
  position: relative;
  z-index: 100;
`;

const ProfileSettingImage = styled.img`
  cursor: pointer;

  position: absolute;
  bottom: 15px;
  right: 15px;

  z-index: 101;
`;

const School = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 101;

  background-color: white;
  border: 1px solid white;
  border-radius: 15px;

  width: 100px;

  text-align: center;
`;

const Role = styled.div`
  background-color: #414463;
  border: 1px solid #414463;
  border-radius: 15px;

  color: white;

  width: 50px;

  text-align: center;
`;

const SemesterPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const PartNSemesterWrapper = styled.div`
  width: 80px;

  background-color: white;
  border: 1px solid white;
  border-radius: 15px;

  text-align: center;
`;

const StatusMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;

  background-color: white;
  border: 1px solid white;
  border-radius: 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Profile = ({ setIsModalOpen }) => {
  const navigate = useNavigate();

  const handleProfileSettingClick = () => {
    setIsModalOpen(false);

    navigate('/profilesetting');
  };

  return (
    <Modal>
      <ExitButton src={ExitButtonImage} onClick={() => setIsModalOpen(false)} />

      <ProfileImageWrapper>
        <ProfileImage src={ProfileImageImage} />
        <ProfileSettingImage
          src={ProfileSettingImageImage}
          onClick={handleProfileSettingClick}
        />

        <School> 학교 </School>
      </ProfileImageWrapper>

      <Role> 직책 </Role>
      <div> 이름/닉네임 </div>

      <SemesterPart>
        <PartNSemesterWrapper> 파트 </PartNSemesterWrapper>
        <PartNSemesterWrapper> 기수 </PartNSemesterWrapper>
      </SemesterPart>

      <StatusMessageWrapper>
        <div style={{ fontSize: '12px', marginBottom: '5px' }}>
          {' '}
          상태메세지{' '}
        </div>
        <div> 상태메시지 들어가는 곳 </div>
      </StatusMessageWrapper>

      <IconWrapper>
        <img src={SettingIconImage} />
        <img src={NotificationIconImage} />
        <img src={FriendIconImage} />
      </IconWrapper>
    </Modal>
  );
};

Profile.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};

export default Profile;
