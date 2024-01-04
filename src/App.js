import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/header.jsx';
import './App.css';
import Main from './pages/main.jsx';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;