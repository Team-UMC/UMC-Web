import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import NotionImg from 'assets/todayilearn/notion.svg';
import FileImg from 'assets/todayilearn/file.svg';

import PMImage from 'assets/Profile/Part/PM.svg';
import DesignImage from 'assets/Profile/Part/Design.svg';
import SpringImage from 'assets/Profile/Part/Spring.svg';
import NodeImage from 'assets/Profile/Part/Node.svg';
import WebImage from 'assets/Profile/Part/Web.svg';
import iOSImage from 'assets/Profile/Part/iOS.svg';
import AndroidImage from 'assets/Profile/Part/Android.svg';
import StudyImage from 'assets/Profile/Part/Study.svg';

const NewTILContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0vh 50vh;
`;

const StyleImg = styled.img`
  width: 24px;
  height: 32px;
  margin-right: 2vh;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: 600;
  margin: 15vh 0vh 6.5vh 0vh;
  color: #00095c;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
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

const MainTitle = styled.input`
  font-size: 20px;
  font-weight: 500;
`;

const SubTitle = styled.input`
  color: #4b4b4b;
  font-size: 16px;
  font-weight: 500;
`;

const TextComponent = styled.textarea`
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

const ModifyTIL = () => {
  const navigate = useNavigate();

  const [tilDetailData, setTilDetailData] = useState({});

  const currentURL = window.location.href;
  const urlParts = currentURL.split('/');

  const todayILearnedId = urlParts[5];

  useEffect(() => {
    const getTILData = async () => {
      try {
        const res = await axiosInstance.get(
          `/today-i-learned/${todayILearnedId}`,
        );

        setTilDetailData(res.data.result);
      } catch (error) {
        console.error();
      }
    };
    getTILData();
  }, []);

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');

  const part = 'WEB';

  // eslint-disable-next-line
  const [file, setFile] = useState([]);

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleSubtitleInput = (e) => {
    setSubtitle(e.target.value);
  };

  const handleContentInput = (e) => {
    setContent(e.target.value);
  };

  const modifyTILData = async () => {
    const formData = new FormData();

    if (file) {
      formData.append('file', file[0]);
    }

    formData.append(
      'request',
      JSON.stringify({
        part: part,
        title: title,
        subTitle: subtitle,
        content: content,
      }),
    );

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_TEST_SERVER_URL}/today-i-learned/update/${todayILearnedId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: localStorage.getItem('server Token'),
          },
        },
      );
      console.log(res);

      navigate(`/todayilearned`);
    } catch (error) {
      console.error();
    }
  };

  const renderPartImage = (part) => {
    if (part === 'PM') {
      return <StyleImg src={PMImage} alt="PM" />;
    } else if (part === 'DESIGN') {
      return <StyleImg src={DesignImage} alt="DESIGN" />;
    } else if (part === 'SPRING') {
      return <StyleImg src={SpringImage} alt="SPRING" />;
    } else if (part === 'NODE') {
      return <StyleImg src={NodeImage} alt="NODE" />;
    } else if (part === 'WEB') {
      return <StyleImg src={WebImage} alt="WEB" />;
    } else if (part === 'IOS') {
      return <StyleImg src={iOSImage} alt="IOS" />;
    } else if (part === 'ANDROID') {
      return <StyleImg src={AndroidImage} alt="ANDROID" />;
    } else if (part === 'STUDY') {
      return <StyleImg src={StudyImage} alt="STUDY" />;
    }

    return null;
  };

  return (
    <NewTILContainer>
      <Title>Today I Learned</Title>

      <ListContainer>
        <ImgTitleContainer>
          {renderPartImage(tilDetailData.part)}
          <TitleContainer>
            <MainTitle
              defaultValue={tilDetailData.title}
              onChange={(e) => handleTitleInput(e)}
            />
            <SubTitle
              defaultValue={tilDetailData.subTitle}
              onChange={(e) => handleSubtitleInput(e)}
            />
          </TitleContainer>
        </ImgTitleContainer>
      </ListContainer>

      <TextComponent
        defaultValue={tilDetailData.content}
        onChange={(e) => handleContentInput(e)}
      />

      <AddFileContainer>
        <Notion>노션연동</Notion> <img src={NotionImg} />
      </AddFileContainer>

      <AddFileContainer>
        <Notion>첨부파일 </Notion> <img src={FileImg} />
      </AddFileContainer>

      <ButtonCon>
        <ListButton onClick={modifyTILData}>완료</ListButton>
      </ButtonCon>
    </NewTILContainer>
  );
};

export default ModifyTIL;
