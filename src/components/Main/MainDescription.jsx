import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
margin-left: 220px;
  margin-bottom: 50px;
`;

const MainDescription = ({ title, subtitle }) => {
  return (
    <HeaderWrapper>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </HeaderWrapper>
  );
};

MainDescription.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default MainDescription;
