import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "@mui/material";
import PropTypes from "prop-types";
import BoardTable from "components/NewBoard/BoardTable";

const AdminCompleteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: none;
  border-radius: 12px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: #ebebeb;
  }
`;

const AdminCompleteContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 4px;
`;

const AdminCompleteFont = styled.div`
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  color: #8784ff;
  line-height: 22.4px;
  word-wrap: break-word;
`;

const AdminCompleteButton = ({ onClick }) => {
  return (
    <AdminCompleteWrapper onClick={onClick}>
      <AdminCompleteContent>
        <AdminCompleteFont>완료</AdminCompleteFont>
      </AdminCompleteContent>
    </AdminCompleteWrapper>
  );
};

AdminCompleteButton.propTypes = {
  onClick: PropTypes.func,
};

const AdminTable = () => {
  const [ rows, setRows ] = useState([]);

  const handlePinChange = (index) => {
    const newRows = [...rows];
    newRows[index].isPinned = !newRows[index].isPinned;
    setRows(newRows);
  };

  const handleConfirmClick = () => {
    const newRows = [...rows];
    newRows.sort((a, b) => b.isPinned - a.isPinned);
    setRows(newRows);
  };

  return (
    <>
      <BoardTable
        rows={rows}
        handlePinChange={handlePinChange}
      />
      <AdminCompleteButton onClick={handleConfirmClick} />
    </>
  );
};

export default AdminTable;