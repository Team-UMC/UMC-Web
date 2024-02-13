import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { getDay, getMonth, getYear, isToday, setMonth } from 'date-fns';
import 'components/dateselectcalendar.css';

import CalendarIcon from 'assets/main/calendar.svg';
import LeftArrow from 'assets/main/LeftArrowGray.svg';
import RightArrow from 'assets/main/RightArrowGray.svg';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DateSelectCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [monthSelectMode, setMonthSelectMode] = useState(false);

  const handleMonthClick = (monthIndex) => {
    setSelectedDate(setMonth(selectedDate, monthIndex));
    setMonthSelectMode(false);
  };

  return (
    <DatePicker
      className="datePicker"
      dateFormat="yyyy. MM. dd" // 날짜 형태
      formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3).toUpperCase()} // 요일 형태 (ex. 'Mon')
      showYearDropdown // 년도 선택 가능
      scrollableYearDropdown // 년도 선택 시 스크롤 가능
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      selected={selectedDate} // 선택된 날짜
      calendarClassName="calendar-date-select"
      dayClassName={(date) => {
        // 날짜 스타일
        const day = getDay(date);

        return day === 0
          ? 'sunday'
          : day === 6
            ? 'saturday'
            : isToday(date)
              ? 'current-day'
              : '';
      }} // 선택된 날짜 스타일
      onChange={(date) => {
        // 날짜 선택 시 시작일 & 종료일 변경
        setSelectedDate(date);
      }} // 날짜 선택 시 selectedDate 변경
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="calendar-header">
          <div className="calendar-header-left">
            <img
              src={LeftArrow}
              alt="left-arrow"
              onClick={decreaseMonth}
              className={prevMonthButtonDisabled ? 'disabled' : ''}
            />
          </div>
          <div className="calendar-header-center">
            <img src={CalendarIcon} alt="calendar-icon" />
            {monthSelectMode ? (
              <div>
                {MONTHS.map((month, index) => (
                  <div key={month} onClick={() => handleMonthClick(index)}>
                    {month}
                  </div>
                ))}
              </div>
            ) : (
              <div onClick={() => setMonthSelectMode(true)}>
                <div>{MONTHS[getMonth(date)]}</div>
                <div>{getYear(date)}</div>
              </div>
            )}
          </div>
          <div className="calendar-header-right">
            <img
              src={RightArrow}
              alt="right-arrow"
              onClick={increaseMonth}
              className={nextMonthButtonDisabled ? 'disabled' : ''}
            />
          </div>
        </div>
      )}
    />
  );
};

export default DateSelectCalendar;
