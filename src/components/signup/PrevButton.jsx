import React from 'react';
import styled from 'styled-components';
import PrevButtonImage from 'assets/signup/PrevButton.svg';

const PrevButton = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-top: 50px;
`;

const prevButton = ({ step, setStep }) => {
  const prevStep = () => {
    setStep(step - 1);
  };

  return <PrevButton src={PrevButtonImage} alt="이전" onClick={prevStep} />;
};

export default prevButton;
