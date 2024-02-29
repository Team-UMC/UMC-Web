import React, { useState, useEffect } from 'react';
import {
  getTodoListData,
  addTodoList,
  updateTodoList,
  completeTodoList,
  deleteTodoList,
} from 'apis/TodoList/todolist';
import styled from 'styled-components';

import TitleTDL from 'components/ToDoList/TitleTDL';
import ToDoListCalender from 'components/ToDoList/Calender';
import TDLComponent from 'components/ToDoList/ComponentTDL';
import AddTodoListModal from 'components/ToDoList/AddTodoListModal';

import AddButtonImg from 'assets/todayilearn/addbutton.svg';
import UpdateTodoListModal from 'components/ToDoList/UpdateTodoListModal';

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
  height: 120vh;
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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);

    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const formattedDate = formatDate(selectedDate);

  const handleAddButton = () => {
    setIsAddModalOpen(true);
  };

  useEffect(() => {
    getTodoListData(formattedDate).then((data) => {
      setTodoListData(data);
    });
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

        {todoListData && (
          <TDLComponent
            todoListData={todoListData}
            completeTodoList={completeTodoList}
            updateTodoList={updateTodoList}
            deleteTodoList={deleteTodoList}
          />
        )}

        {isAddModalOpen && (
          <>
            <Overlay />
            <AddTodoListModal
              setIsAddModalOpen={setIsAddModalOpen}
              selectedDate={selectedDate}
              addTodoList={addTodoList}
            />
          </>
        )}

        {isUpdateModalOpen && (
          <>
            <Overlay />
            <UpdateTodoListModal
              setIsUpdateModalOpen={setIsUpdateModalOpen}
              selectedDate={selectedDate}
              todoListData={todoListData}
              updateTodoList={updateTodoList}
            />
          </>
        )}
      </TDLContainer>
    </div>
  );
};

export default TodoList;
