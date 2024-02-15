// BoardTable: 게시판 테이블 컴포넌트
import React, { useState } from 'react';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import SearchBar from './BoardSearch';
import BoardWriteButton from './BoardWriteButton';
import Row from './Row';

// 하나의 게시글을 감싸는 div
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

// 게시글 정보
const BoardCell = styled.div`
  display: flex;
  justify-content: center;

  font-weight: bold;

  width: 15%;

  padding: 10px 40px;

  /* 텍스트가 너무 길면 ...으로 표시 */
  text-overflow: ellipsis;

  /* 셀의 내용이 셀의 너비나 높이를 초과할 경우, 초과하는 부분을 숨기도록 설정 */
  overflow: hidden;

  /* 셀의 내용을 한 줄로 표시 -> 텍스트가 너무 길면 줄바꿈 X */
  white-space: nowrap;

  &:first-child {
    width: 55%;
  }
`;

// 게시글 작성 버튼 레이아웃 스타일링
const BoardWriteButtonLayout = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 24px;
`;

// 검색창 레이아웃 스타일링
const BoardSearchLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoardList = () => {
  // 현재 주소 받아오기 [ex) localhost:3000/board/campus/notice]
  const currentURL = window.location.href;

  // /로 구분하여 배열로 저장하고 host 값과 board 값 변수에 저장하기
  const urlParts = currentURL.split('/');

  const host = urlParts[4].toUpperCase();
  const board = urlParts[5].toUpperCase();

  const [boardData, setBoardData] = useState([]);

  const getBoardData = async () => {
    try {
      const res = await axiosInstance.get(
        `/boards?host=${host}&board=${board}&page=0`,
      );
      setBoardData(res.data.result.boardPageElements);

      console.log(boardData);
    } catch (error) {
      console.error();
    }
  };

  return (
    <div>
      <Container>
        <BoardCell>제목</BoardCell>
        <BoardCell>작성자</BoardCell>
        <BoardCell>작성일</BoardCell>
        <BoardCell>조회수</BoardCell>
      </Container>

      <Row
        getBoardData={getBoardData}
        boardData={boardData}
        host={host}
        board={board}
      />

      <BoardWriteButtonLayout>
        <BoardWriteButton />
      </BoardWriteButtonLayout>

      <BoardSearchLayout>
        <SearchBar />
      </BoardSearchLayout>
    </div>
  );
};

export default BoardList;
