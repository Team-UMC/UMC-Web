import React, { useState, useRef } from 'react';
import schoolIcon from 'assets/titleIcon/schoolIcon.svg';
import { TextDetail } from 'components/BoardTextDetail/TextDetail.jsx';
import {Comment} from 'components/BoardTextDetail/Comment';
import {CommentWrite} from 'components/BoardTextDetail/CommentWrite';
import BoardBox from 'components/BoardBox/BoardBox';
import {
  BoardTitleBigWrapper,
  BoardTitleMediumWrapper,
  BoardTitleSmallWrapper,
  FreeText,
  BoardText,
  BoardSubText,
  BoxContainer,
  AlignWrapper,
} from 'components/BoardTextDetail/DetailPage.style';
// import BoardTitleSchool from 'components/BoardTitle/BoardTitleSchool';

const DetailPage = () => {
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0); // 댓글 수를 관리하는 state 추가
  const commentBoxRef = useRef(null);
  const commentWriteRef = useRef(null);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
    setCommentCount(commentCount + 1);
  };

  return (
    <div
      style={{
        backgroundColor: '#F2F5FC',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
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
      {/* <BoardTitleSchool /> */}
      <AlignWrapper>
        <BoardBox />
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
          <BoxContainer ref={commentBoxRef}>
            <TextDetail
              ProfileImg={require('assets/ProfileImg.svg')}
              NameNickname="리오/이원영"
              CohortPartText="5기 &#124; Web"
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

          <CommentWrite
            NameNicknameText="델로/오정현"
            CohortPartText="5기 &#124; Design"
            onCommentSubmit={handleCommentSubmit}
            commentCount={commentCount}
            setCommentCount={setCommentCount}
            ref={commentWriteRef}
          />
        </div>
      </AlignWrapper>
    </div>
  );
};

export { DetailPage, BoxContainer };
