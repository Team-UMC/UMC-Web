import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import AddButtonImg from 'assets/todayilearn/addbutton.svg';

const AddButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px 8px 4px 6px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #232A6D;
  text-decoration: none; /* 밑줄 제거 */
  color: #373C6B;
`;

const AddTIL = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  margin-left: 0.5vh;
`;

const SVGImage = styled.img`
  margin-right: 0.5vh; /* 이미지와의 간격 조절 */
`;

const TILAdd = () => {
  return (
      <Link to="/todayilearn/detailpage" style={{ textDecoration: 'none' }}>
        <AddButtonContainer>
          <SVGImage src={AddButtonImg} alt='추가 버튼' />
          <AddTIL>TIL 추가</AddTIL>
        </AddButtonContainer>
      </Link>
  );
};

export default TILAdd;
