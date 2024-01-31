import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'App.css';

import NewHeader from 'layout/Header/NewHeader';
import Main from 'pages/Main.jsx';
import SignUpForm from 'pages/SignUp/SignUp';
import BoardWrite from 'pages/BoardWrite/BoardWrite';
import SocialLogin from 'components/SignUp/SocialLogin';
import BoardPage from 'pages/BoardPage/BoardPage';
import AdminManagePage from 'pages/Management/NoticePin/AdminManagePage';
// import BoardPageRoute from 'pages/NewBoardPage/BoardPageRoute';

import Management from 'pages/Management/Management';
import MyWrite from 'pages/MyWrite/MyWrite';
import TodayILearn from 'pages/TodayILearn/TodayILearn';
import NewTIL from 'components/TodayILearn/NewTIL';
import GalleryPage from 'pages/Gallery/GalleryPage';

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
          <Route path="/admin" element={<Management />} />
          <Route path="/mywrite" element={<MyWrite />} />
          <Route path="/todayilearn" element={<TodayILearn />} />
          <Route path="/todayilearn/detailpage" element={<NewTIL />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/kakaologin" element={<SocialLogin />} />
          <Route path="/management" element={<AdminManagePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
