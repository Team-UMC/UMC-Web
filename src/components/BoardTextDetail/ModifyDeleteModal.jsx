// MiniHambergerBtn을 누르고 수정,삭제를 눌렀을 때 나오는 다시 한번 선택하는 모달

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// 검은 배경 스타일링 컴포넌트
const BlackBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid gray;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.62);
  z-index: 1000;
`;

// 검은 배경 안에 있는 질문과 (예,아니오)버튼을 둘러싸는 부분
const WhiteBackground = styled.div`
  background: white;
  width: 20%;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 예,아니오 버튼을 감싸는 컴포넌트
const YesNoBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.4vw;
  padding-top: 20px;
`;

// Yes버튼
const YesBtn = styled.div`
  cursor: pointer;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 0.1vw;
  // 글씨에 색상 부여
  color: red;
`;

//No버튼
const NoBtn = styled.div`
  cursor: pointer;
  padding: 0.1vw;
  border: 1px solid #000000;
  border-radius: 4px;
`;

const ModifyDeleteModal = ({ isModify, closeModal }) => {
  const navigate = useNavigate();

  // "예" 버튼 클릭 시 실행되는 함수
  const handleYesClick = () => {
    // isModify 값에 따라 페이지 이동
    if (isModify) {
      // true면 수정페이지로 이동
      navigate('/boardwrite');
    } else {
      //false면 삭제되므로 board페이지로 이동
      navigate('/board');
    }
    // 모달 닫기
    closeModal();
  };

  return (
    <div>
      <BlackBackground className="black-bg">
        <WhiteBackground className="white-bg">
          <h4>{isModify ? '수정하겠습니까?' : '삭제하겠습니까?'}</h4>
          <YesNoBtnWrapper>
            <YesBtn onClick={handleYesClick}>예</YesBtn>
            <NoBtn onClick={closeModal}>아니오</NoBtn>
          </YesNoBtnWrapper>
        </WhiteBackground>
      </BlackBackground>
    </div>
  );
};

ModifyDeleteModal.propTypes = {
  isModify: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModifyDeleteModal;
