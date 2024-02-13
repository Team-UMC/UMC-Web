import React from 'react';
import MascotRankLink from 'components/Mascot/MascotRankLink';
import Mascot from 'components/Mascot/Mascot/Mascot';

import styled from 'styled-components';

import BackgroundImage from 'assets/Mascot/Background.svg';
import Feed from 'components/Mascot/Mascot/Feed';

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
        <Mascot />
        <Feed />
      </Page>
    </div>
  );
};

export default MascotPage;
