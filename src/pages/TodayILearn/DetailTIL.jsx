import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListTIL from '../../components/TodayILearn/ListTIL';
import DetailComponent from '../../components/TodayILearn/DetailComponent';
import axiosInstance from 'apis/setting';
import { useNavigate } from 'react-router-dom';

const NewTILContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0vh 50vh;
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: 600;
  margin: 15vh 0vh 6.5vh 0vh;
  color: #00095c;
`;

const DetailTIL = () => {
  const navigate = useNavigate();

  const [tilDetailData, setTilDetailData] = useState({});

  const currentURL = window.location.href;
  const urlParts = currentURL.split('/');

  const todayILearnedId = urlParts[4];

  useEffect(() => {
    const getTILData = async () => {
      try {
        const res = await axiosInstance.get(
          `/today-i-learned/${todayILearnedId}`,
        );

        setTilDetailData(res.data.result);
      } catch (error) {
        console.error();
      }
    };
    getTILData();
  }, []);

  const deleteTIL = async () => {
    try {
      const res = await axiosInstance.delete(
        `/today-i-learned/${todayILearnedId}`,
      );
      console.log(res);

      navigate(`/todayilearned`);
    } catch (error) {
      console.error();
    }
  };

  return (
    <NewTILContainer>
      <Title>Today I Learned</Title>
      <ListTIL tilDetailData={tilDetailData} deleteTIL={deleteTIL} />
      <DetailComponent tilDetailData={tilDetailData} />
    </NewTILContainer>
  );
};

export default DetailTIL;
