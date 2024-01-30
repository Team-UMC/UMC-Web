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
      <button onClick={onClose}>모달 닫기</button>
      <button>예</button>
      <button>아니오</button>
    </WhiteBackground>
  );
};

MiniHambergerMenuModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default MiniHambergerMenuModal;
