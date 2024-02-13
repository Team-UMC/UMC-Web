import React from 'react';
import styled from 'styled-components';

import MascotImage from 'assets/Mascot/Mascot.svg';
import EarthImage from 'assets/Mascot/Earth.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 70%;
  height: 480px;
  color: white;
`;

const EXPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const EXPBar = styled.div`
  display: flex;
  width: 80%;
  height: 36px;
  border: 1px solid white;
  justify-content: flex-start;
`;

const CurrentEXP = styled.div`
  width: ${({ width }) => `${width}%`};
  height: 36px;
  background: linear-gradient(to right, #86ffc5, #49e9ff);
`;

const MascotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 5vh;
`;

const MascotImg = styled.img`
  position: absolute;
  top: -60px;

  z-index: 5;
`;

const EarthImg = styled.img`
  position: relative;
`;

const Mascot = () => {
  const exp = 246;
  const ratio = parseInt(exp % 100);

  return (
    <Container>
      <EXPWrapper>
        <div>레벨</div>
        <EXPBar>
          <CurrentEXP width={ratio} />
        </EXPBar>
        <div> 현재 내 순위 </div>
      </EXPWrapper>

      <MascotWrapper>
        <MascotImg src={MascotImage} />
        <EarthImg src={EarthImage} />
      </MascotWrapper>
    </Container>
  );
};

export default Mascot;
