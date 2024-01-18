import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'App.css';

import Header from 'layout/header.jsx';
import Main from 'pages/main.jsx';
import MyCalendar from 'components/calendar.jsx';
import BoardWrite from 'pages/boardwrite.jsx';
import SignUpForm from 'pages/signup.jsx';

function App() {
  return (
    <div>
      <Header />

      <MyCalendar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/boardWrite" element={<BoardWrite />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
