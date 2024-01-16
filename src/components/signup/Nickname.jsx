import React from 'react';
import SignUpFormWrapper from './SignUpForm.style';

const Nickname = () => {
  return (
    <SignUpFormWrapper>
      <h3> 닉네임을 입력해주세요 </h3>
      <input type="text" />
    </SignUpFormWrapper>
  );
};

export default Nickname;
