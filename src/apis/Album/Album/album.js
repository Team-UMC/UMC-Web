import axiosInstance from 'apis/setting';

// 사진첩 조회
export const getAlbumData = async ({ page }) => {
  try {
    const res = await axiosInstance.get(`/albums?page=${page}`, {
      params: {
        page: page,
      },
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 사진첩 작성
export const addAlbum = async ({ title, content, semester, imageFile }) => {
  const formData = new FormData();
  if (imageFile) {
    formData.append('imageFile', imageFile);
  }

  formData.append(
    'request',
    JSON.stringify({
      title: title,
      content: content,
      semester: semester,
    }),
  );
  try {
    const res = await axiosInstance.post(`/albums`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 특정 사진첩 조회
export const getAlbumDetail = async ({ albumId }) => {
  try {
    const res = await axiosInstance.get(`/albums/${albumId}`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 사진첩 삭제
export const deleteAlbum = async ({ albumId }) => {
  try {
    const res = await axiosInstance.delete(`/albums/${albumId}`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 사진첩 수정
export const updateAlbum = async ({
  albumId,
  title,
  content,
  semester,
  imageFile,
}) => {
  const formData = new FormData();
  if (imageFile) {
    formData.append('imageFile', imageFile);
  }

  formData.append(
    'request',
    JSON.stringify({
      title: title,
      content: content,
      semester: semester,
    }),
  );
  try {
    const res = await axiosInstance.patch(`/albums/${albumId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 사진첩 좋아요/취소
export const likeAlbum = async ({ albumId }) => {
  try {
    const res = await axiosInstance.post(`/albums/${albumId}/heart`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
