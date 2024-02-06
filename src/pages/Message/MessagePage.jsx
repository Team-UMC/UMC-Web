import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Message from 'components/Message/Message';
import PropTypes from 'prop-types';
import messageIcon from 'assets/messageIcon.svg';
import {
  BoardTitleBigWrapper,
  BoardTitleMediumWrapper,
  BoardTitleSmallWrapper,
  BoardText,
  BoardSubText,
} from 'components/BoardTextDetail/DetailPage.style';
import MessageWrite from 'components/Message/MessageWrite';
// import BoardTitleSchool from 'components/BoardTitle/BoardTitleSchool';

const BackgroundStyle = styled.div`
  background-color: #f2f5fc;
  height: 100vh;
  margin-top: 9vh;
`;

const UserName2 = styled.h2`
  display: flex;
  justify-content: center;
`;

const MessageBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
`;

const MessageBox = styled.div`
  width: 40%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #ffffff;
`;

const AlignContainer = styled.div`
  margin: 0 20%;
`;

const MessagePage = ({ UserInformation }) => {
  //eslint-disable-next-line
  const [isVisible, setIsVisible] = useState(false);
  const messageWriteRef = useRef(null);
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    // 메시지가 업데이트 될 때 마다 MessagePreviewPage에서 사용할 최근 메시지를 업데이트
    if (messageWriteRef.current) {
      messageWriteRef.current.setLatestMessage(messages[messages.length - 1]);
    }
  }, [messages]);
  const handleMessageClick = () => {
    setIsVisible(true);
    // background-color: #EAEAFF;
  };

  return (
    <BackgroundStyle>
      <AlignContainer>
        <BoardTitleBigWrapper>
          <img src={messageIcon} alt="쪽지 아이콘" />
          <BoardTitleMediumWrapper>
            <BoardTitleSmallWrapper>
              <BoardText> 쪽지함 </BoardText>
            </BoardTitleSmallWrapper>
            <BoardSubText> 궁금한 점을 물어보세요 </BoardSubText>
          </BoardTitleMediumWrapper>
        </BoardTitleBigWrapper>
        <MessageBoxStyle>
          <MessageBox>
            <UserName2>쪽지 목록</UserName2>

            <Message onClick={handleMessageClick} />
            <Message onClick={handleMessageClick} />
          </MessageBox>

          <MessageBox>
            <UserName2> {UserInformation || '익명'} </UserName2>
            {messages.map((message, index) => (
              <Message
                UserInformation={
                  <h3 style={{ color: '#8784FF' }}>보낸 쪽지</h3>
                }
                key={index}
                Content={message.content}
              />
            ))}
            <MessageWrite
              onMessageSubmit={handleMessageSubmit}
              ref={messageWriteRef}
            />
          </MessageBox>
        </MessageBoxStyle>
      </AlignContainer>
    </BackgroundStyle>
  );
};

MessagePage.propTypes = {
  UserInformation: PropTypes.string,
};

export default MessagePage;
