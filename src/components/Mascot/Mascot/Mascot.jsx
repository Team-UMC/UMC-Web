import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EarthImage from 'assets/Mascot/Earth.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
  height: 600px;
  color: white;
`;

const Text = styled.div`
  font-size: 16px;
  padding: 20px 0;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const EXPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
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
  justify-content: center;
  position: relative;
  margin-top: 8vh;
  width: 100%;
`;

const FirstMascotDialog = styled.div`
  display: flex;
  align-items: flex-end;
  height: 20%;

  font-size: 12px;
`;

const SecondMascotDialog = styled.div`
  display: flex;

  font-size: 12px;
`

const MascotImg = styled.img`
  position: absolute;
  top: -60px;

  z-index: 5;
`;

const EarthImg = styled.img`
  position: relative;
`;

const Mascot = ({ mascotData }) => {
  return (
    <Container>
      <EXPWrapper>
        <Text> LV.{mascotData.level}</Text>
        <EXPBar>
          <CurrentEXP width={parseInt(mascotData.point % 100)} />
        </EXPBar>
        <Text>
          우리 학교는 현재 29개의 학교 중{' '}
          <BoldText>{mascotData.rank}등</BoldText>
          이에요!
        </Text>
      </EXPWrapper>

      <MascotWrapper>
        <FirstMascotDialog> {mascotData.mascotDialog} </FirstMascotDialog>
        <MascotImg
          src={mascotData.mascotImage}
          style={{ width: '148px', height: '148px' }}
        />
        <EarthImg src={EarthImage} />
        <SecondMascotDialog> {mascotData.mascotDialog} </SecondMascotDialog>
      </MascotWrapper>
    </Container>
  );
};

Mascot.propTypes = {
  mascotData: PropTypes.object.isRequired,
};

export default Mascot;
