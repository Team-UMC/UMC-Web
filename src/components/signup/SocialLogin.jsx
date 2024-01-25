import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import customAxios from '../../apis/types.js';

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

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const AUTH_CODE = params.get('code');
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Requesting access token from Kakao
        const tokenResponse = await customAxios.post(
          'https://kauth.kakao.com/oauth/token',
          `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${AUTH_CODE}`,
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          },
        );

        const { access_token } = tokenResponse.data;

        if (access_token) {
          console.log('Received access token:', access_token);

          // Save access token to localStorage
          localStorage.setItem('jwtToken', access_token);

          // Set Authorization header for future requests
          customAxios.defaults.headers.common['Authorization'] =
            `Bearer ${access_token}`;

          // Making a request to your server's login endpoint
          const userResponse = await customAxios.get('/users/login');

          const { result } = userResponse.data;

          if (result.access_token) {
            // Save user token to localStorage
            localStorage.setItem('token', result.access_token);
            alert('WELCOME');
            navigate('/');
          } else {
            alert('NONONO');
            navigate('/users/login');
          }
        }
      } catch (error) {
        // Handle different types of errors
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error(
            'Server responded with error status:',
            error.response.status,
          );
          console.error('Response data:', error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up the request:', error.message);
        }

        // Navigate to login page or handle error accordingly
        navigate('/users/login');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <SocialLoginButton>Kakao로 로그인</SocialLoginButton>

      <Link to={KAKAO_AUTH_URL}>
        <img src="/images/kakao_login_medium_narrow.png" alt="loginKakao" />
      </Link>
    </div>
  );
};

export default SocialLogin;
