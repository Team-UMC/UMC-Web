import React from 'react';
import styled from 'styled-components';

import PageIcon from 'assets/Setting/Profile/PageIcon.svg';

// 게시판 제목 컴포넌트 스타일링
const ProfileSettingPageTitleContainer = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 8px;
  padding-bottom: 72px;
`;

// 게시판 제목 아이콘 스타일링
const ProfileSettingPageTitleWrapper = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// 게시판 제목 스타일링
const ProfileSettingPageTitleMainStyle = styled.h1`
  /* 제목 폰트 스타일링 */
  color: #00095c;
  font-size: 34px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
`;

// // 게시판 제목 하이라이트 스타일링
// const HighlightedText = styled.span`
//   color: #7682f6;
// `;

// 게시판 제목 설명 스타일링
const ProfileSettingPageTitleSub = styled.p`
  /* 설명 폰트 스타일링 */
  color: #9d9d9d;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

// 게시판 제목 컴포넌트
const ProfileSettingTitle = () => {
  return (
    <ProfileSettingPageTitleContainer>
      <div className="board-title-icon">
        <img src={PageIcon} alt={"PageIcon"} />
      </div>
      <ProfileSettingPageTitleWrapper>
        <ProfileSettingPageTitleMainStyle>나의 프로필</ProfileSettingPageTitleMainStyle>
        <ProfileSettingPageTitleSub>나의 프로필을 수정할 수 있습니다.</ProfileSettingPageTitleSub>
      </ProfileSettingPageTitleWrapper>
    </ProfileSettingPageTitleContainer>
  );
};

export default ProfileSettingTitle;
