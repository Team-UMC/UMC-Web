import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DetailImg from 'assets/todayilearn/detail.svg';
import ModalImg from 'assets/todayilearn/modalimg.svg';

import ListUnchecked from 'assets/todolist/listuncheckedimg.svg';
import ListChecked from 'assets/todolist/listcheckedimg.svg';
import Plant from 'assets/todolist/plant.svg';
import Clock from 'assets/todolist/clock.svg';

const ComponentContainer = styled.div`
  background-color: ${(props) => (props.completed ? '#E2E5FF' : 'white')};
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding: 2vh;
  margin-top: 2vh;
`;

const TodoListWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const StyleImg = styled.img`
  width: 10%;
  height: 40px;
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 90%;
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

const OptionsContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  position: absolute;
  right: 7px;
  top: 40px;
  flex-direction: column;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.61);
  padding: 8px;

  z-index: 5;
`;

const OptionButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  z-index: 999;
`;

const ModalContent = styled.div`
  height: 40%;
  background-color: white;
  padding: 24px 32px 24px 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

// const ActionButton = styled.div`
//   padding: 8px 16px;
//   margin-right: 8px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;

const TDLComponent = ({
  todoListData,
  completeTodoList,
  modifyTodoList,
  deleteTodoList,
}) => {
  const [openOptions, setOpenOptions] = useState(
    Array(todoListData.length).fill(false),
  );
  const [showDeleteModals, setShowDeleteModals] = useState(
    Array(todoListData.length).fill(false),
  );
  const [showEditModals, setShowEditModals] = useState(
    Array(todoListData.length).fill(false),
  );

  // 삭제/수정하기 옵션 모달 열기/닫기 함수
  const toggleOption = (index) => {
    const newOpenOptions = [...openOptions];
    newOpenOptions[index] = !newOpenOptions[index];
    setOpenOptions(newOpenOptions);
  };

  const toggleDeleteModal = (index) => {
    const newShowDeleteModals = [...showDeleteModals];
    newShowDeleteModals[index] = !newShowDeleteModals[index];
    setShowDeleteModals(newShowDeleteModals);
  };

  const toggleEditModal = (index) => {
    const newShowEditModals = [...showEditModals];
    newShowEditModals[index] = !newShowEditModals[index];
    setShowEditModals(newShowEditModals);
  };

  const handleDelete = (index) => {
    toggleDeleteModal(index);
  };

  const handleCloseDeleteModal = (index) => {
    toggleDeleteModal(index);
  };

  const handleEdit = (index) => {
    toggleEditModal(index);
  };

  const handleCloseEditModal = (index) => {
    toggleEditModal(index);
  };

  const DeleteTDL = (todoListId) => {
    deleteTodoList(todoListId);
  };

  const formatTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${period} ${formattedHours}:${formattedMinutes}`;
  };

  return (
    <>
      {todoListData.map((todoListItem, index) => (
        <div key={todoListItem.todoListId} style={{ position: 'relative' }}>
          <ComponentContainer completed={todoListItem.completed}>
            <img
              src={todoListItem.completed ? ListChecked : ListUnchecked}
              alt="선택로고"
              onClick={() => completeTodoList(todoListItem.todoListId)}
              style={{ cursor: 'pointer' }}
            />

            <TodoListWrapper>
              <StyleImg src={Plant} alt="식물사진" />
              <TitleContainer>
                <MainTitle>{todoListItem.title}</MainTitle>
                <SubTitle>
                  <img src={Clock} alt="시계이미지" />
                  {formatTime(todoListItem.deadline)}
                </SubTitle>
              </TitleContainer>
            </TodoListWrapper>

            <img
              src={DetailImg}
              alt="상세보기 버튼"
              onClick={() => toggleOption(index)}
              style={{ cursor: 'pointer' }}
            />

            <OptionsContainer visible={openOptions[index]}>
              <OptionButton onClick={() => handleEdit(index)}>
                수정하기
              </OptionButton>

              <hr style={{ margin: '5px 0' }} />

              <OptionButton onClick={() => handleDelete(index)}>
                삭제하기
              </OptionButton>
            </OptionsContainer>
          </ComponentContainer>

          {showEditModals[index] && (
            <ModalContainer>
              <ModalContent>
                <img src={ModalImg} alt="느낌표 이미지" />
                <p>해당 TIL을 수정하시겠습니까?</p>
                <ButtonContainer>
                  <ModalDeleteShape
                    onClick={() => {
                      modifyTodoList(
                        todoListData.id,
                        todoListData.title,
                        todoListData.deadline,
                      );
                      handleCloseEditModal(index);
                    }}
                  >
                    수정
                  </ModalDeleteShape>
                  <ModalCancelShape onClick={() => handleCloseEditModal(index)}>
                    취소
                  </ModalCancelShape>
                </ButtonContainer>
              </ModalContent>
            </ModalContainer>
          )}

          {showDeleteModals[index] && (
            <ModalContainer>
              <ModalContent>
                <img src={ModalImg} alt="느낌표 이미지" />
                <p>정말로 해당 TIL을 삭제하시겠습니까?</p>
                <p>삭제 후에는 복구할 수 없습니다.</p>

                <ModalButtonContainer>
                  <ModalCancelShape
                    onClick={() => handleCloseDeleteModal(index)}
                  >
                    취소
                  </ModalCancelShape>
                  <ModalDeleteShape
                    onClick={() => {
                      DeleteTDL(todoListItem.todoListId);
                      handleCloseDeleteModal(index);
                    }}
                  >
                    삭제
                  </ModalDeleteShape>
                </ModalButtonContainer>
              </ModalContent>
            </ModalContainer>
          )}
        </div>
      ))}
    </>
  );
};

TDLComponent.propTypes = {
  todoListData: PropTypes.array.isRequired,
  completeTodoList: PropTypes.func.isRequired,
  modifyTodoList: PropTypes.func.isRequired,
  deleteTodoList: PropTypes.func.isRequired,
};

export default TDLComponent;
