// BoardTable: 게시판 테이블 컴포넌트
import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ROWS_DATA } from 'Data';
import SearchBar from './BoardSearch';
import BoardWriteButton from './BoardWriteButton';
import PinnedTable from 'components/Management/NoticePin/PinnedTable';

import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LeftArrowIcon from 'assets/main/LeftArrow.svg';
import RightArrowIcon from 'assets/main/RightArrow.svg';

// 게시글 테이블 컴포넌트 스타일링
const StyledTable = styled.table`
  width: 100%;

  /* 테이블의 셀 사이에 있는 경계선 하나로 합침 */
  border-collapse: collapse;

  text-align: center;
`;

// 게시글 테이블 헤더 스타일링
const StyledTableHeader = styled.thead`
  /* 헤더 하단 경계선 표시 X */
  border-bottom: none;

  padding: 0;
  font-weight: 600;
`;

// 게시글 테이블 행 스타일링
const StyledTableRow = styled.tr`
  border-bottom: 1px solid #d8d8ff;

  /* 마지막 행 선택하는 CSS 선택자 - 마지막 행의 경계선 제거 */
  &:last-child {
    border: none;
  }

  /* 마지막 요소 선택하는 CSS 선택자 - 같은 유형의 마지막 요소의 상단 경계선 제거 */
  &:last-of-type {
    border-top: none;
  }
`;

// 게시글 테이블 셀(글 제목) 스타일링
const StyledTitleColumn = styled.td`
  width: 20rem;
  padding: 10px 40px 10px 4px;

  /* 텍스트가 너무 길면 ...으로 표시 */
  text-overflow: ellipsis;

  /* 셀의 내용이 셀의 너비나 높이를 초과할 경우, 초과하는 부분을 숨기도록 설정 */
  overflow: hidden;

  /* 셀의 내용을 한 줄로 표시 -> 텍스트가 너무 길면 줄바꿈 X */
  white-space: nowrap;
`;

// 게시글 테이블 셀 스타일링
const StyledTableCell = styled.td`
  max-width: 10rem;
  padding: 10px 40px;

  /* 텍스트가 너무 길면 ...으로 표시 */
  text-overflow: ellipsis;

  /* 셀의 내용이 셀의 너비나 높이를 초과할 경우, 초과하는 부분을 숨기도록 설정 */
  overflow: hidden;

  /* 셀의 내용을 한 줄로 표시 -> 텍스트가 너무 길면 줄바꿈 X */
  white-space: nowrap;
`;

// 게시글 테이블 펼치기/접기 버튼 스타일링
const StyledOpenToggle = styled.td`
  padding: 10px 10px;
`;

// 게시글 테이블 펼치기/접기 셀 스타일링
const StyledCollapseCell = styled.td`
  border: none;
  padding: 0;
`;

// 게시글 테이블 펼치기/접기 내용 스타일링
const StyledCollapseContent = styled.div`
  border: none;
  margin: 0;

  /* 펼치기/접기 애니메이션 */
  transition: max-height 0.3s ease;

  overflow: hidden;

  /* 펼치기/접기 상태에 따라 최대 높이 설정(0px ~ 500px) */
  max-height: ${(props) => (props.open ? '500px' : '0')};
`;

// 게시글 작성 버튼 레이아웃 스타일링
const BoardWriteButtonLayout = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 24px;
`;

// 페이지 버튼 스타일링
const PageButton = styled.div`
  display: inline-block;
  margin: 0 5px;
  padding: 4px 8px;
  border: none;
  border-radius: 6px;

  /* 페이지 버튼의 배경 색상: 활성화(클릭) 시 색상 변경 */
  background-color: ${(props) => (props.$isActive ? '#FFFFFF' : '')};

  /* 페이지 버튼의 텍스트 스타일링 */
  color: ${(props) => (props.$isActive ? '#000C76' : '#4B4B4B')};

  /* 폰트 스타일링 */
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;

  /* 커서 모양 변경 */
  cursor: pointer;

  /* 애니메이션 효과 */
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.2s ease-in-out;

  /* 페이지 버튼 호버 시 효과 */
  &:hover {
    background-color: #ebebeb;
    color: #000c76;
  }

  /* 페이지 버튼 활성화(클릭) 시 효과 */
  &:active {
    transform: scale(0.9);
  }
`;

// 페이지 버튼 레이아웃 스타일링
const PageButtonLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
`;

// 페이지 이동 버튼 스타일링
const PageArrowButton = styled.div`
  /* 페이지 이동 버튼의 아이콘 스타일링 */
  display: inline-block;

  /* 페이지 이동 버튼의 아이콘 이미지 */
  background-image: url(${(props) => props.$icon});

  /* 페이지 이동 버튼 활성화(클릭)시 배경/폰트 색상/커서 모양/투명도 변경 */
  background-color: ${(props) => (props.$isActive ? '#FFFFFF' : '#EBEBEB')};
  color: ${(props) => (props.$isActive ? '#000C76' : '#4B4B4B')};
  cursor: ${(props) => (props.$isActive ? 'pointer' : 'default')};
  opacity: ${(props) => (props.$isActive ? '1' : '0.5')};

  /* 페이지 이동 버튼의 크기 */
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.2s ease-in-out;
`;

