import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImage from 'assets/main/Background.svg';
import KakaoLoginImage from 'assets/signup/kakao_login_large_wide.png';

const Background = styled.div`
  background: url(${BackgroundImage}) no-repeat center center;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Button = styled(Link)`
  display: flex;
  width: 5%;
  cursor: pointer;
`;

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signupform');
  };

  return (
    <Background>
      <Button onClick={handleClick}>
        <img src={KakaoLoginImage} />
      </Button>
      <Button onClick={handleClick}>
        <img src={KakaoLoginImage} />
      </Button>
      <Button onClick={handleClick}>
        <img src={KakaoLoginImage} />
      </Button>
    </Background>
  );
};

export default HomePage;
