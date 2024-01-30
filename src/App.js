import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'App.css';

import NewHeader from 'layout/Header/NewHeader';
import Main from 'pages/Main.jsx';
import SignUpForm from 'pages/SignUp/SignUp';
import BoardWrite from 'pages/BoardWrite/BoardWrite';
import SocialLogin from 'components/SignUp/SocialLogin';
import BoardPage from 'pages/NewBoardPage/BoardPage';
import AdminManagePage from 'pages/Admin/AdminManagePage';
import GalleryPage from 'pages/Photo/GalleryPage';
// import BoardTitle from 'components/BoardTitle/BoardTitle';
// import BoardPageRoute from 'pages/NewBoardPage/BoardPageRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <NewHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signupform" element={<SignUpForm />} />
          <Route
            path="/board"
            element={<Navigate to="/board/school/notice" />}
          />
          <Route path="/board/:category/:boardPath" Component={BoardPage} />
          <Route path="/boardwrite" element={<BoardWrite />} />
          <Route path="/kakaologin" element={<SocialLogin />} />
          <Route path="/admin" element={<AdminManagePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
