import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NaverAuth = () => {
  const [naverToken, setNaverToken] = useState('');

  const code = new URL(window.location.href).searchParams.get('code');
  const state = new URL(window.location.href).searchParams.get('state');

  const navigate = useNavigate();

  useEffect(() => {
    const getNaverToken = async () => {
      try {
        const res = await axios.post(
          `/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_NAVER_REST_API_KEY}&client_secret=${process.env.REACT_APP_NAVER_CLIENT_SECRET}&code=${code}&state=${state}`,
          {
            headers: {
              'X-Naver-Client-Id': process.env.REACT_APP_NAVER_REST_API_KEY,
              'X-Naver-Client-Secret':
                process.env.REACT_APP_NAVER_CLIENT_SECRET,
            },
          },
        );

        setNaverToken(res.data.access_token);
      } catch (error) {
        console.log(error);
      }
    };

    if (code) {
      getNaverToken();
    }
  }, [code]);

  useEffect(() => {
    const loginWithNaver = async () => {
      if (naverToken) {
        try {
          const response = await axios.post(
            `http://umcservice.shop:8000/members/login?accessToken=${naverToken}&socialType=NAVER`,
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

  return (
    <div>
      <div>{code}</div>
    </div>
  );
};

export default NaverAuth;
