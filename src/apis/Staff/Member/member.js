import axiosInstance from 'apis/setting';

// 유저 정보 수정 (운영진용)
export const updateUser = async ({
  memberId,
  campusPositions,
  centerPositions,
  semesterParts,
}) => {
  try {
    const res = await axiosInstance.post(`/staff/members/${memberId}/update`, {
      campusPositions: campusPositions,
      centerPositions: centerPositions,
      semesterParts: semesterParts,
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 회원 검색 (운영진용)
export const searchUser = async ({ keyword }) => {
  try {
    const res = await axiosInstance.get(
      `/staff/member/search?keyword=${keyword}`,
      {
        params: {
          keyword: keyword,
        },
      },
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
