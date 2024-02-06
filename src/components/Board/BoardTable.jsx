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

// 게시글 테이블 페이지네이션 스타일링
const BoardPaginateStyle = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 58px;
  gap: 0 24px;

  /* 폰트 스타일링 */
  font-size: 12px;
  font-family: 'Pretendard';
  word-wrap: break-word;
  cursor: pointer;
`;

// 게시글 테이블 페이지네이션 페이지 번호 스타일링
const PageNumber = styled.div`
  /* 활성화(클릭) 시, 스타일링 변화 */
  color: ${(props) => (props.isActive ? '#000C76' : '#4B4B4B')};
  font-weight: ${(props) => (props.isActive ? '600' : '400')};
  padding: ${(props) => (props.isActive ? '4px 8px' : '0')};
  background: ${(props) => (props.isActive ? 'white' : 'none')};
  border-radius: ${(props) => (props.isActive ? '6px' : '0')};

  /* 애니메이션 효과 */
  transition: all 0.3s ease-in-out;

  /* 호버 시, 크기 애니메이션 변화 */
  &:hover {
    transform: ${(props) => (props.isActive ? 'scale(1.1)' : 'none')};
  }
`;

// 게시글 테이블 페이지네이션 화살표 스타일링
const ArrowButton = styled.img`
  /* 이전 및 다음 페이지 없을 경우, 화살표 숨김 애니메이션 효과 */
  display: ${(props) => (props.isHidden ? 'none' : 'block')};
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
  const [currentPage, setCurrentPage] = useState(0);
  // 검색어
  const [searchTerm, setSearchTerm] = useState('');

  // 페이지네이션 클릭 이벤트 핸들러
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 검색어 변경 핸들러
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(0);
  };

  // 검색어가 포함된 게시글만 필터링
  const filteredRows = rows.filter(
    (row) => row.title.includes(searchTerm) || row.content.includes(searchTerm),
  );

  // 페이지네이션 상수에 따른 갤러리 아이템 데이터 필터링
  const offset = currentPage * ROWS_PER_PAGE;

  // 페이지 버튼 렌더링
  const pageCount = Math.ceil(filteredRows.length / ROWS_PER_PAGE);
  const pages = new Array(pageCount).fill(null).map((_, i) => i);

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
            // 페이지네이션 상수에 따른 갤러리 아이템 데이터 출력
            filteredRows.slice(offset, offset + ROWS_PER_PAGE).map((row) => (
              <Row key={row.title} row={row} />
            ))
          }
        </tbody>
      </StyledTable>
      <BoardWriteButtonLayout>
        <BoardWriteButton />
      </BoardWriteButtonLayout>
      <BoardPaginateStyle>
        <ArrowButton
          src={LeftArrowIcon}
          alt="previous"
          isHidden={currentPage === 0}
          onClick={() => handlePageClick(currentPage - 1)}
        />
        {
          // 페이지네이션 상수에 따른 페이지 번호 출력
          pages.map((pageNumber) => (
            <PageNumber
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              isActive={pageNumber === currentPage}
            >
              {pageNumber + 1}
            </PageNumber>
          ))
        }
        <ArrowButton
          src={RightArrowIcon}
          alt="next"
          isHidden={currentPage === pageCount - 1}
          onClick={() => handlePageClick(currentPage + 1)}
        />
      </BoardPaginateStyle>
      <BoardSearchLayout>
        <SearchBar onSearch={handleSearch} />
      </BoardSearchLayout>
    </>
  );
};

export default BoardTable;
