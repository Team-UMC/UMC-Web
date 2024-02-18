import React from 'react';
import { useParams } from 'react-router-dom';
import { SettingContentsContainer } from './Setting.style';

import CustomSetting from 'components/Setting/SettingContents/CustomSetting';
import CustomerServiceSetting from 'components/Setting/SettingContents/CustomerServiceSetting';
import WebInfoSetting from 'components/Setting/SettingContents/WebInfoSetting';
import UmcInfoSetting from 'components/Setting/SettingContents/UmcInfoSetting';
import EtcSetting from 'components/Setting/SettingContents/EtcSetting';


// 설정 컨텐츠 컴포넌트
const SettingContents = () => {
  // 현재 페이지의 링크 파라미터
  const { contents } = useParams();

  return (
    <SettingContentsContainer>
      {contents === 'custom' && <CustomSetting />}
      {contents === 'customer-service' && <CustomerServiceSetting />}
      {contents === 'web-info' && <WebInfoSetting />}
      {contents === 'umc-sns' && <UmcInfoSetting />}
      {contents === 'etc' && <EtcSetting />}
    </SettingContentsContainer>
  );
};

export default SettingContents;
