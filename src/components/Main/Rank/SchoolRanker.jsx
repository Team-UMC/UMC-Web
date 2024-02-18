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
  height: 70%;
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

const SchoolRanker = ({ inUniversityRankData }) => {
  return (
    <Container>
      <ETCWrapper>
        {inUniversityRankData.slice(0, 6).map((rank, index) => (
          <Wrapper key={index}>
            <div>{rank.rank}등</div>
            <div>
              {rank.nickname}/{rank.name}
            </div>
            <div>{rank.usedPoint} point</div>
          </Wrapper>
        ))}
      </ETCWrapper>
    </Container>
  );
};

SchoolRanker.propTypes = {
  inUniversityRankData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired,
      usedPoint: PropTypes.number.isRequired,
      profileImage: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SchoolRanker;
