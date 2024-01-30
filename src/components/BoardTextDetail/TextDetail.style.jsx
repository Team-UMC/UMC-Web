import styled from 'styled-components';

const AllWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileTextControlWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: row;
  gap: 0.1vw;
  justify-content: space-between;
`;

const ProfileBigWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  /* width: 100%; */
  gap: 1vw;
`;

const ProfileSmallWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

const NameNickname = styled.p`
  color: #000000;
  font-family: 'Pretendard';
  font-size: 1em;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -1.4px;
`;

const CohortPart = styled.p`
  color: #9d9d9d;
  font-family: 'Pretendard';
  font-size: 0.9em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.4px;
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
  ProfileTextControlWrapper,
  ProfileBigWrapper,
  ProfileSmallWrapper,
  NameNickname,
  CohortPart,
  TextTitle,
  TextContent,
  LikeCommentDateWrapper,
  Date,
  LikeCommentViewCountWrapper,
  Wrapper,
};
