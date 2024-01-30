// 운영자 페이지의 공지사항 테이블 컴포넌트
import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchBar from 'components/NewBoard/BoardSearch';
import AdminCompletionButton from 'components/Admin/AdminCompletionButton';
import PinnedTable from 'components/Admin/PinnedTable';
import { ROWS_DATA } from 'Data';

import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LeftArrowIcon from 'assets/main/LeftArrow.svg';
import RightArrowIcon from 'assets/main/RightArrow.svg';
import Checked from 'assets/admin/checked.svg';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

const StyledTableHeader = styled.thead`
  border-bottom: none;
  padding: 0;
  font-weight: 600;
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #d8d8ff;
  &:last-child {
    border: none;
  }
  &:last-of-type {
    border-top: none;
  }
`;

const StyledTitleColumn = styled.td`
  width: 20rem;
  padding: 10px 40px 10px 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledTableCell = styled.td`
  max-width: 10rem;
  padding: 10px 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledOpenToggle = styled.td`
  padding: 10px 10px;
`;

const StyledCollapseCell = styled.td`
  border: none;
  padding: 0;
`;

const StyledCollapseContent = styled.div`
  border: none;
  margin: 0;
  transition: max-height 0.3s ease;
  overflow: hidden;
  max-height: ${(props) => (props.open ? '500px' : '0')};
`;

const AdminCompletionButtonLayout = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 24px;
  padding-bottom: 80px;
`;

const PageButton = styled.div`
  display: inline-block;
  margin: 0 5px;
  padding: 4px 8px;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => (props.$isActive ? '#FFFFFF' : '')};
  color: ${(props) => (props.$isActive ? '#000C76' : '#4B4B4B')};
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
  cursor: pointer;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    background-color: #ebebeb;
    color: #000c76;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const PageButtonLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageArrowButton = styled.div`
  display: inline-block;
  background-image: url(${(props) => props.$icon});
  background-color: ${(props) => (props.$isActive ? '#FFFFFF' : '#EBEBEB')};
  color: ${(props) => (props.$isActive ? '#000C76' : '#4B4B4B')};
  cursor: ${(props) => (props.$isActive ? 'pointer' : 'default')};
  opacity: ${(props) => (props.$isActive ? '1' : '0.5')};
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.2s ease-in-out;
`;

const BoardSearchLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #bcbcbc;
  padding: 2px 4px;
  position: relative;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: 1px solid #8784ff;
  }

  &:active {
    transform: scale(0.9);
  }

  &:checked {
    border: 1px solid #8784ff;
  }

  &:checked::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: url(${Checked}) no-repeat center center;
  }
`;

