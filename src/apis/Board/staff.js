import axiosInstance from 'apis/setting';

export const getNoticeData = async (host, keyword, page) => {
  try {
    const res = await axiosInstance.get('/staff/boards/notices?host=?&page=?', {
      params: {
        host: host,
        keyword: keyword,
        page: page,
      },
    });

    return res;
  } catch (error) {
    console.error('Error creating post: ', error);
  }
};