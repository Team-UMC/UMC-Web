import React, { useState } from 'react';
import styled from 'styled-components';

import DetailImg from 'assets/todayilearn/detail.svg';
import ModalImg from 'assets/todayilearn/modalimg.svg';

import ListUnchecked from 'assets/todolist/listuncheckedimg.svg';
import Plant from 'assets/todolist/plant.svg';
import Clock from 'assets/todolist/clock.svg';

const OptionsContainer = styled.div`
  display: none;
  position: absolute;
  right: 0;
  flex-direction: column;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.61);
  padding: 8px;
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 12px;
  border: solid 1px;
  padding: 1vh;
  margin-top: 2vh;
  position: relative;
  cursor: pointer; /* Added cursor pointer to indicate clickability */
  &:hover ${OptionsContainer} {
    display: flex;
  }
`;

const OptionButton = styled.div`
  margin-right: 5px;
  color: white;
  cursor: pointer;
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
  align-content: space-evenly;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 70%;
`;

const ModalDeleteShape = styled.div`
  display: flex;
  padding: 0.5vh 2vh;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #373c6b;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
`;

const ModalCancelShape = styled.div`
  display: flex;
  padding: 0.5vh 2vh;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #e1e1ea;
  border-radius: 8px;
  color: #373c6b;
  cursor: pointer;
`;

const StyleImg = styled.img`
  display: flex;
  align-items: center;
  margin-left: 5vh;
  margin-right: 2vh;
`;

const ImgTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1vh 2vh;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const SubTitle = styled.div`
  color: #4b4b4b;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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

const TDLComponent = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <ComponentContainer>
        <ImgTitleContainer>
          <img src={ListUnchecked} alt="선택로고" />
          <StyleImg src={Plant} alt="식물사진" />

          <TitleContainer>
            <MainTitle>화분 물주기</MainTitle>
            <SubTitle>
              <img src={Clock} alt="시계이미지" /> 시간
            </SubTitle>
          </TitleContainer>
        </ImgTitleContainer>

        <img src={DetailImg} alt="상세보기 버튼" />

        <OptionsContainer>
          <OptionButton onClick={handleEdit}>수정하기</OptionButton>
          <OptionButton onClick={handleDelete}>삭제하기</OptionButton>
        </OptionsContainer>
      </ComponentContainer>

      {showEditModal && (
        <ModalContainer onClick={closeEditModal}>
          <ModalContent>
            {/* 내용 */}
            <ButtonContainer>
              <ActionButton onClick={closeEditModal}>취소</ActionButton>
              <ActionButton>추가</ActionButton>
            </ButtonContainer>
          </ModalContent>
        </ModalContainer>
      )}

      {showDeleteModal && (
        <ModalContainer>
          <ModalContent>
            <img src={ModalImg} alt="느낌표 이미지" />
            <p>정말로 해당 TIL을 삭제하시겠습니까?</p>
            <p>삭제 후에는 복구할 수 없습니다.</p>

            <ModalButtonContainer>
              <ModalCancelShape onClick={closeDeleteModal}>취소</ModalCancelShape>
              <ModalDeleteShape onClick={() => console.log('삭제 로직 실행')}>
                삭제
              </ModalDeleteShape>
            </ModalButtonContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default TDLComponent;
