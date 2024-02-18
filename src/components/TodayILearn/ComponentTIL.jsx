import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DetailImg from 'assets/todayilearn/detail.svg'; /* 상세보기버튼 이미지 */
import ModalImg from 'assets/todayilearn/modalimg.svg'; /*모달 느낌표 버튼 */
import FigmaImg from 'assets/todayilearn/figma.svg';
import { useNavigate } from 'react-router-dom';

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

const OptionButton = styled.div`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

const ActionButton = styled.div`
  padding: 8px 16px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TILComponent = ({ tilData, modifyTIL, deleteTIL }) => {
  const navigate = useNavigate();

  const [openOption, setOpenOption] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleTIL = (tilId) => {
    navigate(`/todayilearned/${tilId}`)
  }

  const handleOption = () => {
    setOpenOption(!openOption);
  };

  // 삭제 모달 열기 함수
  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  // 삭제 모달 닫기 함수
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  // 수정 모달 열기 함수
  const handleEdit = () => {
    setShowEditModal(true);
  };

  // 수정 모달 닫기 함수
  const closeEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <>
      {tilData.map((tilItem) => (
        <>
          <ComponentContainer key={tilItem.todayILearnedId}>
            <ImgTitleContainer>
              <StyleImg src={FigmaImg} alt="선택로고" />
              <TitleContainer onClick={handleTIL(tilItem.todayILearnedId)}>
                <MainTitle>{tilItem.title}</MainTitle>
                <SubTitle>{tilItem.subTitle}</SubTitle>
              </TitleContainer>
            </ImgTitleContainer>

            <img
              src={DetailImg}
              alt="상세보기 버튼"
              onClick={handleOption}
              style={{ cursor: 'pointer' }}
            />
          </ComponentContainer>

          <OptionsContainer visible={openOption}>
            <OptionButton onClick={() => handleEdit(tilData)}>
              수정하기
            </OptionButton>

            <OptionButton onClick={() => handleDelete(tilData.todayILearnedId)}>
              삭제하기
            </OptionButton>
          </OptionsContainer>
        </>
      ))}

      {showEditModal && (
        <ModalContainer onClick={closeEditModal}>
          <ModalContent>
            <ButtonContainer>
              <ActionButton onClick={closeEditModal}>취소</ActionButton>
              <ActionButton
                onClick={modifyTIL(
                  tilData.id,
                  tilData.title,
                  tilData.deadline,
                )}
              >
                수정
              </ActionButton>
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
              <ModalCancelShape onClick={closeDeleteModal}>
                취소
              </ModalCancelShape>
              <ModalDeleteShape
                onClick={() => deleteTIL(tilData.todayILearnedId)}
              >
                삭제
              </ModalDeleteShape>
            </ModalButtonContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

TILComponent.propTypes = {
  tilData: PropTypes.array.isRequired,
  modifyTIL: PropTypes.func.isRequired,
  deleteTIL: PropTypes.func.isRequired,
};

export default TILComponent;
