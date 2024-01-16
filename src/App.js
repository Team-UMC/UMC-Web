import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'App.css';

import Header from 'layout/Header/header';
import Main from 'pages/main.jsx';
import MyCalendar from 'components/OldBoard/calendar';
import BoardWrite from 'pages/BoardWrite/boardwrite';
import SignUpForm from 'pages/SignUp/signup';
import BoardPage from 'pages/NewBoardPage/BoardPage';

function App() {
  return (
    <div>
      <Header />

      <MyCalendar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/boardWrite" element={<BoardWrite />} />
        <Route path="/boardpage" element={<BoardPage />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
