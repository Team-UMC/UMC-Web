import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import HamburgerMenuStyles from './hamburgermenu.style';

const { HamburgerWrapper, MenuContainer, ExitIcon } = HamburgerMenuStyles;

const HamburgerMenu = ({ isOpen, toggleSide }) => {
  const outside = useRef();

  const closeHamburger = () => {
    toggleSide();
  };

  return (
    <HamburgerWrapper
      ref={outside}
      className={`SideBarWrap ${isOpen ? 'open' : ''}`}
    >
      <ExitIcon
        src={HamburgerMenuStyles.ExitHamburgerIcon}
        alt="닫는 아이콘"
        onClick={closeHamburger}
      />

      <div className="menu-container-wrapper">
        <MenuContainer>
          <ul>
            <li className="Menu">메뉴1</li>
            <li className="Menu">메뉴2</li>
            <li className="Menu">메뉴3</li>
          </ul>
        </MenuContainer>

        <MenuContainer>
          <ul>
            <li className="Menu">다른메뉴1</li>
            <li className="Menu">다른메뉴2</li>
            <li className="Menu">다른메뉴3</li>
          </ul>
        </MenuContainer>

        <MenuContainer>
          <ul>
            <li className="Menu">더다른메뉴1</li>
            <li className="Menu">더다른메뉴2</li>
            <li className="Menu">더다른메뉴3</li>
          </ul>
        </MenuContainer>
      </div>
    </HamburgerWrapper>
  );
};

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSide: PropTypes.func.isRequired,
};

export default HamburgerMenu;
