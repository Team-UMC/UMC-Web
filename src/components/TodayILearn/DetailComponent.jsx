import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NotionImg from 'assets/todayilearn/notion.svg';
import FileImg from 'assets/todayilearn/file.svg';

const TextComponent = styled.div`
  color: black;
  border: none;
  display: flex;
  width: 100%;
  height: 300px;
  padding: 1.5vh;
  font-size: 16px;
  align-items: flex-start;
  resize: none;
  border-radius: 12px;
  background: #fff;
  flex-direction: column;
  margin-top: 5vh;

  border: 1px solid #232a6d;
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
  background-color: #232a6d;
  color: #fff;
  width: auto; /*글자의 크기에 맞춤 */
  border-radius: 12px;
  cursor: pointer;
`;

const DetailComponent = ({ tilDetailData }) => {
  const navigate = useNavigate();

  const handleListButton = () => {
    navigate(`/todayilearned`);
  };

  return (
    <div>
      <TextComponent>{tilDetailData.content}</TextComponent>

      <AddFileContainer>
        <Notion>노션연동</Notion> <img src={NotionImg} />
      </AddFileContainer>

      <AddFileContainer>
        <Notion>첨부파일 </Notion> <img src={FileImg} />
      </AddFileContainer>

      <ButtonCon>
        <ListButton onClick={handleListButton}>목록</ListButton>
      </ButtonCon>
    </div>
  );
};

DetailComponent.propTypes = {
  tilDetailData: PropTypes.object.isRequired,
};

export default DetailComponent;
