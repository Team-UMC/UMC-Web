// 운영자 페이지 공지사항 테이블 컴포넌트
import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ROWS_DATA } from 'Data';
import PinnedTable from './PinnedTable';
import SearchBar from 'components/Board/BoardSearch';
import AdminCompletionButton from 'components/Management/NoticePin/AdminCompletionButton';

import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LeftArrowIcon from 'assets/main/LeftArrow.svg';
import RightArrowIcon from 'assets/main/RightArrow.svg';
import Checked from 'assets/management/checked.svg';

// 게시글 테이블 컴포넌트 스타일링
const StyledTable = styled.table`
  /* 레이아웃 스타일링 */
  width: 100%;

  /* 테두리 스타일링 */
  border-collapse: collapse;

  /* 폰트 스타일링 */
  text-align: center;
`;

// 게시글 테이블 헤더 스타일링
const StyledTableHeader = styled.thead`
  /* 테두리 스타일링 */
  border-bottom: none;
  padding: 0;

  /* 폰트 스타일링 */
  font-weight: 600;
`;

// 게시글 테이블 행 스타일링
const StyledTableRow = styled.tr`
  /* 테두리 스타일링 */
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
  /* 레이아웃 스타일링 */
  width: 20rem;
  padding: 10px 40px 10px 4px;

  /* 텍스트 스타일링 */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

// 게시글 테이블 셀(글 제목 외) 스타일링
const StyledTableCell = styled.td`
  /* 레이아웃 스타일링 */
  max-width: 10rem;
  padding: 10px 40px;

  /* 텍스트 스타일링 */
  text-overflow: ellipsis;
  overflow: hidden;
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
  /* 레이아웃 스타일링 */
  border: none;
  margin: 0;

  /* 펼치기/접기 애니메이션 */
  transition: max-height 0.3s ease;

  /* 텍스트 스타일링 */
  overflow: hidden;

  /* 게시글 펼치기/접기 상태에 따라 max-height 속성 변경 */
  max-height: ${(props) => (props.open ? '500px' : '0')};
`;

// 게시글 테이블 펼치기/접기 버튼 스타일링
const AdminCompletionButtonLayout = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  justify-content: end;
  padding-top: 24px;
  padding-bottom: 80px;
`;

// 페이지 버튼 스타일링
const PageButton = styled.div`
  /* 페이지 버튼 간격 */
  display: inline-block;
  margin: 0 5px;
  padding: 4px 8px;
  border: none;
  border-radius: 6px;

  /* 페이지 버튼 활성화 시 효과 */
  background-color: ${(props) => (props.$isActive ? '#FFFFFF' : '')};

  /* 폰트 스타일링 */
  color: ${(props) => (props.$isActive ? '#000C76' : '#4B4B4B')};
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
  cursor: pointer;

  /* 페이지 버튼 효과 */
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
  /* 레이아웃 스타일링 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 페이지 버튼 화살표 스타일링
const PageArrowButton = styled.div`
  /* 레이아웃 스타일링 */
  display: inline-block;

  /* 아이콘 스타일링 */
  background-image: url(${(props) => props.$icon});

  /* 활성화 시 배경색 변화 */
  background-color: ${(props) => (props.$isActive ? '#FFFFFF' : '#EBEBEB')};

  /* 활성화 시 폰트 변화 */
  color: ${(props) => (props.$isActive ? '#000C76' : '#4B4B4B')};

  /* 활성화 시 커서 모양 변화 */
  cursor: ${(props) => (props.$isActive ? 'pointer' : 'default')};

  /* 활성화 시 투명도 변화 */
  opacity: ${(props) => (props.$isActive ? '1' : '0.5')};

  /* 페이지 버튼 효과 */
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.2s ease-in-out;
`;

// 검색 바 레이아웃 스타일링
const BoardSearchLayout = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 체크박스 스타일링
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  /* 레이아웃 스타일링 */
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #bcbcbc;
  padding: 2px 4px;
  position: relative;

  /* 웹킷 기반의 브라우저에서 선택한 요소의 기본 스타일을 제거 */
  -webkit-appearance: none;

  /* 체크박스 선택 시 포커스 표시 제거 */
  outline: none;
  cursor: pointer;

  /* 체크박스 효과 */
  transition: border 0.3s ease-in-out;

  /* 체크박스 호버 시 효과 */
  &:hover {
    border: 1px solid #8784ff;
  }

  /* 체크박스 활성화(클릭) 시 효과 */
  &:active {
    transform: scale(0.9);
  }

  /* 체크박스 체크 시 효과 */
  &:checked {
    border: 1px solid #8784ff;
  }

  /* 체크박스 체크 시 체크 표시 */
  &:checked::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: url(${Checked}) no-repeat center center;
  }
`;

