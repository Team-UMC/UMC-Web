// 관리자 운영 페이지 - 공지사항 핀 고정에서 사용되는 완료 버튼 컴포넌트
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// 완료 버튼을 감싸는 컴포넌트
const AdminCompletionButtonWrapper = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* 외형 스타일링 */
  background: white;
  border: none;
  border-radius: 12px;
  padding: 16px 16px;
  cursor: pointer;

  /* 애니메이션 */
  transition: all 0.1s ease-in-out;

  /* 호버 시, 배경색 효과 */
  &:hover {
    background-color: #f5f5f5;
  }

  /* 활성화(클릭) 시, 배경색 효과 */
  &:active {
    background-color: #ebebeb;
  }
`;

// 완료 버튼 내용을 감싸는 컴포넌트
const AdminCompletionButtonContent = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 4px;
`;

// 완료 버튼의 텍스트 스타일링
const AdminCompletionFont = styled.div`
  /* 폰트 스타일링 */
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  color: #8784ff;
  line-height: 22.4px;
  word-wrap: break-word;
`;

// 완료 버튼 컴포넌트
// onClick: 완료 버튼 클릭 시 실행되는 함수
const AdminCompletionButton = ({ onClick }) => {
  // 완료 버튼 클릭 시, 실행되는 함수
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

// 완료 버튼 props 검사
AdminCompletionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AdminCompletionButton;
