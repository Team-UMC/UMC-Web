//TIL 상세보기 화면
import React from 'react';
import styled from 'styled-components';
import ListTIL from './ListTIL';
import DetailComponent from './DetailComponent';

const NewTILContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0vh 50vh;
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: 600;
  margin: 15vh 0vh 6.5vh 0vh;
  color: #00095C;
`;

const DetailTIL = () => {
    return(
    <NewTILContainer>
        <Title>TodayILearn</Title> 
        <ListTIL />
        <DetailComponent /> 
    </NewTILContainer>
    );
};

export default DetailTIL;