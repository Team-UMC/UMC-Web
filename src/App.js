import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'App.css';

// import Header from 'layout/Header/header.jsx';
import Main from 'pages/main.jsx';
import BoardPage from 'pages/NewBoardPage/BoardPage';
// import MyCalendar from 'components/OldBoard/calendar.jsx';
// import BoardWrite from 'pages/boardwrite.jsx';
// import SignUpForm from 'pages/SignUp/signup.jsx';

function App() {
  return (
    <div>
      {/* <Header />

      <MyCalendar /> */}

      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/boardWrite" element={<BoardWrite />} />
        <Route path="/signup" element={<SignUpForm />} /> */}
        <Route path="/board" element={<BoardPage />} />
      </Routes>
    </div>
  );
}

export default App;
