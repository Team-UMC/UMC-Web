import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WhiteBackground = styled.div`
  width: fit-content;
  position: fixed;
  background: white;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #000;
`;

const MiniHambergerMenuModal = ({ onClose, content }) => {
  return (
    <WhiteBackground className="white-bg">
      <h4>{content}</h4>
      <div onClick={onClose}>모달 닫기</div>
      <div>예</div>
      <div>아니오</div>
    </WhiteBackground>
  );
};

MiniHambergerMenuModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default MiniHambergerMenuModal;
