// 댓글 작성하는 부분을 구현한 파일

import React, { useState, useRef, useEffect } from 'react';
import { BoxContainer } from 'components/BoardTextDetail/DetailPage.style';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as SubmitBtn } from 'assets/SubmitBtn.svg';
import ProfileContainer from './ProfileContainer';
import ProfileImg from 'assets/ProfileImg.svg';

const CommentWriteContainer = styled(BoxContainer)`
  margin: 10vh 0;
`;

const CommentInputNBtnWrapper = styled.div`
  // CommentInput과 등록버튼을 그룹화하기 위해 사용
  display: flex;
  flex-direction: row; // row로 배열
  width: 100%; //
  gap: 1vw;
  padding-top: 1%;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 1%;
  background-color: #f0f4ff;
  border: none;
  border-radius: 10px;
  line-height: 30%;
  &::placeholder {
    color: #4b4b4b;
  }
`;

const SubmitBtnImg = styled(SubmitBtn)`
  cursor: pointer;
  height: fit-content;
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
      <ProfileContainer
        ProfileImgFile={ProfileImg}
        NameNicknameText="리오/이원영"
        CohortPartText="5기 &#124; Web"
      />
      <CommentInputNBtnWrapper>
        <CommentInput
          ref={inputRef}
          type="text"
          placeholder="댓글을 입력해주세요"
          value={comment}
          onChange={handleCommentChange}
          onKeyDown={handleEnterPress}
        />
        <SubmitBtnImg
          src={SubmitBtn}
          alt="등록버튼"
          ref={buttonRef}
          onClick={handleCommentSubmit}
        />
      </CommentInputNBtnWrapper>
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

export {
  CommentWrite,
  CommentInput,
  CommentInputNBtnWrapper,
  SubmitBtnImg,
  SubmitBtn,
  CommentWriteContainer,
};
