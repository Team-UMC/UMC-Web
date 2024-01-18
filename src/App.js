import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'App.css';

import Header from 'layout/Header/header';
import Main from 'pages/main.jsx';
<<<<<<< HEAD
import MyCalendar from 'components/OldBoard/calendar';
import BoardWrite from 'pages/BoardWrite/boardwrite';
import SignUpForm from 'pages/SignUp/signup';
import TodayiLearn from 'pages/TodayiLearn/todayilearn';
import MyWrite from 'pages/MyWrite/MyWrite';
=======
>>>>>>> f524ee9bf7c0cbe100afca53582b41e29f2e87c4

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
<<<<<<< HEAD

        <Route path="/boardwrite" element={<BoardWrite />} />
        <Route path="/todayilearn" element={<TodayiLearn />} />
        <Route path="/mywrite" element={<MyWrite />} />


        <Route path="/signup" element={<SignUpForm />} />
=======
>>>>>>> f524ee9bf7c0cbe100afca53582b41e29f2e87c4
      </Routes>
    </div>
  );
}

export default App;
