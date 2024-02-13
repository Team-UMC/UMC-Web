import React, { useState } from 'react';
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

const TodayILearned = () => {
  const data = [
    '1번입니다',
    '2번입니다',
    '3번입니다',
    '4번입니다',
    '5번입니다',
    '6번입니다',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? data.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex === data.length - 1 ? 0 : prevIndex + 1);
  };

  return (
    <Container>
      <ButtonContainer>
        <LeftArrow alt="이전" onClick={handlePrev} />
      </ButtonContainer>
      <DataContainer>
        {[data[currentIndex], data[(currentIndex + 1) % data.length], data[(currentIndex + 2) % data.length]].map((item, index) => (
          <Rectangle key={index}>{item}</Rectangle>
        ))}
      </DataContainer>
      <ButtonContainer>
        <RightArrow alt="다음" onClick={handleNext} />
      </ButtonContainer>
    </Container>
  );
};

export default TodayILearned;
