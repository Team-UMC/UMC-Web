import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import TILTitle from 'components/TodayILearn/TILTitle';
import ToDoListCalender from 'components/ToDoList/Calender';
import TILComponent from 'components/TodayILearn/ComponentTIL';

import AddButtonImg from 'assets/todayilearn/addbutton.svg';

const TILContainer = styled.div`
  margin: 0 50vh;
  width: 100%;
  min-height: 100vh;
  height: 100%;
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

const AddTIL = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  margin-left: 0.5vh;
`;

const AddButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px 8px 4px 6px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #232a6d;
  text-decoration: none;
  color: #373c6b;
  cursor: pointer;
  z-index: 1;
`;

const SVGImage = styled.img`
  margin-right: 0.5vh;
`;

const TodayILearn = () => {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tilData, setTilData] = useState([{}]);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);

    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const formattedDate = formatDate(selectedDate);

  const handleAddButton = () => {
    navigate(`/todayilearned/addtil`);
  };

  const modifyTIL = async (id, part, title, subTitle, content) => {
    try {
      const res = await axiosInstance.patch(`/today-i-learned/update/${id}`, {
        part: part,
        title: title,
        subTitle: subTitle,
        content: content,
      });
      console.log(res);
    } catch (error) {
      console.error();
    }
  };

  const deleteTIL = async (id) => {
    try {
      await axiosInstance.delete(`/today-i-learned/${id}`);
    } catch {
      console.error();
    }
  };

  const getTILData = async (date) => {
    try {
      const res = await axiosInstance.get(`/today-i-learned`, {
        params: {
          date: date,
        },
      });
      setTilData(res.data.result.todayILearnedInfos);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getTILData(formattedDate);
  }, [formattedDate, tilData]);

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
          <ToDoListCalender
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          <AddButtonContainer onClick={handleAddButton}>
            <SVGImage src={AddButtonImg} alt="추가 버튼" />
            <AddTIL>TIL 추가</AddTIL>
          </AddButtonContainer>
        </CalenderContainer>

        <TILComponent
          tilData={tilData}
          modifyTIL={modifyTIL}
          deleteTIL={deleteTIL}
        />
      </TILContainer>
    </div>
  );
};

export default TodayILearn;
