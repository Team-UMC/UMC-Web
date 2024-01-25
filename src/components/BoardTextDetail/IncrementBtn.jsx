import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IncrementButton = styled.div`
  &:hover {
    cursor: pointer;
  }

  ${(props) => props.style} // 외부에서 전달된 스타일 적용
`;

const IncrementBtn = ({ onClick, imageUrl, style }) => {
  return (
    <IncrementButton onClick={onClick} style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'contain', ...style }} />
  );
};

IncrementBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  style: PropTypes.any,
};

export default IncrementBtn;
