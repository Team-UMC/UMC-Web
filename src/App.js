import React from 'react';
// import CommonTable from './components/CommonTable';
import './App.css';
import { StyledEngineProvider } from '@mui/material';
import BoardPage from './pages/NewBoardPage/BoardPage';

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
