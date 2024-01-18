import React from 'react';
import {
  Routes,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import 'App.css';

// import Header from 'layout/Header/header';
import Main from 'pages/main.jsx';
import BoardPage from 'pages/NewBoardPage/BoardPage';

function App() {
  let { path } = useRouteMatch();

  return (
    <div>
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board/*" element={<BoardPage />} />
      </Routes>
      <Switch>
        <Route
          exact
          path={`${path}/school`}
          render={() => <Redirect to={`${path}/school/notice`} />}
        />
        <Route
          exact
          path={`${path}/branch`}
          render={() => <Redirect to={`${path}/branch/notice`} />}
        />
        <Route
          exact
          path={`${path}/union`}
          render={() => <Redirect to={`${path}/union/notice`} />}
        />
        <Route
          exact
          path={path}
          render={() => <Redirect to={`${path}/school/notice`} />}
        />
      </Switch>
    </div>
  );
}

export default App;
