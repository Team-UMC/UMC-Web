import axios from 'axios';

export const kakaoLogout = async () => {
  try {
    const kakaoToken = localStorage.getItem('kakao token');

    await axios.post(`/logout`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${kakaoToken}`,
      },
    });

    localStorage.removeItem('kakao token');
  } catch (error) {
    console.log(error);

    // if (error.response.data.code === -401) {
    //   window.location.href = '/';
    // }
  }
};
