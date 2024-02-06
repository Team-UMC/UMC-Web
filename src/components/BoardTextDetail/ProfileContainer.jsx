// 프로필 사진과 정보(닉네임,이름, 기수, 파트)를 나타내는 파일

import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileImgTextWrapper,
  ProfileWrapper,
  NameNickname,
  CohortPart,
} from './ProfileContainer.style';


// 프로필 사진과 닉네임/이름, 기수/파트를 prop으로 받는 컴포넌트
const ProfileContainer = ({ ProfileImgFile, NameNicknameText, CohortPartText }) => {
  return (
    <ProfileImgTextWrapper>                                 
      <img src={ProfileImgFile} alt="프로필 사진" />                                     
      <ProfileWrapper>
        <NameNickname> {NameNicknameText || '리오/이원영'} </NameNickname>
        <CohortPart> {CohortPartText || '5기 &#124; Web'} </CohortPart>
      </ProfileWrapper>
    </ProfileImgTextWrapper>
  );
};

ProfileContainer.propTypes = {
  ProfileImgFile: PropTypes.any,
  NameNicknameText: PropTypes.string.isRequired,
  CohortPartText: PropTypes.string.isRequired,
};
export default ProfileContainer;
