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

const MyContribution = () => {
  return (
      <ETCWrapper>
        <Wrapper>
          <div> 4등 </div>
          <div> 율리/김민지 </div>
          <div> 900 point </div>
        </Wrapper>
        <Wrapper>
          <div> 5등 </div>
          <div> 체이서/최재혁 </div>
          <div> 900 point </div>
        </Wrapper>
        <Wrapper>
          <div> 6등 </div>
          <div> 리오/이원영 </div>
          <div> 900 point </div>
        </Wrapper>
        <Wrapper>
          <div> 7등 </div>
          <div> 델로/오정현 </div>
          <div> 900 point </div>
        </Wrapper>
        <Wrapper>
          <div> 8등 </div>
          <div> 더기/양유진 </div>
          <div> 900 point </div>
        </Wrapper>
        <Wrapper>
          <div> 9등 </div>
          <div> 루시/김수민 </div>
          <div> 900 point </div>
        </Wrapper>
      </ETCWrapper>
  );
};

export default MyContribution;
