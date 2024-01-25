import styled from 'styled-components';
import React, { useState } from 'react';

const ContainerBoard = styled.div`
  display: flex;
`;

const Board = styled.div`
  border-radius: 12px;
  background-color: #fff;
  color: ${({ selected }) => (selected ? '#000C76' : '#868686')};
  border: 1px solid ${({ selected }) => (selected ? '#000C76' : '#D1D1D1')};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0.3vh 1vh;
  margin-right: 1em;
  margin-top: 0.7em;
  cursor: pointer;
  font-size: 14px;

  &.selected {
    background-color: #fff;
    color: #000C76;
    border-color: #000C76;
  }
`;

const SchoolBoard = () => {
  const [selectedBoard, setSelectedBoard] = useState(0);

  const handleBoardClick = (index) => {
    setSelectedBoard(index);
  };

  return (
    <ContainerBoard>
      {[0, 1, 2, 3, 4].map((index) => (
        <Board
          key={index}
          selected={selectedBoard === index}
          onClick={() => handleBoardClick(index)}
        >
          {index === 0 && '공지 게시판'}
          {index === 1 && '자유 게시판'}
          {index === 2 && '질문 게시판'}
          {index === 3 && '워크북 게시판'}
          {index === 4 && '이전 기수 게시판'}
        </Board>
      ))}
    </ContainerBoard>
  );
};

export default SchoolBoard;
