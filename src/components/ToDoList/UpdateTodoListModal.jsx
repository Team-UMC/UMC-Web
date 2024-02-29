import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

const UpdateTodoListModal = ({
  setIsAddModalOpen,
  selectedDate,
  updateTodoList,
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

  // 취소 버튼 클릭시 모달 닫기
  const handleCancelClick = () => {
    setIsAddModalOpen(false);
  };

  const offset = 9 * 60 * 60 * 1000; // 9시간을 밀리초로 계산

  const handleAddTodoList = () => {
    // 시간과 분을 이용하여 새로운 날짜 객체 생성
    const newDate = new Date(selectedDate);

    // 시간 설정
    let selectedHour = parseInt(hour);
    if (isNight && selectedHour !== 12) {
      // 오후 선택 시, 시간이 12시가 아니라면 12를 더하여 오후 시간으로 설정
      selectedHour += 12;
    } else if (!isNight && selectedHour === 12) {
      // 오전 선택 시, 시간이 12시라면 0으로 설정
      selectedHour = 0;
    }
    newDate.setHours(selectedHour);

    // 분 설정
    newDate.setMinutes(parseInt(minute));

    // 시간 오프셋을 더하여 한국 표준시(KST)로 변환
    newDate.setTime(newDate.getTime() + offset);

    // ISO 형식의 문자열로 변환하여 서버로 전달
    const formattedDate = newDate.toISOString();

    // addTodoList 함수 호출하여 추가할 수 있도록 전달
    updateTodoList(title, formattedDate);
    setIsAddModalOpen(false);
  };

  return (
    <Modal>
      <div> {selectedDate.toISOString().slice(0, 10)} </div>
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
          onClick={handleAddTodoList}
        >
          추가
        </AddButton>
      </ButtonWrapper>
    </Modal>
  );
};

UpdateTodoListModal.propTypes = {
  setIsAddModalOpen: PropTypes.func.isRequired,
  selectedDate: PropTypes.string.isRequired,
  updateTodoList: PropTypes.func,
};

export default UpdateTodoListModal;
