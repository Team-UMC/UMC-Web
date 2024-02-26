import axiosInstance from 'apis/setting';

// 달력 데이터 받기
export const getCalendarData = async (time) => {
  try {
    const res = await axiosInstance.get(`/schedules/calendar/web?date=${time}`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 학교/지부/연합 별 일정 데이터 받기
export const getSchedules = async (time) => {
  try {
    const res = await axiosInstance.get(`/schedules?date=${time}`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 핀 설정된 공지사항 데이터 받기
export const getPinnedNoticeData = async () => {
  try {
    const res = await axiosInstance.get(`/boards/pinned`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// TodoList 데이터 받기
export const getTodoListData = async (time) => {
  try {
    const res = await axiosInstance.get(`/to-do-lists?date=${time}`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// Today-I-Learned 데이터 받기
export const getTodayILearnedData = async (time) => {
  try {
    const res = await axiosInstance.get(`/today-i-learned/web?date=${time}`);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

