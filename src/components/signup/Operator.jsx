import React, { useState, useEffect } from 'react';
import SignUpFormWrapper from './SignUpForm.style';

const Operator = ({ invitationCode, nextStep }) => {
  const [isOperator, setIsOperator] = useState(null);

  useEffect(() => {
    const checkUserRole = async () => {
      setIsOperator();
    };
    checkUserRole();
  }, [invitationCode]);

  return (
    <SignUpFormWrapper>
      {isOperator && <div> 뭘 넣어야되지 </div>}
    </SignUpFormWrapper>
  );
};
