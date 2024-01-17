import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as LeftArrowGray } from 'assets/main/LeftArrowGray.svg';
import { ReactComponent as RightArrowGray } from 'assets/main/RightArrowGray.svg';
import { ReactComponent as LeftArrowBlack } from 'assets/main/LeftArrowBlack.svg';
import { ReactComponent as RightArrowBlack } from 'assets/main/RightArrowBlack.svg';

const Container = styled.div`
  display: flex;
`;

const DataContainer = styled.div`
  display: flex;
`;

const Rectangle = styled.div`
  width: 200px;
  height: 120px;
  margin: 15px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 15px;
  box-shadow:3px 3px 3px 3px #999;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Contents = styled.div`
  font-size: 12px;
`;

const Notification = () => {
  const data = [
    {
      title: 'UMC 6기 모집',
      contents:
        'UMC 6기를 모집합니다!!! 개발도 하고 친목도 다질 수 있는 절호의 기회~~~ 많은 지원 부탁드려요~',
    },
    {
      title: '5기 회식 안내',
      contents:
        'UMC 5기 회식을 진행합니다!!! 돈은 회장 벡스가 다 낸다고 합니다~~',
    },
    {
      title: '프로젝트 매칭 안내',
      contents: '이번 주부터 프로젝트 매칭을 시작합니다.',
    },
    {
      title: 'Design 파트장 모집',
      contents:
        '인하대 UMC 6기 Design 파트장은 델로로 확정되어 모집 받지 않습니다.',
    },
    {
      title: 'Spring 파트장 모집',
      contents:
        '인하대 UMC 6기 Spring 파트장은 벡스로 확정되어 모집 받지 않습니다.',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 4));
  };

  const isLeftArrowGray = currentIndex === 0;
  const isRightArrowGray = currentIndex === data.length - 4;

  return (
    <Container>
      <ButtonContainer>
        {isLeftArrowGray ? (
          <LeftArrowGray alt="이전" onClick={handlePrev} />
        ) : (
          <LeftArrowBlack alt="이전" onClick={handlePrev} />
        )}
      </ButtonContainer>
      <DataContainer>
        {data.slice(currentIndex, currentIndex + 4).map((item, index) => (
          <Rectangle key={index}>
            <Title>{item.title}</Title>
            <Contents>{item.contents}</Contents>
          </Rectangle>
        ))}
      </DataContainer>
      <ButtonContainer>
        {isRightArrowGray ? (
          <RightArrowGray alt="다음" onClick={handleNext} />
        ) : (
          <RightArrowBlack alt="다음" onClick={handleNext} />
        )}
      </ButtonContainer>
    </Container>
  );
};

export default Notification;
