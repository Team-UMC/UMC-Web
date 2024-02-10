import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_TEST_SERVER_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = localStorage.getItem('accessToken');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
