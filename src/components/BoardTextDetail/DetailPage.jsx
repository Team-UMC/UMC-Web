// 글의 자세한 정보를 제공하는 파일

import React, { useState, useRef } from 'react';
import { TextDetail } from 'components/BoardTextDetail/TextDetail.jsx';
import { Comment } from 'components/BoardTextDetail/Comment';
import { CommentWrite } from 'components/BoardTextDetail/CommentWrite';
import BoardBoxInDetailPage from 'components/BoardTextDetail/BoardBoxInDetailPage';
import {
  BoxContainer,
  AlignWrapper,
  AllAlignBox,
} from 'components/BoardTextDetail/DetailPage.style';
import ModifyDeleteModal from 'components/BoardTextDetail/ModifyDeleteModal';
import BoardTitleInDetailPage from 'components/BoardTextDetail/BoardTitleInDetailPage';

const DetailPage = () => {
  // 댓글들과 댓글 수를 관리하는 state
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);

  // 댓글 박스와 댓글 작성 부분을 참조하는 ref
  const commentBoxRef = useRef(null);
  const commentWriteRef = useRef(null);

  // 수정 모드와 모달 열림 상태를 관리하는 state
  const [isModify, setIsModify] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 수정하기 버튼 클릭 시 호출되는 함수
  const handleModifyClickDetailPage = () => {
    setIsModify(true);
    setIsModalOpen(true);
  };

  // 삭제하기 버튼 클릭 시 호출되는 함수
  const handleDeleteClickDetailPage = () => {
    setIsModify(false);
    setIsModalOpen(true);
  };

  // 모달을 닫는 함수
  const onClose = () => {
    setIsModalOpen(false);
  };

  // 댓글 작성 시 호출되는 함수
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
        paddingTop: '20vh',
      }}
    >
      <>
        <AllAlignBox>
          <BoardTitleInDetailPage />
          <AlignWrapper>
            <BoardBoxInDetailPage />
            <div
              style={{ display: 'flex', flexDirection: 'column', width: '50%' }}
            >
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
                onCommentSubmit={handleCommentSubmit}
                commentCount={commentCount}
                setCommentCount={setCommentCount}
                ref={commentWriteRef}
              />
            </div>
          </AlignWrapper>
        </AllAlignBox>

        {isModalOpen && (
          <>
            <ModifyDeleteModal
              handleModifyClick2={handleModifyClickDetailPage}
              handleDeleteClick2={handleDeleteClickDetailPage}
              isModify={isModify}
              closeModal={onClose}
            />
          </>
        )}
      </>
    </div>
  );
};

export { DetailPage, BoxContainer };