// 검색창 레이아웃 스타일링
const BoardSearchLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 게시글 테이블 체크박스 셀 스타일링
const StyledTableCheckBoxCell = styled.td`
  max-width: 10rem;
  padding-left: 10px;
  padding-right: 8px;

  /* 텍스트가 너무 길면 ...으로 표시 */
  text-overflow: ellipsis;

  /* 셀의 내용이 셀의 너비나 높이를 초과할 경우, 초과하는 부분을 숨기도록 설정 */
  overflow: hidden;

  /* 셀의 내용을 한 줄로 표시 -> 텍스트가 너무 길면 줄바꿈 X */
  white-space: nowrap;
`;

// 한 페이지에 표시할 게시글 수
const ROWS_PER_PAGE = 10;

// 게시글 데이터 (나중에 서버 연동 시 삭제)
const rows = ROWS_DATA;

// 게시글 테이블의 행 컴포넌트
const Row = ({ row }) => {
  // 게시글 펼치기/접기 상태
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <StyledTableRow>
        <StyledTableCheckBoxCell />
        <StyledTitleColumn style={{ textAlign: 'left' }}>
          {row.title}
        </StyledTitleColumn>
        <StyledTableCell>{row.author}</StyledTableCell>
        <StyledTableCell>{row.date}</StyledTableCell>
        <StyledTableCell>{row.views}</StyledTableCell>
        <StyledOpenToggle>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledOpenToggle>
      </StyledTableRow>
      <StyledTableRow>
        <StyledCollapseCell colSpan={5}>
          <StyledCollapseContent open={open}>
            {row.content}
          </StyledCollapseContent>
        </StyledCollapseCell>
      </StyledTableRow>
    </Fragment>
  );
};

// 게시글 테이블의 행 컴포넌트의 props 검사
Row.propTypes = {
  row: PropTypes.exact({
    ispinned: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

// 게시글 테이블 컴포넌트
const BoardTable = () => {
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 검색어
  const [searchTerm, setSearchTerm] = useState('');

  // 검색어 변경 핸들러
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // 검색어가 포함된 게시글만 필터링
  const filteredRows = rows.filter(
    (row) => row.title.includes(searchTerm) || row.content.includes(searchTerm),
  );

  // 현재 페이지에 표시할 게시글만 추출
  const currentRows = filteredRows.slice(
    // 현재 페이지의 첫 번째 게시글 인덱스
    (currentPage - 1) * ROWS_PER_PAGE,
    // 현재 페이지의 마지막 게시글 인덱스
    currentPage * ROWS_PER_PAGE,
  );

  // 페이지 버튼 렌더링
  const renderPageButtons = () => {
    // 전체 페이지 수
    const numberOfPages = Math.ceil(rows.length / ROWS_PER_PAGE);
    const buttons = [];

    // 이전 페이지 버튼
    buttons.push(
      <PageArrowButton
        key="prev"
        onClick={() => setCurrentPage(currentPage - 1)}
        $isActive={currentPage > 1}
        $icon={LeftArrowIcon}
      />,
    );

    // 페이지 버튼
    for (let i = 1; i <= numberOfPages; i++) {
      buttons.push(
        <PageButton
          key={i}
          onClick={() => setCurrentPage(i)}
          $isActive={i === currentPage}
        >
          {i}
        </PageButton>,
      );
    }

    // 다음 페이지 버튼
    buttons.push(
      <PageArrowButton
        key="next"
        onClick={() => setCurrentPage(currentPage + 1)}
        $isActive={currentPage < numberOfPages}
        $icon={RightArrowIcon}
      />,
    );

    return buttons;
  };

  return (
    <>
      <StyledTable>
        <StyledTableHeader>
          <StyledTableRow style={{ borderBottom: 0, paddingBottom: 0 }}>
            <StyledTableCheckBoxCell />
            <StyledTitleColumn>제목</StyledTitleColumn>
            <StyledTableCell>작성자</StyledTableCell>
            <StyledTableCell>작성일</StyledTableCell>
            <StyledTableCell>조회수</StyledTableCell>
            <StyledOpenToggle />
          </StyledTableRow>
        </StyledTableHeader>
        <tbody>
          {
            // 공지사항 고정 게시글
            rows.map((row) =>
              row.ispinned ? <PinnedTable key={row.title} row={row} /> : null,
            )
          }
          {
            // 공지사항 전체 게시글
            filteredRows.length > 0 ? (
              currentRows.map((row) => <Row key={row.title} row={row} />)
            ) : (
              // 검색 결과가 없을 경우
              <StyledTableRow>
                <StyledTableCell colSpan={5}>
                  검색 결과가 없습니다.
                </StyledTableCell>
              </StyledTableRow>
            )
          }
        </tbody>
      </StyledTable>
      <BoardWriteButtonLayout>
        <BoardWriteButton />
      </BoardWriteButtonLayout>
      <PageButtonLayout>{renderPageButtons()}</PageButtonLayout>
      <BoardSearchLayout>
        <SearchBar onSearch={handleSearch} />
      </BoardSearchLayout>
    </>
  );
};

export default BoardTable;
