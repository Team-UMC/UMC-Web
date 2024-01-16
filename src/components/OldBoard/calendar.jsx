import React, { useState } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
import './calendar.css';

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar">
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format('DD')}
        value={value}
        showNeighboringMonth={false}
        locale="en-US"
      />
    </div>
  );
};

export default MyCalendar;
