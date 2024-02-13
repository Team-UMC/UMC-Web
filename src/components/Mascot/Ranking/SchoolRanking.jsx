import React from 'react';
import styled from 'styled-components';

const ETCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border: 1px solid white;
  border-radius: 15px;
  background-color: white;

  color: black;
`;

const SchoolRanking = () => {
  return (
    <ETCWrapper>
      <Wrapper>
        <div> 4등 </div>
        <div> 가톨릭대학교 </div>
        <div> 900 point </div>
      </Wrapper>
      <Wrapper>
        <div> 5등 </div>
        <div> 가천대학교 </div>
        <div> 900 point </div>
      </Wrapper>
      <Wrapper>
        <div> 6등 </div>
        <div> 부산대학교 </div>
        <div> 900 point </div>
      </Wrapper>
      <Wrapper>
        <div> 7등 </div>
        <div> 홍익대학교 </div>
        <div> 900 point </div>
      </Wrapper>
      <Wrapper>
        <div> 8등 </div>
        <div> 동국대학교 </div>
        <div> 900 point </div>
      </Wrapper>
      <Wrapper>
        <div> 9등 </div>
        <div> 숭실대학교 </div>
        <div> 900 point </div>
      </Wrapper>
    </ETCWrapper>
  );
};

export default SchoolRanking;
