import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DetailImg from 'assets/todayilearn/detail.svg';
import ModalImg from 'assets/todayilearn/modalimg.svg';

import PMImage from 'assets/Profile/Part/PM.svg';
import DesignImage from 'assets/Profile/Part/Design.svg';
import SpringImage from 'assets/Profile/Part/Spring.svg';
import NodeImage from 'assets/Profile/Part/Node.svg';
import WebImage from 'assets/Profile/Part/Web.svg';
import iOSImage from 'assets/Profile/Part/iOS.svg';
import AndroidImage from 'assets/Profile/Part/Android.svg';
import ETCImage from 'assets/Profile/Part/Study.svg';

const OptionsContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  position: absolute;
  right: -12px;
  top: 40px;
  flex-direction: column;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.61);
  padding: 8px;

  z-index: 5;
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 12px;
  padding: 1vh;
  margin-top: 2vh;
  position: relative;
  width: 70%;

  background-color: white;
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
  cursor: pointer;
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

  const [openOptions, setOpenOptions] = useState(
    Array(tilData.length).fill(false),
  );

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleTIL = (tilId) => {
    navigate(`/todayilearned/${tilId}`);
  };

  const toggleOption = (index) => {
    const newOpenOptions = [...openOptions];
    newOpenOptions[index] = !newOpenOptions[index];
    setOpenOptions(newOpenOptions);
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

  const renderPartImage = (part) => {
    if (part === 'PM') {
      return <StyleImg src={PMImage} alt="PM" />;
    } else if (part === 'DESIGN') {
      return <StyleImg src={DesignImage} alt="DESIGN" />;
    } else if (part === 'SPRING') {
      return <StyleImg src={SpringImage} alt="SPRING" />;
    } else if (part === 'NODE') {
      return <StyleImg src={NodeImage} alt="NODE" />;
    } else if (part === 'WEB') {
      return <StyleImg src={WebImage} alt="WEB" />;
    } else if (part === 'IOS') {
      return <StyleImg src={iOSImage} alt="IOS" />;
    } else if (part === 'ANDROID') {
      return <StyleImg src={AndroidImage} alt="ANDROID" />;
    } else if (part === 'ETC') {
      return <StyleImg src={ETCImage} alt="ETC" />;
    }
    return null;
  };

  return (
    <>
      {tilData.map((tilItem, index) => (
        <>
          <ComponentContainer>
            <ImgTitleContainer>
              {renderPartImage(tilItem.part)}
              <TitleContainer
                onClick={() => handleTIL(tilItem.todayILearnedId)}
              >
                <MainTitle>{tilItem.title}</MainTitle>
                <SubTitle>{tilItem.subTitle}</SubTitle>
              </TitleContainer>
            </ImgTitleContainer>

            <img
              src={DetailImg}
              alt="상세보기 버튼"
              onClick={() => toggleOption(index)}
              style={{ cursor: 'pointer' }}
            />

            <OptionsContainer visible={openOptions[index]}>
              <OptionButton onClick={() => handleEdit(tilData)}>
                수정하기
              </OptionButton>

              <hr style={{ margin: '5px 0' }} />

              <OptionButton
                onClick={() => handleDelete(tilData.todayILearnedId)}
              >
                삭제하기
              </OptionButton>
            </OptionsContainer>
          </ComponentContainer>

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
                    onClick={() => deleteTIL(tilItem.todayILearnedId)}
                  >
                    삭제
                  </ModalDeleteShape>
                </ModalButtonContainer>
              </ModalContent>
            </ModalContainer>
          )}
        </>
      ))}
    </>
  );
};

TILComponent.propTypes = {
  tilData: PropTypes.array.isRequired,
  modifyTIL: PropTypes.func.isRequired,
  deleteTIL: PropTypes.func.isRequired,
};

export default TILComponent;
