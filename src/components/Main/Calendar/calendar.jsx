import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import './calendar.css'

const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <StyledCalendarWrapper>
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format('DD')}
        value={value}
        showNeighboringMonth={false}
        locale="en-US"
        prev2Label={null}
        prevLabel={null}
        nextLabel={null}
        next2Label={null}

      />
    </StyledCalendarWrapper>
  );
};

export default MyCalendar;
