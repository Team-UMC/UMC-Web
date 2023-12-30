import React from 'react';
import Header from './layout/header.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <img src={require('./assets/image.svg').default} alt="대충 사진" />
    </div>
  );
}

export default App;