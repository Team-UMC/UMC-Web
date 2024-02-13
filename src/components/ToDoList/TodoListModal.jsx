import React, { useState, useEffect } from 'react';
import axiosInstance from 'apis/setting';
import PropTypes, { object } from 'prop-types';
import styled from 'styled-components';

import ImgChoose from 'assets/todolist/imgchoose.svg';

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid gray;
  border-radius: 12px;
  background-color: #ffffff;
  z-index: 1000;
`;

const TitleInput = styled.input`
  width: 70%;
  color: black;
  border: none;
  font-size: 14px;
  font-weight: 500;
  margin: 0 5%;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: #9f9f9f;
    font-weight: 500;
  }
`;

const TimeInput = styled.input`
  border: none;
  color: #9f9f9f;
  font-size: 14px;
  text-align: center;

  border-radius: 8px;
  background: #f2f2f2;
  width: 5vh;
  height: 3vh;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: #9f9f9f;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-evenly;
  align-items: center;
`;

const LeftCotainer = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
`;

const RighContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;
`;

const DayNightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Status = styled.div`
  padding: 5px 10px;
  color: ${(props) => (props.selected ? '#f2f2f2' : '#9F9F9F')};
  background-color: ${(props) => (props.selected ? '#9F9F9F' : '#f2f2f2')};
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 95%;
`;

const CancelButton = styled.div`
  padding: 8px 16px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  background-color: #f2f2f2;
  color: #9f9f9f;
  cursor: pointer;
`;

const AddButton = styled.div`
  padding: 8px 16px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? '#f2f2f2' : '#373C6B')};
  color: ${(props) => (props.disabled ? '#9f9f9f' : '#FFFFFF')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const TodoListModal = ({
  selectedDate,
  setIsAddModalOpen,
  editTodoData,
  setIsEditModalOpen,
  todoListData,
  setTodoListData,
}) => {
  const [title, setTitle] = useState('');
  const [isNight, setIsNight] = useState(false);
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  // To Do List 제목 입력
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // To Do List 오전 선택
  const handleDayClick = () => {
    setIsNight(false);
  };

  // To Do List 오후 선택
  const handleNightClick = () => {
    setIsNight(true);
  };

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setMinute(event.target.value);
  };

  // 투두리스트 수정하는 경우
  useEffect(() => {
    if (editTodoData) {
      setTitle(editTodoData.title);
      // 시간 정보 설정
      // editTodoData.deadline에서 시간 정보를 추출하여 상태 업데이트
      // 예: "2024-02-11T08:00:00.000Z"에서 "08:00" 추출
      const time = new Date(editTodoData.deadline).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      const [editHour, editMinute] = time.split(':');
      setHour(editHour);
      setMinute(editMinute);
      // 오전/오후 정보 설정
      const editAMPM = new Date(editTodoData.deadline)
        .toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
        .slice(-2);
      setIsNight(editAMPM === 'PM');
    }
  }, [editTodoData]);

  // 추가 버튼 클릭시 서버에 데이터 POST OR PATCH
  const handleAddClick = async () => {
    if (editTodoData) {
      // PATCH 요청
      try {
        const adjustedHour = isNight
          ? parseInt(hour, 10) + 12
          : parseInt(hour, 10);
        const date = new Date(selectedDate);
        date.setHours(adjustedHour, parseInt(minute, 10));
        const deadline = date.toISOString();

        await axiosInstance.patch(
          `/to-do-lists/update/${editTodoData.todoListId}`,
          {
            title: title,
            deadline: deadline,
          },
        );

        // 업데이트된 Todo 항목을 화면에 반영하기 위해 todoListData 업데이트
        const updatedTodoList = todoListData.map((todo) => {
          if (todo.todoListId === editTodoData.todoListId) {
            return {
              ...todo,
              title: title,
              deadline: deadline,
            };
          }
          return todo;
        });
        setTodoListData(updatedTodoList);
        setIsEditModalOpen(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('title: ', title);
      console.log('selectedDate: ', selectedDate);
      try {
        const date = new Date(selectedDate);
        const adjustedHour = isNight
          ? parseInt(hour, 10) + 12
          : parseInt(hour, 10);
        date.setHours(adjustedHour, parseInt(minute, 10));

        const deadline = date.toISOString();

        const res = await axiosInstance.post('/to-do-lists', {
          title: title,
          deadline: deadline,
        });

        console.log(title);
        console.log(deadline);

        console.log(res.data);

        const newTodoList = [...todoListData, res.data];
        setTodoListData(newTodoList);

        setIsAddModalOpen(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // 취소 버튼 클릭시 모달 닫기
  const handleCancelClick = () => {
    setIsAddModalOpen(false);
  };

  return (
    <Modal>
      <div> {selectedDate.toString()} </div>
      <img src={ImgChoose} alt="이모티콘 선택" />

      <Wrapper>
        <LeftCotainer> 제목 </LeftCotainer>
        <TitleInput
          className="title"
          placeholder="할 일을 추가하세요"
          value={title}
          onChange={handleTitleChange}
        />
      </Wrapper>

      <Wrapper>
        <LeftCotainer> 시간 </LeftCotainer>
        <RighContainer>
          <DayNightWrapper>
            <Status selected={isNight === false} onClick={handleDayClick}>
              오전
            </Status>
            <Status selected={isNight === true} onClick={handleNightClick}>
              오후
            </Status>
          </DayNightWrapper>
          <TimeInput
            className="hour"
            placeholder="00"
            value={hour}
            onChange={handleHourChange}
          />
          시
          <TimeInput
            className="minute"
            placeholder="00"
            value={minute}
            onChange={handleMinuteChange}
          />
          분
        </RighContainer>
      </Wrapper>

      <ButtonWrapper>
        <CancelButton onClick={handleCancelClick}>취소</CancelButton>
        <AddButton
          disabled={!title || !hour || !minute}
          onClick={handleAddClick}
        >
          추가
        </AddButton>
      </ButtonWrapper>
    </Modal>
  );
};

TodoListModal.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setIsAddModalOpen: PropTypes.func.isRequired,
  editTodoData: PropTypes.object,
  setIsEditModalOpen: PropTypes.func,
  todoListData: PropTypes.arrayOf(object).isRequired,
  setTodoListData: PropTypes.func.isRequired,
};

export default TodoListModal;
