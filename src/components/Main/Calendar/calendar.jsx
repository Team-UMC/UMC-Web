import React, { useState } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
import './calendar.css';
import { CalendarData } from 'components/Main/Calendar/CalendarData';

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());

  // view === 'month'이고 date === '토요일'인 경우 -> 'saturday' 클래스 적용
  const tileClassName = ({ date, view }) => {
    if (view === 'month' && date.getDay() === 6) {
      return 'saturday';
    }
  };

  // 일정 표시 함수
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = moment(date).format('YYYY-MM-DD');

      // 해당 날짜에 일정이 있는지 확인
      const schedules = CalendarData.schedules.filter(
        (s) => dateString >= s.startDateTime && dateString <= s.endDateTime,
      );

      // 일정이 있는 경우, 각 일정에 맞는 색상의 점을 표시
      const dots = schedules.map((schedule) => {
        let color;
        switch (schedule.hostType) {
          case 'CAMPUS':
            color = '#FF8695';
            break;
          case 'CENTER':
            color = '#A9CD85';
            break;
          case 'UNION':
            color = '#009DA7';
            break;
          default:
            break;
        }

        return (
          <div
            key={schedule.id}
            className="dot"
            style={{ backgroundColor: color }}
          />
        );
      });

      return <div className="dot-container">{dots}</div>;
    }
  };

  return (
    <div className="calendar">
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format('D')}
        formatMonthYear={(locale, date) => moment(date).format('MMMM')}
        value={value}
        showNeighboringMonth={false}
        locale="en-US"
        prev2Label={null}
        prevLabel={null}
        nextLabel={null}
        next2Label={null}
        tileClassName={tileClassName}
        tileContent={tileContent}
      />
    </div>
  );
};

export default MyCalendar;
