import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AOSIcon from 'assets/History/AOS.svg';
import iOSIcon from 'assets/History/iOS.svg';
import WebIcon from 'assets/History/Web.svg';

import SeeMoreImage from 'assets/History/SeeMore.svg';

const TotalWrapper = styled.div`
  border-radius: 15px;
  background-color: ${(props) => props.backgroundColor};
`;

// // 히스토리 리스트 컴포넌트 전체 컨테이너 스타일링
// const HistoryListContainer = styled.div`
//   /* 레이아웃 정렬 - 사진 아이템 레이아웃 정렬을 2차원적으로 구현하기 위해 Grid 사용 */
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-template-rows: repeat(4, 1fr);
//   gap: 34px 32px;
// `;

// 히스토리 아이템 컴포넌트 스타일링
const HistoryItem = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* 아이콘과 더보기 사이 공간 분배 */
  height: 100%; /* 아이콘과 더보기가 있는 영역이 높이 100% 차지하도록 설정 */
`;

const SemesterNTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// const TypeIconTextContainer = styled.div`
//   /* 세로 중앙 정렬 */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// 히스토리 아이템 이미지 스타일링
const HistoryItemIcon = styled.img`
  /* 히스토리 아이템 아이콘 */
  width: 150px;
  height: 157px;
`;

// 히스토리 아이템 정보 감싸는 레이아웃 스타일링
const HistoryItemInfoWrapper = styled.div`
  /* 레이아웃 정렬 */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

// 히스토리 아이템 제목 스타일링
const HistoryItemInfoTitle = styled.div`
  /* 폰트 스타일링 */
  color: white;
  font-size: 30px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const HistoryItemHashtag = styled.span`
  /* 폰트 스타일링 */
  color: white;
  font-size: 14px; /* hashtag를 14px로 설정 */
  font-family: 'Pretendard';
  font-weight: 400;
`;

// 히스토리 아이템 작성자 & 작성일 레이아웃 스타일링
const HistoryItemInfoAuthorDateLayout = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* 마우스 커서 스타일링 */
  cursor: default;

  /* 폰트 스타일링 */
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
`;

const SeeMoreIcon = styled.img`
  margin-left: auto;
`;

// 히스토리 리스트 컴포넌트
const HistoryList = ({ projectData }) => {
  const renderTypeIconAndText = (type) => {
    switch (type) {
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
      case 'Web':
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

  return (
    <>
      {projectData.map((data) => (
        <>
          <div key={data.projectId}>
            <TotalWrapper backgroundColor={getBackgroundColor(data.semester)}>
              <HistoryItem>
                <SemesterNTypeWrapper>
                  <div> {data.semester} </div>
                  <HistoryItemInfoAuthorDateLayout>
                    {renderTypeIconAndText(data.types)}
                  </HistoryItemInfoAuthorDateLayout>
                </SemesterNTypeWrapper>
                <HistoryItemInfoWrapper>
                  {/* 아이디어 집합소와 같이 여러 줄을 한 줄로 표시하는 경우 */}
                  <HistoryItemInfoTitle>
                    {data.name}
                    <div>
                      <HistoryItemHashtag> #{data.tags} </HistoryItemHashtag>
                    </div>
                  </HistoryItemInfoTitle>

                  {/* 아이콘 이미지 등을 추가 */}
                </HistoryItemInfoWrapper>
                <HistoryItemIcon src={data.logoImage} />
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

// // 히스토리 아이템 페이지네이션 스타일링
// const HistoryItemPaginateStyle = styled.div`
//   /* 레이아웃 정렬 */
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding-top: 58px;
//   gap: 0 24px;

//   /* 폰트 스타일링 */
//   font-size: 12px;
//   font-family: 'Pretendard';
//   word-wrap: break-word;
//   cursor: pointer;
// `;

// // 히스토리 아이템 페이지네이션 페이지 번호 스타일링
// const PageNumber = styled.div`
//   /* 활성화(클릭) 시, 스타일링 변화 */
//   color: ${(props) => (props.isActive ? '#000C76' : '#4B4B4B')};
//   font-weight: ${(props) => (props.isActive ? '600' : '400')};
//   padding: ${(props) => (props.isActive ? '4px 8px' : '0')};
//   background: ${(props) => (props.isActive ? 'white' : 'none')};
//   border-radius: ${(props) => (props.isActive ? '6px' : '0')};

//   /* 애니메이션 효과 */
//   transition: all 0.3s ease-in-out;
// `;

// // 히스토리 아이템 페이지네이션 화살표 스타일링
// const ArrowButton = styled.img`
//   /* 이전 및 다음 페이지 없을 경우, 화살표 숨김 애니메이션 효과 */
//   display: ${(props) => (props.isHidden ? 'none' : 'block')};
// `;

// // 히스토리 아이템 검색바 레이아웃 스타일링
// const HistorySearchBarLayout = styled(HistorySearchBar)`
//   /* 레이아웃 정렬 */
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;
