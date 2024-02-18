import React from 'react';
import styled from 'styled-components';

import SettingTitle from 'components/Setting/SettingTitle';
import SettingMenu from 'components/Setting/SettingMenu';
import SettingContents from 'components/Setting/SettingContents';

// 설정 페이지 컨테이너
const SettingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 13vh auto 12.5vh auto;
  gap: 40px;
  width: 70%;
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
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <SettingPageContainer>
        <SettingPageTitleLayout>설정</SettingPageTitleLayout>
        <SettingMenuContentWrapper>
          <SettingMenu />
          <SettingContents />
        </SettingMenuContentWrapper>
      </SettingPageContainer>
    </div>
  );
};

export default SettingPage;
