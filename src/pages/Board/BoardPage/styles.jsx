import styled from 'styled-components';

import BoardTitle from 'components/BoardTitle/BoardTitle';
import BoardBox from 'components/BoardBox/BoardBox';
import BoardList from 'components/Board/BoardList';

const styles = {
  // 게시글 전체 페이지 컨테이너
  BoardPageContainer: styled.div`
    /* 레이아웃 스타일링 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;

    width: 70%;
  `,

  // 게시글 제목 레이아웃
  BoardTitleLayout: styled(BoardTitle)`
    display: flex;
    padding: 0 0 0 40px;
  `,

  // 게시글 좌측 메뉴바(BoardBox)와 게시글 목록(Table)을 감싸는 컴포넌트
  BoardBoxAndBoardTableWrapper: styled.div`
    /* 레이아웃 스타일링 */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0 40px;

    width: 100%;
  `,

  // 좌측 메뉴바(BoardBox) 스타일링
  StyledBoardBox: styled(BoardBox)`
    width: 20%;
  `,

  // 게시글 목록(Table)을 감싸는 컴포넌트
  BoardTableWrapper: styled.div`
    display: flex;
    flex-direction: column;

    width: 70%;
  `,

  // 게시글 목록(Table) 스타일링
  StyledBoardTable: styled(BoardList)`
    max-width: 720px;
  `,
};

export default styles;
