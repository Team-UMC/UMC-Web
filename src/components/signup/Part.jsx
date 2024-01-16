import React, { css } from 'react';
import styled from 'styled-components';
import SignUpFormWrapper from './SignUpForm.style';

const Button = styled.button`
  padding: 8px;
  margin: 4px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 100px;
  background-color: transparent;
  color: white;

  &:hover {
    background-color: white;
    color: black; 
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: white;
      color: black;
    `}
`;

const Part = () => {
  return (
    <SignUpFormWrapper>
      <h3> 파트를 선택해주세요 </h3>
      <div>
        <Button>PM</Button>
        <Button>Design</Button>
        <Button>Spring</Button>
        <Button>Node</Button>
        <Button>Web</Button>
        <Button>iOS</Button>
        <Button>Android</Button>
      </div>
    </SignUpFormWrapper>
  );
};

export default Part;
