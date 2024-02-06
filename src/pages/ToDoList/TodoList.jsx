import React from "react";
import styled from "styled-components";

import TitleTDL from "components/ToDoList/TitleTDL";
import Calendar from "components/TodayILearn/Calender.jsx";
import TDLAdd from "components/ToDoList/AddTDL";
import TDLComponent from "components/ToDoList/ComponentTDL";

const TDLContainer = styled.div`
margin: 0vh 50vh;
`;

const CalenderContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const TodoList = () => {
    return (
        <TDLContainer>
            <TitleTDL />

            <CalenderContainer>
            <Calendar /> 
            <TDLAdd />
            </CalenderContainer>

            <TDLComponent />

        </TDLContainer>
    );
}; 

export default TodoList;