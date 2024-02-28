import React, { useState } from 'react';
import styled from 'styled-components';

import GalleryTitle from 'components/Gallery/GalleryTitle';
import GalleryWriteButton from 'components/Gallery/GalleryWriteButton';
import GalleryList from 'components/Gallery/GalleryComponents';
//import axiosInstance from 'apis/setting';

import { total_Pages, album_data } from 'components/Gallery/GalleryData';

// 갤러리 리스트 컴포넌트 전체 컨테이너 스타일링
const GalleryListContainer = styled.div`
  /* 레이아웃 정렬 - 사진 아이템 레이아웃 정렬을 2차원적으로 구현하기 위해 Grid 사용 */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 34px 32px;
`;

// 갤러리 전체 페이지 컨테이너
const GalleryPageContainer = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: column;
  width: 75%;
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;

  /* 주로 겹치는 요소들 사이의 순서를 제어하기 위한 z-index -> 헤더 컴포넌트와 같이 조정할 것! */
  z-index: 1;
`;

// 갤러리 전체 페이지 제목 & 글쓰기 버튼을 감싸는 컴포넌트
const GalleryTitleButtonWrapper = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;
`;

// 갤러리 전체 페이지 제목 스타일링
const GalleryTitleLayout = styled(GalleryTitle)`
  display: flex;
`;

// 갤러리 전체 페이지 글쓰기 버튼 스타일링
const GalleryWriteButtonLayout = styled(GalleryWriteButton)`
  display: flex;
  flex-direction: column;
`;

// // 갤러리 전체 페이지 리스트 스타일링
// const GalleryListLayout = styled(GalleryList)`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;

const PageButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: center;

  padding-top: 30px;
`;

const PageButton = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? 'white' : 'transparent')};
  border-radius: 10px;
  color: ${({ selected }) => (selected ? '#000C76' : 'black')};
  font-weight: ${({ selected }) => (selected ? 'bold' : '')};
`;

// 갤러리 전체 페이지
const GalleryPage = () => {
  // const [albumData, setAlbumData] = useState([]);
  // const [totalPages, setTotalPages] = useState(0);

  const totalPages = total_Pages;
  const albumData = album_data;

  const [page, setPage] = useState(0);

  // useEffect(() => {
  //   const getAlbumData = async ({ page }) => {
  //     try {
  //       const res = await axiosInstance.get(`/albums`, {
  //         params: {
  //           page: page,
  //         },
  //       });
  //       setAlbumData(res.data.result.albumPageResponses);
  //       setTotalPages(res.data.result.totalPages);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getAlbumData(page);
  // }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage - 1);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <GalleryPageContainer>
        <GalleryTitleButtonWrapper>
          <GalleryTitleLayout />
          <GalleryWriteButtonLayout />
        </GalleryTitleButtonWrapper>

        <GalleryListContainer>
          <GalleryList albumData={albumData} />
        </GalleryListContainer>

        <PageButtonWrapper>
          {pageNumbers.map((pageNumber) => (
            <PageButton
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              selected={pageNumber === page + 1}
              disabled={pageNumber === page}
            >
              {pageNumber}
            </PageButton>
          ))}
        </PageButtonWrapper>
      </GalleryPageContainer>
    </div>
  );
};

export default GalleryPage;
