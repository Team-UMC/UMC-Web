import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Fragment } from "react";
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
];

const BoardTable = () => {
    return (
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
          <TableBody sx={{ borderColor: '#D8D8FF' }}>
            {rows.map((row) => (
              <Row key={row.title} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default BoardTable;