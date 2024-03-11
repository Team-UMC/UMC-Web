import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 60%;
  width: 100%;
  justify-content: space-between;
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

const DetailLink = ({ toggleSide }) => {
  const handleToggleSide = () => {
    toggleSide();
  };

  return (
    <Container>
      <Wrapper>
        <BigTitle to="/todolist" onClick={handleToggleSide}>
          투두리스트
        </BigTitle>
        <BigTitle to="/todayilearned" onClick={handleToggleSide}>
          Today-I-Learned
        </BigTitle>
        <div style={{ fontWeight: 'bold', marginBottom: '14px' }}>
          마스코트 키우기
        </div>
        <SmallTitle to="/mascot" onClick={handleToggleSide}>
          마스코트
        </SmallTitle>
        <SmallTitle to="/ranking" onClick={handleToggleSide}>
          랭킹
        </SmallTitle>
      </Wrapper>

      <Wrapper>
        <BigTitle to="/notice/campus" onClick={handleToggleSide}>
          학교 공지사항
        </BigTitle>
        <BigTitle to="/notice/branch" onClick={handleToggleSide}>
          지부 공지사항
        </BigTitle>
        <BigTitle to="/notice/center" onClick={handleToggleSide}>
          연합 공지사항
        </BigTitle>
      </Wrapper>

      <Wrapper>
        <BigTitle to="/board/campus/notice" onClick={handleToggleSide}>
          학교 게시판
        </BigTitle>
        <BigTitle to="/board/branch/notice" onClick={handleToggleSide}>
          지부 게시판
        </BigTitle>
        <BigTitle to="/board/center/notice" onClick={handleToggleSide}>
          연합 게시판
        </BigTitle>
      </Wrapper>

      <Wrapper>
        <SmallTitle to="/hothistory" onClick={handleToggleSide}>
          핫 프로젝트
        </SmallTitle>
        <SmallTitle to="/history" onClick={handleToggleSide}>
          역대 프로젝트
        </SmallTitle>
      </Wrapper>

      <Wrapper>
        <SmallTitle to="/gallery" onClick={handleToggleSide}>
          핫 사진첩
        </SmallTitle>
        <SmallTitle to="/gallery" onClick={handleToggleSide}>
          우리 학교 사진첩
        </SmallTitle>
      </Wrapper>
    </Container>
  );
};

DetailLink.propTypes = {
  toggleSide: PropTypes.func.isRequired,
};

export default DetailLink;
