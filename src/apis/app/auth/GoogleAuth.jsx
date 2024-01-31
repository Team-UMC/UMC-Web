import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GoogleAuth = () => {
  const [googleToken, setGoogleTokenToken] = useState('');
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const getGoogleToken = async () => {
      try {
        const res = await axios.post(
          `https://accounts.google.com/o/oauth2/v2/auth?
          scope=https://www.googleapis.com/auth/drive.metadata.readonly&
          include_granted_scopes=true&
          response_type=token&
          state=state_parameter_passthrough_value&
          redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&
          client_id=${process.env.REACT_APP_GOOGLE_REST_API_KEY}`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          },
        );
        setGoogleTokenToken(res.data.access_token);
      } catch (error) {
        console.log(error);
      }
    };

    if (code) {
      getGoogleToken();
    }
  }, [code]);

  useEffect(() => {
    const loginWithGoogle = async () => {
      if (googleToken) {
        try {
          const response = await axios.post(
            `http://umcservice.shop:8000/members/login?accessToken=${googleToken}&socialType=GOOGLE`,
            {
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
            },
          );

          const accessToken = response.data.result.accessToken;

          localStorage.setItem('server Token', accessToken);
          navigate('/signupform');
        } catch (error) {
          console.log(error);
        }
      }
    };

    loginWithGoogle();
  }, [googleToken, navigate]);

  return <div>{code}</div>;
};

export default GoogleAuth;
