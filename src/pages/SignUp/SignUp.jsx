import React, { useState } from 'react';
import styled from 'styled-components';
import axiosInstance from 'apis/setting';
import NocontentsBackgroundImage from 'assets/signup/NoContentsBackground.svg';

import InviteCode from 'components/SignUp/InviteCode';
import Operator from 'components/SignUp/Operator';
import University from 'components/SignUp/University';
import Name from 'components/SignUp/Name';
import Nickname from 'components/SignUp/Nickname';
import Agreement from 'components/SignUp/Agreement';
import SemesterParts from 'components/SignUp/SemesterParts';
import SignUpComplete from 'components/SignUp/SignUpComplete';
import { useNavigate } from 'react-router-dom';

const SignUpPageContainer = styled.div`
  height: 100vh;
  display: flex;
  background: url(${NocontentsBackgroundImage}) no-repeat center center;
`;

const SignUp = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(2);

  const [inviteCode, setInviteCode] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);

  /* POST로 보내야 하는 내용들 */
  const [campusPositions, setCampusPositions] = useState([]);
  const [centerPositions, setCenterPositions] = useState([]);
  const [universityName, setUniversityName] = useState('');
  const [semesterParts, setSemesterParts] = useState([]);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleInviteCode = async () => {
    console.log('Invite Code: ', inviteCode);

    try {
      const res = await axiosInstance.post(`/invites`, {
        inviteCode: inviteCode,
      });

      if (res.data.code === 'COMMON200') {
        setIsValidCode(true);

        handleNextStep();
      }
    } catch (error) {
      console.error('InviteCode error:', error);
    }
  };

  const handleSubmit = async () => {
    console.log('Submitting University Data:', universityName);
    console.log('Submitting Semester and Part Data:', semesterParts);
    console.log('Submitting Name Data:', name);
    console.log('Submitting Nickname Data:', nickname);

    try {
      const res = await axiosInstance.post(`/members`, {
        name: name,
        nickname: nickname,
        semesterParts: semesterParts,
        universityName: universityName,
        campusPositions: campusPositions,
        centerPositions: centerPositions,
      });
      console.log('Server Response: ', res.data);

      localStorage.setItem('memberID: ', res.data.result.memberId);

      navigate('/main');
    } catch (error) {
      console.error('Form Data Submitted:', error);
    }
  };

  return (
    <SignUpPageContainer step={step}>
      {step === 0 && (
        <InviteCode
          inviteCode={inviteCode}
          setInviteCode={setInviteCode}
          isValidCode={isValidCode}
          handleInviteCode={handleInviteCode}
        />
      )}

      {step === 1 && (
        <Operator
          campusPositions={campusPositions}
          setCampusPositions={setCampusPositions}
          centerPositions={centerPositions}
          setCenterPositions={setCenterPositions}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}

      {step === 2 && (
        <University
          universityName={universityName}
          setUniversityName={setUniversityName}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 3 && (
        <SemesterParts
          semesterParts={semesterParts}
          setSemesterParts={setSemesterParts}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 4 && (
        <Name
          name={name}
          setName={setName}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 5 && (
        <Nickname
          nickname={nickname}
          setNickname={setNickname}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 6 && (
        <Agreement
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 7 && <SignUpComplete handleSubmit={handleSubmit} />}
    </SignUpPageContainer>
  );
};

export default SignUp;
