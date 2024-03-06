import React, { useState, useEffect } from 'react';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

//import BoardFile from 'components/BoardWrite/BoardFile';
import BoardLabel from 'components/BoardWrite/BoardLabel';
import BoardTitle from 'components/BoardWrite/BoardTitle';
import BoardText from 'components/BoardWrite/BoardText';
import BoardButton from 'components/BoardWrite/BoardButton';
import { useLocation, useNavigate } from 'react-router-dom';

const BoardWriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10vh auto;
  width: 70%;
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
  margin-left: auto;
`;

const BoardWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedHost, setSelectedHost] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  //const [boardFiles, setBoardFiles] = useState([]);

  const boardFiles = [];

  const [buttonStates, setButtonStates] = useState({
    campusButton: false,
    branchButton: false,
    centerButton: false,
    suggestionButton: false,
  });

  const navigate = useNavigate();
  const location = useLocation();

  // 현재 페이지의 호스트와 게시판 정보 가져오기
  useEffect(() => {
    const currentPageParts = location.pathname.split('/');
    const currentHost = currentPageParts[2].toUpperCase();
    const currentBoard = currentPageParts[3].toUpperCase();

    setSelectedHost(currentHost);
    setSelectedBoard(currentBoard);

    // 각 버튼의 상태 설정
    setButtonStates((prev) => ({
      ...prev,
      campusButton: currentHost === 'CAMPUS',
      branchButton: currentHost === 'BRANCH',
      centerButton: currentHost === 'CENTER',
      suggestionButton: currentHost === 'SUGGESTION',
    }));
  }, [location.pathname]);

  const onSaveFiles = (e) => {
    const uploadFiles = Array.prototype.slice.call(e.target.files); // 파일선택창에서 선택한 파일들

    uploadFiles.forEach((uploadFile) => {
      boardFiles.push(uploadFile);
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    // 파일을 formData에 추가합니다.
    boardFiles.forEach((file) => {
      formData.append('boardFiles', file);
    });

    formData.append(
      'request',
      JSON.stringify({
        host: selectedHost,
        board: selectedBoard,
        title: title,
        content: content,
      }),
    );

    try {
      const res = await axiosInstance.post('/boards', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Server response:', res.data);

      const url = `/board/${selectedHost}/${selectedBoard}`;
      navigate(url);
    } catch (error) {
      console.error('Error creating post: ', error);
    }
  };

  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <BoardWriteContainer>
        <LeftContainer>
          <Title>게시글 작성</Title>
          <BoardLabel
            selectedHost={selectedHost}
            setSelectedHost={setSelectedHost}
            selectedBoard={selectedBoard}
            setSelectedBoard={setSelectedBoard}
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
        </LeftContainer>

        <input
          type="file"
          multiple
          /* 파일 여러개 선택 가능하게 하기 */ onChange={onSaveFiles}
        />

        <BoardTitle onChange={(e) => setTitle(e.target.value)} />
        <BoardText onChange={(e) => setContent(e.target.value)} />

        <RightContainer>
          <BoardButton handleSubmit={handleSubmit} />
        </RightContainer>
      </BoardWriteContainer>
    </div>
  );
};

export default BoardWrite;
