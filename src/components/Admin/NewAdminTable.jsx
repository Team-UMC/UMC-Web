import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ROWS_DATA } from 'Data';
import PinnedTable from './PinnedTable';
import SearchBar from 'components/Board/BoardSearch';
import AdminCompletionButton from 'components/Admin/AdminCompletionButton';

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

const ROWS_PER_PAGE = 10;

const NewAdminTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [pinnedItems, setPinnedItems] = useState(() => {
    const saved = localStorage.getItem('pinnedItems');
    return saved ? JSON.parse(saved) : [];
  });

  const Row = ({ row }) => {
    const [open, setOpen] = useState(false);
    const [isPinned, setIsPinned] = useState(
      row.ispinned || pinnedItems.includes(row.title),
    );

    const handleCheckboxChange = (event) => {
      setIsPinned(event.target.checked);
      if (event.target.checked) {
        setPinnedItems([...pinnedItems, row.title]);
        const item = ROWS_DATA.find((item) => item.title === row.title);
        if (item) {
          item.ispinned = true;
        }
      } else {
        setPinnedItems(pinnedItems.filter((item) => item !== row.title));
        const item = ROWS_DATA.find((item) => item.title === row.title);
        if (item) {
          item.ispinned = false;
        }
      }
    };

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

  const handleCompletion = () => {
    localStorage.setItem('pinnedItems', JSON.stringify(pinnedItems));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredRows = ROWS_DATA.filter(
    (row) => row.title.includes(searchTerm) || row.content.includes(searchTerm),
  );

  const currentRows = filteredRows.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE,
  );

  const renderPageButtons = () => {
    const numberOfPages = Math.ceil(ROWS_DATA.length / ROWS_PER_PAGE);
    const buttons = [];

    buttons.push(
      <PageArrowButton
        key="prev"
        onClick={() => setCurrentPage(currentPage - 1)}
        $isActive={currentPage > 1}
        $icon={LeftArrowIcon}
      />,
    );

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
          {pinnedItems.map((item) => {
            const row = ROWS_DATA.find((row) => row.title === item);
            return row ? <PinnedTable key={row.title} row={row} /> : null;
          })}
          {filteredRows.length > 0 ? (
            currentRows.map((row) => <Row key={row.title} row={row} />)
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={5}>
                검색 결과가 없습니다.
              </StyledTableCell>
            </StyledTableRow>
          )}
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
