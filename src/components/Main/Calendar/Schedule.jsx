import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CampusScheduleImage from 'assets/main/Calendar/CampusSchedule.svg';
import BranchScheduleImage from 'assets/main/Calendar/BranchSchedule.svg';
import CenterScheduleImage from 'assets/main/Calendar/CenterSchedule.svg';

import Line from 'assets/main/line.svg';
import ScheduleRectangle from 'assets/main/Calendar/ScheduleRec.svg';

import LeftArrowGray from 'assets/main/LeftArrowGray.svg';
import RightArrowGray from 'assets/main/RightArrowGray.svg';
import LeftArrowBlack from 'assets/main/LeftArrowBlack.svg';
import RightArrowBlack from 'assets/main/RightArrowBlack.svg';

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  justify-content: space-evenly;
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

const StyleRectangle = styled.img`
  display: flex;
  position: absolute;
  top: -12px;
`;

const DatasWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

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

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = days[date.getDay()];

    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}. ${day} (${dayOfWeek})`;
  };

  return (
    <ScheduleWrapper>
      <div>
        <UpperWrapper>
          <img src={CampusScheduleImage} style={{marginRight: "5px"}}/>
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

        <DatasWrapper>
          {campusSchedules
            .slice(campusScheduleIndex, campusScheduleIndex + 2)
            .map((data, index) => (
              <DataWrapper key={index}>
                <StyleRectangle src={ScheduleRectangle} />
                <div style={{ fontSize: '12px' }}>
                  {formatDate(data.startDateTime) ===
                  formatDate(data.endDatetime) ? (
                    formatDate(data.startDateTime)
                  ) : (
                    <>
                      {formatDate(data.startDateTime)} ~{' '}
                      {formatDate(data.endDatetime)}
                    </>
                  )}
                </div>
                <div style={{ fontWeight: 'bold' }}>{data.title}</div>
              </DataWrapper>
            ))}
        </DatasWrapper>
      </div>

      <div>
        <UpperWrapper>
          <img src={BranchScheduleImage} style={{marginRight: "5px"}}/>
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

        <DatasWrapper>
          {branchSchedules
            .slice(branchScheduleIndex, branchScheduleIndex + 2)
            .map((data, index) => (
              <DataWrapper key={index}>
                <StyleRectangle src={ScheduleRectangle} />
                <div style={{ fontSize: '12px' }}>
                  {formatDate(data.startDateTime) ===
                  formatDate(data.endDatetime) ? (
                    formatDate(data.startDateTime)
                  ) : (
                    <>
                      {formatDate(data.startDateTime)} ~{' '}
                      {formatDate(data.endDatetime)}
                    </>
                  )}
                </div>
                <div style={{ fontWeight: 'bold' }}>{data.title}</div>
              </DataWrapper>
            ))}
        </DatasWrapper>
      </div>

      <div>
        <UpperWrapper>
          <img src={CenterScheduleImage} style={{marginRight: "5px"}}/>
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

        <DatasWrapper>
          {centerSchedules
            .slice(centerScheduleIndex, centerScheduleIndex + 2)
            .map((data, index) => (
              <DataWrapper key={index}>
                <StyleRectangle src={ScheduleRectangle} />
                <div style={{ fontSize: '12px' }}>
                  {formatDate(data.startDateTime) ===
                  formatDate(data.endDatetime) ? (
                    formatDate(data.startDateTime)
                  ) : (
                    <>
                      {formatDate(data.startDateTime)} ~{' '}
                      {formatDate(data.endDatetime)}
                    </>
                  )}
                </div>
                <div style={{ fontWeight: 'bold' }}>{data.title}</div>
              </DataWrapper>
            ))}
        </DatasWrapper>
      </div>
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
