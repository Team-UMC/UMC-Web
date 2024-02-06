import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { GALLERY_DATAS } from './GalleryData';
import ViewIcon from 'assets/gallery/view.svg';
import LeftArrowIcon from 'assets/main/LeftArrow.svg';
import RightArrowIcon from 'assets/main/RightArrow.svg';
import GallerySearchBar from './GallerySearchBar';

// 갤러리 리스트 컴포넌트 전체 컨테이너 스타일링
const GalleryListContainer = styled.div`
  /* 레이아웃 정렬 - 사진 아이템 레이아웃 정렬을 2차원적으로 구현하기 위해 Grid 사용 */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 34px 32px;
`;

// 갤러리 아이템 컴포넌트 스타일링
const GalleryItem = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: column;

  /* 호버 시, 마우스 커서에 따라 입체적으로 기울기 변화하는 애니메이션 구현 */
  transition: transform 0.2s ease-in-out;
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;

  /* 갤러리 아이템 호버 시, 애니메이션 효과 */
  &:hover {
    transform: scale(1.1);
  }
`;

// 갤러리 아이템 이미지 스타일링
const GalleryItemImg = styled.img`
  /* 갤러리 아이템 대표 프로필 사진 */
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

// 갤러리 아이템 조회수 & 사진 갯수 감싸는 레이아웃 스타일링
const GalleryItemViewCountWrapper = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  position: absolute;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* 외형 스타일링 */
  padding: 6px 6px 0 8px;
  box-sizing: border-box;
  cursor: default;

  /* 폰트 스타일링 */
  color: black;
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
`;

// 갤러리 아이템 조회수 스타일링
const GalleryItemView = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;
  gap: 0 2px;

  /* 외형 스타일링 */
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  line-height: 19.2px;
`;

// 갤러리 아이템 사진 갯수 스타일링
const GalleryItemCount = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;

  /* 외형 스타일링 */
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
`;

// 갤러리 아이템 정보 감싸는 레이아웃 스타일링
const GalleryItemInfoWrapper = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: column;
  padding: 12px 8px 11px 13px;
  gap: 4px;

  /* 외형 스타일링 */
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0px 2px 10px rgba(177, 177, 177, 0.66);
`;

// 갤러리 아이템 제목 스타일링
const GalleryItemInfoTitle = styled.div`
  /* 폰트 스타일링 */
  color: black;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

// 갤러리 아이템 작성자 & 작성일 레이아웃 스타일링
const GalleryItemInfoAuthorDateLayout = styled.div`
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

// 갤러리 아이템 작성자 스타일링
const GalleryItemInfoAuthor = styled.div`
  color: black;
`;

// 갤러리 아이템 작성일 스타일링
const GalleryItemInfoDate = styled.div`
  color: #4b4b4b;
`;

// 갤러리 아이템 페이지네이션 스타일링
const GalleryItemPaginateStyle = styled.div`
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

// 갤러리 아이템 페이지네이션 페이지 번호 스타일링
const PageNumber = styled.div`
  /* 활성화(클릭) 시, 스타일링 변화 */
  color: ${(props) => (props.isActive ? '#000C76' : '#4B4B4B')};
  font-weight: ${(props) => (props.isActive ? '600' : '400')};
  padding: ${(props) => (props.isActive ? '4px 8px' : '0')};
  background: ${(props) => (props.isActive ? 'white' : 'none')};
  border-radius: ${(props) => (props.isActive ? '6px' : '0')};

  /* 애니메이션 효과 */
  transition: all 0.3s ease-in-out;

  /* 호버 시, 크기 애니메이션 변화 */
  &:hover {
    transform: ${(props) => (props.isActive ? 'scale(1.1)' : 'none')};
  }
`;

// 갤러리 아이템 페이지네이션 화살표 스타일링
const ArrowButton = styled.img`
  /* 이전 및 다음 페이지 없을 경우, 화살표 숨김 애니메이션 효과 */
  display: ${(props) => (props.isHidden ? 'none' : 'block')};
`;

// 갤러리 아이템 링크 스타일링
const GalleryLink = styled(Link)`
  /* Link(<a>) 기본으로 폰트에 밑줄이 그어진 상태로 출력되기 때문에 텍스트 밑줄 제거 */
  text-decoration: none;
