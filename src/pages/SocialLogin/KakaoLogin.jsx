import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './style';

import LoadingImage from 'assets/Loading.svg';

const KakaoLoginPage = () => {
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
          const res = await axios.post(
            `${process.env.REACT_APP_TEST_SERVER_URL}/members/login?accessToken=${kakaoToken}&socialType=KAKAO`,
            {
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
            },
          );
          const accessToken = res.data.result.accessToken;
          const serviceMember = res.data.result.serviceMember;
          localStorage.setItem('server Token', accessToken);

          if (serviceMember) {
            navigate('/main');
          } else {
            navigate('/signupform');
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    loginWithKakao();
  }, [kakaoToken, navigate]);

  return <styles.LoadingPageImage src={LoadingImage} />;
};

export default KakaoLoginPage;
