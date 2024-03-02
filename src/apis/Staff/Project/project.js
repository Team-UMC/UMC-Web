import axiosInstance from 'apis/setting';

// 프로젝트 등록 (운영진 권한)
export const AddProject = async ({
  projectImage,
  name,
  description,
  tags,
  types,
  semester,
  nickname,
  memberName,
  part,
}) => {
  try {
    const res = await axiosInstance.post(`/staff/projects`, {
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
    return res.data.result;
  } catch (error) {
    console.error();
  }
};

// 프로젝트 수정 (운영진 권한)
export const ModifyProject = async ({ projectId, name, description, tags }) => {
  try {
    const res = await axiosInstance.post(
      `/staff/projects/update/${projectId}`,
      {
        name: name,
        description: description,
        tags: tags,
      },
    );
    return res.data.result;
  } catch (error) {
    console.error();
  }
};

// 프로젝트 삭제 (운영진 권한)
export const DeleteProject = async ({ projectId }) => {
  try {
    const res = await axiosInstance.delete(`/staff/projects/${projectId}`);
    return res.data.result;
  } catch (error) {
    console.error();
  }
};
