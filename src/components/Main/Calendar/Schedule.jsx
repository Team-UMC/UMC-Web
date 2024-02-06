import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import styled from 'styled-components';

import { ReactComponent as Line } from 'assets/main/line.svg';
import { ReactComponent as LeftArrowGray } from 'assets/main/LeftArrowGray.svg';
import { ReactComponent as RightArrowGray } from 'assets/main/RightArrowGray.svg';
import { ReactComponent as LeftArrowBlack } from 'assets/main/LeftArrowBlack.svg';
import { ReactComponent as RightArrowBlack } from 'assets/main/RightArrowBlack.svg';

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ScheduleWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Schedule = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ScheduleView = styled.div`
  font-size: 12px;
`;

const ScheduleInfo = styled.div`
  font-size: 16px;
`;

const ScheduleItem = ({ title, scheduleImage, altText, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 2));
  };

  const isLeftArrowGray = currentIndex === 0;
  const isRightArrowGray = currentIndex === data.length - 2;

  return (
    <ScheduleWrapper>
      <UpperWrapper>
        <img src={scheduleImage} alt={altText} />
        <div>{title}</div>
      </UpperWrapper>
      <ScheduleWrap>
        <ButtonContainer>
          {isLeftArrowGray ? (
            <LeftArrowGray alt="이전" onClick={handlePrev} />
          ) : (
            <LeftArrowBlack alt="이전" onClick={handlePrev} />
          )}
        </ButtonContainer>

        <Line />

        <ButtonContainer>
          {isRightArrowGray ? (
            <RightArrowGray alt="다음" onClick={handleNext} />
          ) : (
            <RightArrowBlack alt="다음" onClick={handleNext} />
          )}
        </ButtonContainer>
      </ScheduleWrap>

      <Schedule>
        <div>
          <ScheduleView> 하이 </ScheduleView>
          <ScheduleInfo> 바이 </ScheduleInfo>
        </div>
        <div>
          <ScheduleView> 하이 </ScheduleView>
          <ScheduleInfo> 바이 </ScheduleInfo>
        </div>
      </Schedule>
    </ScheduleWrapper>
  );
};

ScheduleItem.propTypes = {
  title: PropTypes.string.isRequired,
  scheduleImage: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default ScheduleItem;
