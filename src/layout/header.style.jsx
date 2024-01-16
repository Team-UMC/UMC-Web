import styled from 'styled-components';
import HeaderBackground from 'assets/header/header.svg';
import SmallHeaderBackground from 'assets/header/SmallHeader.svg';
import OpenHambugerIcon from 'assets/header/openhamburger.svg';
import SettingIcon from 'assets/header/Setting.svg';
import NotificationIcon from 'assets/header/Notification.svg';
import FriendIcon from 'assets/header/Friend.svg';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
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
    height: 89px;
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
    margin: 10px 30px;
    text-decoration: none;
    color: white;
    font-family: 'Pretendard', sans-serif;

    &.selected {
      font-weight: bold;
    }
  }
`;

const RightContainer = styled.div`
  height: 43px;
  padding: 28px 20px 20px 50px;
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

const HeaderStyles = {
  HeaderWrapper,
  LeftContainer,
  Hamburger,
  Navigation,
  RightContainer,
  SmallHeaderImage,
  LoginContainer,
  OpenHambugerIcon,
  SettingIcon,
  NotificationIcon,
  FriendIcon,
};

export default HeaderStyles;
