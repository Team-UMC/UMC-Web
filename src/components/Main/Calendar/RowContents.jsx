import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as LeftArrowGray } from 'assets/main/LeftArrowGray.svg';
import { ReactComponent as RightArrowGray } from 'assets/main/RightArrowGray.svg';
import { ReactComponent as LeftArrowBlack } from 'assets/main/LeftArrowBlack.svg';
import { ReactComponent as RightArrowBlack } from 'assets/main/RightArrowBlack.svg';

const Container = styled.div`
  display: flex;
`;

const DataContainer = styled.div`
  display: flex;
`;

const Rectangle = styled.div`
  width: 150px;
  margin: 5px;
  border: 1px solid black;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const RowContents = ({ data, itemsToShow, displayProperties }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - itemsToShow));
  };

  const isLeftArrowGray = currentIndex === 0;
  const isRightArrowGray = currentIndex === data.length - itemsToShow;

  return (
    <Container>
      <ButtonContainer>
        {isLeftArrowGray ? (
          <LeftArrowGray alt="이전" onClick={handlePrev} />
        ) : (
          <LeftArrowBlack alt="이전" onClick={handlePrev} />
        )}
      </ButtonContainer>
      <DataContainer>
        {data.slice(currentIndex, currentIndex + itemsToShow).map((item, index) => (
          <Rectangle key={index}>
            {displayProperties.includes('date') && <div>Date: {item.date}</div>}
            {displayProperties.includes('title') && <div>Title: {item.title}</div>}
            {displayProperties.includes('content') && <div>Content: {item.content}</div>}
          </Rectangle>
        ))}
      </DataContainer>
      <ButtonContainer>
        {isRightArrowGray ? (
          <RightArrowGray alt="다음" onClick={handleNext} />
        ) : (
          <RightArrowBlack alt="다음" onClick={handleNext} />
        )}
      </ButtonContainer>
    </Container>
  );
};

RowContents.propTypes = {
  data: PropTypes.array.isRequired,
  itemsToShow: PropTypes.number.isRequired,
  displayProperties: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RowContents;
