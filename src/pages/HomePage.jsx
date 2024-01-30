import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import KakaoLoginImage from 'assets/signup/kakao_login_large_wide.png';

const Button = styled(Link)`
  cursor: pointer;
`;

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signupform');
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <img src={KakaoLoginImage} />
      </Button>
      <Button onClick={handleClick}>  </Button>
      <Button onClick={handleClick}> 네이버로 로그인 </Button>
    </div>
  );
};

export default HomePage;
