import React from 'react';
import SignUpFormWrapper from './SignUpForm.style';

const WriteInput = ({label}) => {
  return (
    <SignUpFormWrapper>
      <label>{label}</label>
      <input type="text" placeholder={`Enter ${label}`} />
    </SignUpFormWrapper>
  );
};

export default WriteInput;
