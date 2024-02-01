import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import DetailImg from 'assets/todayilearn/detail.svg';

const OptionsContainer = styled.div`
  display: none;
  position: absolute;
  right: 0;
  flex-direction: column;

  // OptionsContainer에 대한 추가 스타일링
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

  &:hover ${OptionsContainer} {
    display: flex;
  }
`;

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 16px;
  border-radius: 8px;
`;

const TILComponent = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    navigate(`/todayilearn/detail`);
  };

  const handleDelete = () => {
    // 삭제 로직 구현
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ComponentContainer>
        <div>오늘의 til</div>
        <StyledImage src={DetailImg} alt="상세보기 버튼" />

        <OptionsContainer>
          <OptionButton onClick={handleEdit}>수정하기</OptionButton>
          <OptionButton onClick={handleDelete}>삭제하기</OptionButton>
        </OptionsContainer>
      </ComponentContainer>

      {showModal && (
        <ModalContainer>
          <ModalContent>
            {/* 모달 내용 및 확인/취소 버튼 등을 추가 */}
            <p>진짜 삭제하시겠습니까?</p>
            <button onClick={closeModal}>취소</button>
            <button onClick={() => console.log('삭제 로직 실행')}>확인</button>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default TILComponent;
