import React, { useEffect, useState, useRef } from 'react';
import axiosInstance from 'apis/setting';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BasicProfileImage from 'assets/Setting/Profile/BasicProfileImage.svg';
import SelectPhotoImage from 'assets/Setting/Profile/SelectPhoto.svg';

const MyPhoto = styled.div`
  display: inline-block;
  // 사진 2개를 겹치도록 하기
  position: relative;
`;

const MyprofileImage = styled.img`
  width: 254px;
  height: 254px;
`;

const Select = styled.div`
  // 사진 2개를 겹치도록 하기
  position: absolute;
  z-index: 1;

  // 겹치는 부분의 크기 조정
  bottom: 10px;
  right: 10px;
`;

const Photo = ({ onImageChange }) => {
  const [profileImage, setProfileImage] = useState('');

  const fileInputRef = useRef(null);

  // 내 프로필 이미지 받아오기
  useEffect(() => {
    const getProfileImage = async () => {
      const res = await axiosInstance.get('/members');

      setProfileImage(res.data.result.profileImage);
    };
    getProfileImage();
  }, [profileImage]);

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    onImageChange(selectedFile);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <MyPhoto>
        {profileImage ? (
          <MyprofileImage src={profileImage} alt="Profile" />
        ) : (
          <MyprofileImage src={BasicProfileImage} alt="Basic Profile" />
        )}
        <Select onClick={handleImageClick}>
          <img
            src={SelectPhotoImage}
            alt="Select Photo"
            style={{ cursor: 'pointer' }}
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileInputChange}
          />
        </Select>
      </MyPhoto>
    </div>
  );
};

Photo.propTypes = {
  onImageChange: PropTypes.func,
};

export default Photo;
