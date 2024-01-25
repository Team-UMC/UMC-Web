import React from 'react';
import styled from 'styled-components';

const ChallengerTypeContainer = styled.div`
width: 120vh;
display: flex;
flex-direction: column;
`;


const ManagerContainer = styled.div`
width: 100%;
`;

const StageContainer = styled.div`
width: 100%;

`;

const PartContainer = styled.div`
width: 100%;

`;

const ChallengerType = () => {

    return (
        <ChallengerTypeContainer>
        <ManagerContainer>
            운영진 직책
            <div>학교</div>
            <div>중앙</div>
        </ManagerContainer>

        <StageContainer>
            기수
        </StageContainer>

        <PartContainer>
            파트
        </PartContainer>
        </ChallengerTypeContainer>
    );
};

export default ChallengerType;