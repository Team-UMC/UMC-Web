import React, { useState } from 'react';
import styled from 'styled-components';
import CalenderImg from 'assets/todayilearn/calender.svg'; //캘린더 이미지 
import DateSelectCalendar from 'components/DateSelectCalendar'; //날짜를 오늘 날로 업데이트 가능

const TILCalender = () => {
  //달력을 클릭했을 때 나오는 모달의 작동을 위한 함수 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const openModal = () => { //모달 열기
    setIsModalOpen(true);
  };

  const closeModal = () => { //모달 닫기
    setIsModalOpen(false);
  };

  const handleDateSelect = (date) => { // 날짜 선택 후 모달 닫기
    setSelectedDate(date);
    closeModal(); 
  };

  return (
    <>
      <TodayDate>
        <img src={CalenderImg} alt="캘린더 이미지" onClick={openModal} />
        <DateSelectCalendar />
      </TodayDate>

      {/*모달 디자인 - x버튼 클릭시에만 모달이 닫히고 DateSelectCalendar를 통해 날짜표시*/}
      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <CloseModalButton onClick={closeModal}>X</CloseModalButton>
            <DateSelectCalendar
              onSelect={handleDateSelect}
              selected={selectedDate}
            />
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
