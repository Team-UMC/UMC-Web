import axiosInstance from 'apis/setting';

// 포인트 관련 유저 정보 조회
export const getPointData = async () => {
  try {
    const res = await axiosInstance.get(`/members/rank`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 나의 남은 포인트 및 사용 내역 조회
export const getMyPoint = async () => {
  try {
    const res = await axiosInstance.get(`/members/points`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
