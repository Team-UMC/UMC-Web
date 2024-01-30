import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.development' });

const CustomAxios = axios.create({
  baseURL: process.env.REACT_APP_TEST_SERVER_URL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default CustomAxios;
