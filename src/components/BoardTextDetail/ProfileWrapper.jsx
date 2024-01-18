import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const ProfileBigWrapper = styled.div`
  padding-top: 10vh;
  display: inline-flex;
  width: 100%;
  padding-left: 20vw;
  padding-bottom: 5%;
  flex-direction: row;
  gap: 0.1vw;
`;

const ProfileMediumWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width:100%;
`;

const ProfileSmallWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: row;
  gap: 0.1vw;
`;

const CohortPart = styled.p`
  color: #9D9D9D;
  font-family: "Pretendard";
  font-size: 1em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.4px;
`;

const ProfileWrapper = ({ ProfileImg, NameNickname, CohortPartText }) => (
    <ProfileBigWrapper>
      <img src={ProfileImg || "assets/ProfileImg.svg"} alt="프로필 사진" />
      <ProfileMediumWrapper>
        <ProfileSmallWrapper>
          <NameNickname> {NameNickname || "리오/이원영"} </NameNickname>
        </ProfileSmallWrapper>
        <CohortPart> {CohortPartText || "5기 Web"} </CohortPart>
      </ProfileMediumWrapper>
    </ProfileBigWrapper>
  );

  ProfileWrapper.propTypes = {
    ProfileImg: PropTypes.any,
    NameNickname: PropTypes.string.isRequired,
    CohortPartText: PropTypes.string.isRequired,
  };
  export default ProfileWrapper;