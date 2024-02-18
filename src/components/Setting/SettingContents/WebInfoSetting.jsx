import React from 'react';
import {
  SettingContentsTitle,
  SettingDetailTitle,
  SettingDetailWebInfoContentsBox,
  SettingDetailWebInfoGap,
  SettingDetailWrapper,
} from 'components/Setting/Setting.style';

// 웹 정보 설정 컴포넌트
const WebInfoSetting = () => {
  // 웹 정보 리스트
  const webInfoList = [
    { id: 'terms-of-use', title: '이용 약관', content: '이용 약관 내용' },
    {
      id: 'privacy-policy',
      title: '개인정보 처리 방침',
      content: '개인정보 처리 방침 내용',
    },
    {
      id: 'open-source-license',
      title: '오픈소스 라이센스',
      content: '오픈소스 라이센스 내용',
    },
    { id: 'version-info', title: '버전 정보', content: 'ver 3.10.3' },
  ];

  return (
    <>
      <SettingContentsTitle>웹 정보</SettingContentsTitle>
      <SettingDetailWebInfoGap>
        {webInfoList.map((info) => (
          <SettingDetailWrapper key={info.id}>
            <SettingDetailTitle>{info.title}</SettingDetailTitle>
            <SettingDetailWebInfoContentsBox>
              {info.content}
            </SettingDetailWebInfoContentsBox>
          </SettingDetailWrapper>
        ))}
      </SettingDetailWebInfoGap>
    </>
  );
};

export default WebInfoSetting;
