import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyles from 'layout/Header/header.style';

const RightContainer = ({ isSmallHeader, renderRightContent }) => {
  return (
    <HeaderStyles.RightContainer>
      {isSmallHeader ? <p> 눈꽃님 반가워요! </p> : renderRightContent()}
    </HeaderStyles.RightContainer>
  );
};

RightContainer.propTypes = {
  isSmallHeader: PropTypes.bool.isRequired,
  renderRightContent: PropTypes.func.isRequired,
};

export default RightContainer;
