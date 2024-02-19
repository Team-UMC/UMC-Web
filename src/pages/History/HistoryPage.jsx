import React, { useEffect, useState } from 'react';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import TitleComponent from 'components/History/TitleComponent';
import SearchDropdown from 'components/History/SearchDropdown';

import HistoryList from 'components/History/HistoryComponent';

import SearchBar from 'components/History/SearchBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15vh auto;
  width: 70%;
  align-items: center;
  min-height: 70vh;
`;

const UpperWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 히스토리 리스트 컴포넌트 전체 컨테이너 스타일링
const HistoryListContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  /* 레이아웃 정렬 - 사진 아이템 레이아웃 정렬을 2차원적으로 구현하기 위해 Grid 사용 */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 34px 32px;
`;

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

const HistoryPage = () => {
  const [projectData, setProjectData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [semester, setSemester] = useState('');
  const [type, setType] = useState([]);
  const size = 20;

  const [page, setPage] = useState(0);

  const handleSemesterDropdown = (e) => {
    setSemester(e.target.value);

    setPage(0);
  };

  const handleTypeDropdown = (e) => {
    setType(e.target.value);

    setPage(0);
  };

  // 검색 기능
  const [keyword, setKeyword] = useState('');

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const getProjectData = async (semester, type, page, size) => {
      try {
        const res = await axiosInstance.get(`/projects`, {
          params: {
            semester: semester,
            type: type,
            page: page,
            size: size,
          },
        });
        setProjectData(res.data.result.projects);
        setTotalPages(res.data.result.totalPages);
      } catch (error) {
        console.error();
      }
    };
    getProjectData(semester, type, page, size);
  }, [semester, type, page, size]);

  const searchProjectData = async (keyword, page, size) => {
    try {
      const res = await axiosInstance.get(`/projects/search`, {
        params: {
          keyword: keyword,
          page: page,
          size: size,
        },
      });
      setProjectData(res.data.result.projects);
      setTotalPages(res.data.result.totalPages);
    } catch (error) {
      console.error();
    }
  };

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
      <Wrapper>
        <UpperWrapper>
          <TitleComponent
            title="역대 프로젝트"
            subtitle="현재까지 진행된 UMC 프로젝트들을 확인해보세요!"
          />
          <SearchDropdown
            handleSemesterDropdown={handleSemesterDropdown}
            handleTypeDropdown={handleTypeDropdown}
          />
        </UpperWrapper>
        <HistoryListContainer>
          <HistoryList projectData={projectData} />
        </HistoryListContainer>

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

        <SearchBar
          handleKeyword={handleKeyword}
          searchProjectData={searchProjectData}
          keyword={keyword}
          page={page}
          size={size}
        />
      </Wrapper>
    </div>
  );
};

export default HistoryPage;
