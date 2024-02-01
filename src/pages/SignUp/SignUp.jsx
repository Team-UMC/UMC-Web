import React, { useState } from 'react';
//import axios from 'axios';
import styled from 'styled-components';
import NocontentsBackgroundImage from 'assets/signup/NoContentsBackground.svg';

import InviteCode from 'components/SignUp/InviteCode';
import University from 'components/SignUp/University';
import Name from 'components/SignUp/Name';
import Nickname from 'components/SignUp/Nickname';
import Agreement from 'components/SignUp/Agreement';
import SemesterParts from 'components/SignUp/SemesterParts';
import SignUpComplete from 'components/SignUp/SignUpComplete';

const SignUpPageContainer = styled.div`
  height: 100vh;
  display: flex;
  background: url(${NocontentsBackgroundImage}) no-repeat center center;
`;

const SignUp = () => {
  const [step, setStep] = useState(0);

  const [userData, setUserData] = useState({
    name: '',
    nickname: '',
    semesterParts: [{ part: '', semester: '' }],
    universityName: '',
    campusPositions: [],
    centerPositions: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async () => {
    console.log('Form Data Submitted:', userData);
  };

  return (
    <SignUpPageContainer step={step}>
      {step === 0 && <InviteCode handleNextStep={handleNextStep} />}

      {step === 1 && (
        <University
          userData={userData}
          handleChange={handleChange}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 2 && (
        <SemesterParts
          userData={userData}
          setUserData={setUserData}
          handleChange={handleChange}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 3 && (
        <Name
          userData={userData}
          handleChange={handleChange}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 4 && (
        <Nickname
          userData={userData}
          handleChange={handleChange}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 5 && (
        <Agreement
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          handleSubmit={handleSubmit}
        />
      )}
      {step === 6 && <SignUpComplete />}
    </SignUpPageContainer>
  );
};

export default SignUp;
