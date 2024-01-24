import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'App.css';

import NewHeader from 'layout/Header/NewHeader';
import Main from 'pages/main.jsx';
import SignUpForm from 'pages/SignUp/signup';
import BoardWrite from 'pages/BoardWrite/boardwrite';
import BoardPage from 'pages/NewBoardPage/BoardPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <NewHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signupform" element={<SignUpForm />} />
          <Route path="/boardPage" element={<BoardPage />} />
          <Route path="/boardwrite" element={<BoardWrite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
