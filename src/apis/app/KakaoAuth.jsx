import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KakaoAuth = () => {
  const [kakaoToken, setKakaoToken] = useState('');
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const getKakaoToken = async () => {
      try {
        const res = await axios.post(
          `https://kauth.kakao.com/oauth/tokengrant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${code}`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          },
        );
        setKakaoToken(res.data.access_token);
        console.log('Kakao Token Received');
      } catch (error) {
        console.log(error);
      }
    };

    if (code) {
      getKakaoToken();
    }
  }, [code]);

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
          console.log(accessToken);

          localStorage.setItem('accessToken', accessToken);
          navigate('/mainPage');
        } catch (error) {
          console.log(error);
        }
      }
    };

    loginWithKakao();
  }, [kakaoToken, navigate]);

  return <div>{code}</div>;
};

export default KakaoAuth;
