import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'App.css';

import NewHeader from 'layout/Header/NewHeader';
import Main from 'pages/Main.jsx';
import SignUpForm from 'pages/SignUp/SignUp';
import BoardWrite from 'pages/BoardWrite/BoardWrite';
import BoardPage from 'pages/NewBoardPage/BoardPage';
import SocialLogin from 'components/SignUp/SocialLogin';

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
          <Route path="/kakaologin" element={<SocialLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
} 


export default App;
