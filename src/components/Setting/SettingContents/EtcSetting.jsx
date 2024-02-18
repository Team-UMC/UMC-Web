import React from 'react';
import {
  SettingContentsTitle,
  SettingDetailBlock,
  SettingDetailBlockContent,
  SettingDetailBlockTitle,
  SettingDetailButtonLayout,
  SettingDetailEtcLogoutButton,
  SettingDetailEtcWithdrawButton,
  SettingDetailTitle,
  SettingDetailWebInfoContentsBox,
  SettingDetailWrapper,
} from 'components/Setting/Setting.style';

// 기타 설정 컴포넌트
const EtcSetting = () => {
  return (
    <>
      <SettingContentsTitle>기타</SettingContentsTitle>
      <SettingDetailWrapper style={{ marginBottom: '48px' }}>
        <SettingDetailTitle>로그아웃</SettingDetailTitle>
        <SettingDetailBlock
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <SettingDetailBlockTitle>로그아웃</SettingDetailBlockTitle>
          <SettingDetailBlockContent>
            이 웹사이트에서 로그아웃할 수 있습니다.
          </SettingDetailBlockContent>
        </SettingDetailBlock>
        <SettingDetailButtonLayout>
          <SettingDetailEtcLogoutButton>로그아웃</SettingDetailEtcLogoutButton>
        </SettingDetailButtonLayout>
      </SettingDetailWrapper>
      <SettingDetailWrapper>
        <SettingDetailTitle>탈퇴 약관</SettingDetailTitle>
        <SettingDetailWebInfoContentsBox>
          탈퇴 약관입니다.
        </SettingDetailWebInfoContentsBox>
        <SettingDetailButtonLayout>
          <SettingDetailEtcWithdrawButton>탈퇴</SettingDetailEtcWithdrawButton>
        </SettingDetailButtonLayout>
      </SettingDetailWrapper>
    </>
  );
};

export default EtcSetting;
