import React from 'react';

import './App.css';
import BoardPage from './pages/NewBoardPage/BoardPage';
import { StyledEngineProvider } from '@mui/material';

function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <BoardPage />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
