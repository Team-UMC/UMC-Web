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

const StyledDiv = styled.div`
  /* ${name} 부분의 스타일 */
  span.name,
  span.point,
  span.grade {
    color: white;
  }

  /* "반가워요!" 부분의 스타일 */
  span.message {
    color: gray;
  }
`;

const Title = ({ name, point, grade }) => {
  return (
    <Container>
      <h1>{name}</h1>
      <StyledDiv>
        <span className="name">{name}</span>
        <span className="message">는</span>
        <span className="point"> {point} </span>
        <span className="message">포인트로</span>
        <span className="message"> 현재 </span>
        <span className="grade">{grade}</span>
        <span className="message">이에요!</span>
      </StyledDiv>
    </Container>
  );
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  point: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
};

export default Title;
