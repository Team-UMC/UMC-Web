import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
  color: black;
  border: none;
  display: flex;
  width:100%;
  height: 300px;
  padding: 1.5vh;
  font-size: 16px;
  align-items: flex-start;
  resize: none;
  border-radius: 12px;
  background: var(--white, #FFF);
  flex-direction: column;
  margin-top: 1.6vh;

  border: 1px solid #232A6D;


  &::placeholder {
    color: #BCBCBC;
  }
`;

const BoardText = () => {
  return (
    <Textarea placeholder="내용을 입력해주세요" />
    );
};


export default BoardText; 