import axiosInstance from 'apis/setting';

// 댓글 작성
export const writeComment = async ({ boardId, content }) => {
  try {
    const res = await axiosInstance.post(`/boards/comments`, {
      boardId: boardId,
      content: content,
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 댓글 삭제
export const deleteComment = async ({ commentId }) => {
  try {
    const res = await axiosInstance.delete(`/boards/comments/${commentId}`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 댓글 수정
export const updateComment = async ({ commentId, content }) => {
  try {
    const res = await axiosInstance.patch(`/boards/comments/${commentId}`, {
      content: content,
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 특정 게시글 댓글 목록 조회
export const getCommentData = async ({ boardId, page }) => {
  try {
    const res = await axiosInstance.get(
      `/boards/comments/${boardId}?page=${page}`,
      {
        params: {
          page: page,
        },
      },
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 내가 쓴 댓글 조회
export const getMyComments = async ({ host, board, keyword, page }) => {
  try {
    const res = await axiosInstance.get(
      `/boards/comments/member/comments/web?host=${host}&board=${board}&keyword=${keyword}&page=${page}`,
      {
        params: {
          host: host,
          board: board,
          keyword: keyword,
          page: page,
        },
      },
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
