import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './style';

import LoadingImage from 'assets/Loading.svg';

const NaverLoginPage = () => {
  const [naverToken, setNaverToken] = useState('');

  const code = new URL(window.location.href).searchParams.get('code');
  const state = new URL(window.location.href).searchParams.get('state');

  const navigate = useNavigate();

  useEffect(() => {
    const getNaverToken = async () => {
      try {
        const res = await axios.post(
          `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_NAVER_REST_API_KEY}&client_secret=${process.env.REACT_APP_NAVER_CLIENT_SECRET}&code=${code}&state=${state}`,
          {
            headers: {
              'X-Naver-Client-Id': process.env.REACT_APP_NAVER_REST_API_KEY,
              'X-Naver-Client-Secret':
                process.env.REACT_APP_NAVER_CLIENT_SECRET,
            },
          },
        );

        setNaverToken(res.data.access_token);
        localStorage.setItem('naver token', res.data.access_token);
      } catch (error) {
        console.log(error);
      }
    };
    if (code) {
      getNaverToken();
    }
  }, []);

  useEffect(() => {
    const loginWithNaver = async () => {
      if (naverToken) {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_TEST_SERVER_URL}/members/login?accessToken=${naverToken}&socialType=NAVER`,
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
          } else {
            navigate('/signupform');
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    loginWithNaver();
  }, [naverToken, navigate]);

  return <styles.LoadingPageImage src={LoadingImage} />;
};

export default NaverLoginPage;
