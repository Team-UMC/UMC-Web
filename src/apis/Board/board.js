import axiosInstance from 'apis/setting';

export const getBoardData = async ({ host, board, page }) => {
  const res = await axiosInstance.get(
    `/boards?host=${host}&board=${board}&page=${page}`,
  );
  console.log(res);
  return res.result.boardPageResponses;
};
