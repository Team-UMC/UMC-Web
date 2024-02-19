// import React, { useRef, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import ViewIcon from 'assets/gallery/view.svg';

// // 갤러리 리스트 컴포넌트 전체 컨테이너 스타일링
// const GalleryListContainer = styled.div`
//   /* 레이아웃 정렬 - 사진 아이템 레이아웃 정렬을 2차원적으로 구현하기 위해 Grid 사용 */
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-template-rows: repeat(4, 1fr);
//   gap: 34px 32px;
// `;

// // 갤러리 아이템 페이지네이션 스타일링
// const GalleryItemPaginateStyle = styled.div`
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

// // 갤러리 아이템 페이지네이션 페이지 번호 스타일링
// const PageNumber = styled.div`
//   /* 활성화(클릭) 시, 스타일링 변화 */
//   color: ${(props) => (props.isActive ? '#000C76' : '#4B4B4B')};
//   font-weight: ${(props) => (props.isActive ? '600' : '400')};
//   padding: ${(props) => (props.isActive ? '4px 8px' : '0')};
//   background: ${(props) => (props.isActive ? 'white' : 'none')};
//   border-radius: ${(props) => (props.isActive ? '6px' : '0')};

//   /* 애니메이션 효과 */
//   transition: all 0.3s ease-in-out;

//   /* 호버 시, 크기 애니메이션 변화 */
//   &:hover {
//     transform: ${(props) => (props.isActive ? 'scale(1.1)' : 'none')};
//   }
// `;

// // 갤러리 아이템 페이지네이션 화살표 스타일링
// const ArrowButton = styled.img`
//   /* 이전 및 다음 페이지 없을 경우, 화살표 숨김 애니메이션 효과 */
//   display: ${(props) => (props.isHidden ? 'none' : 'block')};
// `;

// // 갤러리 아이템 링크 스타일링
// const GalleryLink = styled(Link)`
//   /* Link(<a>) 기본으로 폰트에 밑줄이 그어진 상태로 출력되기 때문에 텍스트 밑줄 제거 */
//   text-decoration: none;
// `;

// // 갤러리 아이템 검색바 레이아웃 스타일링
// const GallerySearchBarLayout = styled(GallerySearchBar)`
//   /* 레이아웃 정렬 */
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;

// // 갤러리 리스트 컴포넌트
// const GalleryList = () => {
//   const [galleryData, setGalleryData] = useState([{}]);
//   const [totalPages, setTotalPages] = useState(0);

//   const [page, setPage] = useState(0);

//   useEffect(() => {
//     const getGalleryData = async (page) => {
//       try {
//         const res = await axiosInstance.get(`/albums`, {
//           params: {
//             page: page,
//           },
//         });

//         setGalleryData(res.data.result.albumPageResponses);
//         setTotalPages(res.data.result.totalPages);
//       } catch (error) {
//         console.error();
//       }
//     };
//     getGalleryData();
//   }, [page]);

//   const handlePageChange = (newPage) => {
//     setPage(newPage - 1);
//   };

//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <>
//       {galleryData.map((data) => (
//         <>
//           <div key={data.galleryId}>
//             <GalleryListContainer>
//               <GalleryItem />

//               <PageButtonWrapper>
//                 {pageNumbers.map((pageNumber) => (
//                   <PageButton
//                     key={pageNumber}
//                     onClick={() => handlePageChange(pageNumber)}
//                     selected={pageNumber === page + 1}
//                     disabled={pageNumber === page}
//                   >
//                     {pageNumber}
//                   </PageButton>
//                 ))}
//               </PageButtonWrapper>
//             </GalleryListContainer>
//           </div>
//         </>
//       ))}
//     </>
//   );
// };

// export default GalleryList;
