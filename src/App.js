import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'App.css';

import MainLayout from 'layout/MainLayout';
import BasicLayout from 'layout/Layout';

import Main from 'pages/Main.jsx';
import SignUpForm from 'pages/SignUp/SignUp';
import BoardWrite from 'pages/BoardWrite/BoardWrite';
import BoardPage from 'pages/NewBoardPage/BoardPage';
import HomePage from 'pages/HomePage';
import Management from 'pages/Management/Management';
import MyWrite from 'pages/MyWrite/MyWrite';
import KakaoAuth from 'apis/app/KakaoAuth';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/OAuth2/kakao" element={<KakaoAuth />} />
          <Route path="/signupform" element={<SignUpForm />} />

          <Route element={<MainLayout />}>
            <Route path="/main" element={<Main />} />
          </Route>

          <Route element={<BasicLayout />}>
            <Route path="/boardPage" element={<BoardPage />} />
            <Route path="/boardwrite" element={<BoardWrite />} />
            <Route path="/management" element={<Management />} />
            <Route path="/mywrite" element={<MyWrite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
