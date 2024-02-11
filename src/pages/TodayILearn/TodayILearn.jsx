import React from 'react';
import styled from 'styled-components';

import TILTitle from 'components/TodayILearn/Title';
import TILCalender from 'components/TodayILearn/Calender';
import TILComponent from 'components/TodayILearn/ComponentTIL';
import TILAdd from 'components/TodayILearn/AddTIL';

const TILContainer = styled.div`
  margin: 0 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CalenderContainer = styled.div`
  width: 70%;
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const TodayILearn = () => {
  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TILContainer>
        <TILTitle />

        <CalenderContainer>
          <TILCalender />
          <TILAdd />
        </CalenderContainer>

        <TILComponent />
      </TILContainer>
    </div>
  );
};

export default TodayILearn;
