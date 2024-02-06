import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';

import HistoryData from "./HistoryData";
import HistoryComponent from 'components/History/HistoryComponent'; // Import HistoryComponent here

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15vh auto;
  width: 70%;
`;

const Div = styled.div`
  display: flex;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#3498db' : '#ddd')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#333')};
  border: none;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

const itemsPerPage = 20;

const HistoryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [historyData, setHistoryData] = useState(HistoryData);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        // Simulate API call with a delay (remove this in real implementation)
        await new Promise(resolve => setTimeout(resolve, 1000));
        setHistoryData(HistoryData); // Set dummy data after delay
      } catch (error) {
        console.error('Error fetching history data:', error);
      }
    };

    fetchDataFromServer();
  }, []);

  const totalItems = historyData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderHistoryComponents = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return historyData
      .slice(startIndex, endIndex)
      .map((historyItem, index) => (
        <HistoryComponent key={index} generation={historyItem.generation}>
          <div>{historyItem.title}</div>
          <HistoryComponent.HashTag>{historyItem.hashtags.join(', ')}</HistoryComponent.HashTag>
          <HistoryComponent.IconImage>{historyItem.icon}</HistoryComponent.IconImage>
        </HistoryComponent>
      ));
  };

  return (
    <Wrapper>
      <Div>히스토리 페이지입니다.</Div>
      <Container>{renderHistoryComponents()}</Container>
      <PaginationContainer>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            isSelected={currentPage === index + 1}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </PaginationContainer>
    </Wrapper>
  );
};

export default HistoryPage;
