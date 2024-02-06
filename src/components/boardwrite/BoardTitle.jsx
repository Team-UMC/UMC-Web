import styled from 'styled-components';
import React from 'react';

// 글자가 적인 후 -> 전
const TitleInput = styled.input` 
color: black; 
border: none;
font-size: 18px;
font-weight: bold;
width: 100%;
padding: 1.5vh;
border-radius: 12px;
margin-top: 1.6vh;

border: 1px solid #232A6D;

&::placeholder,
&::-webkit-input-placeholder {
  color: #BCBCBC;
  font-weight: bold;
}
`;

const BoardTitle = () => {

  return(
      <TitleInput className='title' placeholder="제목을 입력해주세요" />
  );
};


export default BoardTitle; 