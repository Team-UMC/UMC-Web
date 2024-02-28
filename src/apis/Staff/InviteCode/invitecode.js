import axiosInstance from 'apis/setting';

// 나의 초대 코드 조회
export const getMyInviteCode = async () => {
  try {
    const res = await axiosInstance.get(`/staff/invites`);

    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 초대 코드 생성
export const createInviteCode = async ({ role }) => {
  try {
    const res = await axiosInstance.post(`/staff/invites`, {
      params: {
        role: role,
      },
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
