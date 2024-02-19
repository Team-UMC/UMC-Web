import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AddButtonImage from 'assets/add.svg';

import PMImage from 'assets/Profile/Part/PM.svg';
import DesignImage from 'assets/Profile/Part/Design.svg';
import SpringImage from 'assets/Profile/Part/Spring.svg';
import NodeImage from 'assets/Profile/Part/Node.svg';
import WebImage from 'assets/Profile/Part/Web.svg';
import iOSImage from 'assets/Profile/Part/iOS.svg';
import AndroidImage from 'assets/Profile/Part/Android.svg';
import ETCImage from 'assets/Profile/Part/Study.svg';

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100px;
`;

const ContentStyle = styled.div`
  width: 95%;
  height: 60%;
  padding: 10px;
  overflow-y: auto;
`;

const TypeImage = styled.img`
  width: 30px;
  height: auto;
  padding: 0 6px;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 150px;
  height: 250px;
  border-radius: 10px;
  position: relative;

  padding: 5px;
`;

const TILWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  overflow-y: auto;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 220px;
  height: 250px;
  border-radius: 10px;
  padding: 5px;
  align-items: center;

  position: relative;
`;

const AddButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  font-size: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Navigation = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  position: absolute;
  bottom: 10px;
`;

const TodayILearned = ({ tilData }) => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate(`/todayilearned`);
  };

  const renderPartImage = (part) => {
    if (part === 'PM') {
      return <TypeImage src={PMImage} alt="PM" />;
    } else if (part === 'DESIGN') {
      return <TypeImage src={DesignImage} alt="DESIGN" />;
    } else if (part === 'SPRING') {
      return <TypeImage src={SpringImage} alt="SPRING" />;
    } else if (part === 'NODE') {
      return <TypeImage src={NodeImage} alt="NODE" />;
    } else if (part === 'WEB') {
      return <TypeImage src={WebImage} alt="WEB" />;
    } else if (part === 'IOS') {
      return <TypeImage src={iOSImage} alt="IOS" />;
    } else if (part === 'ANDROID') {
      return <TypeImage src={AndroidImage} alt="ANDROID" />;
    } else if (part === 'ETC') {
      return <TypeImage src={ETCImage} alt="ETC" />;
    }
    return null;
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedData = tilData[selectedIndex];

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % tilData.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + tilData.length) % tilData.length,
    );
  };

  return (
    <Container>
      <div style={{ marginBottom: '14px', fontWeight: 'bold' }}>
        😋 Today I Learned 👍
      </div>
      <TotalWrapper>
        <DataContainer>
          <TILWrapper>
            {tilData.map((data, index) => (
              <Wrapper key={index}>
                {renderPartImage(data.part)}
                <div>
                  <Title> {data.title} </Title>
                  <SubTitle style={{ color: '#4B4B4B', fontSize: '12px' }}>
                    {data.subTitle}
                  </SubTitle>
                </div>
              </Wrapper>
            ))}
          </TILWrapper>
          <AddButtonWrapper onClick={handleAdd}>
            <img src={AddButtonImage} />
            <Text>
              <span> Today I-Learned </span>
              <span> 추가하러가기 </span>
            </Text>
          </AddButtonWrapper>
        </DataContainer>

        <DetailContainer>
          {selectedData && (
            <>
              <Wrapper>
                {renderPartImage(selectedData.part)}
                <div>
                  <Title style={{ fontSize: '18px' }}>
                    {selectedData.title}
                  </Title>
                  <SubTitle style={{ color: '#4B4B4B', fontSize: '14px' }}>
                    {selectedData.subTitle}
                  </SubTitle>
                </div>
              </Wrapper>

              <ContentStyle>{selectedData.content}</ContentStyle>
            </>
          )}
          <Navigation>
            <span onClick={handlePrev} style={{ cursor: 'pointer' }}>
              &lt;
            </span>
            <span>{`${selectedIndex + 1} | ${tilData.length}`}</span>
            <span onClick={handleNext} style={{ cursor: 'pointer' }}>
              &gt;
            </span>
          </Navigation>
        </DetailContainer>
      </TotalWrapper>
    </Container>
  );
};

TodayILearned.propTypes = {
  tilData: PropTypes.arrayOf(
    PropTypes.shape({
      todayILearnedId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      part: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TodayILearned;
