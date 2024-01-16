import React from 'react';
import SignUpFormWrapper from './SignUpForm.style';

const Name = () => {
  return (
    <SignUpFormWrapper>
      <h3> 이름을 입력해주세요 </h3>
      <input type="text" />
    </SignUpFormWrapper>
  );
};

export default Name;
