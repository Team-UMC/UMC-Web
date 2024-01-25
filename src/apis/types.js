import axios from 'axios';
import cookies from 'js-cookie';

const TEST_SERVER_URL = process.env.REACT_APP_TEST_SERVER_URL;

const getAccessToken = () => {
  const accessToken = cookies.get('access_token');
  return accessToken ? { access_token: accessToken } : {};
};

const customAxios = axios.create({
  baseURL: `${TEST_SERVER_URL}`,
  headers: {
    ...getAccessToken(),
  },
});

export default customAxios;