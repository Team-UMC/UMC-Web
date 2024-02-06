import React, { useState } from 'react';
import styled from 'styled-components';
import CalenderImg from 'assets/todayilearn/calender.svg';
import DateSelectCalendar from 'components/DateSelectCalendar';

const TILCalender = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    closeModal(); // 날짜 선택 후 모달 닫기
  };

  return (
    <>
      <TodayDate>
        <img src={CalenderImg} alt='캘린더 이미지' onClick={openModal} />
        <DateSelectCalendar />
      </TodayDate>

      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <CloseModalButton onClick={closeModal}>X</CloseModalButton>
            <DateSelectCalendar onSelect={handleDateSelect} selected={selectedDate} />
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default TILCalender;


const TodayDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 36px 32px 24px 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  align-self: flex-end;
`;