import React, { useState, useEffect } from 'react';
//import axios from 'axios';

import SignUpStyles from 'pages/SignUp/signup.style';
import BackgroundImage from 'assets/signup/background.svg';
import NocontentsBackgroundImage from 'assets/signup/NoContentsBackground.svg';

import InviteCode from 'components/SignUp/InviteCode';
import School from 'components/SignUp/School';
import Name from 'components/SignUp/Name';
import Nickname from 'components/SignUp/Nickname';
import Agreement from 'components/SignUp/Agreement';
import GenerationPart from 'components/SignUp/GenerationPart';
import SignUpComplete from 'components/SignUp/SignUpComplete';

const SignUpForm = () => {
  const [step, nextStep] = useState(0);

  const [userData, setUserData] = useState({
    inviteCode: '',
    universityName: '',
    semester: '',
    name: '',
    nickname: '',
    selectedPart: [],
  });

  useEffect(() => {
    const preloadImages = [BackgroundImage, NocontentsBackgroundImage];
    preloadImages.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  const handleNextStep = () => {
    nextStep(step + 1);
  };

  const handlePrevStep = () => {
    nextStep(step - 1);
  };

  {
    /*const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/signup', userData);

      console.log('API Response:', response.data);

      handleNextStep();
    } catch (error) {
      // Handle errors here
      console.error('Error:', error);
    }
  };*/
  }

  return (
    <SignUpStyles.SignUpPageContainer step={step}>
      {step === 0 && (
        <SignUpStyles.StartButton onClick={handleNextStep}>
          UMC 챌린저로 시작하기
        </SignUpStyles.StartButton>
      )}

      {step === 1 && (
        <InviteCode nextStep={handleNextStep} prevStep={handlePrevStep} />
      )}

      {step === 2 && (
        <School
          setUserData={setUserData}
          userData={userData}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
        />
      )}
      {step === 3 && (
        <GenerationPart
          setUserData={setUserData}
          userData={userData}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
        />
      )}
      {step === 4 && (
        <Name
          setUserData={setUserData}
          userData={userData}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
        />
      )}
      {step === 5 && (
        <Nickname
          setUserData={setUserData}
          userData={userData}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
        />
      )}
      {step === 6 && (
        <Agreement
          setUserData={setUserData}
          userData={userData}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
        />
      )}
      {step === 7 && <SignUpComplete />}
    </SignUpStyles.SignUpPageContainer>
  );
};

export default SignUpForm;
