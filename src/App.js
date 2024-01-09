import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/header.jsx';
import './App.css';
import Main from './pages/main.jsx';
import NoticeMain from './pages/NoticeMain.jsx';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <NoticeMain />
    </div>
  );
}

export default App;