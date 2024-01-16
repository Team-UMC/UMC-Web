import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommonTableColumWrapper = styled.td`
  padding: 10px 5px;
`;

const CommonTableColumn = ({ children }) => {
  return <CommonTableColumWrapper>{children}</CommonTableColumWrapper>;
};

CommonTableColumn.propTypes = {
  children: PropTypes.node,
};

export default CommonTableColumn;
