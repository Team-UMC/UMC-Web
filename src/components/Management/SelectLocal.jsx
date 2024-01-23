import React from 'react';
import styled from 'styled-components';

const LocalContainer = styled.div`
  display: flex;
  width: 120vh;
  padding: 1vh;
  border-radius: 12px;
  color: #BCBCBC;
  margin-top: 1.6vh;
  border: 1px solid #232A6D;
`;

const Local = () => {
    return(
        <LocalContainer>
            장소설정
        </LocalContainer>
    );
};

export default Local;