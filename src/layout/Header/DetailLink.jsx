import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 60%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
  align-items: center;
`;

const BigTitle = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: black;
  font-weight: bold;

  margin-bottom: 32px;
`;

const SmallTitle = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: #616161;

  margin-bottom: 12px;
`;

const DetailLink = () => {
  return (
    <Container>
      <Wrapper>
        <BigTitle to="/todolist"> 투두리스트 </BigTitle>
        <BigTitle to="/todayilearn"> TIL </BigTitle>
        <div style={{ fontWeight: 'bold', marginBottom: '14px' }}>
          마스코트 키우기
        </div>
        <SmallTitle to="/mascot"> 마스코트 </SmallTitle>
        <SmallTitle to="/ranking"> 랭킹 </SmallTitle>
      </Wrapper>

      <Wrapper>
        <BigTitle to="/board/campus/notice"> 학교 게시판 </BigTitle>
        <BigTitle to="/board/branch/notice">지부 게시판 </BigTitle>
        <BigTitle to="/board/center/notice"> 연합 게시판 </BigTitle>
      </Wrapper>

      <Wrapper>
        <SmallTitle to="/project"> 핫 프로젝트 </SmallTitle>
        <SmallTitle to="/project"> 역대 프로젝트 </SmallTitle>
      </Wrapper>

      <Wrapper>
        <SmallTitle to="/gallery"> 핫 사진첩 </SmallTitle>
        <SmallTitle to="/gallery"> 우리 학교 사진첩 </SmallTitle>
      </Wrapper>
    </Container>
  );
};

export default DetailLink;
