import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalenderImg from 'assets/todayilearn/calender.svg';
import DateSelectCalendar from 'components/DateSelectCalendar';

const TodayDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ToDoListCalender = ({ setSelectedDate }) => { 
  return (
    <>
      <TodayDate>
        <img src={CalenderImg} alt="캘린더 이미지" />
        <DateSelectCalendar onDateChange={setSelectedDate} />
      </TodayDate>
    </>
  );
};

ToDoListCalender.propTypes = {
  setSelectedDate: PropTypes.func.isRequired,
};

export default ToDoListCalender;
