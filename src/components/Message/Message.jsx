import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Date } from 'components/BoardTextDetail/Comment';

const MessagePreview = styled.div`
  display: flex;
  justify-content: center;
  padding: 1vh;
  margin: auto;
  border: 2px solid #d8d8ff;
  border-width: 0 0 2px;

  word-wrap:break-word;
`;

const UserInfoDateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.h3``;

const MessageContentPreview = styled.p`
  /* width:100%; */
  display: flex;
  padding: 1vw 0;
  color: #4b4b4b;
  /* white-space:wrap; */
  /* overflow: hidden;
  text-overflow: ellipsis;
  
  overflow-wrap: break-word;
  flex-shrink: 0; */
`;

const ColumnAlign = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`;

const Message = ({ date, UserInformation, Content }) => {
  return (
    <div>
      <MessagePreview>
        <ColumnAlign>
          <UserInfoDateWrapper>
            <UserInfo>{UserInformation || '익명'}</UserInfo>
            <Date>{date || '23. 01. 16'}</Date>
          </UserInfoDateWrapper>
          <MessageContentPreview>
            {Content ||
              '뭐해 뭐해 뭐해 뭐해sssssasdadzxczxczxczxczxcsssssssssssss'}
          </MessageContentPreview>
        </ColumnAlign>
      </MessagePreview>
    </div>
  );
};

Message.propTypes = {
  date: PropTypes.string,
  UserInformation: PropTypes.string,
  Content: PropTypes.string,
};

export default Message;
