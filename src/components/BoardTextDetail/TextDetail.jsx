import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Like from 'assets/Like.svg';
import Comment from 'assets/Comment.svg';
import ViewCount from 'assets/ViewCount.svg';
import CommentBtnImg from 'assets/CommentBtnImg.svg';
import LikeBtnImgNotLiked from 'assets/LikeBtnImgNotLiked.svg';
import LikeBtnImgLiked from 'assets/LikeBtnImgLiked.svg';
import ProfileImg from 'assets/ProfileImg.svg';
import {
  AllWrapper,
  TextTitle,
  TextContent,
  LikeCommentDateWrapper,
  Date,
  LikeCommentViewCountWrapper,
  Wrapper,
  RowAlignBox,
} from 'components/BoardTextDetail/TextDetail.style';
import ProfileContainer from './ProfileContainer';
import MiniHambergerBtn from './MiniHambergerBtn';
import ModifyDeleteModal from 'components/BoardTextDetail/ModifyDeleteModal';


const TextDetail = ({ commentCount, date }) => {
  // 좋아요 수와 좋아요 상태를 관리하는 state
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  // 수정 모드와 모달 열림 상태를 관리하는 state
  const [isModify, setIsModify] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 수정하기 버튼 클릭 시 호출되는 함수
  const handleModifyClickTextDetail = () => {
    setIsModify(true);
    setIsModalOpen(true);
  };

  // 삭제하기 버튼 클릭 시 호출되는 함수
  const handleDeleteClickTextDetail = () => {
    setIsModify(false);
    setIsModalOpen(true);
  };

   // 좋아요 버튼 클릭 시 호출되는 함수
  const handleLikeClick = () => {
    setLiked(!liked);
    if (liked) {
      setLikes(likes - 1); // 좋아요 상태가 true였다면, 좋아요 수를 1 감소
    } else {
      setLikes(likes + 1); // 좋아요 상태가 false였다면, 좋아요 수를 1 증가
    }
  };

  // 스크롤을 페이지 바닥으로 이동시키는 함수
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

    // 모달을 닫는 함수
  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <AllWrapper>
      <RowAlignBox>
        <ProfileContainer
          ProfileImgFile={ProfileImg}
          NameNicknameText="리오/이원영"
          CohortPartText="5기 &#124; Web"
        />
        <div>
          <MiniHambergerBtn
            handleModifyClick={handleModifyClickTextDetail}
            handleDeleteClick={handleDeleteClickTextDetail}
          />
        </div>
      </RowAlignBox>
      <TextTitle> 그냥 집에 보내주세요ㅠ.ㅠ </TextTitle>
      <TextContent>
        그냥.. 집에 가고 싶어요..집에 보내주세요 엉엉엉 저 진짜 열심히 했어요..
        열심히 했으니까 보내주세요..0마ㅣ람넝ㅁㅇㄴㄹㄴㅇㄹㄴㅇㄹㄹㅇㅇ
      </TextContent>
      <LikeCommentViewCountWrapper>
        <Wrapper>
          <img src={Like} alt="좋아요" />
          <span style={{ color: '#000C76' }}>{likes.toString()}</span>
        </Wrapper>
        <Wrapper>
          <img src={Comment} alt="댓글" />
          <span style={{ color: '#FFC700' }}>{commentCount}</span>
        </Wrapper>
        <Wrapper>
          <img src={ViewCount} alt="조회수" />
          <span style={{ color: '#4B4B4B' }}>2000</span>
        </Wrapper>
      </LikeCommentViewCountWrapper>
      <LikeCommentDateWrapper>
        <LikeCommentViewCountWrapper>
          <img
            src={liked ? LikeBtnImgLiked : LikeBtnImgNotLiked}
            alt="좋아요버튼"
            onClick={handleLikeClick}
            style={{ cursor: 'pointer', height: '30px' }}
          />
          <img
            src={CommentBtnImg}
            alt="댓글 버튼"
            onClick={scrollToBottom}
            style={{ cursor: 'pointer', height: '30px' }}
          />
        </LikeCommentViewCountWrapper>
        <Date>{date || '2023. 1. 16'}</Date>
      </LikeCommentDateWrapper>
      {isModalOpen && (
        <ModifyDeleteModal isModify={isModify} closeModal={onClose} />
      )}
    </AllWrapper>
  );
};

TextDetail.propTypes = {
  IncrementCount: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  setCommentCount: PropTypes.func,
  date: PropTypes.string,
};

export { TextDetail, TextContent, Date };
