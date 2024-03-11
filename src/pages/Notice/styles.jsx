import styled from 'styled-components';

//import NoticeTitle from 'components/Notice/NoticeTitle';
import NoticeList from 'components/Notice/NoticeList';

const styles = {
  // 게시글 전체 페이지 컨테이너
  NoticePageContainer: styled.div`
    /* 레이아웃 스타일링 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;

    width: 70%;
  `,

  // // 게시글 제목 레이아웃
  // BoardTitleLayout: styled(NoticeTitle)`
  //   display: flex;
  //   padding: 0 0 0 40px;
  // `,

  // // 게시글 좌측 메뉴바(BoardBox)와 게시글 목록(Table)을 감싸는 컴포넌트
  // BoardBoxAndBoardTableWrapper: styled.div`
  //   /* 레이아웃 스타일링 */
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   gap: 0 40px;

  //   width: 100%;
  // `,

  // 게시글 목록(Table)을 감싸는 컴포넌트
  NoticeTableWrapper: styled.div`
    display: flex;
    flex-direction: column;

    width: 70%;
  `,

  // 게시글 목록(Table) 스타일링
  StyledNoticeTable: styled(NoticeList)`
    max-width: 720px;
  `,
};

export default styles;
