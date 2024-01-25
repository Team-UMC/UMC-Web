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
  border-radius: 7px;
`;

const InviteCode = ({ nextStep, prevStep }) => {
  const [invitationCode, setInvitationCode] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleInvitationCodeChange = (e) => {
    const code = e.target.value.trim();
    setInvitationCode(code);

    if (code === "123456") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  return (
    <SignUpFormStyle.Wrapper>
      <SignUpFormStyle.SignUpFormWrapper>
        <h2> 초대코드를 입력해주세요 </h2>
        <Input
          type="text"
          value={invitationCode}
          onChange={handleInvitationCodeChange}
          placeholder='운영진에게 받은 코드를 입력해주세요!'
        />
        {!isValid && <p style={{ color: 'red' }}>유효한 초대코드를 입력해주세요.</p>}
      </SignUpFormStyle.SignUpFormWrapper>

      <SignUpFormStyle.StepButtonWrapper>
        <PrevButton nextStep={prevStep} />
        {isValid && <NextButton nextStep={nextStep} />}
      </SignUpFormStyle.StepButtonWrapper>
    </SignUpFormStyle.Wrapper>
  );
};

InviteCode.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default InviteCode;
