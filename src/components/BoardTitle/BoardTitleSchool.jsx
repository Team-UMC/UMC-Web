import React from "react";
import styled from "styled-components";
import schoolIcon from "../../assets/titleIcon/schoolIcon.svg";

const BoardTitleSchoolContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const BoardTitleSchoolWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const BoardTitleSchoolMain = styled.h1`
    color: #7682F6;
    font-size: 34px;
    font-family: 'Pretendard';
    font-weight: 600;
    word-wrap: break-word;
`;

const BoardTitleSchoolSub = styled.p`
  color: #9D9D9D;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const BoardTitleSchool = () => {
    return (
      <BoardTitleSchoolContainer>
        <div className="board-title-icon">
            <img src={schoolIcon} alt="schoolIcon" />
        </div>
        <BoardTitleSchoolWrapper>
          <BoardTitleSchoolMain>
            자유게시판
          </BoardTitleSchoolMain>
          <BoardTitleSchoolSub>
            챌린저들과 자유롭게 의견을 나눠보세요!
          </BoardTitleSchoolSub>
        </BoardTitleSchoolWrapper>
      </BoardTitleSchoolContainer>
    );
};

export default BoardTitleSchool;