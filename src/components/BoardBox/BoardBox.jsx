import React from 'react';
import { Card as MuiCard, CardContent as MuiCardContent } from '@mui/material';
import styled from 'styled-components';
import BoardBoxWrapper from './BoardBoxWrapper';

const Card = styled(MuiCard)`
  height: 100%;
  border-radius: 12px;
  padding: 40px 16px;
  font-family: 'Pretendard';
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const CardContent = styled(MuiCardContent)`
  padding: 0px;
  background: white;
`;

const BoardBox = () => {
    return (
      <Card>
        <CardContent>
          <BoardBoxWrapper />
        </CardContent>
      </Card>
    );
};

export default BoardBox;