import axiosInstance from 'apis/setting';

// 프로젝트 등록 (운영진 권한)
export const AddProject = async (
  projectImage,
  name,
  description,
  tags,
  types,
  semester,
  nickname,
  memberName,
  part,
) => {
  try {
    await axiosInstance.post(`/staff/projects`, {
      projectImage: projectImage,
      request: {
        name: name,
        description: description,
        tags: tags,
        types: types,
        semester: semester,
        projectMembers: {
          nickname: nickname,
          name: memberName,
          part: part,
        },
      },
    });
  } catch (error) {
    console.error();
  }
};

// 프로젝트 수정 (운영진 권한)
export const ModifyProject = async (projectId, name, description, tags) => {
  try {
    await axiosInstance.post(`/staff/projects/update/${projectId}`, {
      name: name,
      description: description,
      tags: tags,
    });
  } catch (error) {
    console.error();
  }
};

// 프로젝트 삭제 (운영진 권한)
export const DeleteProject = async (projectId) => {
  try {
    await axiosInstance.delete(`/staff/projects/${projectId}`);
  } catch (error) {
    console.error();
  }
};

// 역대 프로젝트 조회
export const getProjectData = async (semester, type, page, size) => {
  try {
    const response = await axiosInstance.get(`/projects`, {
      params: {
        semester: semester,
        type: type,
        page: page,
        size: size,
      },
    });
    return response;
  } catch (error) {
    console.error();
  }
};

// HOT 프로젝트 조회
export const getHotProjectData = async (page, size) => {
  try {
    const response = await axiosInstance.get(`/projects/hot`, {
      params: {
        page: page,
        size: size,
      },
    });
    return response;
  } catch (error) {
    console.error();
  }
};

// 프로젝트 검색
export const searchProject = async (keyword, page, size) => {
  try {
    const response = await axiosInstance.get(`/projects/search/keyword=?`, {
      params: {
        keyword: keyword,
        page: page,
        size: size,
      },
    });
    return response;
  } catch (error) {
    console.error();
  }
};

// 프로젝트 상세 조회
export const searchProjectData = async (projectId) => {
  try {
    const response = await axiosInstance.get(`/projects/${projectId}`);

    return response;
  } catch (error) {
    console.error();
  }
};