`;

// 갤러리 아이템 검색바 레이아웃 스타일링
const GallerySearchBarLayout = styled(GallerySearchBar)`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 갤러리 아이템 컴포넌트
// item: 갤러리 아이템 데이터
// index: 갤러리 아이템 데이터 인덱스
const GalleryItemComponent = ({ item, index }) => {
  // 마우스 커서에 따라 입체적으로 기울기 변화하는 애니메이션 구현
  const itemRef = useRef(null);

  // 마우스 커서 이벤트 핸들러
  useEffect(() => {
    const handleMouseMove = (e) => {
      // 마우스 커서 위치에 따라 입체적으로 기울기 변화
      const rect = itemRef.current.getBoundingClientRect();

      // 마우스 커서 위치
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // 갤러리 아이템 중심 위치
      const xc = rect.width / 2;
      const yc = rect.height / 2;

      // 마우스 커서 위치와 갤러리 아이템 중심 위치의 차이
      const dx = x - xc;
      const dy = y - yc;

      // 마우스 커서 위치에 따라 입체적으로 기울기 변화
      itemRef.current.style.transform = `perspective(1000px) rotateX(${
        dy / -5
      }deg) rotateY(${dx / 50}deg)`;
    };

    // 마우스 커서 벗어날 시, 입체적으로 기울기 변화 초기화
    const handleMouseLeave = () => {
      itemRef.current.style.transform = '';
    };

    // 마우스 커서 이벤트 리스너 등록
    itemRef.current.addEventListener('mousemove', handleMouseMove);
    itemRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // 마우스 커서 이벤트 리스너 해제
      if (itemRef.current) {
        itemRef.current.removeEventListener('mousemove', handleMouseMove);
        itemRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <GalleryLink to={`/gallery/${item.id}`}>
      <GalleryItem ref={itemRef} key={index}>
        <GalleryItemImg src={item.src[0]} alt={item.alt} />
        <GalleryItemViewCountWrapper>
          <GalleryItemView>
            <img src={ViewIcon} alt="view-icon" />
            {item.view}
          </GalleryItemView>
          <GalleryItemCount>{item.count}</GalleryItemCount>
        </GalleryItemViewCountWrapper>
        <GalleryItemInfoWrapper>
          <GalleryItemInfoTitle>{item.title}</GalleryItemInfoTitle>
          <GalleryItemInfoAuthorDateLayout>
            <GalleryItemInfoAuthor>{item.author.name}</GalleryItemInfoAuthor>
            <GalleryItemInfoDate>{item.time}</GalleryItemInfoDate>
          </GalleryItemInfoAuthorDateLayout>
        </GalleryItemInfoWrapper>
      </GalleryItem>
    </GalleryLink>
  );
};

// 갤러리 아이템 컴포넌트 props 검사
GalleryItemComponent.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    }).isRequired,
    time: PropTypes.string.isRequired,
    src: PropTypes.arrayOf(PropTypes.string).isRequired,
    alt: PropTypes.string.isRequired,
    view: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

// 갤러리 리스트 컴포넌트
const GalleryList = () => {
  // 현재 페이지 상태 관리
  const [currentPage, setCurrentPage] = useState(0);
  // 검색어 상태 관리
  const [searchTerm, setSearchTerm] = useState('');

  // 페이지네이션 클릭 이벤트 핸들러
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 검색 이벤트 핸들러
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(0);
  };

  // 페이지네이션 최대 상수
  const PER_PAGE = 16;

  // 페이지네이션 상수에 따른 갤러리 아이템 데이터 필터링
  const offset = currentPage * PER_PAGE;

  // 검색어 상태에 따른 갤러리 아이템 데이터 필터링
  const filteredData = GALLERY_DATAS.filter((item) =>
    // 검색어가 없을 경우, 전체 갤러리 아이템 데이터 출력
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // 페이지네이션 상수에 따른 갤러리 아이템 데이터 페이지네이션
  const pageCount = Math.ceil(filteredData.length / PER_PAGE);
  const pages = new Array(pageCount).fill(null).map((_, i) => i);

  return (
    <>
      <GalleryListContainer>
        {
          // 페이지네이션 상수에 따른 갤러리 아이템 데이터 출력
          filteredData.slice(offset, offset + PER_PAGE).map((item, index) => (
            <GalleryItemComponent key={index} item={item} index={index} />
          ))
        }
      </GalleryListContainer>
      <GalleryItemPaginateStyle>
        <ArrowButton
          src={LeftArrowIcon}
          alt="previous"
          isHidden={currentPage === 0}
          onClick={() => handlePageClick(currentPage - 1)}
        />
        {
          // 페이지네이션 상수에 따른 페이지 번호 출력
          pages.map((pageNumber) => (
            <PageNumber
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              isActive={pageNumber === currentPage}
            >
              {pageNumber + 1}
            </PageNumber>
          ))
        }
        <ArrowButton
          src={RightArrowIcon}
          alt="next"
          isHidden={currentPage === pageCount - 1}
          onClick={() => handlePageClick(currentPage + 1)}
        />
      </GalleryItemPaginateStyle>
      <GallerySearchBarLayout onSearch={handleSearch} />
    </>
  );
};

export default GalleryList;
