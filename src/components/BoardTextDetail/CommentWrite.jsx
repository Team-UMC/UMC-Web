import React, { useState, useRef, useEffect } from 'react';
import { BoxContainer } from 'pages/DetailPage/DetailPage.style';
import {
  ProfileBigWrapper,
  ProfileSmallWrapper,
  ProfileImage,
  NameNickname,
  CohortPart,
} from './TextDetail';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextNBtnWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  gap: 1vw;
`;

const CommentWriteContainer = styled(BoxContainer)`
  margin-top: 10vh;
`;

const CommentWrite = ({
  NameNicknameText,
  CohortPartText,
  onCommentSubmit,
  commentCount,
  setCommentCount,
}) => {
  const [comment, setComment] = useState('');
  const textareaRef = useRef(null);
  const buttonRef = useRef(null);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (comment.trim() !== '') {
        onCommentSubmit({
          name: NameNicknameText,
          cohort: CohortPartText,
          content: comment,
        });
        setComment('');

        // 댓글 제출 후 textarea의 크기를 초기화
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
        }
        // 댓글 수 업데이트
        setCommentCount(commentCount + 1);
      }
    }

    // 엔터키를 눌렀을 때도 textarea의 크기를 조정
    handleResizeHeight();
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      onCommentSubmit({
        name: NameNicknameText,
        cohort: CohortPartText,
        content: comment,
      });
      setComment('');

      // 댓글 제출 후 textarea의 크기를 초기화
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }

      // 댓글 수 업데이트
      setCommentCount(commentCount + 1);
    }
  };

  const handleResizeHeight = () => {
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    // 첫 렌더 이후에 버튼 높이를 설정
    if (buttonRef.current) {
      buttonRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  return (
    <CommentWriteContainer>
      <ProfileBigWrapper>
        <ProfileImage alt="프로필 사진" />
        <ProfileSmallWrapper>
          <NameNickname> {NameNicknameText || '리오 이원영'} </NameNickname>
          <CohortPart> {CohortPartText || '5기 Web'} </CohortPart>
        </ProfileSmallWrapper>
      </ProfileBigWrapper>
      <TextNBtnWrapper>
        <textarea
          ref={textareaRef}
          placeholder="댓글을 입력해주세요"
          value={comment}
          onChange={handleCommentChange}
          onKeyDown={handleEnterPress}
          onInput={handleResizeHeight}
          rows={1}
          style={{
            width: '100%',
            padding: '0.5%',
            backgroundColor: '#F0F4FF',
            resize: 'none',
            border: 'none',
            borderRadius: '5px',
            '::placeholder': {
              color: '#4B4B4B',
            },
          }}
        />
        <button
          ref={buttonRef}
          style={{
            backgroundColor: '#919CFF',
            textAlign: 'left',
            padding: '1%',
            border: 'none',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            color: '#F0F4FF',
            whiteSpace: 'nowrap',
          }}
          onClick={handleCommentSubmit}
        >
          등록
        </button>
      </TextNBtnWrapper>
    </CommentWriteContainer>
  );
};

CommentWrite.propTypes = {
  NameNicknameText: PropTypes.string.isRequired,
  CohortPartText: PropTypes.string.isRequired,
  onCommentSubmit: PropTypes.func.isRequired,
  commentCount: PropTypes.number.isRequired,
  setCommentCount: PropTypes.func.isRequired,
};

export default CommentWrite;
