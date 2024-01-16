import React from 'react';
import styled from 'styled-components';

const SocialLoginWrapper = styled.div`
  display: block;
  margin: 20% auto;
`;

const SocialLoginButton = styled.div`
  height: 6vh;
  width: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: #000c76;
  background: white;
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  font-weight: bold;
  border-radius: 30px;
  margin-top: 20px;
`;

const SocialLogin = ({ setStep }) => {
  const handleSocialLoginClick = () => {
    setStep(2);
  };

  return (
    <SocialLoginWrapper>
      <SocialLoginButton onClick={() => handleSocialLoginClick('kakao')}>
        Kakao로 로그인
      </SocialLoginButton>
      <SocialLoginButton onClick={() => handleSocialLoginClick('naver')}>
        Naver로 로그인
      </SocialLoginButton>
      <SocialLoginButton onClick={() => handleSocialLoginClick('google')}>
        Google로 로그인
      </SocialLoginButton>
    </SocialLoginWrapper>
  );
};

export default SocialLogin;
