import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from 'layout/Header/header';
import Main from 'pages/main';
import BoardWrite from 'pages/BoardWrite/boardwrite';
import SignUpForm from 'pages/SignUp/signup';
import Management from 'pages/Management/management';
import MyWrite from 'pages/MyWrite/MyWrite';
import BoardPageRoute from 'pages/NewBoardPage/BoardPageRoute';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/boardWrite" element={<BoardWrite />} />
        <Route path="/management" element={<Management />} />
        <Route path="/mywrite" element={<MyWrite />} />
        <Route path="/boardpageroute" element={<BoardPageRoute />} />

        <Route path="/signup" element={<SignUpForm />} />
      </Routes>

      <BoardPageRoute />
    </div>
  );
}

export default App;
