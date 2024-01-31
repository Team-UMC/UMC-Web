import React from 'react';
import styled from 'styled-components';

import { ReactComponent as BasicProfileImage } from 'assets/Setting/Profile/BasicProfileImage.svg';
import { ReactComponent as SelectPhoto } from 'assets/Setting/Profile/SelectPhoto.svg';

const MyPhoto = styled.div`
  display: inline-block;

  // 사진 2개를 겹치도록 하기
  position: relative;
  z-index: 1;
`;

const Select = styled.div`
  // 사진 2개를 겹치도록 하기
  position: absolute;
  z-index: 2;

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
        <BasicProfileImage />
        <Select>
          <SelectPhoto style={{ cursor: 'pointer' }} />
        </Select>
      </MyPhoto>
    </div>
  );
};

export default Photo;
