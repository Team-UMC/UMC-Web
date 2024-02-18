import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import HistoryList from 'components/History/HistoryComponent';
import TitleComponent from 'components/History/TitleComponent';
import SearchDropdown from 'components/History/SearchDropdown';
import axiosInstance from 'apis/setting';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15vh auto;
  width: 70%;
`;

const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 히스토리 리스트 컴포넌트 전체 컨테이너 스타일링
const HistoryListContainer = styled.div`
  margin-top: 50px;
  /* 레이아웃 정렬 - 사진 아이템 레이아웃 정렬을 2차원적으로 구현하기 위해 Grid 사용 */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 34px 32px;
`;

const HotHistoryPage = () => {
  const [projectData, setProjectData] = useState([]);

  const [size, setSize] = useState(0);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);

  const handleSizeDropdown = (e) => {
    setSize(e.target.value);

    setPage(0);
  };

  useEffect(() => {
    const getProjectData = async (page, size) => {
      try {
        const res = await axiosInstance.get(`/projects/hot`, {
          params: {
            page: page,
            size: size,
          },
        });
        setProjectData((prevData) => [
          ...prevData,
          ...res.data.result.projects,
        ]);
        setHasNextPage(res.data.result.hasNext);
      } catch (error) {
        console.error();
      }
    };
    getProjectData(page, size);
  }, [page, size]);

  const loadMoreData = () => {
    setPage((prevPage) => prevPage + 1);
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
            title="HOT 프로젝트"
            subtitle="현재까지 진행된 UMC 프로젝트 중 HOT했던 프로젝트를 확인해보세요!"
          />
          <SearchDropdown handleSizeDropdown={handleSizeDropdown} />
        </UpperWrapper>
        <HistoryListContainer>
          <HistoryList projectData={projectData} />
        </HistoryListContainer>
        {hasNextPage && (
          <div onClick={loadMoreData} style={{ cursor: 'pointer' }}>
            Load More
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default HotHistoryPage;
