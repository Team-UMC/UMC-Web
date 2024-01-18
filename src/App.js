import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'App.css';

import Header from 'layout/Header/header';
import Main from 'pages/main.jsx';
import MyCalendar from 'components/OldBoard/calendar';
import BoardWrite from 'pages/BoardWrite/boardwrite';
import SignUpForm from 'pages/SignUp/signup';
import TodayiLearn from 'pages/TodayiLearn/todayilearn';
import MyWrite from 'pages/MyWrite/MyWrite';

function App() {
  return (
    <div>
      <Header />

      <MyCalendar />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/boardwrite" element={<BoardWrite />} />
        <Route path="/todayilearn" element={<TodayiLearn />} />
        <Route path="/mywrite" element={<MyWrite />} />


        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
