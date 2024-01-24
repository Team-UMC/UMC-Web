import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'App.css';

import Header from 'layout/Header/header';
import Main from 'pages/main';
import BoardWrite from 'pages/BoardWrite/boardwrite';
import SignUpForm from 'pages/SignUp/signup';
import Management from 'pages/Management/management';
import MyWrite from 'pages/MyWrite/MyWrite';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/boardWrite" element={<BoardWrite />} />
        <Route path="/management" element={<Management />} />
        <Route path="/mywrite" element={<MyWrite />} />


        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </div>
  );
} 


export default App;
