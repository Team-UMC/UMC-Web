import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderStyles from 'layout/Header/header.style';

const LeftContainer = ({ menu, menuClick, handleMouseEnter, handleMouseLeave }) => {
  return (
    <HeaderStyles.LeftContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HeaderStyles.Navigation>
        {menu.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={item.isSelected ? 'selected' : ''}
            onClick={() => menuClick(index)}
          >
            {item.label}
          </Link>
        ))}
      </HeaderStyles.Navigation>
    </HeaderStyles.LeftContainer>
  );
};

LeftContainer.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    })
  ).isRequired,
  menuClick: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};

export default LeftContainer;
