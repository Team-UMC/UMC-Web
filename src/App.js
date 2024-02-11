import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'App.css';

import MainLayout from 'layout/MainLayout';
import BasicLayout from 'layout/BasicLayout';

import Main from 'pages/Main.jsx';
import SignUpForm from 'pages/SignUp/SignUp';
import BoardWrite from 'pages/BoardWrite/BoardWrite';
import HomePage from 'pages/HomePage';
import Management from 'pages/Management/Management';
import MyWrite from 'pages/MyWrite/MyWrite';
import KakaoAuth from 'apis/app/auth/KakaoAuth';
import NaverAuth from 'apis/app/auth/NaverAuth';
import ProfileSettingPage from 'pages/Setting/Profile/ProfileSettingPage';
import HistoryPage from 'pages/History/HistoryPage';
import GalleryPage from 'pages/Gallery/GalleryPage';
import GalleryDetailPage from 'pages/Gallery/GalleryDetailPage';
import BoardPage from 'pages/BoardPage/BoardPage';
import MascotPage from 'pages/Mascot/MascotPage';
import TextDetailPage from 'pages/DetailPage/TextDetailPage';

import TodayILearn from 'pages/TodayILearn/TodayILearn';
import NewTIL from 'components/TodayILearn/NewTIL';
import DetailTIL from 'components/TodayILearn/DetailTIL';
import TodoList from 'pages/ToDoList/TodoList';
import RankingPage from 'pages/Mascot/RankingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            {/* 소셜 로그인으로 시작하기 페이지 (초기 화면) */}
            <Route path="/" element={<HomePage />} />

            {/* 소셜 로그인 페이지 (path는 Redirect URI)*/}
            <Route path="/OAuth2/kakao" element={<KakaoAuth />} />
            <Route path="/oauth2/naver" element={<NaverAuth />} />

            {/* 회원 가입 페이지 */}
            <Route path="/signupform" element={<SignUpForm />} />

            <Route element={<MainLayout />}>
              {/* 메인 페이지*/}
              <Route path="/main" element={<Main />} />
            </Route>

            <Route element={<BasicLayout />}>
              {/* 게시판 관련 페이지*/}
              <Route
                path="/board/:category/:boardPath"
                element={<BoardPage />}
              />
              <Route path="/boardwrite/:host/:board" element={<BoardWrite />} />
              <Route path="/detailpage" element={<TextDetailPage />} />

              {/* 운영진 관리 페이지 */}
              <Route path="/management" element={<Management />} />
              <Route path="/mywrite" element={<MyWrite />} />

              {/* Today-I-Learned */}
              <Route path="/todayilearn" element={<TodayILearn />} />
              <Route path="/todayilearn/detailpage" element={<NewTIL />} />
              <Route path="/todayilearn/detail" element={<DetailTIL />} />

              {/* TodoList */}
              <Route path="/todolist" element={<TodoList />} />

              {/* 사진첩 */}
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/gallery/:id" element={<GalleryDetailPage />} />

              {/* 프로필 설정 페이지 */}
              <Route path="/profilesetting" element={<ProfileSettingPage />} />

              {/* 히스토리(프로젝트) 페이지 */}
              <Route path="/history" element={<HistoryPage />} />

              {/* 마스코트 키우기 페이지 */}
              <Route path="/mascot" element={<MascotPage />} />
              <Route path="/ranking" element={<RankingPage />} />
            </Route>
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
