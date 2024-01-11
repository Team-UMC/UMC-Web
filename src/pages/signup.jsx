import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../assets/signup/background.svg';

const StartButton = styled.button`
  height: 6vh;
  width: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: #000c76;
  background: white;
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  font-weight: bold;
  margin-left: 27%;
  margin-top: 45vh;
  border-radius: 30px;
`;

const SocialLoginWrapper = styled.div`
  display: block;
  margin: 20% auto;
`;

const SocialLoginButton = styled.button`
  height: 6vh;
  width: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: #000c76;
  background: white;
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  font-weight: bold;
  border-radius: 30px;
  margin-top: 20px;
`;

const SignUpPageContainer = styled.div`
  height: 100vh;
  display: flex;
`;

const SignUpFormWrapper = styled.form`
  height: 20vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  margin: 10% auto;
`;

const SignUpForm = () => {
  const [showSocialLoginButtons, setShowSocialLoginButtons] = useState(true);

  const [step, setStep] = useState(0);

  const [inviteCode, setInviteCode] = useState('');
  const [school, setSchool] = useState('');
  const [generations, setGenerations] = useState([]);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [parts, setParts] = useState([]);

  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    setStep(1);
  };

  const handleSocialLoginClick = () => {
    // Handle social login logic here
    // You can setStep(1) to proceed to the next step for demonstration purposes
    setStep(2);
    setShowSocialLoginButtons(false);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the input is not empty for the current step
    switch (step) {
      case 2:
        if (inviteCode.trim() !== '') {
          nextStep();
        }
        break;
      case 3:
        if (school.trim() !== '') {
          nextStep();
        }
        break;
      case 4:
        if (generations.length > 0) {
          nextStep();
        }
        break;
      case 5:
        if (name.trim() !== '') {
          nextStep();
        }
        break;
      case 6:
        if (nickname.trim() !== '') {
          nextStep();
        }
        break;
      case 7:
        if (parts.length > 0) {
          nextStep();
        }
        break;
      case 8:
        // For the last step, you may want to handle terms and conditions acceptance logic
        // For now, let's assume the user needs to accept terms to proceed
        // Update the condition as needed based on your requirements
        if (step === 8) {
          nextStep();
        }
        break;
      default:
        break;
    }
    navigate('/');
  };

  const renderSocialLoginButtons = () =>
    showSocialLoginButtons && (
      <SocialLoginWrapper>
        <SocialLoginButton onClick={() => handleSocialLoginClick('kakao')}>
          Kakao로 로그인
        </SocialLoginButton>
        <SocialLoginButton onClick={() => handleSocialLoginClick('naver')}>
          Naver로 로그인
        </SocialLoginButton>
        <SocialLoginButton onClick={() => handleSocialLoginClick('google')}>
          Google로 로그인
        </SocialLoginButton>
      </SocialLoginWrapper>
    );

  const renderFormContent = () => {
    return (
      <>
        {step === 2 && (
          <div>
            <label htmlFor="inviteCode">초대 코드를 입력해주세요 </label>
            <br />
            <input
              type="text"
              id="inviteCode"
              name="inviteCode"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              placeholder="운영진에게 받은 코드를 입력해주세요!"
              style={{ color: '#aaa' }}
              maxLength={10}
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <label htmlFor="school">학교 선택: </label>
            <select
              id="school"
              name="school"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            >
              <option value="school1">가천대학교</option>
              <option value="school2">가톨릭대학교</option>
              <option value="school3">경기대학교</option>
              <option value="school4">경상국립대학교</option>
              <option value="school5">경희대학교</option>
              <option value="school6">광운대학교</option>
              <option value="school7">덕성여자대학교</option>
              <option value="school8">동국대학교</option>
              <option value="school9">동덕여자대학교</option>
              <option value="school10">명지대학교</option>
              <option value="school11">부경대학교</option>
              <option value="school12">상명대학교</option>
              <option value="school13">서경대학교</option>
              <option value="school14">서울여자대학교</option>
              <option value="school15">성신여자대학교</option>
              <option value="school16">숙명여자대학교</option>
              <option value="school17">숭실대학교</option>
              <option value="school18">아주대학교</option>
              <option value="school19">울산대학교</option>
              <option value="school20">이화여자대학교</option>
              <option value="school21">인하대학교</option>
              <option value="school22">중앙대학교</option>
              <option value="school23">한국공학대학교</option>
              <option value="school24">한국외국어대학교</option>
              <option value="school25">한국항공대학교</option>
              <option value="school26">한성대학교</option>
              <option value="school27">한양대학교</option>
              <option value="school28">한양대에리카</option>
              <option value="school29">홍익대학교</option>
            </select>
          </div>
        )}

        {step === 4 && (
          <div>
            <label htmlFor="generation">기수 선택: </label>
            <select
              multiple
              value={generations}
              onChange={(e) =>
                setGenerations(
                  Array.from(
                    e.target.selectedOptions,
                    (option) => option.value,
                  ),
                )
              }
            >
              <option value="gen1">1기</option>
              <option value="gen2">2기</option>
              <option value="gen3">3기</option>
              <option value="gen4">4기</option>
              <option value="gen5">5기</option>
            </select>
          </div>
        )}

        {step === 5 && (
          <div>
            <label htmlFor="name">이름 입력: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        {step === 6 && (
          <div>
            <label htmlFor="nickname">닉네임 입력: </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
        )}

        {step === 7 && (
          <div>
            <label htmlFor="part">파트 선택: </label>
            {/* 다중 선택 가능한 파트 구현 */}
            <select
              multiple
              value={parts}
              onChange={(e) =>
                setParts(
                  Array.from(
                    e.target.selectedOptions,
                    (option) => option.value,
                  ),
                )
              }
            >
              <option value="part1">파트1</option>
              <option value="part2">파트2</option>
              {/* 추가 파트 옵션 추가 */}
            </select>
          </div>
        )}

        {step === 8 && (
          <div>
            <p>약관 동의 화면</p>
            {/* 약관 동의 관련 내용 추가 */}
          </div>
        )}

        {step < 8 ? (
          <button type="button" onClick={nextStep}>
            다음
          </button>
        ) : (
          <button type="submit">가입 완료</button>
        )}
      </>
    );
  };

  return (
    <SignUpPageContainer
      style={{ background: `url('${BackgroundImage}') no-repeat center/cover` }}
    >
      {step === 0 && (
        <StartButton onClick={handleStartButtonClick}>
          UMC 챌린저로 시작하기
        </StartButton>
      )}

      {step > 0 && step <= 2 && renderSocialLoginButtons()}

      {step > 1 && (
        <SignUpFormWrapper onSubmit={handleSubmit} className={`step-${step}`}>
          {renderFormContent()}
        </SignUpFormWrapper>
      )}
    </SignUpPageContainer>
  );
};

export default SignUpForm;
