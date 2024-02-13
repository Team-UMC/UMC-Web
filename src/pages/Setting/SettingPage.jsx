import React from 'react';
import styled from 'styled-components';

import SettingTitle from 'components/Setting/SettingTitle';
import SettingMenu from 'components/Setting/SettingMenu';
import SettingContents from 'components/Setting/SettingContents';

// 설정 페이지 컨테이너
const SettingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30vh;
  margin-bottom: 10vh;
  margin-left: 15%;
  margin-right: 15%;
  gap: 40px;
`;

const SettingPageTitleLayout = styled(SettingTitle)`
  display: flex;
  flex-direction: row;
`;

// 설정 메뉴 & 컨텐츠 감싸는 레이아웃
const SettingMenuContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 114px;
`;

const SettingPage = () => {
  return (
    <SettingPageContainer>
      <SettingPageTitleLayout>설정</SettingPageTitleLayout>
      <SettingMenuContentWrapper>
        <SettingMenu />
        <SettingContents />
      </SettingMenuContentWrapper>
    </SettingPageContainer>
  );
};

export default SettingPage;
