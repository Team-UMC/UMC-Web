// 댓글 파일

import React from 'react';
import styled from 'styled-components';
import {
  TextContent,
} from 'components/BoardTextDetail/TextDetail';
import PropTypes from 'prop-types';
import ProfileContainer from './ProfileContainer';
import ProfileImg from 'assets/ProfileImg.svg';

const Container = styled.div`            // 댓글의 전체를 감싸는 박스
  display: flex;
  flex-direction: column;                // 박스 요소를 column으로 배열
  font-family: 'Pretendard';
  padding: 2vw;                          // padding을 2vw로 준다
  border: 2px solid #d8d8ff;           // 박스 경계 표시
`;

const TextContentWrapper = styled.div`   // 댓글의 내용을 스타일링 하기 위해 사용
  padding-top: 1%;                       // 댓글과 ProfileContainer 사이의 간격을 조절하기 위해 사용
`;

const Date = styled.span`                // 댓글이 달린 날짜를 표시하기 위해 사용
  font-size: 0.8em;                      // 글씨 크기 설정
  color: #9d9d9d;                      // 글씨 색 설정
`;

const Comment = ({                         // 댓글내용과 날짜를 프롭으로 사용하는 댓글 컴포넌트
  CustomTextContent,
  date,
}) => {
  return (
    <Container >
      <ProfileContainer ProfileImgFile={ProfileImg} NameNicknameText="리오/이원영" CohortPartText="5기 &#124; Web"/>
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
  CustomTextContent: PropTypes.string.isRequired,
  date: PropTypes.string,
};

export {Comment,Date};
