import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HISTORY_DATAS } from './HistoryData';

import AOSIcon from 'assets/History/AOS.svg';
import iOSIcon from 'assets/History/iOS.svg';
import WebIcon from 'assets/History/Web.svg';

import LeftArrowIcon from 'assets/main/LeftArrow.svg';
import RightArrowIcon from 'assets/main/RightArrow.svg';
import HistorySearchBar from './HistorySearchBar';
import SeeMoreImage from 'assets/History/SeeMore.svg';
// import axiosInstance from 'apis/setting';

const TotalWrapper = styled.div`
  border-radius: 15px;
  background-color: ${(props) => props.backgroundColor};
  position: relative;

  &:hover {
    box-shadow: 4px 4px 15px 5px rgba(0, 0, 0, 0.3);
    transform: translateY(-0.25rem);
    transition: transform 0.1s ease-in-out;

    .description {
      visibility: visible;
      opacity: 1;
      transition:
        opacity 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
    }

    .semester-type-wrapper {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    .history-item-icon {
      transform: scale(1.2);
      opacity: 0.5;
      transition:
        transform 0.3s ease-in-out,
        opacity 0.3s ease-in-out;
    }

    transition: background-color 0.3s ease-in-out;

    ${(props) => {
      switch (props.semester) {
        case '1':
          return 'background-color: #747881;';
        case '2':
          return 'background-color: #596075;';
        case '3':
          return 'background-color: #4B5061;';
        case '4':
          return 'background-color: #3E4352;';
        case '5':
          return 'background-color: #282B37;';
        case '6':
          return 'background-color: #1C1E27;';
        default:
          return '';
      }
    }}
  }

  &:not(:hover) {
    transform: translateY(0);
    transition:
      transform 0.1s ease-in-out,
      background-color 0.3s ease-in-out;

    .description {
      visibility: hidden;
      opacity: 0;
      transition:
        opacity 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
    }
  }
`;

// 히스토리 리스트 컴포넌트 전체 컨테이너 스타일링
const HistoryListContainer = styled.div`
  /* 레이아웃 정렬 - 사진 아이템 레이아웃 정렬을 2차원적으로 구현하기 위해 Grid 사용 */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 34px 32px;
`;

// 찾을 수 없는 프로젝트 메시지 스타일링
const NotFoundMessage = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-family: 'Pretendard';
  font-weight: 600;
`;

// 히스토리 아이템 컴포넌트 스타일링
const HistoryItem = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* 아이콘과 더보기가 있는 영역이 높이 100% 차지하도록 설정 */

  cursor: pointer;
`;

const SemesterNTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: opacity 0.3s ease-in-out;
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

  margin-top: 10px;
  margin-right: 1em;
`;

const HistoryItemIconLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

// 히스토리 아이템 이미지 스타일링
const HistoryItemIcon = styled.img`
  /* 히스토리 아이템 아이콘 */
  width: 150px;
  height: 157px;
  position: relative;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
`;

// 히스토리 아이템 정보 감싸는 레이아웃 스타일링
const HistoryItemInfoWrapper = styled.div`
  /* 레이아웃 정렬 */
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding-left: 1.3em;
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

// 히스토리 아이템 페이지네이션 스타일링
const HistoryItemPaginateStyle = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 58px;
  gap: 0 24px;

  /* 폰트 스타일링 */
  font-size: 12px;
  font-family: 'Pretendard';
  word-wrap: break-word;
  cursor: pointer;
`;

// 히스토리 아이템 페이지네이션 페이지 번호 스타일링
const PageNumber = styled.div`
  /* 활성화(클릭) 시, 스타일링 변화 */
  color: ${(props) => (props.isActive ? '#000C76' : '#4B4B4B')};
  font-weight: ${(props) => (props.isActive ? '600' : '400')};
  padding: ${(props) => (props.isActive ? '4px 8px' : '0')};
  background: ${(props) => (props.isActive ? 'white' : 'none')};
  border-radius: ${(props) => (props.isActive ? '6px' : '0')};

  /* 애니메이션 효과 */
  transition: all 0.3s ease-in-out;
`;

// 히스토리 아이템 페이지네이션 화살표 스타일링
const ArrowButton = styled.img`
  /* 이전 및 다음 페이지 없을 경우, 화살표 숨김 애니메이션 효과 */
  display: ${(props) => (props.isHidden ? 'none' : 'block')};
