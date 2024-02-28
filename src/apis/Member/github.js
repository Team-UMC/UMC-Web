import axiosInstance from 'apis/setting';

// Github 연동하기
export const linkGithub = async ({ nickname }) => {
  try {
    const res = await axiosInstance.post(
      `/members/github?nickname=${nickname}`,
      {
        params: {
          nickname: nickname,
        },
      },
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// Github 이미지 가져오기
export const getGithubImage = async () => {
  try {
    const res = await axiosInstance.get(`/members/github`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
