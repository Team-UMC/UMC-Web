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
  width: 70%;
  height: 480px;
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
  margin-top: 10vh;
`;

const MascotImg = styled.img`
  position: absolute;
  top: -60px;

  z-index: 5;
`;

const EarthImg = styled.img`
  position: relative;
`;

const Mascot = ({
  mascotLevel,
  mascotPoint,
  mascotRank,
  mascotImage,
  mascotDialog,
}) => {
  const ratio = parseInt(mascotPoint % 100);

  return (
    <Container>
      <EXPWrapper>
        <Text> LV.{mascotLevel}</Text>
        <EXPBar>
          <CurrentEXP width={ratio} />
        </EXPBar>
        <Text>
          우리 학교는 현재 29개의 학교 중 <BoldText>{mascotRank}등</BoldText>
          이에요!
        </Text>
      </EXPWrapper>

      <MascotWrapper>
        <MascotImg
          src={mascotImage}
          style={{ width: '148px', height: '148px' }}
        />
        <EarthImg src={EarthImage} />
      </MascotWrapper>

      <div> {mascotDialog} </div>
    </Container>
  );
};

Mascot.propTypes = {
  mascotLevel: PropTypes.number.isRequired,
  mascotPoint: PropTypes.number.isRequired,
  mascotRank: PropTypes.number.isRequired,
  mascotImage: PropTypes.string.isRequired,
  mascotDialog: PropTypes.array.isRequired,
};

export default Mascot;
