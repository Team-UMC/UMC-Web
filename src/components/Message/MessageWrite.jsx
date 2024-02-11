import { React, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  CommentWriteContainer,
  CommentInputNBtnWrapper,
} from 'components/BoardTextDetail/CommentWrite';
import SendBtnActive from 'assets/Message/SendBtnActive.svg';
import SendBtnInactive from 'assets/Message/SendBtnInactive.svg';

const MessageWriteContainer = styled(CommentWriteContainer)`
  /* display:flex;
  align-contents:flex-end; */
  margin-bottom: 0;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */

`;

const SendBtnImg = styled.img`
  cursor: pointer;
  height: fit-content;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 2%;
  background-color: #f1f1f1;
  border: none;
  border-radius: 10px;
  line-height: 30%;
  &::placeholder {
    color: #4b4b4b;
  }
`;

const MessageWrite = ({ onMessageSubmit }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() !== '') {
        onMessageSubmit({
          content: message,
        });
        setMessage('');
      }
    }
  };

  const handleMessageSubmit = (newMessage) => {
    setMessages([...messages, newMessage]);
    if (message.trim() !== '') {
      onMessageSubmit({
        content: message,
      });
      setMessage('');
    }
  };

  useEffect(() => {
    // 첫 렌더 이후에 버튼 높이를 설정
    if (buttonRef.current) {
      buttonRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, []);
  return (
    <MessageWriteContainer>
      <CommentInputNBtnWrapper>
        <MessageInput
          ref={inputRef}
          type="text"
          placeholder="쪽지 보내기"
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleEnterPress}
          // onMessageSubmit={handleMessageSubmit}
        />
        <SendBtnImg
          src={message.trim() !== '' ? SendBtnActive : SendBtnInactive}
          alt="등록버튼"
          ref={buttonRef}
          onClick={handleMessageSubmit}
        />
      </CommentInputNBtnWrapper>
    </MessageWriteContainer>
  );
};
MessageWrite.propTypes = {
  // date: PropTypes.string,
  onMessageSubmit: PropTypes.func.isRequired,
};

export default MessageWrite;
