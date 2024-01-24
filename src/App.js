import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'App.css';

// import Header from 'layout/Header/header';
import Main from 'pages/main.jsx';
import BoardPageRoute from 'pages/NewBoardPage/BoardPageRoute';
import AdminPage from 'layout/Admin/AdminPage'

function App() {
  return (
    <div>
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      <BoardPageRoute />
    </div>
  );
}

export default App;
