import React, { useState } from 'react';
import styled from 'styled-components';

import AddButtonImg from 'assets/todayilearn/addbutton.svg';
import ImgChoose from 'assets/todolist/imgchoose.svg';
import Daytime from 'assets/todolist/daytime.svg';
import Aftertime from 'assets/todolist/aftertime.svg';
import AftertimeChecked from 'assets/todolist/aftertimechecked.svg';
import Complete from 'assets/todolist/complete.svg';
import UnComplete from 'assets/todolist/uncomplete.svg';

import DateSelectCalendar from 'components/DateSelectCalendar';


const AddButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px 8px 4px 6px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #232A6D;
  text-decoration: none; /* 밑줄 제거 */
  color: #373C6B;
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

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.51);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2; 
  `;

const ModalContent = styled.div`
  background: white;
  padding: 36px 32px 24px 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  //align-content: space-evenly;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TitleInput = styled.input` 
  color: black; 
  border: none;
  font-size: 14px;
  font-weight: 500;
  border: 0.5px solid #232A6D;
  margin-left: 1vh;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: #9F9F9F;
    font-weight: 500;
  }
`;

const TimeInput = styled.input`
border: none;
color: #9F9F9F;
font-size: 14px;
text-align: center;

border-radius: 8px;
background: #F2F2F2;
width: 5vh;
height:3vh;

&::placeholder,
  &::-webkit-input-placeholder {
    color: #9F9F9F;
  }
`;

const RowContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 3vh;
`;

const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
`;

const ModalStyle = styled.div`
display: flex;
flex-direction: column;
`;

const TDLAdd = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [isAfternoonSelected, setIsAfternoonSelected] = useState(false);

  const handleAddTILClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAfternoonClick = () => {
    setIsAfternoonSelected(!isAfternoonSelected);
  };

  const handleCancelClick = () => {
    closeModal();
  };

  const handleAddClick = () => {
    // "추가" 버튼 클릭 시 로직 처리
    // 여기에 정보를 저장하는 로직 추가
    console.log("Title:", title);
    // 저장 후 모달 닫도록 설정
    closeModal();
  };

  return (
    <>
      <AddButtonContainer onClick={handleAddTILClick}>
        <SVGImage src={AddButtonImg} alt='추가 버튼' />
        <AddTIL>TO-DO 추가</AddTIL>
      </AddButtonContainer>

      {showModal && (
        <ModalContainer onClick={closeModal}>
          <ModalStyle>
          <ModalContent onClick={(event) => event.stopPropagation()}>
            
            <DateSelectCalendar />
            <img src={ImgChoose} alt="이모티콘 선택" />
            
            <RowContainer>제목
            <TitleInput 
              className='title' 
              placeholder="할 일을 추가하세요" 
              value={title}
              onChange={handleTitleChange}
            />
            </RowContainer>

            <RowContainer>시간
            <ColumnContainer>
            <img src={Daytime} alt='오전 표시' />
            <img 
              src={isAfternoonSelected ? AftertimeChecked : Aftertime} 
              alt='오후 표시' 
              onClick={handleAfternoonClick}
            />
            </ColumnContainer>
            <TimeInput placeholder="00"/> 시 <TimeInput placeholder="00" /> 분
            </RowContainer>

            <RowContainer>상태
            <img src={UnComplete} alt='미완료' />
            <img src={Complete} alt='완료' />
            </RowContainer>

            <ButtonContainer>
              <ActionButton onClick={handleCancelClick}>취소</ActionButton>
              <ActionButton onClick={handleAddClick}>추가</ActionButton>
            </ButtonContainer>
          </ModalContent>
          </ModalStyle>
        </ModalContainer>
      )}
    </>
  );
};

export default TDLAdd;
