import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.div`
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

  &:hover {
    transform: scale(1.2);
  }
`;

const Description = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  height: 400px;
`;

const SignUpComplete = ({ handleSubmit }) => {
  return (
    <Description>
      <h1> 🎉 회원가입이 끝났어요 🥳 </h1>
      <p> UMC 챌린저가 된 것을 축하해요 👏🏻 </p>
      <p> 수많은 별들 중 챌린저님을 만나게 되어 기쁘답니다!</p>
      <p> UMC에서 가장 빛나는 별로 함께 성장해봐요 🌟</p>
      <p> 수많은 챌린저가 함께할 거예요! </p>
      <p> 그럼 지금 바로 수많은 챌린저들을 만나러 가볼까요?!</p>

      <Button onClick={handleSubmit}> UMC 어플로 입장하기 </Button>
    </Description>
  );
};

SignUpComplete.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SignUpComplete;
