import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BasicProfileImage from 'assets/Profile/ProfileImage.svg';
import OptionButtonImage from 'assets/OptionButton.svg';

// 댓글의 전체(작성자 정보, 댓글 내용, 날짜)를 감싸는 박스
const Container = styled.div`
  width: 100%;

  // 박스 요소를 column으로 배열
  display: flex;
  flex-direction: column;

  padding: 2vw;

  border-bottom: 1px solid #d8d8ff;
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

// 글의 내용을 나타내는 컴포넌트
const TextContent = styled.p`
  padding-bottom: 1%;
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

// 날짜글씨 스타일링
const Date = styled.p`
  color: #bcbcbc;
  display: flex;
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

const CommentBox = ({ commentData, getBoardComment }) => {
  // 우측 삭제/수정 옵션 모달 상태 (댓글 각각에 대해서 정의)
  const [openOptionIndex, setOpenOptionIndex] = useState(null);

  const handleButtonClick = (index) => {
    if (openOptionIndex === index) {
      setOpenOptionIndex(null);
    } else {
      setOpenOptionIndex(index);
    }
  };

  useEffect(() => {
    getBoardComment();
  }, [commentData]);

  return (
    <div>
      {commentData.map((data, index) => (
        <Container key={index}>
          <ProfileImgTextWrapper>
            <img
              src={data.profileImage ? data.profileImage : BasicProfileImage}
              style={{ width: '50px', height: '50px' }}
            />

            <ProfileWrapper>
              <NameNickname>{data.writer}</NameNickname>
              <CohortPart>
                {data.semester} &#124; {data.part}
              </CohortPart>
            </ProfileWrapper>

            <img
              src={OptionButtonImage}
              alt="더보기"
              style={{ marginLeft: 'auto', cursor: 'pointer' }}
              onClick={() => handleButtonClick(index)}
            />
            {openOptionIndex === index && (
              <OptionWrapper>
                <div onClick={() => handleButtonClick(index)}>
                  <div style={{ cursor: 'pointer' }}>수정하기</div>
                  <hr />
                  <div style={{ cursor: 'pointer', color: 'red' }}>
                    삭제하기
                  </div>
                </div>
              </OptionWrapper>
            )}
          </ProfileImgTextWrapper>

          <TextContent>{data.content}</TextContent>

          <Date> {data.createdAt} </Date>
        </Container>
      ))}
    </div>
  );
};

CommentBox.propTypes = {
  commentData: PropTypes.array.isRequired,
  getBoardComment: PropTypes.func.isRequired,
};

export default CommentBox;
