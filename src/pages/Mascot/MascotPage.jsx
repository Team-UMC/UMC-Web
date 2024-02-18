import React, { useEffect, useState } from 'react';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import MascotRankLink from 'components/Mascot/MascotRankLink';
import Mascot from 'components/Mascot/Mascot/Mascot';
import Feed from 'components/Mascot/Mascot/Feed';

import BackgroundImage from 'assets/Mascot/Background.svg';

const Page = styled.div`
  width: 100%;
  background-image: url(${BackgroundImage});
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 5vh;
`;

const MascotPage = () => {
  // 마스코트 관련
  const [mascotData, setMascotData] = useState({});

  useEffect(() => {
    const getMascot = async () => {
      try {
        const res = await axiosInstance.get(`/universities/mascot`);

        setMascotData(res.data.result);
      } catch (error) {
        console.error();
      }
    };
    getMascot();
  }, []);

  // 남은 먹이(경험치)
  const [remainPoint, setRemainPoint] = useState(0);
  
  useEffect(() => {
    const getMascot = async () => {
      try {
        const res = await axiosInstance.get(`/universities/mascot`);

        setMascotData(res.data.result);
      } catch (error) {
        console.error();
      }
    };
    getMascot();
  }, []);

  // 먹이(경험치) 사용 내역
  const [usedHistories, setUsedHistories] = useState([]);

  useEffect(() => {
    const getPointData = async () => {
      try {
        const res = await axiosInstance.get(`/members/points`);

        setRemainPoint(res.data.result.remainPoint);
        setUsedHistories(res.data.result.usedHistories);
      } catch (error) {
        console.error();
      }
    };
    getPointData();
  }, []);

  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Page>
        <MascotRankLink />
        <Mascot mascotData={mascotData} />
        <Feed remainPoint={remainPoint} usedHistories={usedHistories} />
      </Page>
    </div>
  );
};

export default MascotPage;
