import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpFormStyle from 'components/SignUp/SignUpForm.style';
import PropTypes from 'prop-types';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

const Input = styled.input`
  width: 300px;
  height: 30px;
  text-align: center;
`;

const Name = ({ nextStep, prevStep }) => {
  const [name, setName] = useState('');

  return (
    <SignUpFormStyle.Wrapper>
      <SignUpFormStyle.SignUpFormWrapper>
        <h2> 이름을 입력해주세요 </h2>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='예시) 정진혁'
        />
      </SignUpFormStyle.SignUpFormWrapper>
      <SignUpFormStyle.StepButtonWrapper>
        <PrevButton nextStep={prevStep} />
        {name && <NextButton nextStep={nextStep} />}
      </SignUpFormStyle.StepButtonWrapper>
    </SignUpFormStyle.Wrapper>
  );
};

Name.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default Name;
