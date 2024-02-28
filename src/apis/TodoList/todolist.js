import axiosInstance from 'apis/setting';

// 투두리스트 조회
export const getTodoListData = async ({ date }) => {
  try {
    const res = await axiosInstance.get(`/to-do-lists?date=${date}`, {
      params: {
        date: date,
      },
    });
    console.log(res.data.result);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 투두리스트 추가
export const addTodoList = async (title, deadline) => {
  try {
    const res = await axiosInstance.post(`/to-do-lists`, {
      title: title,
      deadline: deadline,
    });
    console.log(res.data.result);
    //return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 투두리스트 완성
export const completeTodoList = async (todoListId) => {
  try {
    const res = await axiosInstance.post(`/to-do-lists/${todoListId}`);
    console.log(res.data.result);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 투두리스트 삭제
export const deleteTodoList = async (todoListId) => {
  try {
    const res = await axiosInstance.delete(`/to-do-lists/${todoListId}`);
    console.log(res.data.result);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// 투두리스트 수정
export const updateTodoList = async (todoListId, title, deadline) => {
  try {
    const res = await axiosInstance.post(`/to-do-lists/update/${todoListId}`, {
      title: title,
      deadline: deadline,
    });
    console.log(res.data.result);
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
