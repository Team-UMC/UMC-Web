import React, { useEffect, useState } from 'react';
import MascotRankLink from 'components/Mascot/MascotRankLink';
import Mascot from 'components/Mascot/Mascot/Mascot';

import styled from 'styled-components';

import BackgroundImage from 'assets/Mascot/Background.svg';
import Feed from 'components/Mascot/Mascot/Feed';
import axiosInstance from 'apis/setting';

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
  const [mascotLevel, setMascotLevel] = useState(0);
  const [mascotPoint, setMascotPoint] = useState(0);
  const [mascotRank, setMascotRank] = useState(0);
  const [mascotImage, setMascotImage] = useState('');
  const [mascotDialog, setMascotDialog] = useState([]);

  // 먹이(경험치) 관련
  const [remainPoint, setRemainPoint] = useState(0);
  const [usedHistories, setUsedHistories] = useState([]);

  useEffect(() => {
    const getMascot = async () => {
      try {
        const res = await axiosInstance.get(`/universities/mascot`);

        setMascotLevel(res.data.result.level);
        setMascotPoint(res.data.result.point);
        setMascotRank(res.data.result.rank);
        setMascotImage(res.data.result.mascotImage);
        setMascotDialog(res.data.result.mascotDialog);
      } catch (error) {
        console.error();
      }
    };
    getMascot();
  }, []);

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
        <Mascot
          mascotLevel={mascotLevel}
          mascotPoint={mascotPoint}
          mascotRank={mascotRank}
          mascotImage={mascotImage}
          mascotDialog={mascotDialog}
        />
        <Feed remainPoint={remainPoint} usedHistories={usedHistories} />
      </Page>
    </div>
  );
};

export default MascotPage;
