import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LogoImage from 'assets/main/TIL/Logo.svg';

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const DataContainer = styled.div`
  display: flex;
  background-color: white;
  width: 150px;
  height: 300px;
  border: 1px solid black;
`;

const DetailContainer = styled.div`
  display: flex;
  background-color: white;
  width: 300px;
  height: 300px;
`;

const TodayILearned = ({ tilData }) => {
  return (
    <Container>
      <DataContainer>
        {tilData.map((data, index) => (
          <div key={index}>
            <img src={LogoImage} />
            <div>
              <div> {data.title} </div>
              <div> {data.subTitle} </div>
            </div>
          </div>
        ))}
      </DataContainer>

      <DetailContainer></DetailContainer>
    </Container>
  );
};

TodayILearned.propTypes = {
  tilData: PropTypes.arrayOf(
    PropTypes.shape({
      todayILearnedId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      part: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TodayILearned;
