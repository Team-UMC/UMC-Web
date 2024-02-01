import React, { useState } from 'react';
import styled from 'styled-components';

import PositionUncheckedImg from 'assets/management/positionUnchecked.svg';
import PositionCheckedImg from 'assets/management/positionChecked.svg';
import AddImg from 'assets/management/addPosition.svg';

const ChallengerPositionContainer = styled.div`
  width: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #232A6D;
`;

const TitleContainer = styled.div`
  width: 70%;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  padding: 16px;
  margin-top: 16px;
  border: 1px solid #232A6D;
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #4B4B4B;
  padding: 16px;
`;

const PositionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Position = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1vh;
  margin-bottom: 2vh;
  cursor: pointer;
  
  img {
    margin-right: 4px;
  }

  /* 추가된 스타일 */
  color: ${(props) => (props.checked ? '#8784FF' : 'inherit')};
`;

const ChallengerPosition = () => {
  const [positionChecked, setPositionChecked] = useState({
    회장: false,
    부회장: false,
    운영국장: false, 
    PM파트장: false,
    Design파트장: false,
    Spring파트장: false,
    Node파트장: false,
    Web파트장: false,
    iOS파트장: false,
    Android파트장: false,
  });

  const handlePositionClick = (position) => {
    setPositionChecked((prevState) => ({
      ...prevState,
      [position]: !prevState[position],
    }));
  };

  return (
    <ChallengerPositionContainer>
      <TitleContainer>
        운영진 직책
        <SubTitle>학교</SubTitle>
        <PositionContainer>

          <Position
            onClick={() => handlePositionClick('회장')}
            checked={positionChecked.회장}
          >
            <img src={positionChecked.회장 ? PositionCheckedImg : PositionUncheckedImg} alt='직책' />
            회장
          </Position>

          <Position
            onClick={() => handlePositionClick('부회장')}
            checked={positionChecked.부회장}
          >
            <img src={positionChecked.부회장 ? PositionCheckedImg : PositionUncheckedImg} alt='직책' />
            부회장
          </Position>

          <Position
            onClick={() => handlePositionClick('운영국장')}
            checked={positionChecked.운영국장}
          >
            <img src={positionChecked.운영국장 ? PositionCheckedImg : PositionUncheckedImg} alt='직책' />
            운영국장
          </Position>

          <Position
            onClick={() => handlePositionClick('PM파트장')}
            checked={positionChecked.PM파트장}
          >
            <img src={positionChecked.PM파트장 ? PositionCheckedImg : PositionUncheckedImg} alt='직책' />
            PM파트장
          </Position>

          <Position
            onClick={() => handlePositionClick('Design파트장')}
            checked={positionChecked.Design파트장}
          >
            <img src={positionChecked.Design파트장 ? PositionCheckedImg : PositionUncheckedImg} alt='직책' />
            Design파트장
          </Position>

          <Position
            onClick={() => handlePositionClick('Spring파트장')}
            checked={positionChecked.Spring파트장}
          >
            <img src={positionChecked.Spring파트장 ? PositionCheckedImg : PositionUncheckedImg} alt='직책' />
            Spring파트장
          </Position>

          <Position
            onClick={() => handlePositionClick('Node파트장')}
            checked={positionChecked.Node파트장}
          >
            <img src={positionChecked.Node파트장 ? PositionCheckedImg : PositionUncheckedImg} alt='직책' />
            Node파트장
          </Position>

          <Position
            onClick={() => handlePositionClick('Web파트장')}
            checked={positionChecked.Web파트장}
          >
            <img src={positionChecked.Web파트장 ? PositionCheckedImg : PositionUncheckedImg} alt='직책' />
            Web파트장
          </Position>

          <Position
            onClick={() => handlePositionClick('iOS파트장')}
            checked={positionChecked.iOS파트장}
          >
            <img src={positionChecked.iOS파트장 ? PositionCheckedImg : PositionUncheckedImg} alt='직책' />
            iOS파트장
          </Position>

          <Position
            onClick={() => handlePositionClick('Android파트장')}
            checked={positionChecked.Android파트장}
          >
            <img src={positionChecked.Android파트장 ? PositionCheckedImg : PositionUncheckedImg} alt='직책' />
            Android파트장
          </Position>

          <Position>
            <img src={AddImg} alt='직책추가' /> 직책추가
          </Position>

        </PositionContainer>
        <SubTitle>중앙</SubTitle>
      </TitleContainer>
    </ChallengerPositionContainer>
  );
};

export default ChallengerPosition;
