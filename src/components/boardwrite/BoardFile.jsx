import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Add from '../../assets/add.svg';

const FileContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5vh;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid #232a6d;
`;

const FileText = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const AddIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  cursor: pointer;
`;

const FileNameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FileName = styled.p`
  align-items: center;
  color: #000000;
  display: inline-block;
  padding: 8px 16px;
  margin-top: 0.5em;
  border-radius: 12px;
  background: #e3e3e3;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 35vh;
`;

const DeleteButton = styled.span`
  color: #9d9d9d;
  cursor: pointer;
  margin-left: 100px;
`;

const FileInput = styled.input`
  display: none;
`;

const BoardFile = ({ file, setFile }) => {
  const handleFileChange = (event) => {
    const newFiles = [...file]; // 기존 파일 배열을 복사합니다.
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      newFiles.push(files[i]); // 새 파일을 기존 파일 배열에 추가합니다.
    }
    setFile(newFiles);
  };

  const handleDeleteFile = (index) => {
    const newFiles = [...file];
    newFiles.splice(index, 1);
    setFile(newFiles);
  };

  return (
    <FileContainer>
      <FileText>
        첨부파일
        <AddIcon
          src={Add}
          alt="Add"
          onClick={() => document.getElementById('fileInput').click()}
        />
      </FileText>
      <FileInput
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        multiple
      />
      <FileNameContainer>
        {file.map((files, index) => (
          <FileName key={index}>
            {files.name}
            <DeleteButton onClick={() => handleDeleteFile(index)}>
              X
            </DeleteButton>
          </FileName>
        ))}
      </FileNameContainer>
    </FileContainer>
  );
};

BoardFile.propTypes = {
  file: PropTypes.array,
  setFile: PropTypes.func.isRequired,
};

export default BoardFile;
