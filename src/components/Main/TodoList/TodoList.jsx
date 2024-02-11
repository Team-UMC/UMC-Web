import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as LeftArrow } from 'assets/main/LeftArrow.svg';
import { ReactComponent as RightArrow } from 'assets/main/RightArrow.svg';

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

const TodoList = ({ completed }) => {
  const data = [
    '1번입니다',
    '2번입니다',
    '3번입니다',
    '4번입니다',
    '5번입니다',
    '6번입니다',
  ];

  const filteredData = data.filter((item, index) => {
    if (completed) {
      return index % 2 === 0; // completed가 true이면 index가 짝수인 항목만 필터링
    } else {
      return index % 2 !== 0; // completed가 false이면 index가 홀수인 항목만 필터링
    }
  });

  return (
    <Container>
      <ButtonContainer>
        <LeftArrow alt="이전" />
      </ButtonContainer>
      <DataContainer>
        {filteredData.map((item, index) => (
          <Rectangle key={index}>{item}</Rectangle>
        ))}
      </DataContainer>
      <ButtonContainer>
        <RightArrow alt="다음" />
      </ButtonContainer>
    </Container>
  );
};

TodoList.propTypes = {
  completed: PropTypes.bool.isRequired,
};

export default TodoList;
