import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ETCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  align-items: center;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border: 1px solid white;
  border-radius: 15px;
  background-color: white;

  color: black;
`;

const SchoolRanking = ({ universityRank }) => {
  return (
    <Container>
      <ETCWrapper>
        {universityRank.slice(0, 6).map((rank, index) => (
          <Wrapper key={index}>
            <div>{rank.universityRank}등</div>
            <div>{rank.universityName}</div>
            <div>{rank.universityPoint} point</div>
          </Wrapper>
        ))}
      </ETCWrapper>
    </Container>
  );
};

SchoolRanking.propTypes = {
  universityRank: PropTypes.arrayOf(
    PropTypes.shape({
      universityRank: PropTypes.number.isRequired,
      universityName: PropTypes.string.isRequired,
      universityPoint: PropTypes.number.isRequired,
      universityLogo: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SchoolRanking;
