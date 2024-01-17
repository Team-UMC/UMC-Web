import { React, useState, Fragment } from "react";
import PropTypes from "prop-types";
import {
  TableCell,
  TableContainer,
  TableRow,
  Table,
  TableHead,
  TableBody,
  IconButton,
  Collapse,
  Box,
  Typography,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from "styled-components";
import SearchBar from "./BoardSearch";

const StyledTableCell = styled(TableCell)`
  font-family: 'Pretendard';
  font-size: 14px;
  text-align: center;
`;

const StyledHeaderCell = styled(StyledTableCell)`
  font-weight: bold;
`;

const createData = (title, author, date, views, content) => {
    return { 
        title, 
        author, 
        date, 
        views,
        content,
    };
};

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
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #EBEBEB;
    color: #000C76;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const ROWS_PER_PAGE = 10;

const Row = ({ row }) => {
  const [ open, setOpen ] = useState(false);

  return (
    <Fragment>
      <TableRow>
        <StyledTableCell component="th" scope="row">
          {row.title}
        </StyledTableCell>
        <StyledTableCell>{row.author}</StyledTableCell>
        <StyledTableCell>{row.date}</StyledTableCell>
        <StyledTableCell>{row.views}</StyledTableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="p" gutterBottom component="div">
                {row.content}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

Row.propTypes = {
    row: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
};

// 대충 데이터들 모음 (여기에 JSON 서버 생기면 구현하면 될 듯...)
const rows = [
    createData('제목1', '작성자1', '2021-10-01', 100, '내용1'),
    createData('제목2', '작성자2', '2021-10-02', 200, '내용2'),
    createData('제목3', '작성자3', '2021-10-03', 300, '내용3'),
    createData('제목4', '작성자4', '2021-10-04', 400, '내용4'),
    createData('제목5', '작성자5', '2021-10-05', 500, '내용5'),
    createData('제목6', '작성자6', '2021-10-06', 600, '내용6'),
    createData('제목7', '작성자7', '2021-10-07', 700, '내용7'),
    createData('제목8', '작성자8', '2021-10-08', 800, '내용8'),
    createData('제목9', '작성자9', '2021-10-09', 900, '내용9'),
    createData('제목10', '작성자10', '2021-10-10', 1000, '내용10'),
    createData('제목11', '작성자11', '2021-10-11', 1100, '내용11'),
    createData('제목12', '작성자12', '2021-10-12', 1200, '내용12'),
    createData('제목13', '작성자13', '2021-10-13', 1300, '내용13'),
    createData('제목14', '작성자14', '2021-10-14', 1400, '내용14'),
    createData('제목15', '작성자15', '2021-10-15', 1500, '내용15'),
];

const BoardTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ searchTerm, setSearchTerm ] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredRows = rows.filter(
    (row) =>
      row.title.includes(searchTerm) || row.content.includes(searchTerm),
  );

  const currentRows = filteredRows.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE,
  );

  const renderPageButtons = () => {
    const numberOfPages = Math.ceil(rows.length / ROWS_PER_PAGE);
    const buttons = [];

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

    return buttons;
  };

  return (
    <>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledHeaderCell>제목</StyledHeaderCell>
              <StyledHeaderCell>작성자</StyledHeaderCell>
              <StyledHeaderCell>작성일</StyledHeaderCell>
              <StyledHeaderCell>조회수</StyledHeaderCell>
              <StyledHeaderCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.length > 0 ? (
              currentRows.map((row) => (
                <Row key={row.title} row={row} />
              ))
            ) : (
              <TableRow>
                <StyledTableCell colSpan={6} align="center">
                  검색 결과가 없습니다.
                </StyledTableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div>{renderPageButtons()}</div>
      <div><SearchBar onSearch={handleSearch} /></div>
    </>
  );
};

export default BoardTable;