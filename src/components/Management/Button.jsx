import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
display: flex;
width: 120vh;
justify-content: flex-end;
align-items: center;
margin-left: 16px;
`;

const Button = styled.button`
  
  font-weight: bold;
  font-size: 14px;
  color: white;
  border: none;

  padding: 10px 18px;
  
  border-radius: 12px;
  background: #8784FF;
  cursor: pointer;
  margin-top: 3.2vh;
  width: 65px;
  
`;

const ManagementButton = () => {
    
  return(
    <ButtonContainer>
    <Button>완료</Button>
    </ButtonContainer>
    );
};

export default ManagementButton;