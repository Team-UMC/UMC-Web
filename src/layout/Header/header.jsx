import React, { useState, useEffect, useRef } from 'react';
import HamburgerMenu from 'components/Header/HamburgerMenu';
import HeaderStyles from 'layout/Header/header.style';
import LeftContainer from 'components/Header/LeftContainer';
import RightContainer from 'components/Header/RightContainer';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSmallHeader, setSmallHeader] = useState(false);
  const [isMouseOverLeftContainer, setMouseOverLeftContainer] = useState(false);
  const [hambugerOpen, setHamburgerOpen] = useState(false);

  const [menu, setMenus] = useState([
    { label: '홈', path: '/', isSelected: true },
    { label: '게시판', path: '/board', isSelected: false },
    { label: '히스토리', path: '/history', isSelected: false },
    { label: '사진첩', path: '/gallery', isSelected: false },
  ]);

  const loginClick = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setSmallHeader(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuClick = (selectedIndex) => {
    const updatedMenus = menu.map((item, index) => ({
      ...item,
      isSelected: index === selectedIndex,
    }));

    setMenus(updatedMenus);
  };

  const renderRightContent = () => {
    if (isSmallHeader) {
      return <p> 눈꽃님 반가워요! </p>;
    } else {
      return (
        <>
          <HeaderStyles.SmallHeaderImage
            src={HeaderStyles.SettingIcon}
            alt="Setting"
          />
          <HeaderStyles.SmallHeaderImage
            src={HeaderStyles.NotificationIcon}
            alt="Notification"
          />
          <HeaderStyles.SmallHeaderImage
            src={HeaderStyles.FriendIcon}
            alt="Friend"
          />
          <p> 눈꽃님 반가워요! </p>
        </>
      );
    }
  };

  const handleMouseEnterLeftContainer = () => {
    setMouseOverLeftContainer(true);
    setHamburgerOpen(true);
  };

  const handleMouseLeaveLeftContainer = () => {
    setMouseOverLeftContainer(false);
  };

  const handleMouseLeaveHamburger = () => {
    if (!isMouseOverLeftContainer) {
      setHamburgerOpen(false);
    }
  };

  const outside = useRef();

  const HomeMenuItems = [
    { title: '투두' },
    { title: 'TIL' },
    { title: '깃허브' },
    {
      title: '마스코트 키우기',
      items: ['대학별 랭킹', '나의 기여도'],
    },
  ];

  const BoardMenuItems = [
    {
      title: '학교',
      items: [
        '공지사항',
        '자유게시판',
        '프로젝트 매칭 게시판',
        '이전 기수 게시판',
        '워크북 게시판',
        '건의함',
      ],
    },
    {
      title: '지부',
      items: ['공지사항', '자유게시판', '이전 기수 게시판', '건의함'],
    },
    {
      title: '연합',
      items: ['공지사항', '자유게시판', '이전 기수 게시판', '건의함'],
    },
  ];

  const HistoryMenuItems = [
    { title: '프로젝트', items: ['전체', '핫프로젝트', '웹', '앱'] },
  ];

  const GalleryMenuItems = [
    { title: '사진첩', items: ['뭐가 들어갈까요', '이제 그만'] },
  ];

  return (
    <HeaderStyles.HeaderWrapper
      className={`${isSmallHeader ? 'small-header' : ''}`}
    >
      {isLoggedIn && (
        <LeftContainer
          menu={menu}
          menuClick={menuClick}
          handleMouseEnter={handleMouseEnterLeftContainer}
          handleMouseLeave={handleMouseLeaveLeftContainer}
        />
      )}

      {isLoggedIn && (
        <RightContainer
          isSmallHeader={isSmallHeader}
          renderRightContent={renderRightContent}
        />
      )}

      {!isLoggedIn && (
        <HeaderStyles.LoginContainer>
          <button onClick={loginClick}> 로그인 할래? </button>
        </HeaderStyles.LoginContainer>
      )}

      {hambugerOpen && (
        <HeaderStyles.HamburgerWrapper
          ref={outside}
          className={`SideBarWrap ${hambugerOpen ? 'open' : ''}`}
          onMouseLeave={handleMouseLeaveHamburger}
        >
          <div className="menu-container-wrapper">
            <HamburgerMenu menuItems={HomeMenuItems} />;
            <HamburgerMenu menuItems={BoardMenuItems} />;
            <HamburgerMenu menuItems={HistoryMenuItems} />;
            <HamburgerMenu menuItems={GalleryMenuItems} />;
          </div>
        </HeaderStyles.HamburgerWrapper>
      )}
    </HeaderStyles.HeaderWrapper>
  );
};

export default Header;
