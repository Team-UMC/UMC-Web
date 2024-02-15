import React, { useState, useEffect } from 'react';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import TitleTDL from 'components/ToDoList/TitleTDL';
import TDLComponent from 'components/ToDoList/ComponentTDL';
import TodoListModal from 'components/ToDoList/TodoListModal';

import AddButtonImg from 'assets/todayilearn/addbutton.svg';
import ToDoListCalender from 'components/ToDoList/Calender';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.62);
  z-index: 999;
`;

const TDLContainer = styled.div`
  margin: 0vh 50vh;
  width: 70%;
  height: 100vh;
`;

const CalenderContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const AddButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px 8px 4px 6px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #232a6d;
  text-decoration: none;
  color: #373c6b;
  cursor: pointer;
  z-index: 1;
`;

const AddTIL = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  margin-left: 0.5vh;
`;

const SVGImage = styled.img`
  margin-right: 0.5vh;
`;

const TodoList = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todoListData, setTodoListData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);

    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const formattedDate = formatDate(selectedDate);

  const handleAddButton = () => {
    setIsModalOpen(true);
  };

  // To Do List 추가 함수
  const addTodoList = async (title, deadline) => {
    try {
      const res = await axiosInstance.post(`/to-do-lists`, {
        title: title,
        deadline: deadline,
      });
      console.log(res);
    } catch (error) {
      console.error();
    }
  };

  // To Do List 수정 함수
  const modifyTodoList = async (id, title, deadline) => {
    try {
      await axiosInstance.patch(`/to-do-lists/update/${id}`, {
        title: title,
        deadline: deadline,
      });
    } catch (error) {
      console.error();
    }
  };

  // To do List 완료 함수
  const completeTodoList = async (id) => {
    try {
      await axiosInstance.patch(`/to-do-lists/update/${id}`, {
        todoListId: id,
        isPointAcquired: true,
      });
    } catch (error) {
      console.error();
    }
  };

  // To Do List 삭제 함수
  const deleteTodoList = async (id) => {
    try {
      await axiosInstance.delete(`/to-do-lists/${id}`);
    } catch {
      console.error();
    }
  };

  // To Do List 데이터 받아오는 함수
  const getTodoListData = async (date) => {
    try {
      const res = await axiosInstance.get(`/to-do-lists`, {
        params: {
          date: date,
        },
      });
      setTodoListData(res.data.result.todoLists);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getTodoListData(formattedDate);
  }, [formattedDate, todoListData]);

  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TDLContainer>
        <TitleTDL />

        <CalenderContainer>
          <ToDoListCalender
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <AddButtonContainer onClick={handleAddButton}>
            <SVGImage src={AddButtonImg} alt="추가 버튼" />
            <AddTIL>TO-DO 추가</AddTIL>
          </AddButtonContainer>
        </CalenderContainer>

        <TDLComponent
          todoListData={todoListData}
          completeTodoList={completeTodoList}
          modifyTodoList={modifyTodoList}
          deleteTodoList={deleteTodoList}
        />

        {isModalOpen && (
          <>
            <Overlay />
            <TodoListModal
              setIsModalOpen={setIsModalOpen}
              selectedDate={selectedDate}
              todoListData={todoListData}
              addTodoList={addTodoList}
              modifyTodoList={modifyTodoList}
            />
          </>
        )}
      </TDLContainer>
    </div>
  );
};

export default TodoList;
