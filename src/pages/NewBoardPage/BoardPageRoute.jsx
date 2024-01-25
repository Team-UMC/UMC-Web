import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import BoardPage from 'pages/NewBoardPage/BoardPage';

const RedirectTo = ({ to }) => {
  let navigate = useNavigate();
  navigate(to);

  useEffect(() => {
    navigate(to);
  }, [navigate]);
  return null;
};

RedirectTo.propTypes = {
  to: PropTypes.string.isRequired,
};

const BoardPageRoute = () => {
  return (
    <Routes>
      <Route path="/board/school/*" element={<BoardPage />} />
      <Route path="/board/branch/*" element={<BoardPage />} />
      <Route path="/board/union/*" element={<BoardPage />} />
      <Route path="/board" element={<RedirectTo to="/board/school/notice" />} />
    </Routes>
  );
};

export default BoardPageRoute;
