import styled from 'styled-components';

const BoardTitleBigWrapper = styled.div`
  padding-top: 10vh;
  display: inline-flex;
  width: 100%;
  padding-left: 20vw;
  padding-bottom: 5%;
  flex-direction: row;
  gap: 0.1vw;
`;

const BoardTitleMediumWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

const BoardTitleSmallWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: row;
  gap: 0.1vw;
`;

const FreeText = styled.span`
  color: #7682f6;
  font-family: 'Pretendard';
  font-size: 2em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -2.8px;
`;

const BoardText = styled.span`
  color: #00095c;
  font-family: 'Pretendard';
  font-size: 2em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -2.8px;
`;

const BoardSubText = styled.p`
  color: #9d9d9d;
  font-family: 'Pretendard';
  font-size: 1em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.4px;
`;

const BoxContainer = styled.div`
  font-family: 'Pretendard';
  margin-left: 20vw;
  width: 60%;
  background-color: #fff;
  border-radius: 1.5vw;
  padding: 2vw;
  word-wrap: break-word;
`;

export {
  BoardTitleBigWrapper,
  BoardTitleMediumWrapper,
  BoardTitleSmallWrapper,
  FreeText,
  BoardText,
  BoardSubText,
  BoxContainer,
};
