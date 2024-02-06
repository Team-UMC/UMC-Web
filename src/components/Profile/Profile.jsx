import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axiosInstance from 'apis/setting';

import {
  Modal,
  ExitButton,
  ProfileImageWrapper,
  ProfileImage,
  ProfileSettingImage,
  SettingIconWrapper,
  School,
  SemesterPart,
  PartNSemesterWrapper,
  StatusMessageWrapper,
  IconWrapper,
} from './Profile.style';

import ExitButtonImage from 'assets/Profile/ExitButton.svg';
import BasicProfileImage from 'assets/Profile/ProfileImage.svg';
import ProfileSettingImageImage from 'assets/Profile/ProfileSetting.svg';

import SettingIconImage from 'assets/Profile/SettingIcon.svg';
import NotificationIconImage from 'assets/Profile/NotificationIcon.svg';
import FriendIconImage from 'assets/Profile/FriendIcon.svg';

const Profile = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axiosInstance.get(`/members`);

        setProfileData(res.data.result);
      } catch (error) {
        console.error('Error fetching profile: ', error);
      }
    };
    getProfile();
  }, []);

  const handleProfileSettingClick = () => {
    setIsModalOpen(false);

    navigate('/profilesetting');
  };

  return (
    <Modal>
      <ExitButton src={ExitButtonImage} onClick={() => setIsModalOpen(false)} />

      {profileData && (
        <>
          <ProfileImageWrapper>
            {profileData.profileImage ? (
              <ProfileImage src={profileData.profileImage} />
            ) : (
              <ProfileImage src={BasicProfileImage} />
            )}
            <ProfileSettingImage
              src={ProfileSettingImageImage}
              onClick={handleProfileSettingClick}
            />

            <School>{profileData.universityName}</School>
          </ProfileImageWrapper>

          <div>
            {profileData.nickname}/{profileData.name}
          </div>

          <SemesterPart>
            {profileData.semesterParts.map((parts, index) => (
              <PartNSemesterWrapper key={index}>
                {parts.part}
              </PartNSemesterWrapper>
            ))}
            {profileData.semesterParts.map((semesters, index) => (
              <PartNSemesterWrapper key={index}>
                {semesters.semester}
              </PartNSemesterWrapper>
            ))}
          </SemesterPart>

          <StatusMessageWrapper>
            <div style={{ fontSize: '12px', marginBottom: '5px' }}>
              상태메세지
            </div>

            {/*상태메세지가 있으면 상태메세지 출력, 없다면 빈 줄 출력*/}
            {profileData.statusMessage ? (
              <div>{profileData.statusMessage}</div>
            ) : (
              <div>&nbsp;</div>
            )}
          </StatusMessageWrapper>

          <IconWrapper>
            <SettingIconWrapper>
              <Link to="/setting">
                <img src={SettingIconImage} alt="Setting" />
              </Link>
              <div>설정</div>
            </SettingIconWrapper>
            <SettingIconWrapper>
              <Link to="/notification">
                <img src={NotificationIconImage} alt="Notification" />
              </Link>
              <div> 알림 </div>
            </SettingIconWrapper>
            <SettingIconWrapper>
              <Link to="/friends">
                <img src={FriendIconImage} alt="Friend" />
              </Link>
              <div>친구</div>
            </SettingIconWrapper>
          </IconWrapper>
        </>
      )}
    </Modal>
  );
};

Profile.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  memberId: PropTypes.string,
};

export default Profile;
