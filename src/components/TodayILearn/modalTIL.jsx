import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 5px 10px;
  cursor: pointer;
`;

const ConfirmModal = ({ onCancel, onConfirm }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <p>진짜 삭제 하시겠습니까?</p>
        <Button onClick={onCancel}>취소</Button>
        <Button onClick={onConfirm}>확인</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

ConfirmModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmModal;
