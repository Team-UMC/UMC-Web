import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AOSIcon from 'assets/History/AOS.svg';
import iOSIcon from 'assets/History/iOS.svg';
import WebIcon from 'assets/History/Web.svg';

import NoIconImage from 'assets/NoIcon.png';

import SeeMoreImage from 'assets/History/SeeMore.svg';

const TotalWrapper = styled.div`
  height: 100%;
  border-radius: 15px;
  background-color: ${(props) => props.backgroundColor};
`;

// 히스토리 아이템 컴포넌트 스타일링
const HistoryItem = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  cursor: pointer;
`;

const SemesterNTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SemesterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  font-size: 12px;
  font-family: 'Inter';
  font-weight: 400;
  padding: 5px;
  margin-top: 5px;
  margin-left: 5px;
`;

const TypeIconTextContainer = styled.div`
  /* 세로 중앙 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  color: white;
  font-size: 10px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
  margin-top: 5px;
  margin-right: 10px;
`;

// 히스토리 아이템 이미지 스타일링
const HistoryItemIcon = styled.img`
  /* 히스토리 아이템 아이콘 */
  width: 100px;
  height: 100px;
`;

const HistoryItemIconLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

// 히스토리 아이템 제목 스타일링
const HistoryItemInfoTitle = styled.div`
  /* 폰트 스타일링 */
  color: white;
  font-size: 25px;
  font-weight: 500;
  word-wrap: break-word;
`;

const HistoryItemHashtag = styled.span`
  /* 폰트 스타일링 */
  color: white;
  font-size: 12px;
  font-weight: 400;
`;

// 히스토리 아이템 정보 감싸는 레이아웃 스타일링
const HistoryItemInfoWrapper = styled.div`
  /* 레이아웃 정렬 */
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 1em;
`;

const SeeMoreIcon = styled.img`
  margin-left: auto;
  padding-right: 0.7em;
  padding-bottom: 0.7em;
`;

// 히스토리 리스트 컴포넌트
const HistoryList = ({ projectData }) => {
  const renderTypeIconAndText = (type) => {
    const stringType = type.toString();

    switch (stringType) {
      case 'IOS':
        return (
          <>
            <img src={iOSIcon} alt="iOS Icon" />
            iOS
          </>
        );
      case 'AOS':
        return (
          <>
            <img src={AOSIcon} alt="AOS Icon" />
            AOS
          </>
        );
      case 'WEB':
        return (
          <>
            <img src={WebIcon} alt="Web Icon" />
            Web
          </>
        );
      default:
        return '';
    }
  };

  const getBackgroundColor = (semester) => {
    switch (semester) {
      case 'FIRST':
        return '#B2B7C3';
      case 'SECOND':
        return '#8993B3';
      case 'THIRD':
        return '#6E758B';
      case 'FOURTH':
        return '#5A6175';
      case 'FIFTH':
        return '#3E4251';
      case 'SIXTH':
        return '#2B2E38';
      default:
        return '#ffffff';
    }
  };

  const getNumber = (semester) => {
    switch (semester) {
      case 'FIRST':
        return '1';
      case 'SECOND':
        return '2';
      case 'THIRD':
        return '3';
      case 'FOURTH':
        return '4';
      case 'FIFTH':
        return '5';
      case 'SIXTH':
        return '6';
      default:
        return '';
    }
  };

  return (
    <>
      {projectData.map((data) => (
        <>
          <div key={data.projectId}>
            <TotalWrapper backgroundColor={getBackgroundColor(data.semester)}>
              <HistoryItem>
                <SemesterNTypeWrapper>
                  <SemesterStyle> {getNumber(data.semester)} </SemesterStyle>
                  <TypeIconTextContainer>
                    {renderTypeIconAndText(data.types)}
                  </TypeIconTextContainer>
                </SemesterNTypeWrapper>
                <HistoryItemInfoWrapper>
                  <HistoryItemInfoTitle>{data.name}</HistoryItemInfoTitle>
                  <HistoryItemHashtag>
                    {data.tags.map((tag, index) => (
                      <span key={index}>
                        #{tag}
                        {index !== data.tags.length - 1 && ' '}
                      </span>
                    ))}
                  </HistoryItemHashtag>
                </HistoryItemInfoWrapper>
                <HistoryItemIconLayout>
                  {data.logoImage ? (
                    <HistoryItemIcon src={data.logoImage} />
                  ) : (
                    <HistoryItemIcon src={NoIconImage} />
                  )}
                </HistoryItemIconLayout>
                <SeeMoreIcon src={SeeMoreImage} />
              </HistoryItem>
            </TotalWrapper>
          </div>
        </>
      ))}
    </>
  );
};

HistoryList.propTypes = {
  projectData: PropTypes.array.isRequired,
};

export default HistoryList;
