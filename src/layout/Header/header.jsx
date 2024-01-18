import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderStyles from './header.style';
import HamburgerMenu from 'layout/HamburgerMenu/hamburgermenu';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSmallHeader, setSmallHeader] = useState(false);
  const [hambugerOpen, setHambugerOpen] = useState(false);

  const [menu, setMenus] = useState([
    { label: '홈', path: '/', isSelected: true },
    { label: '게시판', path: '/board', isSelected: false },
    { label: '히스토리', path: '/history', isSelected: false },
    { label: '사진첩', path: '/gallery', isSelected: false },
    { label: 'UMC 네트워킹', path: '/umcnetworking', isSelected: false },
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

  const OpenHamburger = () => {
    setHambugerOpen(true);
  };

  return (
    <HeaderStyles.HeaderWrapper className={isSmallHeader ? 'small-header' : ''}>
      {isLoggedIn && (
        <HeaderStyles.LeftContainer>
          <HeaderStyles.Hamburger role="button" onClick={OpenHamburger}>
            <img src={HeaderStyles.OpenHambugerIcon} alt="Hambuger" />
          </HeaderStyles.Hamburger>

          <HamburgerMenu
            isOpen={hambugerOpen}
            toggleSide={() => setHambugerOpen(false)}
          />

          <HeaderStyles.Navigation>
            {menu.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={item.isSelected ? 'selected' : ''}
                onClick={() => menuClick(index)}
              >
                {item.label}
              </Link>
            ))}
          </HeaderStyles.Navigation>
        </HeaderStyles.LeftContainer>
      )}

      {isLoggedIn && (
        <HeaderStyles.RightContainer>
          {renderRightContent()}
        </HeaderStyles.RightContainer>
      )}

      {!isLoggedIn && (
        <HeaderStyles.LoginContainer>
          <button onClick={loginClick}> 로그인 할래? </button>
        </HeaderStyles.LoginContainer>
      )}
    </HeaderStyles.HeaderWrapper>
  );
};

export default Header;
