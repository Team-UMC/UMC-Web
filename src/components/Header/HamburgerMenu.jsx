import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuContainer = styled.div`
  width: 150px;
  color: black;
  display: flex;
  justify-content: center;
`;

const MenuWrapper = styled.ul`
  display: block;
`;

const Menu = styled.li`
  font-size: 12px;
  list-style: none;
`;

const HamburgerMenu = ({ menuItems }) => {
  return (
    <MenuContainer>
      <ul>
        {menuItems.map((section, index) => (
          <section key={index}>
            {section.title && <h4>{section.title}</h4>}
            {section.items && section.items.length > 0 && (
              <MenuWrapper>
                {section.items.map((item, itemIndex) => (
                  <Menu key={itemIndex}>{item}</Menu>
                ))}
              </MenuWrapper>
            )}
          </section>
        ))}
      </ul>
    </MenuContainer>
  );
};

HamburgerMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default HamburgerMenu;