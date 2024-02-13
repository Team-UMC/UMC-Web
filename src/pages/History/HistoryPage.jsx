import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';

// import HistoryData from './HistoryData';
import HistoryList from 'components/History/HistoryComponent';
import HistoryTitle from 'components/History/HistoryTitle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15vh auto;
  width: 70%;
`;

// const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// `;

// const PaginationButton = styled.button`
//   margin: 0 5px;
//   padding: 5px 10px;
//   cursor: pointer;
//   background-color: ${({ isSelected }) => (isSelected ? '#3498db' : '#ddd')};
//   color: ${({ isSelected }) => (isSelected ? '#fff' : '#333')};
//   border: none;
//   border-radius: 5px;
// `;

// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: space-between;
// `;

const HistoryPage = () => {
  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Wrapper>
        <HistoryTitle />
        <div>
          <HistoryList />
        </div>
      </Wrapper>
    </div>
  );
};

export default HistoryPage;
