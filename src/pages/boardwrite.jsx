import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Schoola from '../assets/schoola.svg';
import Schoolb from '../assets/schoolb.svg';
import Campa from '../assets/campa.svg';
import Campb from '../assets/campb.svg';
import Uniona from '../assets/uniona.svg';
import Unionb from '../assets/unionb.svg';
import Suggestiona from '../assets/suggestiona.svg';
import Suggestionb from '../assets/suggestionb.svg';
import Imgfile from '../assets/imgfile.svg';
import File from '../assets/file.svg';

import './boardwrite.style.css';

const BoardWrite = () => {
  
  //학교 지부 연합 건의함 관리
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

  //게시판 종류 관리
  const [selectedBoard, setSelectedBoard] = useState(null);

  const handleBoardClick = (index) => {
    setSelectedBoard(index);
  };

  const [fileDetails, setFileDetails] = useState({
    fileArray: [], // 여러 파일을 저장하기 위한 배열 추가
  });
  
  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
  
    // 파일 배열에 파일 정보 추가
    const newFiles = Array.from(selectedFiles).map(file => ({
      name: file.name,
      type: file.type,
      icon: (
        <img
          src={file.type === 'image/jpeg' ? Imgfile : File}
          alt="File Icon"
        />
      ),
    }));
  
    setFileDetails((prevDetails) => ({
      fileArray: [...prevDetails.fileArray, ...newFiles], // 기존 파일과 새로운 파일 합치기
    }));

  };
  
  

  return (
    <div className="centered-container">
      <div className="write-title">글작성</div>

      <div className="container-type">
        <div className='type'>종류</div>

        <div>
          <Link to="#" className='type' onClick={() => handleClick('schoolButton')}>
            {buttonStates.schoolButton ? (
              <img src={Schoolb} alt="Inactive Image" />
            ) : (
              <img src={Schoola} alt="학교" />
            )}
          </Link>

          <Link to="#" className='type' onClick={() => handleClick('campButton')}>
            {buttonStates.campButton ? (
              <img src={Campb} alt="Inactive Image" />
            ) : (
              <img src={Campa} alt="지부" />
            )}
          </Link>

          <Link to="#" className='type' onClick={() => handleClick('unionButton')}>
            {buttonStates.unionButton ? (
              <img src={Unionb} alt="Inactive Image" />
            ) : (
              <img src={Uniona} alt="연합" />
            )}
          </Link>

          <Link to="#" className='type' onClick={() => handleClick('suggestionButton')}>
            {buttonStates.suggestionButton ? (
              <img src={Suggestionb} alt="Inactive Image" />
            ) : (
              <img src={Suggestiona} alt="공지" />
            )}
          </Link>
        </div>
      </div>

      <div className="container-board">
        <div className='type'>게시판</div>
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`board ${selectedBoard === index ? 'selected' : ''}`}
            onClick={() => handleBoardClick(index)}
          >
            {index === 0 && '공지 게시판'}
            {index === 1 && '자유 게시판'}
            {index === 2 && '교내 프로젝트 게시판'}
            {index === 3 && '워크북 게시판'}
            {index === 4 && '이전 기수 게시판'}
          </div>
        ))}
      </div>

      <div className="button-container">
        <button className="button">등록</button>
      </div>

      <input className='title' placeholder="제목" />

      <div className='file-container'>
        <div className='file'>첨부파일</div>
        <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(e) => handleFileChange(e)} multiple />
        <label htmlFor="fileInput" className="circle-button">+</label>
      </div>

      <div className='file-name-comtainer'>
        {fileDetails.fileArray.map((file, index) => (
          <div key={index} className="file-details">
            {file.icon} {file.name}
          </div>
        ))}
      </div>
   

      <textarea className='text' placeholder="내용" />
      <div className="button-container">
        <button className="button">취소</button>
        <button className="button">등록</button>
      </div>
    </div>
  );
};

export default BoardWrite;
