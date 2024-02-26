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
  }, [mascotData]);

  // 남은 먹이(경험치) & 사용 기록
  const [pointNHistory, setPointNHistory] = useState({});

  useEffect(() => {
    const getPointNHistory = async () => {
      try {
        const res = await axiosInstance.get(`/members/points`);

        setPointNHistory(res.data.result);
      } catch (error) {
        console.error();
      }
    };
    getPointNHistory();
  }, [pointNHistory]);

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
        <Feed pointNHistory={pointNHistory}/>
      </Page>
    </div>
  );
};

export default MascotPage;
