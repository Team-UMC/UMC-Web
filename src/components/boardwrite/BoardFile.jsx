import React, { useState } from 'react';
import styled from 'styled-components';
import Add from '../../assets/add.svg';

const FileContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5vh;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid #232A6D;
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
  flex-direction:row;
`;

const FileName = styled.p`
  align-items: center;
  color: #000000;
  display: inline-block;
  padding: 8px 16px;
  margin-top:0.5em;
  border-radius: 12px;
  background: #E3E3E3;
  margin-bottom: 8px;  
  margin-right: 8px;
  width: 35vh;
`;

const DeleteButton = styled.span`
  color: #9D9D9D;
  cursor: pointer;
  margin-left: 100px;
`;

const FileInput = styled.input`
  display: none;
`;

const BoardFile = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDeleteFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  return (
    <FileContainer>
      
      <FileText>
        첨부파일
        <AddIcon src={Add} alt="Add" onClick={() => document.getElementById('fileInput').click()} />
      </FileText>
      <FileInput type="file" id="fileInput" onChange={handleFileChange} multiple />
      
      <FileNameContainer>
      {selectedFiles.map((file, index) => (
        <FileName key={index}>
          {file.name}
          <DeleteButton onClick={() => handleDeleteFile(index)}>X</DeleteButton>
        </FileName>
      ))}
      </FileNameContainer>
    </FileContainer>
  );
};

export default BoardFile;
