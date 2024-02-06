import React, { useState } from 'react';
//import axios from 'axios';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import BoardFile from 'components/BoardWrite/BoardFile';
import BoardLabel from 'components/BoardWrite/BoardLabel';
import BoardTitle from 'components/BoardWrite/BoardTitle';
import BoardText from 'components/BoardWrite/BoardText';
import BoardButton from 'components/BoardWrite/BoardButton';

const BoardWriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15vh 50vh;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 2vh;
`;

const Title = styled.div`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  margin-top: 50px;
  margin-bottom: 32px;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 126vh;
  width: 100%;
`;

const BoardWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedHost, setSelectedHost] = useState('SCHOOL');
  const [selectedBoard, setSelectedBoard] = useState('NOTICE');

  const handlePostSubmit = async () => {
    console.log('Before POST request');

    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Selected Host:', selectedHost);
    console.log('Selected Board:', selectedBoard);

    try {
      const res = await axiosInstance.post('api 주소', {
        title: title,
        content: content,
        host: selectedHost,
        board: selectedBoard,
      });

      console.log('Post created successfully: ', res.data);
    } catch (error) {
      console.error('Error creating post: ', error);
    }

    console.log('After POST request');
  };

  return (
    <BoardWriteContainer>
      <LeftContainer>
        <Title>게시글 작성</Title>
        <BoardLabel
          onHostChange={(host) => setSelectedHost(host)}
          onBoardChange={(board) => setSelectedBoard(board)}
        />
      </LeftContainer>

      <BoardFile />
      <BoardTitle onChange={(e) => setTitle(e.target.value)} />
      <BoardText onChange={(e) => setContent(e.target.value)} />

      <RightContainer>
        <BoardButton onClick={handlePostSubmit} />
      </RightContainer>
    </BoardWriteContainer>
  );
};

export default BoardWrite;
