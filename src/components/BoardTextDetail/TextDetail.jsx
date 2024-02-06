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
import MiniHambergerMenuBtn from './MiniHambergerMenuBtn';

const TextDetail = ({ commentCount, date }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    const userConfirmed = window.confirm('이 글에 좋아요를 누르시겠습니까?');

    if (userConfirmed) {
      if (!liked) {
        setLikes(likes + 1);
        setLiked(true);
      } else {
        alert('이미 좋아요를 누른 글입니다.');
      }
    }
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <AllWrapper>
      <RowAlignBox>
        <ProfileContainer
          ProfileImgFile={ProfileImg}
          NameNicknameText="리오/이원영"
          CohortPartText="5기 &#124; Web"
        />
        <MiniHambergerMenuBtn />
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
            style={{ cursor: 'pointer' }}
          />
          <img
            src={CommentBtnImg}
            alt="댓글 버튼"
            onClick={scrollToBottom}
            style={{ cursor: 'pointer' }}
          />
        </LikeCommentViewCountWrapper>
        <Date>{date || '2023. 1. 16'}</Date>
      </LikeCommentDateWrapper>
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