const StyledTableCheckBoxCell = styled.td`
  max-width: 10rem;
  padding-left: 10px;
  padding-right: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

// ROWS_PER_PAGE: 한 페이지에 보여줄 공지사항의 개수
const ROWS_PER_PAGE = 10;

// Row 컴포넌트: 공지사항 테이블의 각 행을 나타내는 컴포넌트
// row: 공지사항 테이블의 각 행에 대한 정보를 담고 있는 props
// onPinChange: 공지사항 테이블의 각 행의 고정 여부를 변경하는 함수 props
const Row = ({ row, onPinChange }) => {
  // open: 공지사항 테이블의 각 행의 펼침 여부를 나타내는 state
  // ispinned: 공지사항 테이블의 각 행의 고정 여부를 나타내는 state
  const [open, setOpen] = useState(false);

  // 공지사항 테이블의 각 행의 고정 여부를 localStorage에 저장 & 불러오는 state
  const [ispinned, setIsPinned] = useState(() => {
    const savedIsPinned = localStorage.getItem(`ispinned-${row.title}`);
    return savedIsPinned ? JSON.parse(savedIsPinned) : false;
  });

  // handleCheckboxChange: 공지사항 테이블의 각 행의 고정 여부를 변경하는 함수
  const handleCheckboxChange = (event) => {
    // checked: 공지사항 테이블의 각 행의 고정 여부를 나타내는 변수
    const checked = event.target.checked;
    setIsPinned(checked);
    onPinChange(row.title, checked);
    // localStorage에 공지사항 테이블의 각 행의 고정 여부 저장
    localStorage.setItem(`ispinned-${row.title}`, checked);
  };

  return (
    <Fragment>
      <StyledTableRow>
        <StyledTableCheckBoxCell>
          <Checkbox checked={ispinned} onChange={handleCheckboxChange} />
        </StyledTableCheckBoxCell>
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
        {/* colSpan: 테이블의 각 행의 셀을 병합하는 속성 */}
        <StyledCollapseCell colSpan={5}>
          <StyledCollapseContent open={open}>
            {row.content}
          </StyledCollapseContent>
        </StyledCollapseCell>
      </StyledTableRow>
    </Fragment>
  );
};

Row.propTypes = {
  row: PropTypes.exact({
    ispinned: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onPinChange: PropTypes.func.isRequired,
};

// AdminTable: 공지사항 테이블을 나타내는 컴포넌트
const AdminTable = () => {
  // currentPage: 현재 페이지를 나타내는 state
  const [currentPage, setCurrentPage] = useState(1);
  // searchTerm: 검색어를 나타내는 state
  const [searchTerm, setSearchTerm] = useState('');
  // pinnedRows: 공지사항 테이블의 각 행의 고정 여부를 나타내는 state
  const [pinnedRows, setPinnedRows] = useState({});
  // rows: 공지사항 테이블의 각 행에 대한 정보를 담고 있는 state
  const [rows, setRows] = useState(
    ROWS_DATA.map((row) => ({
      ...row,
      ispinned: !!pinnedRows[row.title],
    })),
  );

  useEffect(() => {
    // localStorage에 저장된 공지사항 테이블의 각 행의 고정 여부를 불러오는 함수
    const savedPinnedRows = localStorage.getItem('pinnedRows');

    // savedPinnedRows: localStorage에 저장된 공지사항 테이블의 각 행의 고정 여부를 나타내는 변수
    // savedPinnedRowsParsed: savedPinnedRows를 JSON 형태로 파싱한 변수
    if (savedPinnedRows) {
      const savedPinnedRowsParsed = JSON.parse(savedPinnedRows);
      setRows(
        rows.map((row) => ({
          ...row,
          ispinned: !!savedPinnedRowsParsed[row.title],
        })),
      );
    }
  }, []);

  // handleSearch: 검색어를 변경하는 함수
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // sortedRows: 공지사항 테이블의 각 행을 고정 여부에 따라 정렬한 변수
  const sortedRows = rows.sort(
    // 고정 여부가 true인 행을 고정 여부가 false인 행보다 앞에 위치하도록 정렬
    (a, b) => (b.ispinned === true) - (a.ispinned === true),
  );

  // filteredRows: 검색어에 따라 공지사항 테이블의 각 행을 필터링한 변수
  // 검색어가 공지사항 테이블의 각 행의 제목 또는 내용에 포함되어 있으면 필터링
  const filteredRows = sortedRows
    ? sortedRows.filter(
        (row) =>
          row.title.includes(searchTerm) || row.content.includes(searchTerm),
      )
    : [];

  // currentRows: 현재 페이지에 보여줄 공지사항 테이블의 각 행을 나타내는 변수
  // currentPage: 현재 페이지를 나타내는 변수
  const currentRows = filteredRows.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE,
  );

  // renderPageButtons: 페이지 버튼을 렌더링하는 함수
  const renderPageButtons = () => {
    // numberOfPages: 공지사항 테이블의 페이지 개수를 나타내는 변수
    const numberOfPages = Math.ceil(rows.length / ROWS_PER_PAGE);
    // buttons: 페이지 버튼을 나타내는 배열
    const buttons = [];

    // currentPage가 1보다 크면 이전 페이지로 이동하는 버튼을 buttons 배열에 추가
    buttons.push(
      <PageArrowButton
        key="prev"
        onClick={() => setCurrentPage(currentPage - 1)}
        $isActive={currentPage > 1}
        $icon={LeftArrowIcon}
      />,
    );

    // buttons 배열에 페이지 버튼을 추가
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

    // currentPage가 numberOfPages보다 작으면 다음 페이지로 이동하는 버튼을 buttons 배열에 추가
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

  // handlePinChange: 공지사항 테이블의 각 행의 고정 여부를 변경하는 함수
  const handlePinChange = (title, isPinned) => {
    console.log('handlePinChange called with', title, isPinned);

    // setPinnedRows: 공지사항 테이블의 각 행의 고정 여부를 나타내는 state를 변경하는 함수
    // newPinnedRows: 공지사항 테이블의 각 행의 고정 여부를 나타내는 state를 변경한 변수
    setPinnedRows((prev) => {
      const newPinnedRows = { ...prev };
      if (isPinned) {
        newPinnedRows[title] = isPinned;
      } else {
        delete newPinnedRows[title];
      }
      return newPinnedRows;
    });

    // setRows: 공지사항 테이블의 각 행에 대한 정보를 담고 있는 state를 변경하는 함수
    setRows(
      rows.map((row) => ({
        ...row,
        ispinned: row.title === title ? isPinned : row.ispinned,
      })),
    );
    localStorage.setItem(`ispinned-${title}`, isPinned);
  };

  // handleConfirm: 완료 버튼 클릭 시 실행되는 함수
  // 완료 버튼 클릭 시, 알림창이 뜨고 페이지를 새로고침하는 함수
  // localStorage에 저장된 공지사항 테이블의 각 행의 고정 여부를 불러오는 함수
  const handleConfirm = () => {
    const savedPinnedRows = localStorage.getItem('pinnedRows');
    let mergedPinnedRows = { ...pinnedRows };

    // savedPinnedRows: localStorage에 저장된 공지사항 테이블의 각 행의 고정 여부를 나타내는 변수
    if (savedPinnedRows) {
      const savedPinnedRowsParsed = JSON.parse(savedPinnedRows);
      mergedPinnedRows = { ...savedPinnedRowsParsed, ...pinnedRows };
    }

    rows.forEach((row) => {
      if (row.ispinned) {
        mergedPinnedRows[row.title] = true;
        localStorage.setItem(`ispinned-${row.title}`, true);
      } else {
        delete mergedPinnedRows[row.title];
        localStorage.removeItem(`ispinned-${row.title}`);
      }
    });

    localStorage.setItem('pinnedRows', JSON.stringify(mergedPinnedRows));

    alert('공지 등록이 완료되었습니다!');
    window.location.reload();
  };

  // fetchData: 공지사항 테이블의 각 행에 대한 정보를 불러오는 함수
  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/admin');
    const data = await response.json();

    const pinnedData = data.filter(
      (row) => localStorage.getItem(`ispinned-${row.title}`) === 'true',
    );
    const unpinnedData = data.filter(
      (row) => localStorage.getItem(`ispinned-${row.title}`) !== 'true',
    );

    // setRows: 공지사항 테이블의 각 행에 대한 정보를 담고 있는 state를 변경하는 함수
    const sortedData = [...pinnedData, ...unpinnedData];

    setRows(sortedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log('ROWS_DATA has been updated: ', ROWS_DATA);
  }, [ROWS_DATA]);

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
            /* PinnedTable 있는 곳 */
            rows.map((row) =>
              row.ispinned ? <PinnedTable key={row.title} row={row} /> : null,
            )
          }
          {
            /* 전체 데이터가 있는 곳 */
            filteredRows.length > 0 ? (
              currentRows.map((row) => (
                <Row key={row.title} row={row} onPinChange={handlePinChange} />
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={5}>
                  검색 결과가 없습니다.
                </StyledTableCell>
              </StyledTableRow>
            )
          }
        </tbody>
      </StyledTable>
      <AdminCompletionButtonLayout>
        <AdminCompletionButton onClick={handleConfirm} />
      </AdminCompletionButtonLayout>
      <PageButtonLayout>{renderPageButtons()}</PageButtonLayout>
      <BoardSearchLayout>
        <SearchBar onSearch={handleSearch} />
      </BoardSearchLayout>
    </>
  );
};

export default AdminTable;
