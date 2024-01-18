import React from 'react';
import styled from 'styled-components';

const CheckContainer = styled.div`
display: flex;
flex-direction: row;
`;

const CheckType = styled.div`

`;



const Classify = () => {
<div>
    <div>분류</div>
    
    <CheckContainer>
        <CheckType>전체</CheckType> 
        <CheckType>이전기수 </CheckType>
        <CheckType>현재기수 </CheckType>
      
    </CheckContainer>
    <div>선</div>
    <div>학교 지부 연합</div>
</div>
};

export default Classify;