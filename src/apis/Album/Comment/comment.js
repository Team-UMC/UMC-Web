import axiosInstance from 'apis/setting';

// 사진첩 댓글 작성
export const addAlbumComment = async ({ albumId, content }) => {
  try {
    const res = await axiosInstance.post(`/albums/comments`, {
      albumId: albumId,
      content: content,
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 사진첩 댓글 삭제
export const deleteAlbumComment = async ({ commentId }) => {
  try {
    const res = await axiosInstance.delete(`/albums/comments/${commentId}`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 사진첩 댓글 수정
export const updateAlbumComment = async ({ commentId, content }) => {
  try {
    const res = await axiosInstance.patch(`/albums/comments/${commentId}`, {
      content: content,
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
