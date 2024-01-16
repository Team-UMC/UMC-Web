import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  
  font-weight: bold;
  font-size: 14px;
  color: white;
  border: none;

  display: flex;
  padding: 10px 18px;
  justify-content: flex-end;
  align-items: center;
  border-radius: 12px;
  background: #232A6D;
  cursor: pointer;
  margin-top: 3.2vh;
  
`;

const BoardButton = () => {
    
  return(
    <Button>작성</Button>
    );
};

export default BoardButton;