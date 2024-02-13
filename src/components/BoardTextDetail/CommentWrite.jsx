// 댓글 작성하는 부분을 구현한 파일

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BoxContainer } from 'components/BoardTextDetail/DetailPage.style';
import { ReactComponent as SubmitBtn } from 'assets/SubmitBtn.svg';
import ProfileContainer from './ProfileContainer';

import ProfileImg from 'assets/ProfileImg.svg';

// 댓글 작성칸(작성자 정보, 댓글입력창, 등록버튼)을 모두 감싸는 박스
const CommentWriteContainer = styled(BoxContainer)`
  // 박스 위 아래로 margin을 줘서 스타일링
  margin: 10vh 0;
`;

// CommentInput과 등록버튼을 스타일링
const CommentInputNBtnWrapper = styled.div`
  // row로 배열
  display: flex;
  flex-direction: row;

  // CommentWriteContainer의 너비의 100%를 사용
  width: 100%;

  // 댓글입력창과 등록버튼 사이의 간격을 지정
  gap: 1vw;

  // 작성자 정보와 (댓글입력창&등록버튼) 사이의 간격을 지정
  padding-top: 2vh;
`;

// 댓글입력창 스타일링
const CommentInput = styled.input`
  // 부모요소(CommentWriteContainer(작성자 정보, 댓글입력창, 등록버튼))의 남은 공간을 모두 채우기 위해 사용
  flex: 1;

  //댓글입력창에 padding을 지정
  padding: 1%;

  background-color: #f0f4ff;

  //border 스타일링
  border: none;
  border-radius: 10px;

  // 텍스트 줄 높이를 현재 폰트 크기의 30%로 설정
  line-height: 30%;

  // 글씨가 아무것도 입력되지 않았을 때 나오는 글씨 색 스타일링
  &::placeholder {
    color: #4b4b4b;
  }
`;

// 등록버튼 스타일링
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
  // 입력된 댓글 내용을 저장하는 상태
  const [comment, setComment] = useState('');

  // 입력란을 참조하기 위한 Ref 객체
  const inputRef = useRef(null);

  // 버튼을 참조하기 위한 Ref 객체
  const buttonRef = useRef(null);

  // 입력된 댓글 내용이 변경될 때 호출되는 함수
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Enter 키를 눌렀을 때 댓글을 제출하는 함수
  const handleEnterPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (comment.trim() !== '') {
        // 댓글 제출 함수 호출
        onCommentSubmit({
          name: NameNicknameText,
          cohort: CohortPartText,
          content: comment,
        });

        // 댓글 입력 초기화
        setComment('');

        // 댓글 수 업데이트
        setCommentCount(commentCount + 1);
      }
    }
  };

  // 버튼을 클릭했을 때 댓글을 제출하는 함수
  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      // 댓글 제출 함수 호출
      onCommentSubmit({
        name: NameNicknameText,
        cohort: CohortPartText,
        content: comment,
      });

      // 댓글 입력 초기화
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
