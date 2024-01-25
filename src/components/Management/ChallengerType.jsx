import React from 'react';
import styled from 'styled-components';

const ChallengerTypeContainer = styled.div`
width: 120vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 

border: 1px solid #232A6D;
`;


const TitleContainer = styled.div`
width: 70%;
border-radius: 12px;
font-size: 16px;
font-weight: 500;

border: 1px solid #232A6D;
`;

const SubTitle = styled.div`
font-size: 16px;
font-weight: 500;
color: #4B4B4B;
`;



const ChallengerType = () => {

    return (
        <ChallengerTypeContainer>
        <TitleContainer>
            운영진 직책
            <SubTitle>학교</SubTitle>
            <SubTitle>중앙</SubTitle>
        </TitleContainer>

        <TitleContainer>
            기수
        </TitleContainer>

        <TitleContainer>
            파트
        </TitleContainer>
        </ChallengerTypeContainer>
    );
};

export default ChallengerType;