import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Message from 'components/Message/Message';
import MessageWrite from 'components/Message/MessageWrite';
import { ReactComponent as BackSpace } from 'assets/BackSpace.svg';
import MessagePreviewPage from 'pages/Message/MessagePreviewPage';
import { Routes, Route, useNavigate } from 'react-router-dom';

const UserName = styled.h2`
  margin: 10vh;
  display: flex;
  justify-content: center;
`;

const BackSpaceImg = styled(BackSpace)`
  margin-top: 10vh;
  cursor: pointer;
`;

const MessageDetailPage = ({ UserInformation }) => {
  const messageWriteRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const handleMessageSubmit = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    // 메시지가 업데이트 될 때 마다 MessagePreviewPage에서 사용할 최근 메시지를 업데이트
    if (messageWriteRef.current) {
      messageWriteRef.current.setLatestMessage(messages[messages.length - 1]);
    }
  }, [messages]);

  const handleBackSpaceClick = () => {
    // BackSpaceImg 클릭 시 '/messagepreview' 경로로 이동
    navigate('/messagepreview');
  };

  return (
    <div>
      <BackSpaceImg onClick={handleBackSpaceClick} />
      <Routes>
        <Route path="/messagepreview" element={<MessagePreviewPage />} />
      </Routes>

      <UserName> {UserInformation || '익명'} </UserName>
      {messages.map((message, index) => (
        <Message
          UserInformation={<h3 style={{ color: '#8784FF' }}>보낸 쪽지</h3>}
          key={index}
          Content={message.content}
        />
      ))}
      <MessageWrite
        onMessageSubmit={handleMessageSubmit}
        ref={messageWriteRef}
      />
    </div>
  );
};
MessageDetailPage.propTypes = {
  UserInformation: PropTypes.string,
};

export default MessageDetailPage;
