import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GalleryListButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #919cff;
  padding: 8px 16px 8px 16px;
  border-radius: 12px;
  cursor: pointer;
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

const GalleryListButtonText = styled.div`
  display: flex;
  color: white;
  text-align: center;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 22.4px;
  word-wrap: break-word;
`;

const GalleryListButton = ({ onClick }) => {
  return (
    <GalleryListButtonContainer onClick={onClick}>
      <GalleryListButtonText>목록</GalleryListButtonText>
    </GalleryListButtonContainer>
  );
};

GalleryListButton.propTypes = {
  onClick: PropTypes.func,
};

export default GalleryListButton;
