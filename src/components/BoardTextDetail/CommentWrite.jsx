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
import SubmitBtn from 'assets/SubmitBtn.svg';

const TextNBtnWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  gap: 1vw;
`;

const CommentWriteContainer = styled(BoxContainer)`
  margin: 10vh 0;
`;

const CommentWrite = ({
  NameNicknameText,
  CohortPartText,
  onCommentSubmit,
  commentCount,
  setCommentCount,
}) => {
  const [comment, setComment] = useState('');
  const inputRef = useRef(null);
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

        // 댓글 수 업데이트
        setCommentCount(commentCount + 1);
      }
    }
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      onCommentSubmit({
        name: NameNicknameText,
        cohort: CohortPartText,
        content: comment,
      });
      setComment('');

      // 댓글 수 업데이트
      setCommentCount(commentCount + 1);
    }
  };

  useEffect(() => {
    // 첫 렌더 이후에 버튼 높이를 설정
    if (buttonRef.current) {
      buttonRef.current.style.height = `${inputRef.current.scrollHeight}px`;
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
        <input
          ref={inputRef}
          type="text"
          placeholder="댓글을 입력해주세요"
          value={comment}
          onChange={handleCommentChange}
          onKeyDown={handleEnterPress}
          style={{
            width: '100%',
            padding: '1%',
            backgroundColor: '#F0F4FF',
            border: 'none',
            borderRadius: '5px',
            lineheight:'30%',
            '::placeholder': {
              color: '#4B4B4B',
            },
          }}
        />
        <img
          src={SubmitBtn}
          alt="등록버튼"
          ref={buttonRef}
          onClick={handleCommentSubmit}
        />
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