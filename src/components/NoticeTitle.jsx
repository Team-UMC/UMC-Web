import styled from "styled-components";

const NoticeTitleWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  padding-left: 10%;
  padding-bottom: 10%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const NoticeMainTitle = styled.h2`
  color: #000c76;
  font-family: "Pretendard";
  font-size: 2em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -2.8px;
`;

const NoticeSubTitle = styled.p`
  color: #9599bd;
  font-family: "Pretendard";
  font-size: 1em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.4px;
`;

const NoticeTitle = () => {
    return (
      <NoticeTitleWrapper>
        <NoticeMainTitle>운영진 관리 페이지</NoticeMainTitle>
        <NoticeSubTitle>공지사항 및 캘랜더 관리</NoticeSubTitle>
      </NoticeTitleWrapper>
    );
}

export default NoticeTitle;