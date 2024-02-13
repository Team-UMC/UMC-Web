import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// 설정 메뉴 컨테이너
const SettingMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 100px;
  padding-left: 26px;
`;

// 설정 메뉴 링크 스타일링
const SettingMenuLinkStyle = styled(NavLink)`
  /* 링크 폰트 스타일링 */
  color: black;
  text-align: left;
  text-decoration: none;
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
  padding: 6px 8px;

  /* 가로 길이와 줄바꿈 설정 */
  width: auto;
  white-space: nowrap;

  /* 애니메이션 효과 */
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* 링크 호버 시 효과 */
  &:hover {
    background: #e2e5ff;
    border-radius: 12px;
    color: #8784ff;
  }

  /* 링크 활성화(클릭) 시 효과 */
  &:active {
    background: #e2e5ff;
    border-radius: 12px;
    color: #000c76;
  }
`;

// 설정 메뉴의 정보
const SETTING_MENU_LISTS = [
  {
    title: '맞춤 설정',
    path: 'custom',
  },
  {
    title: '고객 센터',
    path: 'customer-service',
  },
  {
    title: '웹 정보',
    path: 'web-info',
  },
  {
    title: 'Welcome UMC',
    path: 'umc-sns',
  },
  {
    title: '기타',
    path: 'etc',
  },
];

// 설정 메뉴 컴포넌트
const SettingMenu = () => {
  // 현재 페이지의 링크에 적용할 스타일
  const activeStyle = {
    color: '#8784ff',
  };

  return (
    <SettingMenuContainer>
      {SETTING_MENU_LISTS.map((menu, index) => (
        <SettingMenuLinkStyle
          to={`/setting/${menu.path}`}
          key={index}
          style={
            ({ isActive }) =>
              isActive
                ? activeStyle
                : undefined /* 현재 페이지의 링크에 적용할 스타일 */
          }
        >
          {menu.title}
        </SettingMenuLinkStyle>
      ))}
    </SettingMenuContainer>
  );
};

export default SettingMenu;
