import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { Date } from 'components/BoardTextDetail/Comment';
import Message from 'components/Message/Message';
import MessageDetailPage from './MessageDetailPage';
import { useNavigate, Routes, Route } from 'react-router';

const MessageWord = styled.h2`
  margin: 10vh;
  display: flex;
  justify-content: center;
`;

const MessagePreviewPage = (latestMessage) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    // 클릭 시, MessageDetailPage로 이동
    // 예시로 '/message/detail'로 경로를 설정합니다. 실제 경로에 맞게 수정하세요.
    // Link 컴포넌트 사용을 통해 내비게이션을 처리합니다.
    return navigate('/messagedetail');
  };

  return (
    <div>
      <Routes>
        <Route path="/messagedetail" element={<MessageDetailPage />} />
      </Routes>
      <MessageWord> 쪽지함 </MessageWord>
      <Message onClick={handleItemClick} Content={latestMessage?.content} />
 
      <Message />

      <Message />

      <Message />

    </div>
  );
};

export default MessagePreviewPage;
