import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'components/dateselectcalendar.css';

const DateSelectCalendar = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    // 선택한 날짜를 부모 컴포넌트로 전달
    onDateChange(date);
  };

  return (
    <DatePicker
      className="datePicker"
      dateFormat="yyyy .MM .dd" // 날짜 형태
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
      selected={selectedDate}
      onChange={handleDateChange}
    />
  );
};

DateSelectCalendar.propTypes = {
  onDateChange: PropTypes.func.isRequired,
};

export default DateSelectCalendar;
