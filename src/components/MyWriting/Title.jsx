import React from "react";
import styled from "styled-components";

const MainTitleContainer = styled.div`
  margin-top: 1000px; /* 수정된 부분 */
  display: flex;
  flex-direction: row;
`;

const MainTitleMy = styled.div`
  color: #8282EE;
  font-size: 34px;
  margin-right: 10px;
`;

const MainTitleList = styled.div`
  color: #100958;
  font-size: 34px;
`;

const SubTitle = styled.div`
color: #A5A5A6;
font-size: 18px;
margin-bottom: 72px;
`;

const Title = () => {
  return (
    <div>
      <MainTitleContainer>
        <MainTitleMy>나의 글</MainTitleMy>
        <MainTitleList>목록</MainTitleList>
      </MainTitleContainer>

      <SubTitle>나의 활동 기록들을 확인해보세요</SubTitle>
    </div>
  );
};

export default Title;
