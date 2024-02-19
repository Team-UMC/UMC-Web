import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LeftArrowBlack from 'assets/main/LeftArrowBlack.svg';
import RightArrowBlack from 'assets/main/RightArrowBlack.svg';

import ClockImage from 'assets/main/Clock.svg';

import TodoListAddImage from 'assets/main/TodoListAdd.svg';

// 진행중이에요/완료했어요 각각 Container
const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Rectangle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 100px;
  margin: 5px;
  border: 1px solid white;
  background-color: white;
  border-radius: 12px;
  padding: 5px;
  height: 118px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinktoTodoList = ({ myContribution }) => {
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
        <span style={{ fontSize: '12px' }}>
          {myContribution.nickname}님의 투두를
        </span>
        <span style={{ fontSize: '12px' }}>기다리는</span>
        <span style={{ fontSize: '12px' }}>중이에요..😴</span>
      </Wrapper>
    </Rectangle>
  );
};

LinktoTodoList.propTypes = {
  myContribution: PropTypes.arrayOf(
    PropTypes.shape({
      nickname: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const InProgressTodoList = ({ todoListsData, myContribution }) => {
  const filteredData = todoListsData.filter((item) => !item.completed);

  const [currentIndex, setCurrentIndex] = useState(0);
  const dataLength = filteredData.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataLength - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataLength - 1 ? 0 : prevIndex + 1,
    );
  };

  // 시간 형식 변환 함수
  const changeDeadlineFormat = (deadline) => {
    const date = new Date(deadline);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${period} ${formattedHours}:${formattedMinutes}`;
  };

  return (
    <DataContainer>
      <div style={{ marginBottom: '14px', fontWeight: 'bold' }}>
        🙄 진행중이에요 🔥
      </div>

      <Div>
        <img src={LeftArrowBlack} alt="이전" onClick={handlePrev} />

        <TodoListWrapper>
          {filteredData.length > 0 &&
            Array.from({ length: Math.min(3, filteredData.length) }).map(
              (_, index) => {
                const dataIndex = (currentIndex + index) % dataLength;
                const item = filteredData[dataIndex];
                return (
                  <div key={index}>
                    <Rectangle>
                      <img src={ClockImage} />
                      <div>{item.title}</div>
                      <div>
                        <img src={ClockImage} />{' '}
                        {changeDeadlineFormat(item.deadline)}
                      </div>
                    </Rectangle>
                  </div>
                );
              },
            )}
          <LinktoTodoList myContribution={myContribution} />
        </TodoListWrapper>

        <img src={RightArrowBlack} alt="다음" onClick={handleNext} />
      </Div>
    </DataContainer>
  );
};

InProgressTodoList.propTypes = {
  todoListsData: PropTypes.arrayOf(
    PropTypes.shape({
      todoListId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  myContribution: PropTypes.arrayOf(
    PropTypes.shape({
      nickname: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default InProgressTodoList;