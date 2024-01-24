import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'App.css';

//import NewHeader from 'layout/Header/NewHeader';
import Main from 'pages/main.jsx';
import SignUpForm from 'pages/SignUp/signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signupform" element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
