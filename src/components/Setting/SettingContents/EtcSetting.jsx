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
import axiosInstance from 'apis/setting';
import { useNavigate } from 'react-router-dom';

// 기타 설정 컴포넌트
const EtcSetting = () => {
  const navigate = useNavigate();

  const logoutMember = async () => {
    try {
      const res = await axiosInstance.delete(`/members/logout`);

      console.log(res);

      localStorage.removeItem('server Token');

      navigate(`/`);
    } catch (error) {
      console.error();
    }
  };

  const deleteMember = async () => {
    try {
      const res = await axiosInstance.delete(`/members`);

      console.log(res);

      localStorage.removeItem('server Token');

      navigate(`/`);
    } catch (error) {
      console.error();
    }
  };

  return (
    <>
      <SettingContentsTitle>기타</SettingContentsTitle>
      <SettingDetailWrapper style={{ marginBottom: '30px' }}>
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
          <SettingDetailEtcLogoutButton onClick={logoutMember}>
            로그아웃
          </SettingDetailEtcLogoutButton>
        </SettingDetailButtonLayout>
      </SettingDetailWrapper>

      <SettingDetailWrapper>
        <SettingDetailTitle>탈퇴 약관</SettingDetailTitle>
        <SettingDetailWebInfoContentsBox>
          탈퇴 약관입니다.
        </SettingDetailWebInfoContentsBox>
        <SettingDetailButtonLayout>
          <SettingDetailEtcWithdrawButton onClick={deleteMember}>
            탈퇴
          </SettingDetailEtcWithdrawButton>
        </SettingDetailButtonLayout>
      </SettingDetailWrapper>
    </>
  );
};

export default EtcSetting;
