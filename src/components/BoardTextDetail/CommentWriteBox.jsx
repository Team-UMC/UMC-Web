import React, { useEffect, useState } from 'react';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import BasicProfileImage from 'assets/Profile/ProfileImage.svg';

const BoxContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1.5vw;
  word-wrap: break-word;

  border: 3px solid black;
  border-radius: 15px;
`;

const ProfileImgTextWrapper = styled.div`
  display: flex;

  // 프로필 사진과 (닉네임/이름, 기수/파트)그룹 사이의 간격을 조절하기 위해 사용
  gap: 0.3vw;
`;

// 닉네임/이름에 스타일링하기 위해 사용
const NameNickname = styled.p`
  // 글씨 스타일링
  color: #000000;
  font-family: 'Pretendard';
  font-size: 1em;
  font-weight: bold;
  letter-spacing: -1.4px;
`;

// 닉네임/이름, 기수/파트를 그룹화 하기 위해 사용
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// 기수/파트에 스타일링하기 위해 사용
const CohortPart = styled.p`
  // 글씨 스타일링
  color: #9d9d9d;
  font-family: 'Pretendard';
  font-size: 0.9em;
  font-weight: 600;
  letter-spacing: -1.4px;
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

const SubmitButton = styled.div`
  padding: 7px;
  border-radius: 5px;
  background-color: #919cff;
  color: white;
  cursor: pointer;
`;

const CommentWriteBox = () => {
  const currentURL = window.location.href;

  // /로 구분하여 배열로 저장하고 host 값과 board 값 변수에 저장하기
  const urlParts = currentURL.split('/');
  const boardId = urlParts[6];

  const [userData, setUserData] = useState([]);

  const [comment, setComment] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axiosInstance.get(`/members`);

        setUserData(res.data.result);
        console.log(res);
      } catch {
        console.error();
      }
    };
    getUserData();
  }, []);

  const submitComment = async () => {
    try {
      await axiosInstance.post(`/boards/comments`, {
        boardId: boardId,
        content: comment,
      });

      setComment('');
    } catch (error) {
      console.error();
    }
  };

  // 입력된 댓글 내용이 변경될 때 호출되는 함수
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <BoxContainer>
      <ProfileImgTextWrapper>
        <img
          src={
            userData.profileImage ? userData.profileImage : BasicProfileImage
          }
          style={{ width: '50px', height: '50px' }}
        />
        <ProfileWrapper>
          <NameNickname>
            {userData.nickname}/{userData.name}
          </NameNickname>

          <CohortPart>
            {/* {userData.universityName} &#124; {userData.semesterParts[0].part} */}
          </CohortPart>
        </ProfileWrapper>
      </ProfileImgTextWrapper>

      <CommentInputNBtnWrapper>
        <CommentInput
          type="text"
          placeholder="댓글을 입력해주세요"
          value={comment}
          onChange={handleCommentChange}
        />
        <SubmitButton onClick={submitComment}> 등록 </SubmitButton>
      </CommentInputNBtnWrapper>
    </BoxContainer>
  );
};

export default CommentWriteBox;
