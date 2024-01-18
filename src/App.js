import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'App.css';

import Header from 'layout/Header/header';
import Main from 'pages/main.jsx';
import BoardPage from 'pages/NewBoardPage/BoardPage';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<BoardPage />} />
      </Routes>
    </div>
  );
}

export default App;
