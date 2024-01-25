import React from 'react';
import './App.css';
import {DetailPage} from 'components/OldBoard/DetailPage';
//import Header from 'layout/Header/header';

<<<<<<< HEAD
=======
import Header from 'layout/Header/header';
import Main from 'pages/main';
import BoardWrite from 'pages/BoardWrite/boardwrite';
import SignUpForm from 'pages/SignUp/signup';
import Management from 'pages/Management/management';
import MyWrite from 'pages/MyWrite/MyWrite';
import BoardPageRoute from 'pages/NewBoardPage/BoardPageRoute';
>>>>>>> 87d52ab1a18af2c7c202227066898f461cbd26a5

function App() {
  return (
    <div>
<<<<<<< HEAD
      {/*<Header />*/}
      <DetailPage />
=======
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/boardWrite" element={<BoardWrite />} />
        <Route path="/management" element={<Management />} />
        <Route path="/mywrite" element={<MyWrite />} />
        <Route path="/boardpageroute" element={<BoardPageRoute />} />

        <Route path="/signup" element={<SignUpForm />} />
      </Routes>

      <BoardPageRoute />
>>>>>>> 87d52ab1a18af2c7c202227066898f461cbd26a5
    </div>
  );
} 


export default App;
