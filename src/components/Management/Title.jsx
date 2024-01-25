import React from 'react';
import styled from 'styled-components';
import ManagementImg from 'assets/management/management.svg';


const TitleContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;

margin-top: 500px;'

`;

const Title = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 7vh;

`;

const Main = styled.div`
font-size: 34px;
font-weight: 600;

color: #7682F6;
`;

const Sub = styled.div`
color: #9D9D9D;
font-size: 18px;
`;

const ManagmentTitle = () => {
    return(
        <div>
        <TitleContainer>
            <img src={ManagementImg} alt="SVG Image" /> 
            
            <Title>
                <Main>운영진 관리 페이지</Main>
                <Sub>반가워요 운영진님!</Sub>
            </Title>
            
        </TitleContainer>
        </div>
    );
};

export default ManagmentTitle;