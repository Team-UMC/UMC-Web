import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card as MuiCard, CardContent as MuiCardContent } from '@mui/material';
import styled from 'styled-components';

import suggestion from 'assets/boardCard/suggestion.svg';
import school from 'assets/boardCard/school.svg';
import branch from 'assets/boardCard/branch.svg';
import union from 'assets/boardCard/union.svg';

const Card = styled(MuiCard)`
  height: 100%;
  border-radius: 12px;
  padding: 40px 16px;
  font-family: 'Pretendard';
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const CardContent = styled(MuiCardContent)`
  padding: 0px;
  background: white;
`;

const BoardBoxContainer = styled.div`
  height: 100%;
  padding-bottom: 30px;
  border-color: white;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;

const BoardBoxImage = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding-bottom: 8px;
  gap: 8px;
`;

const BoardBoxTitle = styled.h3`
  padding-bottom: 10px;
  text-align: left;
  color: #000c76;
  background: white;
  font-size: 14px;
  font-weight: 600;
  gap: 10px;
  word-wrap: break-word;
`;

const BoardBoxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const BoardBoxLink = styled(NavLink)`
  text-align: left;
  color: black;
  background: white;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  word-wrap: break-word;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #8784ff;
  }
  &:active {
    color: #000c76;
  }
`;

const BoardBoxWrapperLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const BoardBoxItem = ({ image, title, links }) => {
  const activeStyle = {
    color: '#8784ff',
  };

  return (
    <BoardBoxContainer>
      <BoardBoxImage>
        <img src={image} alt={title[0]} />
      </BoardBoxImage>
      <BoardBoxTitle>{title[0]}</BoardBoxTitle>
      <BoardBoxContentWrapper>
        {links.map((link, index) => (
          <BoardBoxLink
            key={index}
            to={`/board/${title[1]}/${link.path}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {link.name}
          </BoardBoxLink>
        ))}
      </BoardBoxContentWrapper>
    </BoardBoxContainer>
  );
};

BoardBoxItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const BoardBoxWrapper = () => {
  const boardBoxes = [
    {
      image: school,
      title: ['학교', 'school'],
      links: [
        { name: '공지사항', path: 'notice' },
        { name: '자유 게시판', path: 'free' },
        { name: '질문 게시판', path: 'question' },
        { name: '워크북 게시판', path: 'workbook' },
        { name: '이전 기수 게시판', path: 'prev' },
      ],
    },
    {
      image: branch,
      title: ['지부', 'branch'],
      links: [
        { name: '공지사항', path: 'notice' },
        { name: '자유 게시판', path: 'free' },
        { name: '질문 게시판', path: 'question' },
        { name: '이전 기수 게시판', path: 'prev' },
      ],
    },
    {
      image: union,
      title: ['연합', 'union'],
      links: [
        { name: '공지사항', path: 'notice' },
        { name: '자유 게시판', path: 'free' },
        { name: '질문 게시판', path: 'question' },
        { name: '이전 기수 게시판', path: 'prev' },
      ],
    },
    {
      image: suggestion,
      title: ['건의함', 'suggestion'],
      links: [],
    },
  ];

  return (
    <BoardBoxWrapperLayout>
      {boardBoxes.map((box, index) => (
        <BoardBoxItem
          key={index}
          image={box.image}
          title={box.title}
          links={box.links}
        />
      ))}
    </BoardBoxWrapperLayout>
  );
};

const BoardBox = () => {
  return (
    <Card>
      <CardContent>
        <BoardBoxWrapper />
      </CardContent>
    </Card>
  );
};

export default BoardBox;
