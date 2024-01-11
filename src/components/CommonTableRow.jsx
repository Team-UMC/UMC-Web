import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommonTableRowWrapper = styled.tr`
  &:hover {
    background-color: #eceaea;
    cursor: pointer;
  }
`;

const CommonTableRow = ({ children }) => {
  return <CommonTableRowWrapper>{children}</CommonTableRowWrapper>;
};

CommonTableRow.propTypes = {
  children: PropTypes.node,
};

export default CommonTableRow;
