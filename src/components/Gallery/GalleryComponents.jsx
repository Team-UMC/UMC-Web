import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ViewIcon from 'assets/gallery/view.svg';

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

const GalleryComponent = ({ albumData }) => {
  return (
    <>
      {albumData.map((data) => (
        <GalleryItem key={data.albumId}>
          <GalleryItemImg src={data.thumbnail} />
          <GalleryItemViewCountWrapper>
            <GalleryItemView>
              <img src={ViewIcon} alt="view-icon" />
              {data.hitCount}
            </GalleryItemView>
            <GalleryItemCount>{data.imageCnt}</GalleryItemCount>
          </GalleryItemViewCountWrapper>

          <GalleryItemInfoWrapper>
            <GalleryItemInfoTitle>{data.title}</GalleryItemInfoTitle>
            <GalleryItemInfoAuthorDateLayout>
              <GalleryItemInfoAuthor>{data.writer}</GalleryItemInfoAuthor>
              <GalleryItemInfoDate>{data.createdAt}</GalleryItemInfoDate>
            </GalleryItemInfoAuthorDateLayout>
          </GalleryItemInfoWrapper>
        </GalleryItem>
      ))}
    </>
  );
};

GalleryComponent.propTypes = {
  albumData: PropTypes.array.isRequired,
};

export default GalleryComponent;
