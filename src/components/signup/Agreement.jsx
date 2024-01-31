import React, { useState } from 'react';
import SignUpFormStyle from 'components/SignUp/SignUpForm.style';
import PropTypes from 'prop-types';
import PrevButton from './PrevButton';
import styled from 'styled-components';
import NextButton from './NextButton';

const ABC = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Wrap = styled.div`
  color: white;
  height: 20vh;
  width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  margin-bottom: 150px;
`;

const Container = styled.div`
  width: 80%;
  height: 70%;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
`;

const TermsButton = styled.div`
  cursor: pointer;
  
`;

const Modal = ({ content, handleClose, onModalCheckboxChange }) => {
  const [modalCheckbox, setModalCheckbox] = useState(false);

  const handleCheckboxChange = () => {
    setModalCheckbox(!modalCheckbox);
    onModalCheckboxChange(!modalCheckbox);
  };

  return (
    <Container>
      <div className="popup-content">
        {content}
        <label>
          <input
            type="checkbox"
            checked={modalCheckbox}
            onChange={handleCheckboxChange}
          />
          모달 체크박스
        </label>
        <button onClick={handleClose}>닫기</button>
      </div>
    </Container>
  );
};

const Agreement = ({ handleNextStep, handlePrevStep, handleSubmit }) => {
  const [termsAgreement, setTermsAgreement] = useState(false);
  const [privacyAgreement, setPrivacyAgreement] = useState(false);

  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleTermsModal = () => {
    setShowTermsModal(true);
  };

  const handlePrivacyModal = () => {
    setShowPrivacyModal(true);
  };

  const handleTermsCheckboxChange = (value) => {
    setTermsAgreement(value);
  };

  const handlePrivacyCheckboxChange = (value) => {
    setPrivacyAgreement(value);
  };


  return (
    <SignUpFormStyle.Wrapper>
      <Wrap>
        <h2>개인정보 이용 및 서비스 약관 동의</h2>
        <h4>UMC 서비스 약관 및 개인정보 이용 안내에 대한 동의를 해주세요</h4>
        <div>
          <label>
            <input
              type="checkbox"
              checked={termsAgreement && privacyAgreement}
              onChange={() => {
                setTermsAgreement(!termsAgreement);
                setPrivacyAgreement(!termsAgreement);
              }}
            />
            약관 전체동의
          </label>
        </div>
        <ABC>
          <label>
            <input
              type="checkbox"
              checked={termsAgreement}
              onChange={() => setTermsAgreement(!termsAgreement)}
            />
            이용약관 동의(필수)
          </label>
          <TermsButton onClick={handleTermsModal}>약관 보기</TermsButton>
        </ABC>
        <ABC>
          <label>
            <input
              type="checkbox"
              checked={privacyAgreement}
              onChange={() => setPrivacyAgreement(!privacyAgreement)}
            />
            개인정보 수집 및 이용동의(필수)
          </label>
          <TermsButton onClick={handlePrivacyModal}>약관 보기</TermsButton>
        </ABC>
      </Wrap>

      {/* Popup for 이용약관 동의(필수) */}
      {showTermsModal && (
        <Modal
          content={<p>이용약관 내용 상세 페이지</p>}
          handleClose={() => setShowTermsModal(false)}
          onModalCheckboxChange={handleTermsCheckboxChange}
        />
      )}

      {/* Popup for 개인정보 수집 및 이용동의(필수) */}
      {showPrivacyModal && (
        <Modal
          content={<p>개인정보 수집 및 이용동의 내용 상세 페이지</p>}
          handleClose={() => setShowPrivacyModal(false)}
          onModalCheckboxChange={handlePrivacyCheckboxChange}
        />
      )}

      <SignUpFormStyle.StepButtonWrapper>
        <PrevButton handlePrevStep={handlePrevStep} />
        {termsAgreement && privacyAgreement && <NextButton handleNextStep={handleNextStep} handleSubmit={handleSubmit}/>}
      </SignUpFormStyle.StepButtonWrapper>
    </SignUpFormStyle.Wrapper>
  );
};

Modal.propTypes = {
  content: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
  onModalCheckboxChange: PropTypes.func.isRequired,
};

Agreement.propTypes = {
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Agreement;
