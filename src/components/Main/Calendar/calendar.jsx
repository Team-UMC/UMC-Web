import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import './calendar.css';

const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const MyCalendar = ({ calendarData }) => {
  const [value, onChange] = useState(new Date());
  // 선택된 날짜와 일정을 저장하는 state
  const [selectedDate, setSelectedDate] = useState(null);
  // 선택된 날짜의 일정을 저장하는 state
  const [selectedSchedules, setSelectedSchedules] = useState([]);

  // 날짜 클릭 시 동작 정의
  const onClickDay = (date) => {
    // 선택된 날짜의 일정을 찾아서 저장
    const dateString = moment(date).format('YYYY-MM-DD');
    // 해당 날짜에 일정이 있는지 확인
    const schedules = calendarData.filter(
      (s) => dateString >= s.startDateTime && dateString <= s.endDateTime,
    );

    // 일정을 학교(CAMPUS) - 지부(BRANCH) - 연합(CENTER) 순으로 정렬
    const sortedSchedules = schedules.sort((a, b) => {
      const order = ['CAMPUS', 'BRANCH', 'CENTER'];
      return order.indexOf(a.hostType) - order.indexOf(b.hostType);
    });

    // 선택된 날짜와 일정을 저장
    setSelectedDate(dateString);
    setSelectedSchedules(sortedSchedules);
  };

  // 'X' 버튼 클릭 시 동작 정의
  const onCloseScheduleList = (e) => {
    e.stopPropagation();
    setSelectedDate(null);
    setSelectedSchedules([]);
  };

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
      const schedules = calendarData.filter(
        (s) => dateString >= s.startDateTime && dateString <= s.endDateTime,
      );

      // 일정이 있는 경우, 각 일정의 hostType을 저장
      // Set 사용하여 중복 제거
      const uniqueHostTypes = new Set(
        schedules.map((schedule) => schedule.hostType),
      );

      // 일정이 있는 경우, 각 일정에 맞는 색상의 점을 표시
      const dots = Array.from(uniqueHostTypes).map((hostType) => {
        let color;
        switch (hostType) {
          case 'CAMPUS':
            color = '#FF8695';
            break;
          case 'BRANCH':
            color = '#A9CD85';
            break;
          case 'CENTER':
            color = '#009DA7';
            break;
          default:
            break;
        }

        return (
          <div
            key={hostType}
            className="dot"
            style={{ backgroundColor: color }}
          />
        );
      });

      return <div className="dot-container">{dots}</div>;
    }
  };

  return (
    <StyledCalendarWrapper>
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
        onClickDay={onClickDay}
      />
      {selectedDate && (
        <div className={`schedule-list ${selectedDate ? 'active' : ''}`}>
          <div className="close-button" onClick={onCloseScheduleList}>
            X
          </div>
          <h2 className="schedule-main-title">
            {moment(selectedDate).format('YYYY.MM.DD')} 일정
          </h2>
          {selectedSchedules.length > 0 ? (
            // 선택된 날짜의 일정 표시
            selectedSchedules.map((schedule, index) => {
              // 일정의 hostType에 따라 색상 지정
              let color;
              switch (schedule.hostType) {
                case 'CAMPUS':
                  color = '#FF8695';
                  break;
                case 'BRANCH':
                  color = '#A9CD85';
                  break;
                case 'CENTER':
                  color = '#009DA7';
                  break;
                default:
                  break;
              }

              // 일정 표시
              return (
                <div key={schedule.id} className="schedule-item">
                  <h3
                    className={`schedule-hostType ${schedule.hostType}`}
                    style={{ color }}
                  >
                    {schedule.hostType} 일정
                  </h3>
                  <h4 className="schedule-title">{schedule.title}</h4>
                  <p className="schedule-date" style={{ color: 'black' }}>
                    {moment(schedule.startDateTime).format('YYYY.MM.DD')} ~{' '}
                    {moment(schedule.endDateTime).format('YYYY.MM.DD')}
                  </p>
                  {index !== selectedSchedules.length - 1 && (
                    <hr style={{ border: '1px solid #8784ff', margin: "5px 0"}} />
                  )}
                </div>
              );
            })
          ) : (
            <p>해당 날짜의 일정이 없습니다!</p>
          )}
        </div>
      )}
    </StyledCalendarWrapper>
  );
};

MyCalendar.propTypes = {
  calendarData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      startDateTime: PropTypes.string.isRequired,
      endDateTime: PropTypes.string.isRequired,
      hostType: PropTypes.oneOf(['CAMPUS', 'BRANCH', 'CENTER']).isRequired,
    }),
  ).isRequired,
};

export default MyCalendar;
