import styled from 'styled-components';
import ExitHamburgerIcon from '../assets/set.svg';

const HamburgerWrapper = styled.div`
  z-index: 5;
  padding: 12px;
  background-color: #f4f4f4;
  height: 50%;
  width: 100%;
  top: -100%;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column; /* Set the main axis to column */
  align-items: center; /* Center children horizontally */
  justify-content: flex-start;
  transition:
    top 0.5s ease,
    opacity 0.5s ease;
  opacity: 0;
  pointer-events: none;

  &.open {
    top: 0;
    opacity: 1;
    pointer-events: auto;
  }

  .menu-container-wrapper {
    display: flex;
    flex-direction: row; /* Set the main axis to row */
    justify-content: space-evenly;
    width: 100%;
  }
`;

const ExitIcon = styled.img`
  width: 21px;
  height: 19px;
  margin: 10px;
  margin-right: auto;
`;

const MenuContainer = styled.div`
  margin: 10px;
  color: black;
`;

const HamburgerMenuStyles = {
  HamburgerWrapper,
  ExitIcon,
  MenuContainer,
  ExitHamburgerIcon,
};

export default HamburgerMenuStyles;
