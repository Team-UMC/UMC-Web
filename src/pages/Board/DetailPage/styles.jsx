import styled from 'styled-components';

import BoardTitle from 'components/BoardTitle/BoardTitle';

const styles = {
  BoardTitleLayout: styled(BoardTitle)`
    display: flex;
    padding: 0 0 0 40px;
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;

    width: 70%;

    margin-top: 15vh;
  `,

  LowerWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  `,

  RightWrapper: styled.div`
    display: flex;
    flex-direction: column;

    width: 70%;
  `,
};

export default styles;
