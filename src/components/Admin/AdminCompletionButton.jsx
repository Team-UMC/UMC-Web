// 관리자 운영 페이지 - 공지사항 핀 고정에서 사용되는 완료 버튼 컴포넌트
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AdminCompletionButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: none;
  border-radius: 12px;
  padding: 16px 16px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: #ebebeb;
  }
`;

const AdminCompletionButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 4px;
`;

const AdminCompletionFont = styled.div`
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  color: #8784ff;
  line-height: 22.4px;
  word-wrap: break-word;
`;

// onClick: 완료 버튼 클릭 시 실행되는 함수
// 완료 버튼 클릭 시, 알림창이 뜨고 페이지를 새로고침하는 함수
const AdminCompletionButton = ({ onClick }) => {
  const handleClick = () => {
    onClick();
    alert('변경된 데이터가 저장되었습니다.');
    window.location.reload();
  };

  return (
    <AdminCompletionButtonWrapper onClick={handleClick}>
      <AdminCompletionButtonContent>
        <AdminCompletionFont>완료</AdminCompletionFont>
      </AdminCompletionButtonContent>
    </AdminCompletionButtonWrapper>
  );
};

AdminCompletionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AdminCompletionButton;
