//오늘의 til 제목
///상세보기 클릭시 수정 삭제 옵션이 나오고 모달 실행

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import DetailImg from 'assets/todayilearn/detail.svg'; /* 상세보기버튼 이미지 */
import ModalImg from 'assets/todayilearn/modalimg.svg'; /*모달 느낌표 버튼 */
import FigmaImg from 'assets/todayilearn/figma.svg';

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
  width: 70%;

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
  top: 0; /*모달 배경을 화면 다 채우게 */
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.51);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  /*모달 화면*/
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
  /* align-items: center; */
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
`;

const StyleImg = styled.img`
  width: 24px;
  height: 32px;
  margin-right: 2vh;
  display: flex;
  align-items: center;
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
  font-size: 16px;
  font-weight: 500;
`;

const TILComponent = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    //수정하기 클릭시 페이지 이동
    navigate(`/todayilearn/detail`);
  };

  const handleDelete = () => {
    //삭제 버튼 클릭시 모달창 보여줌, 삭제동작구현필요
    setShowModal(true);
  };

  const closeModal = () => {
    //취소버튼 클릭시 모달창 끄기
    setShowModal(false);
  };

  return (
    <>
      <ComponentContainer>
        <ImgTitleContainer>
          <StyleImg src={FigmaImg} alt="선택로고" />
          <TitleContainer>
            <MainTitle>프로젝트 웹 디자인하기</MainTitle>
            <SubTitle>TIL뷰 만들기</SubTitle>
          </TitleContainer>
        </ImgTitleContainer>

        <StyledImage src={DetailImg} alt="상세보기 버튼" />

        <OptionsContainer>
          <OptionButton onClick={handleEdit}>수정하기</OptionButton>
          <OptionButton onClick={handleDelete}>삭제하기</OptionButton>
        </OptionsContainer>
      </ComponentContainer>

      {showModal /* 모달 실행 */ && (
        <ModalContainer>
          <ModalContent>
            <img src={ModalImg} alt="느낌표 이미지" />
            <p>정말로 해당 TIL을 삭제하시겠습니까?</p>
            <p>삭제 후에는 복구할 수 없습니다.</p>

            <ModalButtonContainer>
              <ModalCancelShape onClick={closeModal}>취소</ModalCancelShape>
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

export default TILComponent;
