import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'App.css';

import MainLayout from 'layout/MainLayout';
import BasicLayout from 'layout/BasicLayout';

import Main from 'pages/Main.jsx';
import SignUpForm from 'pages/SignUp/SignUp';
import BoardWrite from 'pages/BoardWrite/BoardWrite';
import SocialLogin from 'components/SignUp/SocialLogin';
import TextDetailPage from 'pages/DetailPage/TextDetailPage';
import BoardPage from 'pages/BoardPage/BoardPage';
import AdminManagePage from 'pages/Management/NoticePin/AdminManagePage';
// import Message from 'components/Message';
// import BoardPageRoute from 'pages/NewBoardPage/BoardPageRoute';

import Management from 'pages/Management/Management';
import MyWrite from 'pages/MyWrite/MyWrite';
import KakaoAuth from 'apis/app/auth/KakaoAuth';
import NaverAuth from 'apis/app/auth/NaverAuth';
import ProfileSettingPage from 'pages/Setting/Profile/ProfileSettingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* path는 Redirect URI*/}
          <Route path="/OAuth2/kakao" element={<KakaoAuth />} />
          <Route path="/oauth2/naver" element={<NaverAuth />} />
          
          <Route path="/signupform" element={<SignUpForm />} />
<<<<<<< HEAD
          <Route
            path="/board"
            element={<Navigate to="/board/school/notice" />}
          />
           {/* <Route path="/message" element={<Message />} /> */}
          <Route path="/textdetailpage" element={<TextDetailPage />} />
          <Route path="/board/:category/:boardPath" Component={BoardPage} />
          <Route path="/boardwrite" element={<BoardWrite />} />
          <Route path="/admin" element={<Management />} />
          <Route path="/mywrite" element={<MyWrite />} />
          <Route path="/todayilearn" element={<TodayILearn />} />
          <Route path="/todayilearn/detailpage" element={<NewTIL />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/:id" element={<GalleryDetailPage />} />
          <Route path="/kakaologin" element={<SocialLogin />} />
          <Route path="/management" element={<AdminManagePage />} />
=======

          <Route element={<MainLayout />}>
            <Route path="/main" element={<Main />} />
          </Route>

          <Route element={<BasicLayout />}>
            <Route path="/board/*" element={<BoardPage />} />
            <Route path="/boardwrite" element={<BoardWrite />} />
            <Route path="/management" element={<Management />} />
            <Route path="/mywrite" element={<MyWrite />} />

            <Route path="/profilesetting" element={<ProfileSettingPage />} />
          </Route>
>>>>>>> 18a057297e0e2ae6729e67977eb49262b4b8c538
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
