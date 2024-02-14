import React, { useState, useEffect } from 'react';
import axiosInstance from 'apis/setting';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DetailImg from 'assets/todayilearn/detail.svg';
import ModalImg from 'assets/todayilearn/modalimg.svg';

import ListUnchecked from 'assets/todolist/listuncheckedimg.svg';
import ListChecked from 'assets/todolist/listcheckedimg.svg';
import Plant from 'assets/todolist/plant.svg';
import Clock from 'assets/todolist/clock.svg';

const ComponentContainer = styled.div`
  background-color: ${(props) => (props.complete ? '#E2E5FF' : 'white')};
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding: 1vh;
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
  right: 215px;
  top: 275px;
  flex-direction: column;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.61);
  padding: 8px;

  ::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: white;
    margin: 8px 0;
  }
`;

const OptionButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;

  &:first-child {
    margin-top: -8px;
  }

  &:last-child {
    margin-bottom: 0;
  }
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

const ActionButton = styled.div`
  padding: 8px 16px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TDLComponent = ({ todoListData, setTodoListData, selectedDate }) => {
  // 투두리스트 완료 여부
  const [completeStates, setCompleteStates] = useState({});

  // 삭제/수정하기 관련 모달 열기
  const [openOption, setOpenOption] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // 완료/미완료 함수
  const handleComplete = (todoListId) => {
    setCompleteStates((prevState) => ({
      ...prevState,
      [todoListId]: !prevState[todoListId],
    }));
  };

  // 삭제/수정하기 옵션 모달 열기/닫기 함수
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

  // 서버로부터 투두리스트 정보 받아오기
  useEffect(() => {
    const getTodoList = async () => {
      try {
        const formattedDate = selectedDate.toISOString().slice(0, 10);

        const res = await axiosInstance.get(
          `/to-do-lists?date=${formattedDate}`,
        );

        const todoLists = res.data.result.todoLists;

        console.log(formattedDate);

        setTodoListData(
          todoLists.map((todo) => ({
            todoListId: todo.todoListId,
            title: todo.title,
            deadline: new Date(todo.deadline).toLocaleString(),
            completed: todo.completed,
          })),
        );
      } catch (error) {
        console.error();
      }
    };
    getTodoList();
  }, [selectedDate]);

  // 해당 날짜의 투두리스트가 없으면 아무것도 출력하지 않도록 함
  if (!todoListData || todoListData.length === 0) {
    return null;
  }

  // 서버를 통해서 투두리스트 삭제
  const deleteTodoList = async (todoListId) => {
    try {
      await axiosInstance.delete(`/to-do-lists/${todoListId}`, {});

      setTodoListData(
        todoListData.filter((item) => item.todoListId !== todoListId),
      );
      setOpenOption(false);
      setShowDeleteModal(false);
    } catch (error) {
      console.error();
    }
  };

  return (
    <>
      {todoListData.map((todoListItem) => (
        <>
          <ComponentContainer
            key={todoListItem.todoListId}
            complete={completeStates[todoListItem.todoListId]}
          >
            <img
              src={
                completeStates[todoListItem.todoListId]
                  ? ListChecked
                  : ListUnchecked
              }
              alt="선택로고"
              onClick={() => handleComplete(todoListItem.todoListId)}
              style={{ cursor: 'pointer' }}
            />

            <TodoListWrapper>
              <StyleImg src={Plant} alt="식물사진" />
              <TitleContainer>
                <MainTitle>{todoListItem.title}</MainTitle>
                <SubTitle>
                  <img src={Clock} alt="시계이미지" /> {todoListItem.deadline}
                </SubTitle>
              </TitleContainer>
            </TodoListWrapper>

            <img
              src={DetailImg}
              alt="상세보기 버튼"
              onClick={handleOption}
              style={{ cursor: 'pointer' }}
            />
          </ComponentContainer>

          <OptionsContainer visible={openOption}>
            <OptionButton onClick={() => handleEdit(todoListItem)}>
              수정하기
            </OptionButton>

            <OptionButton onClick={() => handleDelete(todoListItem.todoListId)}>
              삭제하기
            </OptionButton>
          </OptionsContainer>

          {showEditModal && (
            <ModalContainer onClick={closeEditModal}>
              <ModalContent>
                <ButtonContainer>
                  <ActionButton onClick={closeEditModal}>취소</ActionButton>
                  <ActionButton onClick={handleEdit}>수정</ActionButton>
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
                    onClick={() => deleteTodoList(todoListItem.todoListId)}
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

TDLComponent.propTypes = {
  todoListData: PropTypes.array.isRequired,
  setTodoListData: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
};

export default TDLComponent;
