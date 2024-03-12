// BoardTable: 게시판 테이블 컴포넌트
import React, { useEffect, useState } from 'react';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import SearchBar from './BoardSearch';
import BoardWriteButton from './BoardWriteButton';
import Row from './Row';
import { useLocation } from 'react-router-dom';

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

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

const PageButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  padding-top: 30px;
`;

const PageButton = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? 'white' : 'transparent')};
  border-radius: 10px;
  color: ${({ selected }) => (selected ? '#000C76' : 'black')};
  font-weight: ${({ selected }) => (selected ? 'bold' : '')};
`;

const BoardList = () => {
  const location = useLocation();

  // /로 구분하여 배열로 저장하고 host 값과 board 값 변수에 저장하기
  const urlParts = location.pathname.split('/');

  const [host, setHost] = useState(urlParts[2].toUpperCase());
  const [board, setBoard] = useState(urlParts[3].toUpperCase());

  useEffect(() => {
    setHost(urlParts[2].toUpperCase());
    setBoard(urlParts[3].toUpperCase());
  }, [location]);

  const [page, setPage] = useState(0);

  const [boardData, setBoardData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [pinnedData, setPinnedData] = useState([]);

  useEffect(() => {
    const getBoardData = async (host, board, page) => {
      try {
        const res = await axiosInstance.get(`/boards`, {
          params: {
            host: host,
            board: board,
            page: page,
          },
        });
        setBoardData(res.data.result.boardPageElements);
        setTotalPages(res.data.result.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    getBoardData(host, board, page);
  }, [host, board, page]);

  useEffect(() => {
    const getPinnedData = async () => {
      try {
        const res = await axiosInstance.get(`/boards/pinned`);

        setPinnedData(res.data.result.pinnedNotices);
      } catch (error) {
        console.log(error);
      }
    };
    getPinnedData();
  }, []);

  // 검색 기능
  const [keyword, setKeyword] = useState('');

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const searchBoard = async () => {
    try {
      const res = await axiosInstance.get(`/boards/search`, {
        params: {
          keyword: keyword,
          page: page,
        },
      });
      setBoardData(res.data.result.boardSearchPageElements);
      setTotalPages(res.data.result.totalPages);
    } catch (error) {
      console.error();
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage - 1);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <TotalWrapper>
      <Container>
        <BoardCell>제목</BoardCell>
        <BoardCell>작성자</BoardCell>
        <BoardCell>작성일</BoardCell>
        <BoardCell>조회수</BoardCell>
      </Container>

      <Row
        boardData={boardData}
        host={host}
        board={board}
        pinnedData={pinnedData}
      />

      <BoardWriteButtonLayout>
        <BoardWriteButton host={host} board={board} />
      </BoardWriteButtonLayout>

      <PageButtonWrapper>
        {pageNumbers.map((pageNumber) => (
          <PageButton
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            selected={pageNumber === page + 1}
            disabled={pageNumber === page}
          >
            {pageNumber}
          </PageButton>
        ))}
      </PageButtonWrapper>

      <BoardSearchLayout>
        <SearchBar
          handleKeyword={handleKeyword}
          searchBoard={searchBoard}
          keyword={keyword}
          page={page}
        />
      </BoardSearchLayout>
    </TotalWrapper>
  );
};

export default BoardList;
