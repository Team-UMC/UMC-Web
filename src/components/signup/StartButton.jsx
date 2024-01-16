import React from 'react';
import styled from 'styled-components';

const StartButtonContainer = styled.div`
  height: 6vh;
  width: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: #000c76;
  background: white;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-left: 27%;
  margin-top: 45vh;
  border-radius: 30px;
`;

const startButton = ({ setStep }) => {
  const handleStartButton = () => {
    setStep(1);
  };

  return (
    <StartButtonContainer onClick={() => handleStartButton()}>
      UMC 챌린저로 시작하기
    </StartButtonContainer>
  );
};

export default startButton;
