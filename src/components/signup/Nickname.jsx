import React from 'react';
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

const Nickname = ({
  userData,
  handleChange,
  handleNextStep,
  handlePrevStep,
}) => {
  return (
    <SignUpFormStyle.Wrapper>
      <SignUpFormStyle.SignUpFormWrapper>
        <h2> 닉네임을 입력해주세요 </h2>
        <Input
          type="text"
          name="nickname"
          value={userData.nickname}
          onChange={handleChange}
          placeholder="예시) 눈꽃"
        />
      </SignUpFormStyle.SignUpFormWrapper>
      <SignUpFormStyle.StepButtonWrapper>
        <PrevButton handlePrevStep={handlePrevStep} />
        {userData.nickname && <NextButton handleNextStep={handleNextStep} />}
      </SignUpFormStyle.StepButtonWrapper>
    </SignUpFormStyle.Wrapper>
  );
};

Nickname.propTypes = {
  userData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
};

export default Nickname;
