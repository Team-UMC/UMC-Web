import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  z-index: 5;
  padding-left: 100px;
  background-color: #f4f4f4;
  height: 50%;
  width: 100%;
  top: -100%;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    top 0.5s ease,
    opacity 0.5s ease;
  opacity: 0;
  pointer-events: none;

  &.open {
    top: 91px;
    opacity: 0.8;
    pointer-events: auto;
  }

  .menu-container-wrapper {
    display: flex;
    flex-direction: row; /* Set the main axis to row */
    justify-contents: center;
    width: 100%;
  }
`;

const HamburgerMenuStyles = {
  HamburgerWrapper,
};

export default HamburgerMenuStyles;
