import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuContainer = styled.div`
  z-index: 5;
  border-radius: 15px;
  background-color: #e7e4e1;
  width: 10%;
  top: 100%;
  position: absolute;
  transition: 0.5s ease;
`;

const List = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const LogoutButton = styled.div`
  display: flex;
  cursor: pointer;
`;

const RightModal = ({ isModalOpen, setIsModalOpen }) => {
  const navigate = useNavigate();
  const outside = useRef();

  const handleLogout = () => {
    localStorage.removeItem('server Token');
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (outside.current && !outside.current.contains(e.target)) {
        toggleSide();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [outside, setIsModalOpen]);

  const toggleSide = () => {
    setIsModalOpen(false);
  };

  return (
    <MenuContainer
      ref={outside}
      style={{ display: isModalOpen ? 'flex' : 'none' }}
    >
      <List> 1 </List>
      <List> 2 </List>
      <List> 3 </List>
      <List> 3 </List>
      <List> 3 </List>
      <List> 3 </List>
      <List> 3 </List>
      <LogoutButton onClick={handleLogout}> 로그아웃 </LogoutButton>
    </MenuContainer>
  );
};

RightModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default RightModal;
