import React, { useState } from "react";
import styled, { css } from "styled-components";

const NoticeCalendarAdminWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 5%;
  gap: 120px;
`;

const Button = styled.button`
  border: none;
  color: #9599bd;
  margin: 1rem;
  font-size: 22px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.54px;
  word-wrap: break-word;
  transition: 0.3s;
  background: transparent;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px #000c76;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out, color 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    color: #000c76;
  }

  &:hover:after,
  &:focus:after {
    transform: scaleX(1);
  }

  ${(props) =>
    props.isActive &&
    css`
      color: #000c76;

      &:after {
        transform: scaleX(1);
      }
    `}
`;

const NoticeCalendarAdmin = () => {
  const [activeButton, setActiveButton] = useState('notice-admin-btn');

  const handleClick = (e) => {
    e.preventDefault();
    setActiveButton(e.target.className);
  }

  return (
    <NoticeCalendarAdminWrapper>
      <Button 
        isActive={activeButton === 'notice-admin-btn'}
        onClick={handleClick}
        className="notice-admin-btn"
      >
        공지사항 관리
      </Button>
      <Button
        isActive={activeButton === 'calendar-admin-btn'}
        onClick={handleClick}
        className="calendar-admin-btn"
      >
        캘랜더 관리
      </Button>
    </NoticeCalendarAdminWrapper>
  );
}

export default NoticeCalendarAdmin;