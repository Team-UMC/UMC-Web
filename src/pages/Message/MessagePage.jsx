import React, { useState, useRef, useEffect } from 'react';
import {
  BackgroundStyle,
  UserName2,
  MessageBoxStyle,
  MessageBox,
  AllDeleteBtn,
  HambergerMenuAlignBox,
  UserInfoAndMenu,
  InputAlignBox,
  //   MessageSelect,
} from './MessagePage.style';
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
import { ReactComponent as MiniHambergerMenu } from 'assets/MiniHamberMenu.svg';
// import styled from 'styled-components';

// const MessageSelect = styled(Message)`
//   background-color: ${(props) => (props.selected ? '#FFFFFF' : '#EAEAFF')};
// `;

const MessagePage = ({ UserInformation }) => {
  //eslint-disable-next-line
  const [isVisible, setIsVisible] = useState(false);
  const messageWriteRef = useRef(null);
  const [messages, setMessages] = useState([
    // { user: 'User1', content: 'Hello, this is User1' },
    // { user: 'User2', content: 'Hello, this is User2' },
  ]);
  const [showBtn, setshowBtn] = useState(false);
  const [latestMessage, setLatestMessage] = useState(null);
  //   const [selected, setSelected] = useState(null);
  //   const [selectedUser, setSelectedUser] = useState(null);

  //   const handleUserSelect = (user) => {
  //     setSelectedUser(user);
  //   };

  //   const MessageClick = () => {
  //     setSelected(!selected);
  //   };

  const handleMessageSubmit = (newMessage) => {
    setMessages([...messages, newMessage]);
    setLatestMessage(newMessage);
  };

  const handleShowBtnClick = () => {
    setshowBtn(!showBtn);
  };

  const handleAllDeleteClick = () => {
    setMessages([]);
    setshowBtn(false);
  };

  useEffect(() => {
    // 메시지가 업데이트 될 때 마다 MessagePreviewPage에서 사용할 최근 메시지를 업데이트
    if (messageWriteRef.current) {
      messageWriteRef.current.setLatestMessage(messages[messages.length - 1]);
    }
  }, [messages]);

  const handleMessageClick = () => {
    // setIsVisible(true);
    // background-color: #EAEAFF;
  };

  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <BackgroundStyle>
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
            {/* {messages.map((message, index) => (
    <MessageSelect
      key={index}
      selected={selected === index}
      onClick={() => setSelected(index)}
    />
  ))} */}
            <Message
              onClick={handleMessageClick}
              Content={latestMessage ? latestMessage.content : ''}
            />
            <Message onClick={handleMessageClick} />
          </MessageBox>

          {/* {isVisible && ( */}
          <MessageBox>
            <InputAlignBox>
              <UserInfoAndMenu>
                <UserName2> {UserInformation || '익명'} </UserName2>
                <HambergerMenuAlignBox>
                  <MiniHambergerMenu onClick={handleShowBtnClick} />
                  {showBtn && (
                    <AllDeleteBtn onClick={handleAllDeleteClick}>
                      전체 삭제
                    </AllDeleteBtn>
                  )}
                </HambergerMenuAlignBox>
              </UserInfoAndMenu>
              {/* {[...messages]
              .reverse()
              .filter((message) => message.user === selectedUser)
              .map((message, index) => ( */}
              {[...messages].reverse().map((message, index) => (
                <Message
                  UserInformation="보낸 쪽지"
                  // {
                  //   <h3 style={{ color: '#00B2B2' }}>보낸 쪽지</h3>
                  // }
                  key={index}
                  Content={message.content}
                />
              ))}

              <MessageWrite
                onMessageSubmit={handleMessageSubmit}
                ref={messageWriteRef}
              />
            </InputAlignBox>
          </MessageBox>
          {/* )} */}
        </MessageBoxStyle>
      </BackgroundStyle>
    </div>
  );
};

MessagePage.propTypes = {
  UserInformation: PropTypes.string,
};

export default MessagePage;
