import React, { useCallback } from 'react';
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

const Name = ({ name, setName, handleNextStep, handlePrevStep }) => {
  const nameChange = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [name],
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleNextStep();
    }
  };

  return (
    <SignUpFormStyle.Wrapper>
      <SignUpFormStyle.SignUpFormWrapper>
        <h2> 이름을 입력해주세요 </h2>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={nameChange}
          onKeyDown={handleKeyDown}
          placeholder="예시) 정진혁"
        />
      </SignUpFormStyle.SignUpFormWrapper>
      <SignUpFormStyle.StepButtonWrapper>
        <PrevButton handlePrevStep={handlePrevStep} />
        {name && <NextButton handleNextStep={handleNextStep} />}
      </SignUpFormStyle.StepButtonWrapper>
    </SignUpFormStyle.Wrapper>
  );
};

Name.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
};

export default Name;
