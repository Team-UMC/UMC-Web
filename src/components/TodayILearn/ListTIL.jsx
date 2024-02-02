//상세보기 한 글의 제목, 소제목, 삭제와 수정버튼이 있는 페이지
import React from "react";
import styled from "styled-components";

import FigmaImg from "assets/todayilearn/figma.svg";
import FixImg from "assets/todayilearn/fiximg.svg";
import RemoveImg from "assets/todayilearn/removeimg.svg";


const ListContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
`;

const StyleImg = styled.img`
width: 24px;
height:32px;
margin-right: 2vh;
display: flex;
align-items: center;
`;

const ImgTitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const TitleContainer = styled.div`
display: flex;
flex-direction: column;
`;

const MainTitle = styled.div`
font-size: 20px;
font-weight: 500;
`;

const SubTitle = styled.div`
color: #4B4B4B;
font-size: 16px;
font-weight: 500;
`;

const FixContainer = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-end;
`;

const ListTIL = () => {
    return(
    <ListContainer>
    <ImgTitleContainer>
    <StyleImg src={FigmaImg} alt="선택로고" />
    <TitleContainer>
        <MainTitle>프로젝트 웹 디자인하기</MainTitle>
        <SubTitle>TIL뷰 만들기</SubTitle>
    </TitleContainer>
    </ImgTitleContainer>

    <FixContainer>
    <img src={FixImg} alt='수정이미지' />
    <img src={RemoveImg} alt='제거이미지' />
    </FixContainer>

    </ListContainer>
    );
};

export default ListTIL;