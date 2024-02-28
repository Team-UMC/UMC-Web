import axiosInstance from 'apis/setting';

// 회원 가입
export const handleSubmit = async ({
  name,
  nickname,
  semesterParts,
  universityName,
  campusPositions,
  centerPositions,
}) => {
  try {
    const res = await axiosInstance.post(`/members,`, {
      name: name,
      nickname: nickname,
      semesterParts: semesterParts,
      universityName: universityName,
      campusPositions: campusPositions,
      centerPositions: centerPositions,
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 로그아웃
export const logoutMember = async () => {
  try {
    const res = await axiosInstance.delete(`/members/logout`);
    localStorage.removeItem('server Token');
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 회원 탈퇴
export const deleteMember = async () => {
  try {
    const res = await axiosInstance.delete(`/members`);
    localStorage.removeItem('server Token');
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 출석체크
export const attendanceCheck = async () => {
  try {
    const res = await axiosInstance.post(`/members/attend`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
