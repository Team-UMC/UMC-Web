import React from 'react';
import styled from 'styled-components';
import NextButtonImage from 'assets/signup/NextButton.svg';

const NextButton = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const nextButton = ({ step, setStep }) => {
  const nextStep = () => {
    setStep(step + 1);
  };

  return <NextButton src={NextButtonImage} alt="다음" onClick={nextStep} />;
};

export default nextButton;
