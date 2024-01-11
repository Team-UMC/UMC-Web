import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SchoolUnchecked from '../assets/schoolUnchecked.svg';
import SchoolChecked from '../assets/schoolChecked.svg';
import CampUnchecked from '../assets/campUnchecked.svg';
import CampChecked from '../assets/campChecked.svg';
import UnionUnchecked from '../assets/unionUnchecked.svg';
import UnionChecked from '../assets/unionChecked.svg';
import SuggestionUnchecked from '../assets/suggestionUnchecked.svg';
import SuggestionChecked from '../assets/suggestionChecked.svg';
import Imgfile from '../assets/imgfile.svg';
import FileIcon from '../assets/file.svg';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 400px 0px 400px;
`;

const WriteTitle = styled.div`
  font-size: 25px;
  color: #000C76;
  font-weight: bold;
  margin: 30px 0px;
`;

const ContainerType = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-left: 15px;
`;

const TypeLabel = styled.div`
  margin-right: 10px;
  font-weight: bold;
`;

const TypeLink = styled(Link)`
  margin-right: 10px;
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 80px;
    height: 50px;
  }
`;

const ContainerBoard = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const BoardLabel = styled.div`
  margin-right: 10px;
  font-weight: bold;
`;

const Board = styled.div`
  border-radius: 18px;
  background-color: #fff;
  color: ${({ selected }) => (selected ? '#000C76' : '#D1D1D1')};
  border: 1px solid #C0C0C0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 23px;
  padding: 8px;
  cursor: pointer;

  &.selected {
    background-color: #fff;
    color: #000C76;
    border-color: #000C76;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 10px;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 40px;
  background-color: #000c76;
  color: #fff;
  font-weight: bold;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
  cursor: pointer;
`;

const TitleInput = styled.input`
  color: black;
  border: none;
  border-bottom: 1px solid #C0C0C0;
  outline: none;
  width: 900px;
  height: 30px;
  font-size: 20px;
  resize: none;

  &::placeholder {
    color: #C0C0C0;
    font-size: 20px;
    font-weight: bold;
  }
`;

const FileContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

const FileLabel = styled.div`
  color: #C0C0C0;
  font-size: 17px;
`;

const FileInput = styled.input`
  display: none;
`;

const CircleButton = styled.label`
  display: inline-block;
  background-color: #C0C0C0;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 15px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin-left: 10px;
`;

const FileNameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  margin-right: 20px;

  img {
    margin-bottom: 10px;
    margin-left: 10px;
  }
`;

const Textarea = styled.textarea`
  color: black;
  padding-top: 10px;
  border: none;
  border-top: 1px solid #C0C0C0;
  outline: none;
  width: 900px;
  height: 300px;
  font-size: 15px;
  resize: none;

  &::placeholder {
    color: #C0C0C0;
    font-size: 15px;
  }
`;

const BoardWrite = () => {
  const [buttonStates, setButtonStates] = useState({
    schoolButton: false,
    campButton: false,
    unionButton: false,
    suggestionButton: false,
  });

  const handleClick = (buttonName) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [buttonName]: !prevStates[buttonName],
    }));
  };

  const [selectedBoard, setSelectedBoard] = useState(null);

  const handleBoardClick = (index) => {
    setSelectedBoard(index);
  };

  const [fileDetails, setFileDetails] = useState({
    fileArray: [],
  });

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;

    const newFiles = Array.from(selectedFiles).map((file) => ({
      name: file.name,
      type: file.type,
      icon: <img src={file.type === 'image/jpeg' ? Imgfile : FileIcon} alt="File Icon" />,
    }));

    setFileDetails((prevDetails) => ({
      fileArray: [...prevDetails.fileArray, ...newFiles],
    }));
  };

  return (
    <CenteredContainer>
      <WriteTitle>글작성</WriteTitle>

      <ContainerType>
        <TypeLabel>종류</TypeLabel>

        <div>
          <TypeLink to="#" onClick={() => handleClick('schoolButton')}>
            {buttonStates.schoolButton ? <img src={SchoolChecked} alt="Inactive Image" /> : <img src={SchoolUnchecked} alt="학교" />}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('campButton')}>
            {buttonStates.campButton ? <img src={CampChecked} alt="Inactive Image" /> : <img src={CampUnchecked} alt="지부" />}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('unionButton')}>
            {buttonStates.unionButton ? <img src={UnionChecked} alt="Inactive Image" /> : <img src={UnionUnchecked} alt="연합" />}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('suggestionButton')}>
            {buttonStates.suggestionButton ? <img src={SuggestionChecked} alt="Inactive Image" /> : <img src={SuggestionUnchecked} alt="공지" />}
          </TypeLink>
        </div>
      </ContainerType>

      <ContainerBoard>
        <BoardLabel>게시판</BoardLabel>
        {[0, 1, 2, 3, 4].map((index) => (
          <Board
            key={index}
            selected={selectedBoard === index}
            onClick={() => handleBoardClick(index)}
          >
            {index === 0 && '공지 게시판'}
            {index === 1 && '자유 게시판'}
            {index === 2 && '교내 프로젝트 게시판'}
            {index === 3 && '워크북 게시판'}
            {index === 4 && '이전 기수 게시판'}
          </Board>
        ))}
      </ContainerBoard>

      <ButtonContainer>
        <Button>등록</Button>
      </ButtonContainer>

      <TitleInput placeholder="제목" />

      <FileContainer>
        <FileLabel>첨부파일</FileLabel>
        <FileInput type="file" id="fileInput" style={{ display: 'none' }} onChange={(e) => handleFileChange(e)} multiple />
        <CircleButton htmlFor="fileInput">+</CircleButton>
      </FileContainer>

      <FileNameContainer>
        {fileDetails.fileArray.map((file, index) => (
          <FileDetails key={index}>
            {file.icon} {file.name}
          </FileDetails>
        ))}
      </FileNameContainer>

      <Textarea placeholder="내용" />

      <ButtonContainer>
        <Button>취소</Button>
        <Button>등록</Button>
      </ButtonContainer>
    </CenteredContainer>
  );
};

export default BoardWrite;
