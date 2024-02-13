// 댓글 파일

import { React, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { TextContent } from 'components/BoardTextDetail/TextDetail';
import ProfileContainer from './ProfileContainer';
import MiniHambergerBtn from './MiniHambergerBtn';
import ModifyDeleteModal from 'components/BoardTextDetail/ModifyDeleteModal';

import ProfileImg from 'assets/ProfileImg.svg';

// 댓글의 전체(작성자 정보, 댓글 내용, 날짜)를 감싸는 박스
const Container = styled.div`
  // 박스 요소를 column으로 배열
  display: flex;
  flex-direction: column;

  font-family: 'Pretendard';

  // padding을 2vw로 준다
  padding: 2vw;

  //댓글 아래에 선을 그어 댓글들을 구분
  border: 2px solid #d8d8ff; // 박스 경계 표시 */
  border-width: 0 0 2px;
`;

// 댓글내용을 스타일링
const TextContentWrapper = styled.div`
  // 댓글내용과 ProfileContainer(작성자 정보) 사이의 간격을 조절하기 위해 사용
  padding-top: 1%;
`;

// 댓글이 달린 날짜를 표시하기 위해 사용
const Date = styled.span`
  //글씨 크기&색 스타일링
  font-size: 0.8em;
  color: #9d9d9d;
`;

// 프로필과 MiniHambergerBtn을 묶는 박스
const ProfileHambergerBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 댓글내용과 작성날짜를 프롭으로 사용하는 댓글 컴포넌트
const Comment = ({ CustomTextContent, date }) => {
  const [isModifyComment, setIsModifyComment] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModifyClickComment = () => {
    setIsModifyComment(true);
    setIsModalOpen(true);
  };

  const handleDeleteClickComment = () => {
    setIsModifyComment(false);
    setIsModalOpen(true);
  };

  const onCloseComment = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <ProfileHambergerBox>
        <ProfileContainer
          ProfileImgFile={ProfileImg}
          NameNicknameText="리오/이원영"
          CohortPartText="5기 &#124; Web"
        />
        <div>
          <MiniHambergerBtn
            handleModifyClick={handleModifyClickComment}
            handleDeleteClick={handleDeleteClickComment}
          />
        </div>
      </ProfileHambergerBox>
      <TextContentWrapper>
        <TextContent>
          {CustomTextContent ||
            '그냥.. 집에 가고 싶어요..집에 보내주세요 엉엉엉 저 진짜 열심히 했어요.. 열심히 했으니까 보내주세요..0마ㅣ람넝ㅁㅇㄴㄹㄴㅇㄹㄴㅇㄹㄹㅇㅇ'}
        </TextContent>
      </TextContentWrapper>
      <Date>{date || '2023. 1. 16'}</Date>
      {isModalOpen && (
        <ModifyDeleteModal
          isModify={isModifyComment}
          closeModal={onCloseComment}
        />
      )}
    </Container>
  );
};

Comment.propTypes = {
  CustomTextContent: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleModifyClick2: PropTypes.func.isRequired,
  handleDeleteClick2: PropTypes.func.isRequired,
};

export { Comment, Date };
