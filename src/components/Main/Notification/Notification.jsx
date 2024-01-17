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
  border: 1px solid black; /* 검정색 테두리 선 추가 */
  padding: 5px; /* 옵션: 테두리와 내용 간격 조절 */
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const Notification = () => {
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
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 4));
  };

  return (
    <Container>
      <ButtonContainer>
        {currentIndex > 0 && <LeftArrow alt="이전" onClick={handlePrev} />}
      </ButtonContainer>
      <DataContainer>
        {data.slice(currentIndex, currentIndex + 4).map((item, index) => (
          <Rectangle key={index}>{item}</Rectangle>
        ))}
      </DataContainer>
      <ButtonContainer>
        {currentIndex < data.length - 4 && (
          <RightArrow alt="다음" onClick={handleNext} />
        )}
      </ButtonContainer>
    </Container>
  );
};

export default Notification;
