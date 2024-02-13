// TextDetail파일의 스타일링 파일

import styled from 'styled-components';

// 전체를 스타일링 하는 컴포넌트(가장 상위 요소)
const AllWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

// 글의 제목을 나타내는 컴포넌트
const TextTitle = styled.h2`
  font-family: 'Pretendard';
  padding-top: 1%;
  padding-bottom: 1%;
  font-weight: bold;
`;

// 글의 내용을 나타내는 컴포넌트
const TextContent = styled.p`
  font-family: 'Pretendard';
  padding-bottom: 1%;
`;

// 좋아요, 댓글버튼과 날짜를 묶는 박스
const LikeCommentDateWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: row;
  padding-top: 0.5vh;
`;

// ProfileWrapper와 MiniHambergerBtn을 정렬하기 위해 사용
const RowAlignBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 좋아요수, 댓글수, 조회수를 묶어서 정렬하기 위해 사용
const LikeCommentViewCountWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: row;
  gap: 1vw;
  justify-content: flex-start;
`;

// 좋아요수, 댓글수, 조회수를 각각 정렬하기 위해 사용
const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 0.1vw;
`;


// 날짜글씨 스타일링
const Date = styled.p`
  color: #bcbcbc;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

export {
  AllWrapper,
  TextTitle,
  TextContent,
  LikeCommentDateWrapper,
  Date,
  LikeCommentViewCountWrapper,
  Wrapper,
  RowAlignBox,
};
