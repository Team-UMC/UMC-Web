import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
display: flex;
flex-direction: column;

width: 80%;
margin-top: 12vh;
`;

const Main = styled.div`
font-size: 34px;
font-weight: 600;

color: #00095C;;
`;

const Sub = styled.div`
color: #9D9D9D;
font-size: 18px;
`;

const TitleTDL = () => {
    return(
     
            <Title>
                <Main>To-do List</Main>
                <Sub>오늘 내가 해야 할 일을 정리해보세요!</Sub>
            </Title>
            
    );
};

export default TitleTDL;