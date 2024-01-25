import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IncrementCountText = styled.p`
  ${(props) => props.style}// 외부에서 전달된 스타일을 적용
`;

const IncrementCount = ({ count, onIncrement, style }) => {
  return (
    <IncrementCountText onClick={onIncrement} style={style}>
      {count.toString()}
    </IncrementCountText>
  );
};
IncrementCount.propTypes = {
  count: PropTypes.string.isRequired,
  onIncrement: PropTypes.function,
  style: PropTypes.any,
};
export default IncrementCount;
