import React from "react";
import styled from 'styled-components';
// import BlueDot from 'assets/BlueDot.svg'
import schoolIcon from 'assets/titleIcon/schoolIcon.svg';
import ProfileWrapper from 'components/BoardTextDetail/ProfileWrapper.jsx';
// import ProfileImg from 'assets/ProfileImg.svg'
// import ThreeDot from 'assets/ThreeDot.svg'
// import PropTypes from "prop-types";

// ProfileWrapper.propTypes = {
//     ImgSrc: PropTypes.any,
//     NameNickname: PropTypes.string,
//     CohortPartText: PropTypes.string,
//   };
// const ProfileBigWrapper = styled.div`
//   padding-top: 10vh;
//   display: inline-flex;
//   width: 100%;
//   padding-left: 20vw;
//   padding-bottom: 5%;
//   flex-direction: row;
//   gap: 0.1vw;
// `;

// const ProfileMediumWrapper = styled.div`
//   display: inline-flex;
//   flex-direction: column;
//   width:100%;
// `;

// const ProfileSmallWrapper = styled.div`
//   display: inline-flex;
//   width: 100%;
//   flex-direction: row;
//   gap: 0.1vw;
// `;

// const CohortPart = styled.p`
//   color: #9D9D9D;
//   font-family: "Pretendard";
//   font-size: 1em;
//   font-style: normal;
//   font-weight: 600;
//   line-height: normal;
//   letter-spacing: -1.4px;
// `;


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
  width:100%;
`;

const BoardTitleSmallWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: row;
  gap: 0.1vw;
`;

// const BlueDotImg = styled.img`
//   width: 2.8vw;
//   height: auto;
// `;

const FreeText = styled.span`
  color: #7682F6;
  font-family: "Pretendard";
  font-size: 2em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -2.8px;
`;

const BoardText = styled.span`
  color: #00095C;
  font-family: "Pretendard";
  font-size: 2em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -2.8px;   
`;

const BoardSubText = styled.p`
  color: #9D9D9D;
  font-family: "Pretendard";
  font-size: 1em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.4px;
`;

// const DateAuthorWrapper = styled.div`
//   font-family: "Pretendard";
//   padding-left: 20vw;
//   padding-bottom: 10vw;
//   display: flex;
//   width: 100%;
//   height: 100%;
//   padding-bottom: 5%;
//   gap: 20px;
// `;

// const Date = styled.h4`
//   font-family: "Pretendard";
//   font-weight: 100;
// `;

// const Author = styled.h4`
//   font-family: "Pretendard";
//   font-weight: 100;
// `;

const BoxContainer = styled.div`
  font-family: "Pretendard";
  margin-left: 20vw;
  margin-right: 20vw;
  width: 60%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 2vw;
  word-wrap: break-word;
`;

const TextTitle = styled.h2`
  font-family: "Pretendard";
  // padding-left: 5vw;
  padding-bottom: 2%;
  font-weight: bold;
`;

const TextContent = styled.p`
  font-family: "Pretendard";
  // padding-left: 5vw;
  padding-bottom: 2%;
`;

const Form = () => {
  return (
    <div style={{ backgroundColor: '#F2F5FC' }}>
      <BoardTitleBigWrapper>
        <img src={schoolIcon} alt="학교 이모티콘" />
        {/* <BlueDotImg src={BlueDot} alt="게시판 강조" /> */}
        <BoardTitleMediumWrapper>
          <BoardTitleSmallWrapper>
            <FreeText> 자유 </FreeText>
            <BoardText> 게시판 </BoardText>
          </BoardTitleSmallWrapper>
          <BoardSubText> 챌린저들과 자유롭게 의견을 나눠보세요! </BoardSubText>  
        </BoardTitleMediumWrapper>
      </BoardTitleBigWrapper>
      <ProfileWrapper
        ProfileImg={require('assets/ProfileImg.svg')}
        NameNickname="리오/이원영"
        CohortPartText="5기 Web"
      />
        {/* <ProfileWrapper
        ImgSrc={ProfileImg}
        NameNickname="리오/이원영"
        CohortPartText="5기 Web"
        /> */}
      <BoxContainer>
        <TextTitle> 그냥 집에 보내주세요ㅠ.ㅠ </TextTitle>
        <TextContent>
          그냥.. 잡애 가고 싶어요..집에 보내주세요 엉엉엉 저 진짜 열심히 했어요..
          열심히 했으니까 보내주세요..0마ㅣ람넝ㅁㅇㄴㄹㄴㅇㄹㄴㅇㄹㄹㅇㅇ
        </TextContent>
      </BoxContainer>
    </div>
  );
};

export default Form;