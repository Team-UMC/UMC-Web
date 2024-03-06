import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Like from 'assets/Like.svg';
import Comment from 'assets/Comment.svg';
import ViewCount from 'assets/ViewCount.svg';
import CommentBtnImg from 'assets/CommentBtnImg.svg';
import LikeBtnImgNotLiked from 'assets/LikeBtnImgNotLiked.svg';
import LikeBtnImgLiked from 'assets/LikeBtnImgLiked.svg';

import BasicProfileImage from 'assets/Profile/ProfileImage.svg';

import OptionButtonImage from 'assets/OptionButton.svg';
import { useNavigate } from 'react-router-dom';

// TextDetail을 스타일링하기 위한 박스
const BoxContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: 1.5vw;
  word-wrap: break-word;
  border-radius: 15px;
`;

// 전체를 스타일링 하는 컴포넌트(가장 상위 요소)
const AllWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileImgTextWrapper = styled.div`
  display: flex;
  position: relative;
  // 프로필 사진과 (닉네임/이름, 기수/파트)그룹 사이의 간격을 조절하기 위해 사용
  gap: 0.3vw;
`;

// 닉네임/이름, 기수/파트를 그룹화 하기 위해 사용
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// 닉네임/이름에 스타일링하기 위해 사용
const NameNickname = styled.p`
  // 글씨 스타일링
  color: #000000;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: -1.4px;
`;

// 글의 제목을 나타내는 컴포넌트
const TextTitle = styled.h2`
  padding: 1% 0;
  font-weight: bold;
`;

// 글의 내용을 나타내는 컴포넌트
const TextContent = styled.p`
  padding: 1% 0;
`;

// 기수/파트에 스타일링하기 위해 사용
const CohortPart = styled.p`
  // 글씨 스타일링
  color: #9d9d9d;
  font-size: 0.9em;
  font-weight: 600;
  letter-spacing: -1.4px;
`;

// 좋아요수, 댓글수, 조회수를 묶어서 정렬하기 위해 사용
const LikeCommentViewCountWrapper = styled.div`
  display: inline-flex;
  width: 50%;
  flex-direction: row;
  gap: 1vw;
  justify-content: flex-start;
  padding: 1% 0;
`;

// 좋아요수, 댓글수, 조회수를 각각 정렬하기 위해 사용
const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 0.1vw;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

// 날짜글씨 스타일링
const Date = styled.p`
  color: #bcbcbc;
  display: flex;
  margin-left: auto;
`;

const OptionWrapper = styled.div`
  background-color: white;
  border: 1px solid white;
  border-radius: 10px;

  position: absolute;
  right: -80px;
  top: -5px;

  padding: 7px;
`;

const BoardDetail = ({ boardLike, boardDetailData, getBoardDetail }) => {
  const navigate = useNavigate();
  // 우측 삭제/수정 옵션 모달 상태
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  const currentURL = window.location.href;
  const urlParts = currentURL.split('/');

  const host = urlParts[4];
  const board = urlParts[5];
  const boardId = urlParts[6];

  // const host = boardDetailData.host;
  // const board = boardDetailData.board;
  // const boardId = boardDetailData.boardId;

  const handleModifyButton = () => {
    navigate(`/board/modify/${host}/${board}/${boardId}`);
  };

  // 스크롤을 페이지 바닥으로 이동시키는 함수
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    getBoardDetail();
  }, []);

  return (
    <BoxContainer>
      <AllWrapper>
        <ProfileImgTextWrapper>
          <img
            src={
              boardDetailData.profileImage
                ? boardDetailData.profileImage
                : BasicProfileImage
            }
            style={{ width: '50px', height: '50px' }}
          />

          <ProfileWrapper>
            <NameNickname> {boardDetailData.writer} </NameNickname>
            <CohortPart>
              {boardDetailData.semester} &#124; {boardDetailData.part}
            </CohortPart>
          </ProfileWrapper>

          <img
            src={OptionButtonImage}
            alt="더보기"
            style={{ marginLeft: 'auto', cursor: 'pointer' }}
            onClick={handleButtonClick}
          />
          {isOptionOpen && (
            <OptionWrapper>
              <div onClick={handleButtonClick}>
                <div style={{ cursor: 'pointer' }} onClick={handleModifyButton}>
                  수정하기
                </div>
                <hr />
                <div style={{ cursor: 'pointer', color: 'red' }}>삭제하기</div>
              </div>
            </OptionWrapper>
          )}
        </ProfileImgTextWrapper>

        <TextTitle> {boardDetailData.title} </TextTitle>

        {boardDetailData.boardFiles &&
          boardDetailData.boardFiles.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                maxWidth: '80%',
                maxHeight: '80%',
                width: 'auto',
                height: 'auto',
              }}
            />
          ))}

        <TextContent> {boardDetailData.content} </TextContent>

        <LikeCommentViewCountWrapper>
          <Wrapper>
            <img src={Like} alt="좋아요" />
            <span style={{ color: '#000C76' }}>
              {boardDetailData.heartCount}
            </span>
          </Wrapper>
          <Wrapper>
            <img src={Comment} alt="댓글" />
            <span style={{ color: '#FFC700' }}>
              {boardDetailData.commentCount}
            </span>
          </Wrapper>
          <Wrapper>
            <img src={ViewCount} alt="조회수" />
            <span style={{ color: '#4B4B4B' }}>{boardDetailData.hitCount}</span>
          </Wrapper>
        </LikeCommentViewCountWrapper>

        <BottomWrapper>
          <LikeCommentViewCountWrapper>
            <img
              src={boardDetailData.liked ? LikeBtnImgLiked : LikeBtnImgNotLiked}
              alt="좋아요버튼"
              style={{ cursor: 'pointer', height: '30px' }}
              onClick={boardLike}
            />
            <img
              src={CommentBtnImg}
              alt="댓글 버튼"
              onClick={scrollToBottom}
              style={{ cursor: 'pointer', height: '30px' }}
            />
          </LikeCommentViewCountWrapper>

          <Date>{boardDetailData.createdAt}</Date>
        </BottomWrapper>
      </AllWrapper>
    </BoxContainer>
  );
};

BoardDetail.propTypes = {
  boardLike: PropTypes.func.isRequired,
  getBoardDetail: PropTypes.func.isRequired,
  boardDetailData: PropTypes.object.isRequired,
};

export default BoardDetail;