// 체크박스 셀 스타일링
const StyledTableCheckBoxCell = styled.td`
  /* 레이아웃 스타일링 */
  max-width: 10rem;
  padding-left: 10px;
  padding-right: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

// 한 페이지에 표시할 게시글 수
const ROWS_PER_PAGE = 10;

// 게시글 테이블의 행 컴포넌트
const NewAdminTable = () => {
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 검색어
  const [searchTerm, setSearchTerm] = useState('');
  // 고정된 게시글
  const [pinnedItems, setPinnedItems] = useState(() => {
    // 로컬 스토리지에서 고정된 게시글을 불러옴
    const saved = localStorage.getItem('pinnedItems');
    // 고정된 게시글이 없으면 빈 배열을 반환
    return saved ? JSON.parse(saved) : [];
  });

  // 게시글 테이블의 행 컴포넌트
  const Row = ({ row }) => {
    // 게시글 펼치기/접기 상태
    const [open, setOpen] = useState(false);
    // 고정된 게시글인지 여부
    const [isPinned, setIsPinned] = useState(
      row.ispinned || pinnedItems.includes(row.title),
    );

    // 고정된 게시글인지 여부를 로컬 스토리지에 저장
    // 고정된 게시글 목록을 로컬 스토리지에 저장 & 불러옴
    const handleCheckboxChange = (event) => {
      // 고정된 게시글인지 여부를 상태에 저장
      setIsPinned(event.target.checked);

      // 고정된 게시글인지 여부를 로컬 스토리지에 저장
      if (event.target.checked) {
        // 고정된 게시글인 경우, 고정된 게시글 목록에 추가
        setPinnedItems([...pinnedItems, row.title]);
        const item = ROWS_DATA.find((item) => item.title === row.title);
        if (item) {
          item.ispinned = true;
        }
      } // 고정된 게시글이 아닌 경우, 고정된 게시글 목록에서 제거
      else {
        setPinnedItems(pinnedItems.filter((item) => item !== row.title));
        const item = ROWS_DATA.find((item) => item.title === row.title);
        if (item) {
          item.ispinned = false;
        }
      }
    };

    // 고정된 게시글인지 여부를 로컬 스토리지에 저장
    useEffect(() => {
      localStorage.setItem(row.title, JSON.stringify(isPinned));
    }, [isPinned]);

    return (
      <Fragment>
        <StyledTableRow>
          <StyledTableCheckBoxCell>
            <Checkbox checked={isPinned} onChange={handleCheckboxChange} />
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
              {
                // 펼치기/접기 버튼 아이콘
                open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
              }
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

  // 저장 버튼 클릭 핸들러
  const handleCompletion = () => {
    localStorage.setItem('pinnedItems', JSON.stringify(pinnedItems));
  };

  // 검색어 변경 핸들러
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // 검색어가 포함된 게시글만 필터링
  const filteredRows = ROWS_DATA.filter(
    (row) => row.title.includes(searchTerm) || row.content.includes(searchTerm),
  );

  // 현재 페이지에 표시할 게시글
  const currentRows = filteredRows.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE,
  );

  // 페이지 버튼 렌더링
  const renderPageButtons = () => {
    const numberOfPages = Math.ceil(ROWS_DATA.length / ROWS_PER_PAGE);
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

    // 페이지 버튼 목록
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
            // 고정된 게시글 테이블
            pinnedItems.map((item) => {
              const row = ROWS_DATA.find((row) => row.title === item);
              return row ? <PinnedTable key={row.title} row={row} /> : null;
            })
          }
          {
            // 게시글 테이블
            filteredRows.length > 0 ? (
              currentRows.map((row) => <Row key={row.title} row={row} />)
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
        <AdminCompletionButton onClick={handleCompletion} />
      </AdminCompletionButtonLayout>
      <PageButtonLayout>{renderPageButtons()}</PageButtonLayout>
      <BoardSearchLayout>
        <SearchBar onSearch={handleSearch} />
      </BoardSearchLayout>
    </>
  );
};

export default NewAdminTable;
