import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* 링크 텍스트에 밑줄 제거 */
`;

const Button = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: white;
  border: none;
  display: flex;
  padding: 10px 18px;
  align-items: center;
  border-radius: 12px;
  background: #232A6D;
  cursor: pointer;
  margin-top: 3.2vh;
  margin-right: 1vh;
`;

const ButtonTIL = () => {
  return (
    <ButtonContainer>
      <Button>작성</Button>
      <StyledLink to="/todayilearn">       {/* "/todayilearn" 경로로 이동하는 Link */}
        <Button>취소</Button>
      </StyledLink>
    </ButtonContainer>
  );
};

export default ButtonTIL;
