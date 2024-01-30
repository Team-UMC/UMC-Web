import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NocontentsBackgroundImage from 'assets/signup/NoContentsBackground.svg';

import InviteCode from 'components/SignUp/InviteCode';
import School from 'components/SignUp/School';
import Name from 'components/SignUp/Name';
import Nickname from 'components/SignUp/Nickname';
import Agreement from 'components/SignUp/Agreement';
import GenerationPart from 'components/SignUp/GenerationPart';
import SignUpComplete from 'components/SignUp/SignUpComplete';

const SignUpPageContainer = styled.div`
  height: 100vh;
  display: flex;
  background: url(${NocontentsBackgroundImage}) no-repeat center center;
`;

const SignUp = () => {
  const [step, nextStep] = useState(0);

  const [userData, setUserData] = useState({
    inviteCode: '',
    universityName: '',
    semester: '',
    name: '',
    nickname: '',
    selectedPart: [],
  });

  const handleNextStep = () => {
    nextStep(step + 1);
  };

  const handlePrevStep = () => {
    nextStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://umcservice.shop:8000/members'.userData);

      console.log(response);

      if (response.status === 200) {
        console.log('회원 가입 성공');
      } else {
        console.error('회원 가입 실패:', response.data);
      }
    } catch (error) {
      console.error(
        '회원 가입을 하는 동안 에러가 발생했습니다: ',
        error.message,
      );
    }
  };

  return (
    <SignUpPageContainer step={step}>
      {step === 0 && <InviteCode nextStep={handleNextStep} />}

      {step === 1 && (
        <School
          setUserData={setUserData}
          userData={userData}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
        />
      )}
      {step === 2 && (
        <GenerationPart
          setUserData={setUserData}
          userData={userData}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
        />
      )}
      {step === 3 && (
        <Name
          setUserData={setUserData}
          userData={userData}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
        />
      )}
      {step === 4 && (
        <Nickname
          setUserData={setUserData}
          userData={userData}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
        />
      )}
      {step === 5 && (
        <Agreement
          setUserData={setUserData}
          userData={userData}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
          handleSubmit={handleSubmit}
        />
      )}
      {step === 6 && <SignUpComplete />}
    </SignUpPageContainer>
  );
};

export default SignUp;
