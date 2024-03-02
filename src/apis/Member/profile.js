import axiosInstance from 'apis/setting';

// 나의 프로필 수정
export const updateProfile = async ({
  name,
  nickname,
  statusMessage,
  imageFile,
}) => {
  const formData = new FormData();
  if (imageFile) {
    formData.append('profileImage', imageFile);
  }

  formData.append(
    'request',
    JSON.stringify({
      name: name,
      nickname: nickname,
      statusMessage: statusMessage,
    }),
  );

  try {
    const res = await axiosInstance.post('/members/update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 나의 프로필 조회
export const getMyProfile = async () => {
  try {
    const res = await axiosInstance.get('/members');
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 다른 유저 프로필 조회
export const getProfile = async ({ memberId }) => {
  try {
    const res = await axiosInstance.get(`/member/${memberId}`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
