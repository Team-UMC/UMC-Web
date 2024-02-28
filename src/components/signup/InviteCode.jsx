import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import SignUpFormStyle from 'components/signup/SignUpForm.style';
import PropTypes from 'prop-types';
import NextButton from './NextButton';

const Input = styled.input`
  width: 300px;
  height: 30px;
  text-align: center;
  border-radius: 7px;
`;

const InviteCode = ({
  inviteCode,
  setInviteCode,
  isValidCode,
  handleInviteCode,
}) => {
  const inviteCodeInput = useCallback(
    (e) => {
      setInviteCode(e.target.value);
    },
    [inviteCode],
  );

  useEffect(() => {
    handleInviteCode();
  }, [inviteCode]);

  return (
    <SignUpFormStyle.Wrapper>
      <SignUpFormStyle.SignUpFormWrapper>
        <h2> 초대코드를 입력해주세요 </h2>
        <Input
          type="text"
          value={inviteCode}
          onChange={inviteCodeInput}
          placeholder="운영진에게 받은 코드를 입력해주세요!"
        />
        {!isValidCode && (
          <p style={{ color: 'red' }}>유효한 초대코드를 입력해주세요.</p>
        )}
      </SignUpFormStyle.SignUpFormWrapper>

      <SignUpFormStyle.StepButtonWrapper step={1}>
        {isValidCode && <NextButton handleInviteCode={handleInviteCode} />}
      </SignUpFormStyle.StepButtonWrapper>
    </SignUpFormStyle.Wrapper>
  );
};

InviteCode.propTypes = {
  inviteCode: PropTypes.string.isRequired,
  setInviteCode: PropTypes.func.isRequired,
  isValidCode: PropTypes.bool.isRequired,
  handleInviteCode: PropTypes.func.isRequired,
};

export default InviteCode;
