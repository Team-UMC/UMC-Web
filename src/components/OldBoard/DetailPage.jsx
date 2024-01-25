import React, { useState, useRef } from 'react';
import schoolIcon from 'assets/titleIcon/schoolIcon.svg';
import { TextDetail } from 'components/BoardTextDetail/TextDetail.jsx';
import Comment from 'components/BoardTextDetail/Comment';
import CommentWrite from 'components/BoardTextDetail/CommentWrite';
import {
  BoardTitleBigWrapper,
  BoardTitleMediumWrapper,
  BoardTitleSmallWrapper,
  FreeText,
  BoardText,
  BoardSubText,
  BoxContainer,
} from 'components/OldBoard/DetailPage.style';

const DetailPage = () => {
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0); // 댓글 수를 관리하는 state 추가
  const commentBoxRef = useRef(null);
  const commentWriteRef = useRef(null);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
    setCommentCount(commentCount + 1); // 댓글 수 업데이트
  };
  
  return (
    <div style={{ backgroundColor: '#F2F5FC' }}>
      <BoardTitleBigWrapper>
        <img src={schoolIcon} alt="학교 이모티콘" />
        <BoardTitleMediumWrapper>
          <BoardTitleSmallWrapper>
            <FreeText> 자유 </FreeText>
            <BoardText> 게시판 </BoardText>
          </BoardTitleSmallWrapper>
          <BoardSubText> 챌린저들과 자유롭게 의견을 나눠보세요! </BoardSubText>
        </BoardTitleMediumWrapper>
      </BoardTitleBigWrapper>

      <BoxContainer ref={commentBoxRef}>
        <TextDetail
          ProfileImg={require('assets/ProfileImg.svg')}
          NameNickname="리오/이원영"
          CohortPartText="5기 Web"
          commentCount={commentCount}
        />
      </BoxContainer>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          NameNicknameText={comment.name}
          CohortPartText={comment.cohort}
          CustomTextContent={comment.content}
        />
      ))}
      {/* <div ref={commentWriteRef}></div> */}

      <CommentWrite
        NameNicknameText="델로/오정현"
        CohortPartText="5기 Design"
        onCommentSubmit={handleCommentSubmit}
        commentCount={commentCount}
        setCommentCount={setCommentCount}
        ref={commentWriteRef}
      />
    </div>
  );
};

export { DetailPage, BoxContainer };