import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as LeftArrowGray } from 'assets/Main/LeftArrowGray.svg';
import { ReactComponent as RightArrowGray } from 'assets/Main/RightArrowGray.svg';
import { ReactComponent as LeftArrowBlack } from 'assets/Main/LeftArrowBlack.svg';
import { ReactComponent as RightArrowBlack } from 'assets/Main/RightArrowBlack.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Rectangle = styled.div`
  width: 22%;
  height: 120px;
  margin: 15px;
  border: 1px solid black;
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 3px 3px 3px 3px #999;
`;

const ButtonContainer = styled.div`
  width: 6%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  letter-spacing: -2px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Contents = styled.div`
  font-size: 12px;
  letter-spacing: -2px;
`;

const Notification = ({ notificationData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 4, notificationData.length - 4),
    );
  };

  const isLeftArrowGray = currentIndex === 0;
  const isRightArrowGray = currentIndex === notificationData.length - 4;

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
        {notificationData
          .slice(currentIndex, currentIndex + 4)
          .map((data, index) => (
            <Rectangle key={index}>
              <Title>{data.title}</Title>
              <Contents>{data.content}</Contents>
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

Notification.propTypes = {
  notificationData: PropTypes.arrayOf(
    PropTypes.shape({
      boardId: PropTypes.string,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      hostType: PropTypes.string,
      nickname: PropTypes.string,
    }),
  ).isRequired,
};

export default Notification;
