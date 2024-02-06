import { React, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  CommentInput,
  SubmitBtnImg,
  CommentWriteContainer,
  CommentInputNBtnWrapper,
  SubmitBtn,
} from 'components/BoardTextDetail/CommentWrite';

const MessageWriteContainer = styled(CommentWriteContainer)`
  width: 50%;
  margin: 10vh auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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
        <CommentInput
          ref={inputRef}
          type="text"
          placeholder="댓글을 입력해주세요"
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleEnterPress}
          // onMessageSubmit={handleMessageSubmit}
        />
        <SubmitBtnImg
          src={SubmitBtn}
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
