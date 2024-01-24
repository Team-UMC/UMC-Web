import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin-left: 10%;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 34px;
  color: #00095c;
`;

const Subtitle = styled.div`
  font-size: 18px;
  color: #9d9d9d;
`;

const MainDescription = ({ title, subtitle }) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderWrapper>
  );
};

MainDescription.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default MainDescription;
