import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from 'apis/setting';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as LeftArrowGray } from 'assets/main/LeftArrowGray.svg';
import { ReactComponent as RightArrowGray } from 'assets/main/RightArrowGray.svg';
import { ReactComponent as LeftArrowBlack } from 'assets/main/LeftArrowBlack.svg';
import { ReactComponent as RightArrowBlack } from 'assets/main/RightArrowBlack.svg';

import TodoListAddImage from 'assets/main/TodoListAdd.svg';

const Container = styled.div`
  display: flex;
`;

const DataContainer = styled.div`
  display: flex;
`;

const Rectangle = styled.div`
  width: 100px;
  margin: 5px;
  border: 1px solid white;
  background-color: white;
  border-radius: 12px;
  padding: 5px;
  height: 118px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinktoTodoList = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/todolist');
  };

  return (
    <Rectangle>
      <Wrapper>
        <img
          src={TodoListAddImage}
          onClick={clickHandler}
          style={{ cursor: 'pointer' }}
        />
        <div> 기다리는 중</div>
      </Wrapper>
    </Rectangle>
  );
};

const TodoList = ({ completed }) => {
  // 서버로부터 받아온 TodoList 데이터 저장
  const [todoListData, setTodoListData] = useState([]);

  // Main 화면에서는 최대 3개의 데이터만 보이도록 구현
  const [currentIndex, setCurrentIndex] = useState(0);

  // 서버로부터 오늘 날짜의 데이터 받아오기
  useEffect(() => {
    const getTodoList = async () => {
      try {
        const today = new Date().toISOString().slice(0, 10);

        const res = await axiosInstance.get(`/to-do-lists?date=${today}`);

        const todoLists = res.data.result.todoLists;

        setTodoListData(
          todoLists
            .filter((todo) => todo.completed === completed)
            .map((todo) => ({
              todoListId: todo.todoListId,
              title: todo.title,
              deadline: new Date(todo.deadline).toLocaleString(),
              completed: todo.completed,
            }))
            .slice(0, 3), // 최대 3개의 항목만 선택
        );
      } catch (error) {
        console.error();
      }
    };
    getTodoList();
  }, [completed]);

  // 이전 항목 보기
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // 다음 항목 보기
  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, todoListData.length - 1));
  };

  const isLeftArrowGray = currentIndex === 0;
  const isRightArrowGray = currentIndex === todoListData.length - 4;

  return (
    <Container>
      <ButtonContainer>
        {isLeftArrowGray ? (
          <LeftArrowGray alt="이전" onClick={handlePrev} />
        ) : (
          <LeftArrowBlack alt="이전" onClick={handlePrev} />
        )}
      </ButtonContainer>
      <DataContainer>
        {todoListData
          .slice(currentIndex, currentIndex + 3)
          .map((item, index) => (
            <React.Fragment key={index}>
              <Rectangle>
                <div>{item.title}</div>
                <div>{item.deadline}</div>
                {/* 기타 필요한 정보들을 표시할 수 있음 */}
              </Rectangle>
            </React.Fragment>
          ))}
        {currentIndex + 3 >= todoListData.length && <LinktoTodoList />}
      </DataContainer>
      <ButtonContainer>
        {isRightArrowGray ? (
          <RightArrowGray alt="다음" onClick={handleNext} />
        ) : (
          <RightArrowBlack alt="다음" onClick={handleNext} />
        )}
      </ButtonContainer>
    </Container>
  );
};

TodoList.propTypes = {
  completed: PropTypes.bool.isRequired,
};

export default TodoList;
