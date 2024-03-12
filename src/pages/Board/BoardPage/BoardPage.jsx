import React from 'react';

import BoardTitle from 'components/BoardTitle/BoardTitle';
import BoardBox from 'components/BoardBox/BoardBox';
import BoardList from 'components/Board/BoardList';

import styles from './styles';

const BoardPage = () => {
  return (
    <styles.BoardPageContainer>
      <BoardTitle />
      <styles.LowerContainer>
        <BoardBox />
        <BoardList />
      </styles.LowerContainer>
    </styles.BoardPageContainer>
  );
};

export default BoardPage;
