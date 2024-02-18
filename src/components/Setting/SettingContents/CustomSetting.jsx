import React from 'react';
import styled from 'styled-components';

import {
  SettingContentsTitle,
  SettingDetailBlock,
  SettingDetailBlockContent,
  SettingDetailBlockTitle,
  SettingDetailTitle,
  SettingDetailWrapper,
} from 'components/Setting/Setting.style';

// 스위치 컨테이너
const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
`;

// 실제 스위치
const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

// 스위치 슬라이더
const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

// 스위치 체크되었을 때 슬라이더
const SwitchCheckedSlider = styled(SwitchSlider)`
  background-color: lightgray;

  ${SwitchInput}:checked + & {
    background-color: black;
  }

  ${SwitchInput}:checked + &:before {
    transform: translateX(12px);
  }
`;

// 스위치 컴포넌트
const Switch = () => (
  <SwitchContainer>
    <SwitchInput type="checkbox" checked disabled />
    <SwitchCheckedSlider />
  </SwitchContainer>
);

// 맞춤 설정 컴포넌트
const CustomSetting = () => {
  return (
    <>
      <SettingContentsTitle>맞춤 설정</SettingContentsTitle>
      <SettingDetailWrapper>
        <SettingDetailTitle>자동 로그인</SettingDetailTitle>
        <SettingDetailBlock>
          <div>
            <SettingDetailBlockTitle>자동 로그인 허용</SettingDetailBlockTitle>
            <SettingDetailBlockContent>
              자동 로그인을 설정하면, 다음부터는 로그인을 하지 않아도 됩니다.
            </SettingDetailBlockContent>
          </div>
          <Switch />
        </SettingDetailBlock>
      </SettingDetailWrapper>
    </>
  );
};

export default CustomSetting;
