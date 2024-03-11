import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SchoolIcon from 'assets/titleIcon/schoolIcon.svg';
import BranchIcon from 'assets/titleIcon/branchIcon.svg';
import UnionIcon from 'assets/titleIcon/unionIcon.svg';
import TitleDot from 'assets/titleIcon/titledot.svg';

// 게시판 제목 컴포넌트 스타일링
const BoardTitleContainer = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 8px;
  padding-bottom: 72px;
`;

// 게시판 제목 아이콘 스타일링
const BoardTitleWrapper = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// 게시판 제목 스타일링
const BoardTitleMainStyle = styled.h1`
  /* 제목 폰트 스타일링 */
  color: #7682f6;
  font-size: 34px;
  font-weight: 600;
  word-wrap: break-word;
`;

// 게시판 제목 하이라이트 스타일링
const HighlightedText = styled.span`
  color: #00095c;
`;

// 게시판 제목 점 스타일링
const TitleWithDot = styled.div`
  position: relative;
  padding-top: 24px;

  /* 점 스타일링 */
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${TitleDot});
    background-size: cover;
  }
`;

// children을 받아서 게시판 이름 출력
const BoardTitleMain = ({ children }) => {
  // 게시판 이름에 '게시판'이 포함되어 있으면 '게시판'을 하이라이트
  const parts = children.split(/(게시판)/);

  return (
    <BoardTitleMainStyle>
      {
        // 게시판 이름 하이라이트
        parts.map((part, i) => (
          <React.Fragment key={i}>
            {part === '게시판' ? (
              <HighlightedText>{part}</HighlightedText>
            ) : (
              part
            )}
            {(part === '공지' ||
              part === '자유' ||
              part === '질문' ||
              part === '워크북' ||
              part === '이전 기수') && <TitleWithDot>{part}</TitleWithDot>}
          </React.Fragment>
        ))
      }
    </BoardTitleMainStyle>
  );
};

// children의 타입을 검사
BoardTitleMain.propTypes = {
  children: PropTypes.node,
};

// 게시판 제목 설명 스타일링
const BoardTitleSub = styled.p`
  /* 설명 폰트 스타일링 */
  color: #9d9d9d;
  font-size: 18px;
  font-weight: 500;
  word-wrap: break-word;
`;

// 카테고리와 게시판 이름을 담은 배열
// path: 게시판 경로명
// title: 게시판 소속
// image: 게시판 아이콘 이미지
const CATEGORY_LISTS = [
  {
    path: 'campus',
    title: '학교',
    image: SchoolIcon,
  },
  {
    path: 'branch',
    title: '지부',
    image: BranchIcon,
  },
  {
    path: 'center',
    title: '연합',
    image: UnionIcon,
  },
];

// 게시판 이름과 설명을 담은 배열
// path: 게시판 경로명
// title: 게시판 이름
// subtitle: 게시판 이름에 해당하는 설명
const TITLE_LISTS = [
  {
    path: 'notice',
    title: '공지사항',
    subtitle: '중요한 공지들을 알려드려요!',
  },
  {
    path: 'free',
    title: '자유 게시판',
    subtitle: '챌린저들과 자유롭게 의견을 나눠보세요!',
  },
  {
    path: 'question',
    title: '질문 게시판',
    subtitle: '궁금한 점을 질문하고 답해보세요!',
  },
  {
    path: 'workbook',
    title: '워크북 게시판',
    subtitle: '워크북으로 공부 의지를 활활 불태워 봐요!',
  },
  {
    path: 'ob',
    title: '이전 기수 게시판',
    subtitle: '이전 챌린저들과 함께 소통해봐요!',
  },
];

// 게시판 제목 컴포넌트
const BoardTitle = () => {
  // 카테고리와 게시판 이름을 가져옴
  const { category, boardPath } = useParams();

  // 카테고리와 게시판 이름에 해당하는 정보를 가져옴
  const categoryInfo = CATEGORY_LISTS.find(
    (categoryInfo) => categoryInfo.path === category,
  );

  // 게시판 이름에 해당하는 정보를 가져옴
  const board = TITLE_LISTS.find((link) => link.path === boardPath);

  // 카테고리와 게시판 이름이 없으면 null 반환
  if (!categoryInfo || !board) {
    return null;
  }

  return (
    <BoardTitleContainer>
      <div className="board-title-icon">
        <img src={categoryInfo.image} alt={`${category}-icon`} />
      </div>
      <BoardTitleWrapper>
        <BoardTitleMain>{board.title}</BoardTitleMain>
        <BoardTitleSub>{board.subtitle}</BoardTitleSub>
      </BoardTitleWrapper>
    </BoardTitleContainer>
  );
};

export default BoardTitle;
