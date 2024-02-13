//til 내용, 노션연동, 첨부파일, 목록 버튼
import React from "react";
import styled from "styled-components";

import NotionImg from 'assets/todayilearn/notion.svg';
import FileImg from 'assets/todayilearn/file.svg';

const DetailComponent = () => {
    return (
    <div>
        <TextComponent>축구축구구루국</TextComponent>
        
        <AddFileContainer>
        <Notion>노션연동</Notion> <img src={NotionImg} />
        </AddFileContainer>

        <AddFileContainer>
        <Notion>첨부파일 </Notion> <img src={FileImg} />
        </AddFileContainer>
        
        <ButtonCon>
        <ListButton>목록</ListButton>
        </ButtonCon>
    </div>
    );
};

export default DetailComponent;


const TextComponent = styled.textarea`
  color: black;
  border: none;
  display: flex;
  width:100%;
  height: 300px;
  padding: 1.5vh;
  font-size: 16px;
  align-items: flex-start;
  resize: none;
  border-radius: 12px;
  background: #FFF;
  flex-direction: column;
  margin-top: 5vh;

  border: 1px solid #232A6D;

`;
const AddFileContainer = styled.div`
display: flex;
flex-direction: row;
margin: 2vh 0vh;
`;
const Notion = styled.div`
display: flex;
align-items: center;
margin-right: 1vh;
`;

const ButtonCon = styled.div`
display: flex;
justify-content: center;

`;

const ListButton = styled.div`
display: flex;
padding: 10px 18px;
justify-content: center;
align-items: center;
background-color: #232A6D;
color: #fff;
width: auto; /*글자의 크기에 맞춤 */
border-radius: 12px;
cursor: pointer;
`;