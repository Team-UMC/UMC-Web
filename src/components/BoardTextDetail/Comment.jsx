import React from 'react';
import styled from 'styled-components';
import {
  ProfileBigWrapper,
  ProfileSmallWrapper,
  ProfileTextControlWrapper,
  ProfileImage,
  NameNickname,
  CohortPart,
  TextContent,
  MiniHambergerMenuImg,
} from 'components/BoardTextDetail/TextDetail';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Pretendard';
  margin-left: 20vw;
  width: 60%;
  padding: 2vw;
  word-wrap: break-word;
  border: 2px solid #d8d8ff;
`;

const TextContentWrapper = styled.div`
  padding-top: 1%;
`;

const Date = styled.span`
  font-size: 0.8em;
  color: #9d9d9d;
`;

const Comment = ({
  NameNicknameText,
  CohortPartText,
  CustomTextContent,
  date,
}) => {
  return (
    <Container>
      <ProfileTextControlWrapper>
        <ProfileBigWrapper>
          <ProfileImage alt="프로필 사진" />
          <ProfileSmallWrapper>
            <NameNickname>{NameNicknameText || '리오 이원영'}</NameNickname>
            <CohortPart>{CohortPartText || '5기 Web'}</CohortPart>
          </ProfileSmallWrapper>
        </ProfileBigWrapper>
        <MiniHambergerMenuImg />
      </ProfileTextControlWrapper>
      <TextContentWrapper>
        <TextContent>
          {CustomTextContent ||
            '그냥.. 집에 가고 싶어요..집에 보내주세요 엉엉엉 저 진짜 열심히 했어요.. 열심히 했으니까 보내주세요..0마ㅣ람넝ㅁㅇㄴㄹㄴㅇㄹㄴㅇㄹㄹㅇㅇ'}
        </TextContent>
      </TextContentWrapper>
      <Date>{date || '2023. 1. 16'}</Date>
    </Container>
  );
};

Comment.propTypes = {
  NameNicknameText: PropTypes.string.isRequired,
  CohortPartText: PropTypes.string.isRequired,
  CustomTextContent: PropTypes.string.isRequired,
  date: PropTypes.string,
};

export default Comment;
