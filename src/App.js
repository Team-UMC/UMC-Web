import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/header.jsx';
import './App.css';
import Main from './pages/main.jsx';
import MyCalendar from './components/calendar.jsx';

function App() {
  return (
    <div>
      <Header />

      <MyCalendar />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <NoticeMain />
    </div>
  );
}

export default App;
