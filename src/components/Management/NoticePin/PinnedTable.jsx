import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Checked from 'assets/management/checked.svg';
import pin from 'assets/board/list/Pinned.svg';

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

const PinnedTable = ({ row }) => {
  const [open, setOpen] = useState(false);
  const [ispinned, setIspinned] = useState(row.ispinned);
  const location = useLocation();

  useEffect(() => {
    setIspinned(row.ispinned);
  }, [row.ispinned]);

  const handleCheckboxChange = (event) => {
    setIspinned(event.target.checked);
  };

  if (!row.ispinned) {
    return null;
  }

  return (
    <Fragment>
      <StyledTableRow>
        <StyledTableCheckBoxCell>
          {location.pathname.startsWith('/board') ? (
            <img src={pin} alt="pinned" />
          ) : (
            <Checkbox checked={ispinned} onChange={handleCheckboxChange} />
          )}
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

PinnedTable.propTypes = {
  row: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    views: PropTypes.number,
    content: PropTypes.string,
    ispinned: PropTypes.bool,
  }).isRequired,
};

export default PinnedTable;
