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

const HistoryPage = () => {
  const [projectData, setProjectData] = useState([]);

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

  // const [hasNextPage, setHasNextPage] = useState(true);

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
        // setHasNextPage(res.data.result.hasNext);
      } catch (error) {
        console.error();
      }
    };
    getProjectData(semester, type, page, size);
  }, [semester, type, page, size]);

  // const loadMoreData = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

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
    } catch (error) {
      console.error();
    }
  };

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
        {/* {hasNextPage && (
          <div onClick={loadMoreData} style={{ cursor: 'pointer' }}>
            Load More
          </div>
        )} */}
        <SearchBar
          handleKeyword={handleKeyword}
          searchProjectData={searchProjectData}
          keyword={keyword}
        />
      </Wrapper>
    </div>
  );
};

export default HistoryPage;
