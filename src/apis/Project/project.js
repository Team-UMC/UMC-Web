import axiosInstance from 'apis/setting';

// 역대 프로젝트 조회
export const getProjectData = async ({ semester, type, page, size }) => {
  try {
    const res = await axiosInstance.get(`/projects`, {
      params: {
        semester: semester,
        type: type,
        page: page,
        size: size,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error();
  }
};

// HOT 프로젝트 조회
export const getHotProjectData = async ({ page, size }) => {
  try {
    const res = await axiosInstance.get(`/projects/hot`, {
      params: {
        page: page,
        size: size,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error();
  }
};

// 프로젝트 검색
export const searchProject = async ({ keyword, page, size }) => {
  try {
    const res = await axiosInstance.get(
      `/projects/search/keyword=${keyword}&page=${page}&size=${size}`,
      {
        params: {
          keyword: keyword,
          page: page,
          size: size,
        },
      },
    );
    return res.data.result;
  } catch (error) {
    console.error();
  }
};

// 프로젝트 상세 조회
export const searchProjectData = async ({ projectId }) => {
  try {
    const res = await axiosInstance.get(`/projects/${projectId}`);
    return res.data.result;
  } catch (error) {
    console.error();
  }
};

// 프로젝트 좋아요/취소
export const likeProject = async ({ projectId }) => {
  try {
    const res = await axiosInstance.post(`/projects/${projectId}/like`, {
      projectId: projectId,
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