`;

// 히스토리 아이템 검색바 레이아웃 스타일링
const HistorySearchBarLayout = styled(HistorySearchBar)`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SeeMoreLayout = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SeeMoreIcon = styled.img`
  padding-right: 0.7em;
  padding-bottom: 0.7em;
`;

// 히스토리 아이템 컴포넌트 상세 정보
const Description = styled.div`
  display: block;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  z-index: 100;

  color: white;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 18.2px;
  word-wrap: break-word;

  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;

  ${TotalWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

// 셀렉터 스타일링
const SelectorContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 1em;
  gap: 0 1em;
`;

const SelectorValue = styled.select`
  display: flex;
  padding: 6px 10px 6px 14px;
  background: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  color: #4c4c4c;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word;
`;

const SelectorOption = styled.option`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: black;
  text-align: center;
  font-weight: 500;
  border-radius: 20px;
  padding: 6px 16px;
`;

// 히스토리 아이템 컴포넌트
// item: 히스토리 아이템 데이터
// index: 히스토리 아이템 데이터 인덱스
const HistoryItemComponent = ({ item, index }) => {
  const [historyData, setHistoryData] = useState([]);

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
      case '1':
        return '#B2B7C3';
      case '2':
        return '#8993B3';
      case '3':
        return '#6E758B';
      case '4':
        return '#5A6175';
      case '5':
        return '#3E4251';
      case '6':
        return '#2B2E38';
      default:
        return '#ffffff';
    }
  };

  // useEffect(() => {
  //   const getHistoryData = async () => {
  //     try {
  //       const res = await axiosInstance.get('/projects');

  //       const histories = res.data.result.projects;

  //       setHistoryData(
  //         histories.map((history) => ({
  //           projectId: history.projectId,
  //           name: history.name,
  //           description: history.description,
  //           logoImage: history.logoImage,
  //           semester: history.semester,
  //           types: history.types,
  //           tags: history.tags,
  //         })),
  //       );
  //     } catch (error) {
  //       console.error();
  //     }
  //   };
  //   getHistoryData();
  // });

  useEffect(() => {
    setHistoryData(HISTORY_DATAS);
  }, []);

  if (!historyData || historyData.length === 0) {
    return null;
  }

  return (
    <>
      <TotalWrapper
        backgroundColor={getBackgroundColor(item.semester)}
        semester={item.semester}
      >
        <HistoryItem key={index}>
          <div>
            <SemesterNTypeWrapper className="semester-type-wrapper">
              <SemesterStyle> {item.semester} </SemesterStyle>
              <HistoryItemInfoAuthorDateLayout>
                {item.type.map((type, index) => (
                  <React.Fragment key={index}>
                    <TypeIconTextContainer>
                      {renderTypeIconAndText(type)}
                    </TypeIconTextContainer>
                    {index !== item.type.length - 1 && ' '}
                  </React.Fragment>
                ))}
              </HistoryItemInfoAuthorDateLayout>
            </SemesterNTypeWrapper>
            <HistoryItemInfoWrapper>
              {/* 아이디어 집합소와 같이 여러 줄을 한 줄로 표시하는 경우 */}
              <HistoryItemInfoTitle>
                {item.projectName.split(' ').map((word, index) => (
                  <React.Fragment key={index}>
                    {word}
                    <br />
                  </React.Fragment>
                ))}
                <div>
                  {item.hashtag.map((tag, index) => (
                    <HistoryItemHashtag key={index}>#{tag} </HistoryItemHashtag>
                  ))}
                </div>
              </HistoryItemInfoTitle>

              {/* 아이콘 이미지 등을 추가 */}
            </HistoryItemInfoWrapper>
          </div>
          <div>
            <HistoryItemIconLayout>
              <Description className="description">
                {item.description}
              </Description>
              <HistoryItemIcon
                className="history-item-icon"
                src={item.logoImage}
              />
            </HistoryItemIconLayout>
            <SeeMoreLayout>
              <SeeMoreIcon src={SeeMoreImage} />
            </SeeMoreLayout>
          </div>
        </HistoryItem>
      </TotalWrapper>
    </>
  );
};

