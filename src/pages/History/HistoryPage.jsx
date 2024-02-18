import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import HistoryList from 'components/History/HistoryComponent';
import HistoryTitle from 'components/History/HistoryTitle';
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

const HistoryPage = () => {
  const [projectData, setProjectData] = useState([]);

  const [semester, setSemester] = useState('');
  const [type, setType] = useState([]);
  //const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);

  const handleSemesterDropdown = (e) => {
    setSemester(e.target.value);

    console.log(e.target.value);
  };

  const handleTypeDropdown = (e) => {
    setType(e.target.value);

    console.log(e.target.value);
  };

  const handleSizeDropdown = (e) => {
    setSize(e.target.value);

    console.log(e.target.value);
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
      } catch (error) {
        console.error();
      }
    };
    getProjectData(semester, type, size);
  }, [projectData, semester, type, size]);

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
          <HistoryTitle />
          <SearchDropdown
            handleSemesterDropdown={handleSemesterDropdown}
            handleTypeDropdown={handleTypeDropdown}
            handleSizeDropdown={handleSizeDropdown}
          />
        </UpperWrapper>
        <div>
          <HistoryList projectData={projectData} />
        </div>
      </Wrapper>
    </div>
  );
};

export default HistoryPage;
