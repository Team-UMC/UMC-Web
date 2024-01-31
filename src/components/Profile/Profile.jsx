import React from 'react';
import styled from 'styled-components';

import ExitButtonImage from 'assets/Profile/ExitButton.svg';
import ProfileImageImage from 'assets/Profile/ProfileImage.svg';
import ProfileSettingImageImage from 'assets/Profile/ProfileSetting.svg';

import SettingIconImage from "assets/Profile/SettingIcon.svg";
import NotificationIconImage from "assets/Profile/NotificationIcon.svg";
import FriendIconImage from "assets/Profile/FriendIcon.svg";

const Modal = styled.div`
  //display: ${(props) => (props.isOpen ? 'block' : 'none')};
  width: 25%;
  margin: 20vh auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid gray;
  border-radius: 12px;
  background-color: #aca8a8;

  z-index: 1;
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
  z-index: 2;
`;

const ProfileSettingImage = styled.img`
  cursor: pointer;

  position: absolute;
  bottom: 15px;
  right: 15px;

  z-index: 3;
`;

const School = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;

  background-color: white;
  border: 1px solid white;
  border-radius: 15px;

  width: 100px;
`;

const Role = styled.div`
  background-color: #414463;
  border: 1px solid #414463;
  border-radius: 15px;

  color: white;

  width: 50px;
`;

const SemesterPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

const PartNSemesterWrapper = styled.div`
  width: 50px;

  background-color: white;
  border: 1px solid white;
  border-radius: 15px;
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

const Profile = () => {
  return (
    <Modal>
      <ExitButton src={ExitButtonImage} />

      <ProfileImageWrapper>
        <ProfileImage src={ProfileImageImage} />
        <ProfileSettingImage src={ProfileSettingImageImage} />

        <School> 학교 </School>
      </ProfileImageWrapper>

      <Role> 직책 </Role>
      <div> 이름/닉네임 </div>

      <SemesterPart>
        <PartNSemesterWrapper> 파트 </PartNSemesterWrapper>
        <PartNSemesterWrapper> 기수 </PartNSemesterWrapper>
      </SemesterPart>

      <StatusMessageWrapper>
        <div> 상태메세지 </div>
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

export default Profile;
