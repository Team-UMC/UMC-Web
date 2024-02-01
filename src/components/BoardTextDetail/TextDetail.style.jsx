import styled from 'styled-components';

const AllWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  /* background-color: #F2F5FC; */
`;

const TextTitle = styled.h2`
  font-family: 'Pretendard';
  padding-top: 1%;
  padding-bottom: 1%;
  font-weight: bold;
`;

const TextContent = styled.p`
  font-family: 'Pretendard';
  padding-bottom: 1%;
`;

const LikeCommentDateWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: row;
  padding-top: 0.5vh;
`;
const RowAlignBox = styled.div`               
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: inline-flex;
  /* width: 10%; */
  flex-direction: row;
  gap: 0.1vw;
`;

const Date = styled.p`
  color: #bcbcbc;
  width: 15%;
`;

const LikeCommentViewCountWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: row;
  gap: 1vw;
  justify-content: flex-start;
`;

export {
  AllWrapper,
  TextTitle,
  TextContent,
  LikeCommentDateWrapper,
  Date,
  LikeCommentViewCountWrapper,
  Wrapper,
  RowAlignBox
};