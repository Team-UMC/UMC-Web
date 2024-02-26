import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LoadingImage from 'assets/Loading.svg';
import { useNavigate } from 'react-router-dom';

const LoadingPageImage = styled.div`
  background: url(${LoadingImage}) no-repeat center center;
  background-size: cover;
  width: 100%;
`;

const KakaoAuth = () => {
  const [kakaoToken, setKakaoToken] = useState('');
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const getKakaoToken = async () => {
      try {
        const res = await axios.post(
          `/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${code}`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          },
        );
        setKakaoToken(res.data.access_token);

        localStorage.setItem('kakao token', res.data.access_token);
      } catch (error) {
        console.log(error);
      }
    };

    if (code) {
      getKakaoToken();
    }
  }, []);

  useEffect(() => {
    const loginWithKakao = async () => {
      if (kakaoToken) {
        try {
          const response = await axios.post(
            `http://umcservice.shop:8000/members/login?accessToken=${kakaoToken}&socialType=KAKAO`,
            {
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
            },
          );

          const accessToken = response.data.result.accessToken;
          const serviceMember = response.data.result.serviceMember;

          localStorage.setItem('server Token', accessToken);

          if (serviceMember) {
            navigate('/main');
          }
          navigate('/signupform');
        } catch (error) {
          console.log(error);
        }
      }
    };

    loginWithKakao();
  }, [kakaoToken, navigate]);

  return <LoadingPageImage></LoadingPageImage>;
};

export default KakaoAuth;
