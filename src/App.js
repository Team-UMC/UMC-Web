import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'App.css';

import Header from 'layout/Header/header';
import Main from 'pages/main.jsx';
import BoardPageRoute from 'pages/NewBoardPage/BoardPageRoute';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

      <BoardPageRoute />
    </div>
  );
}

export default App;
