import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'assets/main/Background.svg';
import KakaoLoginImage from 'assets/signup/Kakao_Login_Button.png';
import GoogleLoginImage from 'assets/signup/Google_Login_Button.png';
import NaverLoginImage from 'assets/signup/Naver_Login_Button.png';

const Background = styled.div`
  background: url(${BackgroundImage}) no-repeat center center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20% 15% 20% auto;
`;

const Button = styled.a`
  cursor: pointer;
`;

const LoginButtonImage = styled.img``;

const HomePage = () => {
  const KakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
  const NaverLoginURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_REST_API_KEY}&state=test&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`;

  return (
    <Background>
      <ButtonWrapper>
        <Button href={KakaoLoginURL}>
          <LoginButtonImage src={KakaoLoginImage} />
        </Button>

        <a>
          <LoginButtonImage src={GoogleLoginImage} />
        </a>

        <Button href={NaverLoginURL}>
          <LoginButtonImage src={NaverLoginImage} />
        </Button>
      </ButtonWrapper>
    </Background>
  );
};

export default HomePage;
