import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'assets/main/Background.svg';
import KakaoLoginImage from 'assets/signup/Kakao_Login_Button.png';
import GoogleLoginImage from 'assets/signup/Google_Login_Button.png';
import NaverLoginImage from 'assets/signup/Naver_Login_Button.png';

const Background = styled.div`
  background: url(${BackgroundImage}) no-repeat center center;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Button = styled.a`
  display: flex;
  width: 30%;
  cursor: pointer;
`;

const LoginButtonImage = styled.img`
  width: 100%;
  height: 90px;
`;

const HomePage = () => {
  const KakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
  const NaverLoginURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_REST_API_KEY}&state=test&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`;

  return (
    <Background>
      <Button href={KakaoLoginURL}>
        <LoginButtonImage src={KakaoLoginImage} />
      </Button>
      <Button to="/signupform">
        <LoginButtonImage src={GoogleLoginImage} />
      </Button>
      <Button href={NaverLoginURL}>
        <LoginButtonImage src={NaverLoginImage} />
      </Button>
    </Background>
  );
};

export default HomePage;