// 히스토리 아이템 컴포넌트 props 검사
HistoryItemComponent.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    projectName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logoImage: PropTypes.string.isRequired,
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
    hashtag: PropTypes.arrayOf(PropTypes.string).isRequired,
    semester: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

// 히스토리 리스트 컴포넌트
const HistoryList = () => {
  // 현재 페이지 상태 관리
  const [currentPage, setCurrentPage] = useState(0);
  // 검색어 상태 관리
  const [searchTerm, setSearchTerm] = useState('');
  // 기수 상태 관리
  const [selectedSemester, setSelectedSemester] = useState('');
  // 유형 상태 관리
  const [selectedType, setSelectedType] = useState('');

  // 페이지네이션 클릭 이벤트 핸들러
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 검색 이벤트 핸들러
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(0);
  };

  // 기수 선택 이벤트 핸들러
  const handleSemesterSelect = (semester) => {
    setSelectedSemester(semester);
    setCurrentPage(0);
  };

  // 유형 선택 이벤트 핸들러
  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setCurrentPage(0);
  };

  // 페이지네이션 최대 상수
  const PER_PAGE = 16;

  // 페이지네이션 상수에 따른 히스토리 아이템 데이터 필터링
  const offset = currentPage * PER_PAGE;

  // 검색어 상태에 따른 히스토리 아이템 데이터 필터링
  const filteredData = HISTORY_DATAS.filter(
    (item) =>
      // 검색어가 없을 경우, 전체 히스토리 아이템 데이터 출력
      item.projectName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      // 기수가 선택되지 않았을 경우, 전체 히스토리 아이템 출력
      (selectedSemester === '' ? true : item.semester === selectedSemester) &&
      // 유형이 선택되지 않았을 경우, 전체 히스토리 아이템 출력
      (selectedType === ''
        ? item.type.length > 0
        : item.type.includes(selectedType)),
  );

  // 페이지네이션 상수에 따른 히스토리 아이템 데이터 페이지네이션
  const pageCount = Math.ceil(filteredData.length / PER_PAGE);
  const pages = new Array(pageCount).fill(null).map((_, i) => i);

  const Selector = () => {
    return (
      <SelectorContainer>
        <SelectorValue
          value={selectedSemester}
          onChange={(e) => handleSemesterSelect(e.target.value)}
        >
          <SelectorOption value="">기수</SelectorOption>
          <SelectorOption value="1">1수</SelectorOption>
          <SelectorOption value="2">2수</SelectorOption>
          <SelectorOption value="3">3수</SelectorOption>
          <SelectorOption value="4">4수</SelectorOption>
          <SelectorOption value="5">5수</SelectorOption>
          <SelectorOption value="6">6수</SelectorOption>
        </SelectorValue>
        <SelectorValue
          value={selectedType}
          onChange={(e) => handleTypeSelect(e.target.value)}
        >
          <SelectorOption value="">유형</SelectorOption>
          <SelectorOption value="Web">웹</SelectorOption>
          <SelectorOption value="IOS">iOS</SelectorOption>
          <SelectorOption value="AOS">AOS</SelectorOption>
        </SelectorValue>
      </SelectorContainer>
    );
  };

  return (
    <>
      <Selector />
      <HistoryListContainer>
        {filteredData.length > 0 ? (
          filteredData
            .slice(offset, offset + PER_PAGE)
            .map((item, index) => (
              <HistoryItemComponent key={index} item={item} index={index} />
            ))
        ) : (
          <NotFoundMessage>찾을 수 없는 프로젝트입니다.</NotFoundMessage>
        )}
      </HistoryListContainer>

      <HistoryItemPaginateStyle>
        <ArrowButton
          src={LeftArrowIcon}
          alt="previous"
          isHidden={currentPage === 0}
          onClick={() => handlePageClick(currentPage - 1)}
        />
        {pages.map((pageNumber) => (
          <PageNumber
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            isActive={pageNumber === currentPage}
          >
            {pageNumber + 1}
          </PageNumber>
        ))}
        <ArrowButton
          src={RightArrowIcon}
          alt="next"
          isHidden={currentPage === pageCount - 1}
          onClick={() => handlePageClick(currentPage + 1)}
        />
      </HistoryItemPaginateStyle>

      <HistorySearchBarLayout onSearch={handleSearch} />
    </>
  );
};

export default HistoryList;
