import axiosInstance from 'apis/setting';

// Today-I-Learned 조회
export const getTodayILearnedData = async ({ date }) => {
  try {
    const res = await axiosInstance.get(`/today-i-learned?date=${date}`, {
      params: {
        date: date,
      },
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// Today-I-Learned 추가
export const addTodayILearned = async ({
  part,
  title,
  subTitle,
  content,
  file,
}) => {
  const formData = new FormData();
  if (file) {
    formData.append('file', file);
  }

  formData.append(
    'request',
    JSON.stringify({
      part: part,
      title: title,
      subTitle: subTitle,
      content: content,
    }),
  );
  try {
    const res = await axiosInstance.post(`/today-i-learned`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// Today-I-Learned 상세 조회
export const getTodayILearnedDetail = async ({ todayILearnedId }) => {
  try {
    const res = await axiosInstance.get(`/today-i-learned/${todayILearnedId}`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// Today-I-Learned 삭제
export const deleteTodayILearned = async ({ todayILearnedId }) => {
  try {
    const res = await axiosInstance.delete(
      `/today-i-learned/${todayILearnedId}`,
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 투두리스트 수정
export const updateTodayILearned = async ({
  todayILearnedId,
  part,
  title,
  subTitle,
  content,
  file,
}) => {
  const formData = new FormData();
  if (file) {
    formData.append('file', file);
  }

  formData.append(
    'request',
    JSON.stringify({
      part: part,
      title: title,
      subTitle: subTitle,
      content: content,
    }),
  );
  try {
    const res = await axiosInstance.post(
      `/today-i-learned/update/${todayILearnedId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
