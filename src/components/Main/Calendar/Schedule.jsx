import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CampusScheduleImage from 'assets/main/Calendar/CampusSchedule.svg';
import BranchScheduleImage from 'assets/main/Calendar/BranchSchedule.svg';
import CenterScheduleImage from 'assets/main/Calendar/CenterSchedule.svg';

import Line from 'assets/main/line.svg';
import LeftArrowGray from 'assets/main/LeftArrowGray.svg';
import RightArrowGray from 'assets/main/RightArrowGray.svg';
import LeftArrowBlack from 'assets/main/LeftArrowBlack.svg';
import RightArrowBlack from 'assets/main/RightArrowBlack.svg';

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 17px;
  align-items: flex-end;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ArrowButton = styled.img`
  cursor: pointer;
`;

// const ScheduleWrap = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
// `;

// const Schedule = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
// `;

// const ScheduleView = styled.div`
//   display: flex;
//   font-size: 12px;
// `;

// const ScheduleInfo = styled.div`
//   display: flex;
//   font-size: 16px;
// `;

const ScheduleItem = ({
  campusSchedules,
  branchSchedules,
  centerSchedules,
}) => {
  // 학교 일정 관련
  const [campusScheduleIndex, setCampusScheduleIndex] = useState(0);

  const handlePrevCampus = () => {
    if (campusScheduleIndex > 0) {
      setCampusScheduleIndex(campusScheduleIndex - 1);
    }
  };

  const handleNextCampus = () => {
    if (campusScheduleIndex + 2 < campusSchedules.length) {
      setCampusScheduleIndex(campusScheduleIndex + 1);
    }
  };

  // 지부 일정 관련
  const [branchScheduleIndex, setBranchScheduleIndex] = useState(0);

  const handlePrevBranch = () => {
    if (branchScheduleIndex > 0) {
      setBranchScheduleIndex(branchScheduleIndex - 1);
    }
  };

  const handleNextBranch = () => {
    if (branchScheduleIndex + 2 < branchSchedules.length) {
      setBranchScheduleIndex(branchScheduleIndex + 1);
    }
  };

  // 중앙 일정 관련
  const [centerScheduleIndex, setCenterScheduleIndex] = useState(0);

  const handlePrevCenter = () => {
    if (centerScheduleIndex > 0) {
      setCenterScheduleIndex(centerScheduleIndex - 1);
    }
  };

  const handleNextCenter = () => {
    if (centerScheduleIndex + 2 < centerSchedules.length) {
      setCenterScheduleIndex(centerScheduleIndex + 1);
    }
  };

  return (
    <ScheduleWrapper>
      <UpperWrapper>
        <img src={CampusScheduleImage} />
        <div> 학교 별 일정 </div>
      </UpperWrapper>
      <ButtonContainer>
        <ArrowButton
          src={campusScheduleIndex > 0 ? LeftArrowBlack : LeftArrowGray}
          onClick={handlePrevCampus}
        />
        <img src={Line} />
        <ArrowButton
          src={
            campusScheduleIndex + 2 < campusSchedules.length
              ? RightArrowBlack
              : RightArrowGray
          }
          onClick={handleNextCampus}
        />
      </ButtonContainer>
      {campusSchedules
        .slice(campusScheduleIndex, campusScheduleIndex + 2)
        .map((data, index) => (
          <div key={index}>
            <div>
              {data.startDateTime} ~ {data.endDatetime}
            </div>
            <div>{data.title}</div>
          </div>
        ))}

      <UpperWrapper>
        <img src={BranchScheduleImage} />
        <div> 지부 별 일정 </div>
      </UpperWrapper>
      <ButtonContainer>
        <ArrowButton
          src={branchScheduleIndex > 0 ? LeftArrowBlack : LeftArrowGray}
          onClick={handlePrevBranch}
        />
        <img src={Line} />
        <ArrowButton
          src={
            branchScheduleIndex + 2 < branchSchedules.length
              ? RightArrowBlack
              : RightArrowGray
          }
          onClick={handleNextBranch}
        />
      </ButtonContainer>
      {branchSchedules
        .slice(branchScheduleIndex, branchScheduleIndex + 2)
        .map((data, index) => (
          <div key={index}>
            <div>
              {data.startDateTime} ~ {data.endDatetime}
            </div>
            <div>{data.title}</div>
          </div>
        ))}

      <UpperWrapper>
        <img src={CenterScheduleImage} />
        <div> 중앙 일정 </div>
      </UpperWrapper>
      <ButtonContainer>
        <ArrowButton
          src={centerScheduleIndex > 0 ? LeftArrowBlack : LeftArrowGray}
          onClick={handlePrevCenter}
        />
        <img src={Line} />
        <ArrowButton
          src={
            centerScheduleIndex + 2 < centerSchedules.length
              ? RightArrowBlack
              : RightArrowGray
          }
          onClick={handleNextCenter}
        />
      </ButtonContainer>
      {centerSchedules
        .slice(centerScheduleIndex, centerScheduleIndex + 2)
        .map((data, index) => (
          <div key={index}>
            <div>
              {data.startDateTime} ~ {data.endDatetime}
            </div>
            <div>{data.title}</div>
          </div>
        ))}
    </ScheduleWrapper>
  );
};

ScheduleItem.propTypes = {
  campusSchedules: PropTypes.arrayOf(
    PropTypes.shape({
      startDateTime: PropTypes.string.isRequired,
      endDatetime: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  branchSchedules: PropTypes.arrayOf(
    PropTypes.shape({
      startDateTime: PropTypes.string.isRequired,
      endDatetime: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  centerSchedules: PropTypes.arrayOf(
    PropTypes.shape({
      startDateTime: PropTypes.string.isRequired,
      endDatetime: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ScheduleItem;
