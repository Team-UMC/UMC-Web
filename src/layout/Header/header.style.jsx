import styled from 'styled-components';
import HeaderBackground from 'assets/header/header.svg';
import SmallHeaderBackground from 'assets/header/smallheader.svg';
import OpenHambugerIcon from 'assets/header/openhamburger.svg';
import SettingIcon from 'assets/header/setting.svg';
import NotificationIcon from 'assets/header/notification.svg';
import FriendIcon from 'assets/header/friend.svg';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: url('${HeaderBackground}') no-repeat center/cover;
  height: 100vh;
  color: white;
  margin: 0;
  padding: 0;
  transition: height 0.3s ease;

  &.small-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: url('${SmallHeaderBackground}') no-repeat center/cover;
    height: 91px;
    margin: 0;
  }
`;

const LeftContainer = styled.div`
  padding: 28px 20px 20px 50px;
  display: flex;
  align-items: center;
`;

const Hamburger = styled.div`
  cursor: pointer;
  margin-right: 50px;

  img {
    width: 21px;
    height: 19px;
    margin: 10px;
  }
`;

const Navigation = styled.div`
  display: flex;
  height: 43px;

  a {
    font-size: 15px;
    margin: 10px 60px;
    text-decoration: none;
    color: white;

    &.selected {
      font-weight: bold;
    }
  }
`;

const RightContainer = styled.div`
  height: 43px;
  padding: 28px 100px 20px 50px;
  display: flex;
  align-items: center;
`;

const SmallHeaderImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

const LoginContainer = styled.div`
  padding: 28px 150px 20px 50px;
  display: flex;
  align-items: center;
  margin: 10px 10px 10px auto;
`;

const HamburgerWrapper = styled.div`
  z-index: 5;
  padding-left: 100px;
  background-color: #f4f4f4;
  height: 50%;
  width: 100%;
  top: -100%;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    top 0.5s ease,
    opacity 0.5s ease;
  opacity: 0;
  pointer-events: none;

  &.open {
    top: 91px;
    opacity: 0.8;
    pointer-events: auto;
  }

  .menu-container-wrapper {
    display: flex;
    flex-direction: row; /* Set the main axis to row */
    justify-contents: center;
    width: 100%;
  }
`;

const HeaderStyles = {
  HeaderWrapper,
  LeftContainer,
  Hamburger,
  Navigation,
  RightContainer,
  SmallHeaderImage,
  LoginContainer,
  HamburgerWrapper,
  OpenHambugerIcon,
  SettingIcon,
  NotificationIcon,
  FriendIcon,
};

export default HeaderStyles;
