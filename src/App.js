import React, { useEffect } from 'react';
import {
  useRoutes,
  useNavigate
} from 'react-router-dom';
import PropTypes from 'prop-types';
import 'App.css';

// import Header from 'layout/Header/header';
import Main from 'pages/main.jsx';
import BoardPage from 'pages/NewBoardPage/BoardPage';

function App() {
  let navigate = useNavigate();
  let routes = useRoutes([
    { path: '/', element: <Main /> },
    { path: '/board/*', element: <BoardPage /> },
    {
      path: '/board/school',
      element: <RedirectTo navigate={navigate} to="/board/school/notice" />,
    },
    {
      path: '/board/branch',
      element: <RedirectTo navigate={navigate} to="/board/branch/notice" />,
    },
    {
      path: '/board/union',
      element: <RedirectTo navigate={navigate} to="/board/union/notice" />,
    },
    {
      path: '/board',
      element: <RedirectTo navigate={navigate} to="/board/school/notice" />,
    },
  ]);

  return (
    <div>
      {/* <Header /> */}

      {routes}
    </div>
  );
}

const RedirectTo = ({ navigate, to }) => {
  useEffect(() => {
    navigate(to);
  }, [navigate, to]);

  return null;
};

RedirectTo.propTypes = {
  navigate: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
};

export default App;
