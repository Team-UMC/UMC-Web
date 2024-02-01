import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { GALLERY_DATAS } from '../GalleryData';

const GalleryDetailProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 11px;
  padding-bottom: 24px;
`;

const GalleryDetailProfileImg = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const GalleryDetailProfileAuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard';
  word-wrap: break-word;
`;

const GalleryDetailProfileAuthorName = styled.div`
  display: flex;
  color: black;
  font-size: 16px;
  font-weight: 600;
`;

const GalleryDetailProfileAuthorPosition = styled.div`
  display: flex;
  color: #9d9d9d;
  font-size: 14px;
  font-weight: 400;
`;

const GalleryDetailProfile = ({ id }) => {
  const item = GALLERY_DATAS.find((item) => item.id === Number(id));

  if (!item) {
    return <div>존재하지 않는 갤러리입니다.</div>;
  }

  return (
    <GalleryDetailProfileContainer>
      <GalleryDetailProfileImg src={item.author.profile} alt="profile" />
      <GalleryDetailProfileAuthorWrapper>
        <GalleryDetailProfileAuthorName>
          {item.author.name}
        </GalleryDetailProfileAuthorName>
        <GalleryDetailProfileAuthorPosition>
          {item.author.position}
        </GalleryDetailProfileAuthorPosition>
      </GalleryDetailProfileAuthorWrapper>
    </GalleryDetailProfileContainer>
  );
};

GalleryDetailProfile.propTypes = {
  id: PropTypes.string.isRequired,
};

export default GalleryDetailProfile;
