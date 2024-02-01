import React from 'react';
import styled from 'styled-components';

import BasicProfileImageImage from 'assets/Setting/Profile/BasicProfileImage.svg';
import SelectPhotoImage from 'assets/Setting/Profile/SelectPhoto.svg';

const MyPhoto = styled.div`
  display: inline-block;

  // 사진 2개를 겹치도록 하기
  position: relative;
`;

const Select = styled.div`
  // 사진 2개를 겹치도록 하기
  position: absolute;
  z-index: 1;

  // 겹치는 부분의 크기 조정
  bottom: 10px;
  right: 10px;
`;

const Photo = () => {
  // 사진 변경 함수
  //const EditPhoto = () => {};

  return (
    <div>
      <MyPhoto>
        <img src={BasicProfileImageImage} />
        <Select>
          <img src={SelectPhotoImage} style={{ cursor: 'pointer' }} />
        </Select>
      </MyPhoto>
    </div>
  );
};

export default Photo;
