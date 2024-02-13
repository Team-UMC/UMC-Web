import React, { useState } from 'react';
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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [todoListData, setTodoListData] = useState([]);

  // 수정 모달을 열기 위한 상태
  const [editTodoData, setEditTodoData] = useState(null);

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
          <ToDoListCalender setSelectedDate={setSelectedDate} />
          <AddButtonContainer onClick={() => setIsAddModalOpen(true)}>
            <SVGImage src={AddButtonImg} alt="추가 버튼" />
            <AddTIL>TO-DO 추가</AddTIL>
          </AddButtonContainer>
        </CalenderContainer>

        <TDLComponent
          todoListData={todoListData}
          setTodoListData={setTodoListData}
          selectedDate={selectedDate}
          setEditTodoData={setEditTodoData}
        />

        {isAddModalOpen && (
          <>
            <Overlay />
            <TodoListModal
              selectedDate={selectedDate}
              setIsAddModalOpen={setIsAddModalOpen}
              editTodoData={editTodoData}
              setEditTodoData={setEditTodoData}
              todoListData={todoListData}
              setTodoListData={setTodoListData}
            />
          </>
        )}
      </TDLContainer>
    </div>
  );
};

export default TodoList;
