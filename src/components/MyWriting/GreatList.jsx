import React, { useState } from 'react';
import styled from 'styled-components';
import SearchImg from 'assets/search.svg';

const ListContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 2fr 1fr;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
  border-bottom: 1px solid #d8d8ff;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 2fr 1fr;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
  width: 100%; /* 수정된 부분: 너비를 100%로 지정 */
`;
const Header = styled.div`
  font-weight: bold;
  justify-self: center; /* 수평 가운데 정렬 */
  align-self: center;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  cursor: pointer;
  border: none;
  padding: 4px 8px;
  background-color: ${(props) => (props.isActive ? '#FFFFFF' : 'transparent')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};

  &:hover {
    background-color: #ededed; /* Set the hover background color as needed */
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  justify-content: center;
  align-self: center;
  margin: 3vh 0vh;
  background: var(--white, #fff); /*여기가 왜 적용이 안되지*/
  border-radius: 12px;

  border: 1px solid #d8d8ff;
`;

const SearchInput = styled.input`
  padding: 1vh;
  width: 100%; /* 수정된 부분: 너비를 100%로 지정 */
  border: none;
`;

const SearchButton = styled.div`
  margin-left: 10px;
  cursor: pointer;

  padding: 8px 16px;
  border: none;
  color: var(--white, #fff);

  font-size: 14px;
  border-radius: 12px;
  background: #919cff;
  width: 5%;
  text-align: center;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: flex-start;
`;

const GreatList = () => {
  const dataList = [
    {
      id: 1,
      title: '첫번째 글',
      writetDate: '2024.01.20',
      viewCount: '100',
      great: '50',
    },
    {
      id: 2,
      title: '두번째 글',
      writetDate: '2024.01.20',
      viewCount: '200',
      great: '50',
    },
    {
      id: 3,
      title: '세번째 글',
      writetDate: '2024.01.20',
      viewCount: '300',
      great: '50',
    },
    {
      id: 4,
      title: '네번째 글',
      writetDate: '2024.01.20',
      viewCount: '400',
      great: '50',
    },
    {
      id: 5,
      title: '다섯번째 글',
      writetDate: '2024.01.20',
      viewCount: '500',
      great: '50',
    },
    {
      id: 6,
      title: '여섯번째 글',
      writetDate: '2024.01.20',
      viewCount: '600',
      great: '50',
    },
    {
      id: 7,
      title: '일곱번째 글',
      writetDate: '2024.01.20',
      viewCount: '700',
      great: '50',
    },
  ];

  const pageSize = 10; /*한 페이지안에 나타나는 글의 수 */
  const [currentPage, setCurrentPage] =
    useState(1); /*현재 표시되고 있는 페이지를 추적, 초기값은 1로 */

  const [searchTerm, setSearchTerm] =
    useState(''); /*사용자가 입력한 검색어를 저장하는데 사용 */
  const [searchedData, setSearchedData] =
    useState(null); /*검색 결과를 저장하기 위해 사용 */

  const lastIndex =
    currentPage * pageSize; /*현재 페이지에서 표시되는 마지막 항목의 인덱스 */
  const firstIndex =
    lastIndex - pageSize; /*현재 페이지에서 표시되는 첫번째 항목의 인덱스 */

  const currentList = searchedData
    ? searchedData.slice(firstIndex, lastIndex)
    : dataList.slice(
        firstIndex,
        lastIndex,
      ); /*현재 페이지에 표시될 항목의 목록을 검색 */

  const totalPage = Math.ceil(
    (searchedData ? searchedData.length : dataList.length) / pageSize,
  ); /*모든 항목을 표시하기 위해 필요한 총 페이지 수를 계산 */

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }; /*사용자가 페이지를 변경할 때 */

  const handleSearch = () => {
    const filteredList = dataList.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSearchedData(filteredList);
    setCurrentPage(1);
  }; /*검색버튼을 클릭했을 때 호출되는 것으로 검색어와 일치하는 항목을 찾아 상태를 업데이트하고 페이지를 1로 설정 */

  return (
    <ListContainer>
      <HeaderContainer>
        <Header>번호</Header>
        <Header>제목</Header>
        <Header>작성일</Header>
        <Header>조회수</Header>
        <Header>좋아요</Header>
      </HeaderContainer>

      {currentList.map((item) => (
        <ListItem key={item.id}>
          <Center>{item.id}</Center>
          <Left>{item.title}</Left>
          <Center>{item.writetDate}</Center>
          <Center>{item.viewCount}</Center>
          <Center>{item.great}</Center>
        </ListItem>
      ))}

      <PaginationContainer>
        {Array.from({ length: totalPage }, (_, index) => (
          <PaginationButton
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </PaginationContainer>

      <SearchContainer>
        <img src={SearchImg} alt="SVG Image" />
        <SearchInput
          type="text"
          placeholder="글 제목, 내용을 입력해주세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>검색</SearchButton>
      </SearchContainer>
    </ListContainer>
  );
};

export default GreatList;
