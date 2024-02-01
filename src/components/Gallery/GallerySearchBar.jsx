import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchIcon from 'assets/board/search.svg';

const GallerySearchWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 16px;
  padding-top: 24px;
  font-size: 14px;
  font-family: 'Pretendard';
  line-height: 22.4px;
  word-wrap: break-word;
`;

const GallerySearchInput = styled.input`
  width: 32rem;
  padding: 8px;
  padding-left: 34px;
  border-radius: 12px;
  border: none;
  color: #4b4b4b;
  font-weight: 400;

  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 8px center;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const GallerySearchButton = styled.button`
  padding: 8px 16px;
  border-radius: 12px;
  border: none;
  background-color: #919cff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14;
  font-weight: 500;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  &:hover {
    background-color: #7f7cff;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const GallerySearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <GallerySearchWrapper onSubmit={handleSearch}>
      <GallerySearchInput
        type="text"
        placeholder="앨범 제목 등 관련 검색어"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <GallerySearchButton type="submit">검색</GallerySearchButton>
    </GallerySearchWrapper>
  );
};

GallerySearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default GallerySearchBar;