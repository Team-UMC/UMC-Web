import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;

  margin-bottom: 50px;
`;

const TypeTitle = styled.h1`
  color: white;
`;

const StyledDiv = styled.div`
  /* ${name} 부분의 스타일 */
  span.name,
  span.point,
  span.rank {
    color: white;
  }

  /* "반가워요!" 부분의 스타일 */
  span.message {
    color: gray;
  }
`;

const Title = ({ title, data, keyNames }) => {
  const { nameKey, pointKey, rankKey } = keyNames;

  return (
    <Container>
      <TypeTitle>{title}</TypeTitle>
      <StyledDiv>
        <span className="name">{data[nameKey]}</span>
        <span className="message">는</span>
        <span className="point"> {data[pointKey]} </span>
        <span className="message">포인트로</span>
        <span className="message"> 현재 </span>
        <span className="rank">{data[rankKey]}등</span>
        <span className="message">이에요!</span>
      </StyledDiv>
    </Container>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  keyNames: PropTypes.shape({
    nameKey: PropTypes.string.isRequired,
    pointKey: PropTypes.number.isRequired,
    rankKey: PropTypes.number.isRequired,
  }).isRequired,
};

export default Title;
